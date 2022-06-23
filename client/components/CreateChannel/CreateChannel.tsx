import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	SyntheticEvent,
	useState,
} from 'react';
import { Modal } from '..';
import { useCreateChannel } from '../../hooks/useCreateChannel';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';

export default function CreateChannel({
	open,
	setOpen,
	...restOfProps
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [value, setValue] = useState('PUBLIC');
	const { data: user } = useLoggedUserData();
	const { mutate } = useCreateChannel();

	const handleClose = () => {
		setOpen(false);
	};

	const createNewChannel = () => {
		if (name) {
			mutate({
				name,
				visibility: value,
				password,
				ownerId: user?.data.id,
			});
			setOpen(false);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<Modal open={open} onClose={handleClose} {...restOfProps}>
			<Modal.Header>Create a new channel</Modal.Header>
			<Modal.Input
				placeholder="Name"
				onChange={(e: any) => setName(e.target.value)}
			/>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue="female"
				name="radio-buttons-group"
				row
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel
					value="PUBLIC"
					control={<Radio color="success" />}
					label="Public"
				/>
				<FormControlLabel
					value="PRIVATE"
					control={<Radio color="success" />}
					label="Private"
				/>
				<FormControlLabel
					value="PROTECTED"
					control={<Radio color="success" />}
					label="Protected"
				/>
			</RadioGroup>
			<Modal.Input
				type="password"
				placeholder="Password"
				disabled={value === 'PUBLIC'}
				onChange={(e: any) => setPassword(e.target.value)}
			/>
			<Modal.Button onClick={createNewChannel}>Create</Modal.Button>
		</Modal>
	);
}
