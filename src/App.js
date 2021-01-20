import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

//COMPONENTS
import GlobalStyles from './components/GlobalStyles';
import ListsOfProducts from './components/ListsOfProducts';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<GlobalStyles />
				<ListsOfProducts />
			</div>
		</BrowserRouter>
	);
}

export default App;
