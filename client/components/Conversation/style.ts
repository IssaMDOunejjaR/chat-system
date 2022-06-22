import styled from 'styled-components';
import { Avatar } from '@mui/material';

interface Props {
	active: boolean;
}

export const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	padding: 15px 20px;
	cursor: pointer;
	background-color: ${({ active }) => (active ? 'whitesmoke' : 'white')};
	transition: background 0.3s ease-in-out;

	:hover {
		background-color: whitesmoke;
	}
`;

export const PictureContainer = styled.div`
	position: relative;
`;

export const Picture = styled(Avatar)`
	margin-right: 15px;

	&&& {
		width: 50px;
		height: 50px;
	}
`;

export const Status = styled.span`
	display: block;
	width: 10px;
	height: 10px;
	position: absolute;
	bottom: 5px;
	right: 15px;
	border-radius: 50%;
	border: 1px solid white;
	background-color: #46d481;
`;

export const Info = styled.div`
	flex: 1;
	overflow: hidden;

	> p {
		margin-top: 5px;
		color: #777;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const Options = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #aaa;
		margin-bottom: 10px;
		font-size: 14px;
	}

	> span {
		background: #d34141;
		width: 18px;
		height: 18px;
		font-size: 12px;
		border-radius: 50%;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
