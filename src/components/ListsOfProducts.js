import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

//COMPONENTS
import Card from './Card';
import Cart from './Cart';
import Header from './Header';
import LikedCards from './LikedCards';

const ListsOfProducts = () => {
	const [data, setData] = useState([]);

	const [cart, setCart] = useState([]);

	const getData = async () => {
		const res = await fetch('./products.json');
		const dataAPI = await res.json();
		const dataFetch = dataAPI.products;
		setData((data) => [...data, ...dataFetch]);
	};

	const favouriteHandler = (data, url) => {
		const dataFilter = data.find((item) => item.url === url);
		console.log(dataFilter.name);

		const newState = [...data];
		for (let item of newState) {
			if (item.name === dataFilter.name) {
				item.favourite = !item.favourite;
			}
		}

		setData(newState);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<WrapperInfo>
						{data.length ? (
							<ProductList>
								{data.map((item, i) => (
									<Card
										favourite={item.favourite}
										key={i}
										name={item.name}
										price={item.price}
										url={item.url}
										color={item.color}
										indexOfCard={i} // in order to filter
										data={data}
										setData={setData}
										cart={cart}
										setCart={setCart}
										favouriteHandler={favouriteHandler}
									/>
								))}
							</ProductList>
						) : (
							''
						)}
					</WrapperInfo>
				</Route>

				<Route path="/cart">
					<Cart setCart={setCart} cart={cart} />
				</Route>
				<Route path="/like">
					<LikedCards
						data={data}
						setData={setData}
						setCart={setCart}
						cart={cart}
						favouriteHandler={favouriteHandler}
					/>
				</Route>
			</Switch>
		</>
	);
};

const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;
const WrapperInfo = styled.div`
	position: relative;
`;

export default ListsOfProducts;
