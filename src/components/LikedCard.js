import React, {useState} from 'react';
import styled from 'styled-components';
//CIONS
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
//COMPONENTS
import Modal from '../components/Modal';

const Card = ({
	name,
	price,
	url,
	indexOfCard,
	data,
	setCart,
	cart,
	favourite,
	favouriteHandler,
}) => {
	const [display, setDisplay] = useState(false);

	const popUpModalHandler = () => {
		setDisplay(!display);
	};

	return (
		<>
			<StyledCard>
				<WrapperInfo>
					<IconButton onClick={popUpModalHandler}>
						<ShoppingBasketIcon fontSize="large" color="secondary" />
					</IconButton>
					<h2>{name}</h2>
					<p>{`${price}$`}</p>
					<IconButton onClick={() => favouriteHandler(data, url)}>
						<GradeIcon
							fontSize="small"
							style={{color: `${favourite ? 'red' : 'black'}`}}
						/>
					</IconButton>
				</WrapperInfo>
				<img src={url} alt={name} onClick={popUpModalHandler} />
			</StyledCard>

			{display ? (
				<Modal
					backColor="lightgrey"
					display={display}
					setDisplay={setDisplay}
					indexOfCard={indexOfCard}
					data={data}
					setCart={setCart}
					cart={cart}
				/>
			) : (
				''
			)}
		</>
	);
};

const StyledCard = styled.div`
	height: 45vh;
	box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		cursor: pointer;
	}
`;

const WrapperInfo = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Card;
