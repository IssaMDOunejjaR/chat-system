import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useSocket } from '../../contexts/socket';
import { InputContainer, Input, Button } from './styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import { useUserContext } from '../../contexts/user';

export default function ChatForm() {
	const {
		state: { id, chatType },
	} = useUserContext();
	const [input, setInput] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const { data: user } = useLoggedUserData();
	const socket = useSocket();

	const sendMessage = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (input !== '') {
			if (chatType === 0) {
				socket.emit('privateMessage', {
					senderId: user?.data.id,
					receiverId: id,
					message: input,
				});
			} else if (chatType === 1) {
			}
			setInput('');
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	});

	return (
		<InputContainer onSubmit={sendMessage}>
			<Input
				ref={inputRef}
				placeholder="Your messages..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button>
				<TelegramIcon />
			</Button>
		</InputContainer>
	);
}
