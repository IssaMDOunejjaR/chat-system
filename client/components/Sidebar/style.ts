import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
	height: 100vh;
	width: 100%;
	/* min-width: 400px; */
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 1200px) {
		max-width: 400px;
	}
`;

export const SidebarBox = styled.div`
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
`;

export const Header = styled.div`
	padding: 15px 20px;
	display: flex;

	h1 {
		flex: 1;
		letter-spacing: 5px;
	}
`;

export const Search = styled.div`
	padding: 15px 20px;
	display: flex;
	align-items: center;
	position: relative;

	svg {
		color: grey;
		position: absolute;
		left: 30px;
	}
`;

export const Input = styled.input`
	flex: 1;
	border: none;
	background-color: #fafafa;
	padding: 15px 40px;
	border-radius: 10px;
	font-size: 18px;
	color: grey;

	:focus {
		outline: none;
	}
`;

interface TabPanelProps {
	value: number;
	index: number;
}

export const TabPanel = styled.div`
	padding: 15px 0;
`;
