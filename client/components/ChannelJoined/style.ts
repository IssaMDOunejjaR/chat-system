import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	height: 100vh;
	overflow-y: scroll;
	width: 100%;

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 1200px) {
		max-width: 400px;
	}
`;

export const Header = styled.div`
	padding: 20px 30px;
	margin-bottom: 20px;
	background-color: white;
	position: sticky;
	top: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	border: 1px solid whitesmoke;

	h2 {
		flex: 1;
	}
`;

export const UsersContainer = styled.div`
	padding: 0 30px;
`;

export const Button = styled(IconButton)`
	@media (min-width: 1200px) {
		&&& {
			display: none;
		}
	}
`;
