import { Container, Header, Body, Input, ModalButton, CheckBox } from './style';
import { Dialog, FormControlLabel } from '@mui/material';

export default function ModalContainer({
	children,
	open,
	onClose,
	...restOfProps
}: {
	children: JSX.Element | JSX.Element[] | string;
	open: boolean;
	onClose: () => void;
}) {
	return (
		<Dialog open={open} onClose={onClose} {...restOfProps}>
			<Container>{children}</Container>
		</Dialog>
	);
}

ModalContainer.Header = function ModalContainerHeader({
	children,
	...restOfProps
}: {
	children: JSX.Element | JSX.Element[] | string;
}) {
	return <Header {...restOfProps}>{children}</Header>;
};

ModalContainer.Body = function ModalContainerBody({
	children,
	...restOfProps
}: {
	children: JSX.Element | JSX.Element[] | string;
}) {
	return <Body {...restOfProps}>{children}</Body>;
};

ModalContainer.Input = function ModalContainerInput({ ...restOfProps }) {
	return <Input {...restOfProps} />;
};

ModalContainer.CheckBox = function ModalContainerCheckBox({
	label,
	checked,
	onChange,
	value,
}: {
	label: string;
	checked: boolean;
	onChange: (e: any) => void;
	value: string;
}) {
	return (
		<FormControlLabel
			control={
				<CheckBox checked={checked} onChange={onChange} value={value} />
			}
			label={label}
		/>
	);
};

ModalContainer.Button = function ModalContainerButton({
	children,
	onClick,
	...restOfProps
}: {
	children: JSX.Element | JSX.Element[] | string;
	onClick: () => void;
}) {
	return (
		<ModalButton onClick={onClick} variant="contained" {...restOfProps}>
			{children}
		</ModalButton>
	);
};
