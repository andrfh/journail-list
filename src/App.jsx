import './App.css';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournailList from './components/JournailList/JournailList';
import JournailAddButton from './components/JournailAddButton/JournailAddButton';
import JournailForm from './components/JournailForm/JournailForm';
import { useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContext } from './context/user.context';
import { UserContextProvider } from './context/user.context';
import { formReducer, INITIAL_STATE } from './components/JournailForm/JournailForm.state';


function App() {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const [inputValue, setInputValue] = useState("");
	const [items, setItems] = useLocalStorage('data');

	function mapItems(items) {

	if (!items) {
		return [];
	}

	return items.map(i => ({
		...i,
		date: new Date(i.date)
	})).filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()) || item.post.toLowerCase().includes(inputValue.toLowerCase()));;
}

	const addItem = item => {
		setItems([...mapItems(items), {
			post: String(item.post),
			title: String(item.title),
			date: new Date(item.date),
			tags: item.tags,
			id: items?.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);
	};

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel> 
					<Header />
					<JournailAddButton dispatchForm={dispatchForm}/>
					<input type="text" name='search' placeholder='Поиск...' className='input' onChange={(e) => setInputValue(e.target.value)}/>
					<JournailList items={mapItems(items)} dispatchForm={dispatchForm}/>
				</LeftPanel>
				<Body>
					<JournailForm onSubmit={addItem} isValid={isValid} isFormReadyToSubmit = {isFormReadyToSubmit} values={values} dispatchForm={dispatchForm}/>
				</Body>				
			</div>
		</UserContextProvider>
		
	);
}

export default App;
