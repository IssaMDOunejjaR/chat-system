import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 3px;
`;

export const OwnContainer = styled(Container)`
	flex-direction: row-reverse;
`;

export const Picture = styled(Avatar)`
	margin: 10px;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const OwnContent = styled(Content)`
	align-items: flex-end;
`;

export const DisplayName = styled.h4`
	display: flex;
	align-items: center;
	margin-bottom: 5px;
`;

export const OwnDisplayName = styled(DisplayName)`
	flex-direction: row-reverse;
`;

interface MessageContentProps {
	sameUser: boolean;
}

export const MessageContent = styled.p<MessageContentProps>`
	max-width: 50%;
	word-wrap: break-word;
	width: fit-content;
	padding: 15px;
	border-radius: 10px;
	background-color: #ddd;
	color: #444;
	line-height: 1.4;
	display: flex;
	flex-direction: column;
	${({ sameUser }) => sameUser && 'margin: 0 60px;'}

	span {
		font-size: 12px;
		color: grey;
		display: block;
		text-align: right;
	}
`;

export const OwnMessage = styled(MessageContent)`
	background-color: #176e48;
	color: white;

	span {
		font-size: 12px;
		color: #bbb;
	}
`;
