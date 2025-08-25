import './JournailList.css';
import CardButton from '../CardButton/CardButton';
import JournailItem from '../JournailItem/JournailItem';
import { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from '../JournailForm/JournailForm.state';

const JournailList = ({ items, dispatchForm }) => {
	if (items.length === 0) {
		return <p>Записей не найдено</p>;
	}
	
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
	<div className='journail-list'>
		{items.sort(sortItems).map(el => (
			<CardButton key={el.id} click={() => {dispatchForm({type: 'SET_VALUE', payload: 
			{ 
				post: items.filter(item => item.id === el.id)[0].post,
				title: items.filter(item => item.id === el.id)[0].title,
				date: items.filter(item => item.id === el.id)[0].date,
				tags: items.filter(item => item.id === el.id)[0].tags
			}
			})}}> 
				<JournailItem title={el.title} text={el.post} date={el.date} tags={el.tags}/>
			</CardButton>
		))}
	</div>
	)
};
 
export default JournailList;