import React from 'react';
import Manager from './components/Manager';
import { ItemsProvider } from './lib/context/ItemsContext';
import './styles/css/index.css';

const App = () => {
	return (
		<ItemsProvider>
			<Manager />
		</ItemsProvider>
	);
};
export default App;
