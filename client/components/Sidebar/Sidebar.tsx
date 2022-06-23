import {
	Container,
	SidebarBox,
	Header,
	Search,
	Input,
	TabPanel,
} from './style';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tabs, Tab, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { CreateChannel, Friends, Channels } from '..';
import { useSocket } from '../../contexts/socket';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useUserContext } from '../../contexts/user';

export default function Sidebar() {
	const [search, setSearch] = useState('');
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const socket = useSocket();
	const {
		state: { chatType },
		dispatch,
	} = useUserContext();

	const handleTabsChange = (_e: any, value: 0 | 1) => {
		dispatch({ type: 'SET_TYPE', chatType: value });
		dispatch({ type: 'SET_ID', id: null });
	};

	const handleLogout = () => {
		socket.emit('userDisconnect');
		Cookies.remove('token');
		router.reload();
	};

	return (
		<>
			<CreateChannel open={open} setOpen={setOpen} />
			<Container
				key="sidebar"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<SidebarBox>
					<Header>
						<h1>Messages</h1>
						<IconButton onClick={() => setOpen(true)}>
							<AddIcon />
						</IconButton>
						<IconButton onClick={handleLogout}>
							<LogoutIcon />
						</IconButton>
					</Header>
					<Search>
						<SearchIcon />
						<Input
							placeholder="Search..."
							value={search}
							onChange={(e: any) => setSearch(e.target.value)}
						/>
					</Search>
					<Tabs
						style={{
							borderBottom: '1px solid whitesmoke',
							color: '#176E48',
						}}
						value={chatType}
						onChange={handleTabsChange}
						textColor="inherit"
						TabIndicatorProps={{
							style: { backgroundColor: '#176E48' },
						}}
						centered
					>
						<Tab icon={<MessageIcon />} />
						<Tab icon={<GroupsIcon />} />
					</Tabs>
				</SidebarBox>
				<TabPanel hidden={chatType !== 0}>
					{chatType === 0 && <Friends search={search} />}
				</TabPanel>
				<TabPanel hidden={chatType !== 1}>
					{chatType === 1 && <Channels search={search} />}
				</TabPanel>
			</Container>
		</>
	);
}
