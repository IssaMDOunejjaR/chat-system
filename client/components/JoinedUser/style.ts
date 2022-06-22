import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
`;

export const ContainerOffline = styled(Container)`
	opacity: 0.5;
`;

export const Picture = styled(Avatar)`
	margin-right: 10px;
`;

export const DisplayName = styled.p`
	flex: 1;
`;
