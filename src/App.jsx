import './App.css';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournailList from './components/JournailList/JournailList';
import JournailAddButton from './components/JournailAddButton/JournailAddButton';
import JournailForm from './components/JournailForm/JournailForm';
import { useEffect, useState } from 'react';


function App() {
	
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	
	}, [])

	
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
