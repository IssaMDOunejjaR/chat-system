import { Avatar, IconButton, TextareaAutosize } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	height: 100vh;
	flex: 1;
	overflow-y: scroll;

	-ms-overflow-style: none;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Content = styled.div`
	flex: 1;
	background-color: whitesmoke;
	padding: 20px;
`;
