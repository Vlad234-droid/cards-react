import React from 'react';
import styled from 'styled-components';
//COMPONENTS
import CardInCart from './CardInCart';

const Cart = ({setCart, cart}) => {
	return (
		<WrapperInfo>
			{cart.length ? (
				<ProductList>
					{cart.map((item, i) => (
						<CardInCart
							key={i}
							name={item.name}
							price={item.price}
							url={item.url}
							color={item.color}
							indexOfCard={i}
							setCart={setCart}
							cart={cart}
						/>
					))}
				</ProductList>
			) : (
				''
			)}
		</WrapperInfo>
	);
};
const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;
const WrapperInfo = styled.div`
	position: relative;
`;
export default Cart;
