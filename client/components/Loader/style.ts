import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
`;

export const grid = keyframes`
	0%,
	70%,
	100% {
		transform: scale3D(1, 1, 1);
	}
	35% {
		transform: scale3D(0, 0, 1);
	}
`;

interface Props {
	size?: number;
	color?: string;
}

export const Spinner = styled.div<Props>`
	position: relative;
	margin: 100px auto;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
`;

export const Cube = styled.div<Props>`
	width: 33%;
	height: 33%;
	background-color: ${(props) => props.color || '#176E48'};
	float: left;
	animation: ${grid} 1.3s infinite ease-in-out;
`;

export const Cube1 = styled(Cube)`
	animation-delay: 0.2s;
`;
export const Cube2 = styled(Cube)`
	animation-delay: 0.3s;
`;
export const Cube3 = styled(Cube)`
	animation-delay: 0.4s;
`;
export const Cube4 = styled(Cube)`
	animation-delay: 0.1s;
`;
export const Cube5 = styled(Cube)`
	animation-delay: 0.2s;
`;
export const Cube6 = styled(Cube)`
	animation-delay: 0.3s;
`;
export const Cube7 = styled(Cube)`
	animation-delay: 0s;
`;
export const Cube8 = styled(Cube)`
	animation-delay: 0.1s;
`;
export const Cube9 = styled(Cube)`
	animation-delay: 0.2s;
`;
