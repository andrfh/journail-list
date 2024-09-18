import styles from'./JournailForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef, useState } from 'react';
import cn from 'classnames';
import deleteImg from '../../assets/delete.svg';
import dateImg from '../../assets/date.svg';
import tagImg from '../../assets/tag.svg';
import { INITIAL_STATE, formReducer } from './JournailForm.state.js';


const JournailForm = ( {onSubmit} ) => {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit, onSubmit, values]);

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value}});
	};

	const addJournailItem = (event) => {
		event.preventDefault();
		dispatchForm({ type: 'SUBMIT'});
	};
    
	return ( 
		<form className={styles['journail-form']} onSubmit={addJournailItem}>
			<div className={styles['journail-form-header']}>
				<input type="text" onChange={onChange} ref={titleRef} value={values.title} name='title' className={cn(styles['input-header'], {
					[styles['invalid']] : !isValid.title
				})} placeholder='Title'/>
				<a href="#" className={styles['delete']}> <img src={deleteImg} alt="" /> </a>
			</div>	

			<div className={styles['input-line']}>
				<img src={dateImg} alt="date" className={styles.date} />
				<p className={styles['input-text']}>Дата</p>
				<input type="date" ref={dateRef} onChange={onChange} value={values.date} name='date' className={cn(styles['input'], {
					[styles['invalid']] : !isValid.date
				})}/>
			</div>
			<div className={styles.hr} />
			<div className={styles['input-line']}>
				<img src={tagImg} alt="tag" className={styles.tag}/>
				<p className={styles['input-text']}>Метки</p>
				<input className={styles['input']} onChange={onChange} type="text" value={values.tag} name='tag' placeholder='Метки'/>
			</div>
			<div className={styles.hr} />
			
			
			
			<textarea name="post" ref={postRef} onChange={onChange} value={values.post} id="" cols="30" rows="10" className={cn(styles['input-textarea'], {
				[styles['invalid']] : !isValid.post
			})} placeholder='Текст' ></textarea>
			<Button text="Сохранить" />
		</form>

	);
};
 
export default JournailForm;