import './App.css';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournailList from './components/JournailList/JournailList';
import JournailAddButton from './components/JournailAddButton/JournailAddButton';
import JournailForm from './components/JournailForm/JournailForm';
import { useEffect, useState } from 'react';
import { useLocalStroage } from './hooks/use-localstorage.hook'


function mapItems(items) {
	if (!items) {
		return [];
	}

	return items.map(i => ({
		...i,
		date: new Date(i.date),
	}));
}

function App() {
	
	const [items, setItems] = useLocalStroage('data');
	
	const addItem = item => {
		setItems([...mapItems(items), {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);
	};


	return (
		<div className='app'>
			<LeftPanel> 
				<Header />
				<JournailAddButton />
				<JournailList items={mapItems(items)} />
			</LeftPanel>
			<Body>
				<JournailForm onSubmit={addItem}/>
				
			</Body>
			
			
		</div>
	);
}

export default App;
