import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Items from './Items';

export const Catagories = () => {
	const [catagories, setCatagories] = useState([]);
	const [category, setCategory] = useState('');
	const navigate = useNavigate();
	const getCatagories = async () => {
		const { data } = await axios.get(
			'https://stream-restaurant-menu-svc.herokuapp.com/category'
		);
		setCatagories(data);
	};
	useEffect(() => {
		getCatagories();
		navigate('/');
		// eslint-disable-next-line
	}, []);
	const handleClick = (ss) => {
		setCategory(ss);
		navigate(`/item?category=${ss}`);
	};
	return (
		<div className='main'>
			<ul>
				{catagories.map(({ name, short_name, id }) => (
					<li key={id} onClick={() => handleClick(short_name)}>
						{name}
					</li>
				))}
			</ul>
			{category && <Items category={category} />}
		</div>
	);
};
