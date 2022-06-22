import { useRouter } from 'next/router';
import { useLoggedUserData } from '../../hooks/useLoggedUserData';
import Loader from '../Loader/Loader';

export default function Protected({
	children,
}: {
	children: JSX.Element | JSX.Element[] | string;
}) {
	const { isLoading, isError } = useLoggedUserData();
	const route = useRouter();

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		route.push('/');
		return <Loader />;
	}

	return <>{children}</>;
}
