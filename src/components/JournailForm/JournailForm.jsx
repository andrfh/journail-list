import './JournailForm.css';
import Button from '../Button/Button';


const JournailForm = ( {onSubmit} ) => {

	const addJournailItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
		
	};
    
	return ( 

		<form className='journail-form' onSubmit={addJournailItem}>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag'/>
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить"/>
		</form>

	);
};
 
export default JournailForm;