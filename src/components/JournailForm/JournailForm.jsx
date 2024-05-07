import styles from'./JournailForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';
import deleteImg from '../../assets/delete.svg';
import dateImg from '../../assets/date.svg';
import tagImg from '../../assets/tag.svg';


const JournailForm = ( {onSubmit} ) => {

	const [formValidState, setFormValidState] = useState({
		title: true,
		post: true,
		date: true
	});

	const addJournailItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if (!formProps.post?.trim().length) {
			setFormValidState(state => ({...state, post: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, post: true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if (!isFormValid) {
			return;
		}
		onSubmit(formProps);

	};
    
	return ( 
		<form className={styles['journail-form']} onSubmit={addJournailItem}>
			<div className={styles['journail-form-header']}>
				<input type="text" name='title' className={cn(styles['input-header'], {
					[styles['invalid']] : !formValidState.title
				})} placeholder='Title'/>
				<a href="#" className={styles['delete']}> <img src={deleteImg} alt="" /> </a>
			</div>	

			<div className={styles['input-line']}>
				<img src={dateImg} alt="date" className={styles.date} />
				<p className={styles['input-text']}>Дата</p>
				<input type="date" name='date' className={cn(styles['input'], {
					[styles['invalid']] : !formValidState.date
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
				[styles['invalid']] : !formValidState.post
			})} placeholder='Текст' ></textarea>
			<Button text="Сохранить" />
		</form>

	);
};
 
export default JournailForm;