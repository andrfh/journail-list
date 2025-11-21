import './JournailAddButton.css';
import CardButton from '../CardButton/CardButton';
import plus from '../../assets/plus.png'

const JournailAddButton = ({dispatchForm}) => {
	return ( 
		<CardButton className='journail-add' click={() => {dispatchForm({ type: 'CLEAR' });dispatchForm({ type: 'RESET_VALIDITY' })}}>
			<img src={plus} alt="add" />
			Новое воспоминание
		</CardButton>
	);
};
 
export default JournailAddButton;