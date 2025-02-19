import './JournailList.css';
import CardButton from '../CardButton/CardButton';
import JournailItem from '../JournailItem/JournailItem';

const JournailList = ({ items }) => {

	if (items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}
	
	const sortItems = (a, b) => {
		if (a.date > b.date) {
			return 1;
		} else {
			return -1;
		}
	};



	return <>{items.sort(sortItems).map(el => (
		<CardButton key={el.id}> 
			<JournailItem title={el.title} text={el.post} date={el.date}/>
			{/* <p>{el.id}</p> */}
		</CardButton>
	))}</>;

};
 
export default JournailList;