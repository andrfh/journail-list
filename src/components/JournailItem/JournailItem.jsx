import './JournailItem.css';

const JournailItem = ({title, text, date}) => {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return ( 
		<>
			<h2 className="journail-item__header">{title}</h2>
			<h2 className="journail-item__body">
				<div className="journail-item__date">{formatedDate}</div>
				<div className="journail-item__text">{text}</div>
			</h2>
		</>
	);
};
 
export default JournailItem;