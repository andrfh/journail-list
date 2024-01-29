import './App.css';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournailList from './components/JournailList/JournailList';
import JournailAddButton from './components/JournailAddButton/JournailAddButton';
import JournailForm from './components/JournailForm/JournailForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	title: 'Подготовка к обновлению курсов',
	// 	text: 'Сегодня провёл весь день за',
	// 	date: new Date(),
	// 	id: 0
	// }

	// {
	// 	title: 'Поход в годы',
	// 	text: 'Думал, что очень много време...',
	// 	date: new Date()
	// }
];


function App() {
	
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);
	};


	return (
		<div className='app'>
			<LeftPanel> 
				<Header />
				<JournailAddButton />
				<JournailList items={items} />
			</LeftPanel>
			<Body>
				<JournailForm onSubmit={addItem}/>
				
			</Body>
			
			
		</div>
	);
}

export default App;
