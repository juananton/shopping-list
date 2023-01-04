import { useContext, useState } from 'react';
import ItemsContext from '../lib/context/ItemsContext';
import Input from './Input';

const Toolbar = () => {
	const [search, setSearch] = useState('');

	return (
		<div className='toolbar'>
			<Input
				type='text'
				label='Nombre'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default Toolbar;
