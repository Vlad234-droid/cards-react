import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
//components
import LikedCard from './LikedCard';

const LikedCards = ({data, setData, setCart, cart, favouriteHandler}) => {
	const [fav, setFav] = useState([]);

	useEffect(() => {
		const newArrToShow = [];
		const checkedFav = () => {
			for (let item of data) {
				if (item.favourite) {
					newArrToShow.push(item);
				}
			}

			setFav(newArrToShow);
		};
		checkedFav();
	}, [data]);

	return (
		<WrapperInfo>
			{fav.length !== 'undefined' ? (
				<ProductList>
					{fav.map((item, i) => (
						<LikedCard
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
	);
};

const WrapperInfo = styled.div`
	position: relative;
`;
const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;

export default LikedCards;
