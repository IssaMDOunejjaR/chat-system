import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SocketProvider } from '../contexts/socket';
import { GlobalStyles } from '../styles/globalStyles';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UserProvider } from '../contexts/user';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<SocketProvider>
					<UserProvider>
						<Component {...pageProps} />
					</UserProvider>
					<ReactQueryDevtools
						initialIsOpen={false}
						position="bottom-right"
					/>
				</SocketProvider>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
