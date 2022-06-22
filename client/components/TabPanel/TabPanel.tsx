import { ReactNode } from 'react';
import { Container } from './style';

export default function TabPanel({
	value,
	index,
	children,
}: {
	value: number;
	index: number;
	children: ReactNode;
}) {
	return <Container hidden={value !== index}>{children}</Container>;
}
