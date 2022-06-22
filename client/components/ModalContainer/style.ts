import styled from 'styled-components';
import { Button, Checkbox } from '@mui/material';

export const Container = styled.div`
	padding: 40px;
	width: 600px;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
`;

export const Header = styled.h1`
	margin-bottom: 20px;
	text-align: center;
`;

export const Body = styled.div`
	display: flex;
	margin-top: 20px;
	padding: 10px;
	background-color: whitesmoke;
	border-radius: 10px;
	width: 100%;
	flex-wrap: wrap;
`;

export const Input = styled.input`
	margin: 10px 0;
	width: 100%;
	padding: 15px 20px;
	border: none;
	background-color: whitesmoke;
	border-radius: 10px;
	font-size: 18px;

	:focus,
	:active {
		outline: none;
	}

	:disabled {
		opacity: 0.7;
	}
`;

export const ModalButton = styled(Button)`
	&&& {
		background-color: #176e48;
		width: 100%;
		margin: 10px 0;
		padding: 10px 0;
	}
`;

export const CheckBox = styled(Checkbox)`
	&&& {
		color: #176e48;
	}
`;
