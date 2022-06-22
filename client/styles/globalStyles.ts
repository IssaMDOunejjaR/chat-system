import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-size: 16px;
		font-family: 'Rubik', sans-serif;
		height: 100vh;
		overflow: hidden;
	}

	#__next {
		display: flex;
		height: 100%;
	}
`;
