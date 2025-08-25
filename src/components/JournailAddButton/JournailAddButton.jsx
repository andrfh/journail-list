import './JournailAddButton.css';
import CardButton from '../CardButton/CardButton';

const JournailAddButton = ({dispatchForm}) => {
	return ( 
		<CardButton className='journail-add' click={() => {dispatchForm({ type: 'CLEAR' });dispatchForm({ type: 'RESET_VALIDITY' })}}>
			<img src="/plus.svg" alt="add" />
			Новое воспоминание
		</CardButton>
	);
};
 
export default JournailAddButton;