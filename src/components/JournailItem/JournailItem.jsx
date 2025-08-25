import './JournailItem.css';

const JournailItem = ({title, text, date, tags}) => {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return ( 
		<div className='journail-item'>
			<h2 className="journail-item__header">{title}</h2>
			<div className="journail-item__text">{text}</div>
			<div className="journail-item__tags">
				{tags.map(item => {
					return (<span>{item}</span>);
				})}
			</div>
			<div className="journail-item__date">{formatedDate}</div>
		</div>
	);
};
 
export default JournailItem;