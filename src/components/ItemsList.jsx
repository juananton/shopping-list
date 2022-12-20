import { useEffect, useState } from 'react';
import Button from './Button';
import CreationForm from './CreationForm';
import Item from './Item';
import Modal from './Modal';

const ItemsList = () => {
	// Data states
	const [listData, setListData] = useState({
		data: [],
		error: false,
		loading: true
	});

	const setData = newData => {
		setListData({ data: newData, loading: false, error: false });
	};
	const setError = () => setListData({ data: [], loading: false, error: true });

	// Fetch items
	const fetchData = async signal => {
		try {
			const res = await fetch(
				'http://localhost:4000/data?_sort=id&_order=desc',
				{ signal }
			);
			if (res.ok) {
				const data = await res.json();
				setData(data);
			} else {
				setError();
			}
		} catch (err) {
			setError();
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		fetchData(controller.signal);
		return () => controller.abort();
	}, []);

	// Add item
	const addItem = async newItem => {
		try {
			const res = await fetch('http://localhost:4000/data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newItem)
			});
			const data = await res.json();
			console.log(data);
			setData([data, ...listData.data]);
		} catch (err) {}
	};

	// Close modal
	const [showModal, setShowModal] = useState(false);
	const closeModal = () => setShowModal(false);

	// Calculate totaldays of each item
	listData.data.forEach(item => {
		item.totalDays = () => {
			return Math.ceil(item.units * item.daysPerUnit);
		};
	});

	// Display items
	const itemsRendered = () => {
		if (listData.loading) return <p>Cargando datos...</p>;
		if (listData.error) return <p>Error al cargar los datos</p>;
		if (!listData.data.length)
			return <p>No tienes ningún alimento en la lista</p>;

		return listData.data.map(item => (
			<Item
				key={item.id}
				name={item.name}
				category={item.category}
				daysPerUnit={item.daysPerUnit}
				units={item.units}
				days={item.totalDays()}
			/>
		));
	};

	return (
		<div className='items-list'>
			<Modal title='Nuevo alimento' closeModal={closeModal}>
				{showModal && (
					<CreationForm closeModal={closeModal} addItem={addItem} />
				)}
			</Modal>

			<div className='header'>
				<h1>Despensa</h1>
				<Button use='primary' onClick={() => setShowModal(true)}>
					Añadir
				</Button>
			</div>
			{itemsRendered()}
		</div>
	);
};

export default ItemsList;
