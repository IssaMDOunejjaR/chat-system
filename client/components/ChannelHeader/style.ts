import { Avatar, IconButton } from '@mui/material';
import styled from 'styled-components';

export const Header = styled.div`
	padding: 15px 30px;
	background-color: white;
	position: sticky;
	top: 0;
	z-index: 1;
	border: 1px solid whitesmoke;
	display: flex;
	align-items: center;
`;

export const Picture = styled(Avatar)`
	margin-right: 20px;

	&&& {
		width: 60px;
		height: 60px;
	}
`;

export const Info = styled.div`
	flex: 1;

	p {
		color: #777;
		font-size: 14px;
	}
`;

export const ButtonHeader = styled(IconButton)`
	@media (min-width: 1200px) {
		&&& {
			display: none;
		}
	}
`;
