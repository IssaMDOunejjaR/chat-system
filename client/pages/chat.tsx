import { useEffect, useState } from 'react';
import { Chat, ConversationStatus, Protected, Sidebar } from '../components';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useUserContext } from '../contexts/user';

export default function ChatPage() {
	const {
		state: { id, chatType, content },
	} = useUserContext();
	const [windowSize, setWindowSize] = useState(0);

	useEffect(() => {
		setWindowSize(window.innerWidth);

		window.addEventListener('resize', () => {
			setWindowSize(window.innerWidth);
		});

		return () => {
			window.removeEventListener('resize', () => {
				setWindowSize(window.innerWidth);
			});
		};
	}, []);

	return (
		<>
			<Head>
				<title>Messages</title>
			</Head>
			<Protected>
				<AnimatePresence exitBeforeEnter>
					{(windowSize >= 1200 || content === 'conversation') && (
						<Sidebar />
					)}
				</AnimatePresence>
				<AnimatePresence exitBeforeEnter>
					{(windowSize >= 1200 || content === 'chat') && <Chat />}
				</AnimatePresence>
				<AnimatePresence exitBeforeEnter>
					{(windowSize >= 1200 || content === 'joined') &&
						chatType === 1 &&
						id && <ConversationStatus />}
				</AnimatePresence>
			</Protected>
		</>
	);
}
