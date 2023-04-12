import axios from 'axios';
import { useEffect, useState } from 'react';

const Items = ({ category }) => {
	const [items, setItems] = useState([]);
	const getItems = async () => {
		const { data } = await axios.get(
			`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${category}`
		);
		setItems(data);
	};
	useEffect(() => {
		getItems();
		// eslint-disable-next-line
	}, [category]);
	return (
		<div className='items'>
			{category && (
				<>
					<h1>Items in category ({category})</h1>
					<table>
						<thead>
							<tr>
								<th className='name'>Name</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{items.map(({ name, description, id }) => (
								<tr key={id}>
									<td className='name'>{name}</td>
									<td>{description}</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</div>
	);
};

export default Items;
