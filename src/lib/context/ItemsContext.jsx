import { createContext, useEffect, useState } from 'react';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
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
			setData([data, ...listData.data]);
		} catch (err) {}
	};

	// Update Item
	const updateItem = async updatedItem => {
		try {
			const res = await fetch(`http://localhost:4000/data/${updatedItem.id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updatedItem)
			});
			const data = await res.json();
			setData(
				listData.data.map(item =>
					item.id === data.id ? { ...item, ...data } : item
				)
			);
		} catch (err) {}
	};

	// Delete item
	const deleteItem = async id => {
		await fetch(`http://localhost:4000/data/${id}`, {
			method: 'DELETE'
		});

		setData(listData.data.filter(item => item.id !== id));
	};

	// Calculate totaldays of each item
	listData.data.forEach(item => {
		item.totalDays = () => {
			return Math.ceil(item.units * item.daysPerUnit);
		};
	});

	return (
		<ItemsContext.Provider
			value={{
				listData,
				addItem,
				deleteItem,
				updateItem
			}}
		>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContext;
