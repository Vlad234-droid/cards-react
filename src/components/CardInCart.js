import React, {useState} from 'react';
import styled from 'styled-components';
//CIONS
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//COMPONENTS
import ModalDelete from './ModalDelete';

const CardInCart = ({name, price, url, indexOfCard, data, setCart, cart}) => {
	const [display, setDisplay] = useState(false);

	const deletelHandler = () => {
		setDisplay(!display);
	};

	return (
		<>
			<StyledCard>
				<WrapperInfo>
					<h2>{name}</h2>
					<p>{`${price}$`}</p>
					<IconButton onClick={deletelHandler}>
						<DeleteForeverIcon fontSize="large" />
					</IconButton>
				</WrapperInfo>
				<img src={url} alt={name} />
			</StyledCard>

			{display ? (
				<ModalDelete
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
	text-align: center;
`;

export default CardInCart;
