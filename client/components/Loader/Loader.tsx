import {
	Container,
	Cube1,
	Cube2,
	Cube3,
	Cube4,
	Cube5,
	Cube6,
	Cube7,
	Cube8,
	Cube9,
	Spinner,
} from './style';

export default function Loader({ size = 100 }: { size?: number }) {
	return (
		<Container>
			<Spinner size={size}>
				<Cube1 />
				<Cube2 />
				<Cube3 />
				<Cube4 />
				<Cube5 />
				<Cube6 />
				<Cube7 />
				<Cube8 />
				<Cube9 />
			</Spinner>
		</Container>
	);
}
