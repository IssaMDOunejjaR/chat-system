import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader } from '../components';
import { useLoggedUserData } from '../hooks/useLoggedUserData';

const Home: NextPage = () => {
	const { isLoading, isError, isSuccess } = useLoggedUserData();
	const router = useRouter();

	if (isLoading) return <Loader />;

	if (isSuccess) {
		router.push('/chat');
		return <Loader />;
	}

	return (
		<>
			<Head>
				<title>Sign In</title>
			</Head>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'whitesmoke',
				}}
			>
				<a
					style={{
						backgroundColor: '#176E48',
						color: 'white',
						textDecoration: 'none',
						padding: '20px 40px',
						borderRadius: 10,
						boxShadow: '0 0 10px grey',
						textTransform: 'uppercase',
						wordSpacing: 5,
					}}
					href="https://chat-server-personal.up.railway.app/auth/signin"
				>
					Sign In
				</a>
			</div>
		</>
	);
};

export default Home;
