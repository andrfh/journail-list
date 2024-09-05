import styles from'./JournailForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useState } from 'react';
import cn from 'classnames';
import deleteImg from '../../assets/delete.svg';
import dateImg from '../../assets/date.svg';
import tagImg from '../../assets/tag.svg';
import { INITIAL_STATE, formReducer } from './JournailForm.state.js';


const JournailForm = ( {onSubmit} ) => {

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
			}, 2000)
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit == true) {
			onSubmit(values);
		}
	}, [isFormReadyToSubmit])

	const addJournailItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({ type: 'SUBMIT', payload: formProps})
	};
    
	return ( 
		<form className={styles['journail-form']} onSubmit={addJournailItem}>
			<div className={styles['journail-form-header']}>
				<input type="text" name='title' className={cn(styles['input-header'], {
					[styles['invalid']] : !isValid.title
				})} placeholder='Title'/>
				<a href="#" className={styles['delete']}> <img src={deleteImg} alt="" /> </a>
			</div>	

			<div className={styles['input-line']}>
				<img src={dateImg} alt="date" className={styles.date} />
				<p className={styles['input-text']}>Дата</p>
				<input type="date" name='date' className={cn(styles['input'], {
					[styles['invalid']] : !isValid.date
				})}/>
			</div>
			<div className={styles.hr} />
			<div className={styles['input-line']}>
				<img src={tagImg} alt="tag" className={styles.tag}/>
				<p className={styles['input-text']}>Метки</p>
				<input className={styles['input']} type="text" name='tag' placeholder='Метки'/>
			</div>
			<div className={styles.hr} />
			
			
			
			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input-textarea'], {
				[styles['invalid']] : !isValid.post
			})} placeholder='Текст' ></textarea>
			<Button text="Сохранить" />
		</form>

	);
};
 
export default JournailForm;