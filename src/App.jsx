import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournailItem from './components/JournailItem/JournailItem';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournailList from './components/JournailList/JournailList';
import JournailAddButton from './components/JournailAddButton/JournailAddButton';
import JournailForm from './components/JournailForm/JournailForm';
import { useState } from 'react';

const INITIAL_DATA = [
	{
		title: 'Подготовка к обновлению курсов',
		text: 'Сегодня провёл весь день за',
		date: new Date()
	},

	{
		title: 'Поход в годы',
		text: 'Думал, что очень много време...',
		date: new Date()
	}
];


function App() {
	
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		if (item.date == '') {
			alert('Введите дату');
			return(false);
		} 
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date)
			
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel> 
				<Header />
				<JournailAddButton />
				<JournailList>
					{items.map(el => (
						<CardButton> 
							<JournailItem title={el.title} text={el.text} date={el.date}/>
						</CardButton>
					))}
					
			
				</JournailList>
			</LeftPanel>
			<Body>
				<JournailForm onSubmit={addItem}/>
			</Body>
			
			
		</div>
	);
}

export default App;
