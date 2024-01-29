import './JournailForm.css';
import Button from '../Button/Button';
import { useState } from 'react';


const JournailForm = ( {onSubmit} ) => {

	const [noDate, setNoDate] = useState(<></>);

	const addJournailItem = (event) => {
		event.preventDefault();
		if (event.target.date.value === '') {
			setNoDate(<p>Введите дату</p>);
			return(false);
		} else {
			setNoDate(<></>);
		}
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
		return formProps;

	};
    
	return ( 
		<form className='journail-form' onSubmit={addJournailItem}>
			<input type="text" name='title'/>
			{noDate}
			<input type="date" name='date'/>
			<input type="text" name='tag'/>
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить" />
		</form>

	);
};
 
export default JournailForm;