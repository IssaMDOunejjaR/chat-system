import styled from 'styled-components';

export const InputContainer = styled.form`
	position: sticky;
	bottom: 0;
	padding: 25px 30px;
	display: flex;
	background-color: white;
	border: 1px solid whitesmoke;
`;

export const Input = styled.input`
	flex: 1;
	padding: 18px 25px;
	padding-right: 70px;
	border: none;
	background-color: whitesmoke;
	border-radius: 10px;
	font-size: 18px;

	:focus,
	:active {
		outline: none;
	}
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	position: absolute;
	bottom: 38px;
	right: 48px;
	border-left: 1px solid #ccc;
	padding-left: 10px;
	cursor: pointer;

	svg {
		color: #176e48;
		font-size: 30px;
	}
`;
