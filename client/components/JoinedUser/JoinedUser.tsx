import { Container, Picture, DisplayName, ContainerOffline } from './style';

export default function JoinedUser({
	displayName,
	online,
}: {
	displayName: string;
	online: boolean;
}) {
	const Wrapper = online ? Container : ContainerOffline;

	return (
		<Wrapper>
			<Picture />
			<DisplayName>{displayName}</DisplayName>
		</Wrapper>
	);
}
