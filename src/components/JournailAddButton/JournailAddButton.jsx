import './JournailAddButton.css';
import CardButton from '../CardButton/CardButton';

const JournailAddButton = () => {
	return ( 
		<CardButton  className='journail-add'>
			<img src="/plus.svg" alt="add" />
			Новое воспоминание
		</CardButton>
	);
};
 
export default JournailAddButton;