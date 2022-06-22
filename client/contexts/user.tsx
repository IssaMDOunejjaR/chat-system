import {
	createContext,
	Dispatch,
	ReactNode,
	useContext,
	useReducer,
} from 'react';

type UserState = {
	id: null | number;
	chatType: 0 | 1;
	content: 'conversation' | 'chat' | 'joined';
};
type UserAction =
	| { type: 'SET_ID'; id: null | number }
	| { type: 'SET_TYPE'; chatType: 0 | 1 }
	| { type: 'SET_CONTENT'; content: 'conversation' | 'chat' | 'joined' };

const initialState: UserState = {
	id: null,
	chatType: 0,
	content: 'conversation',
};

const reducer = (state: UserState, action: UserAction) => {
	switch (action.type) {
		case 'SET_ID':
			return {
				...state,
				id: action.id,
			};
		case 'SET_TYPE':
			return {
				...state,
				chatType: action.chatType,
			};
		case 'SET_CONTENT':
			return {
				...state,
				content: action.content,
			};
	}
};

const UserContext = createContext<{
	state: UserState;
	dispatch: Dispatch<UserAction>;
}>({ state: initialState, dispatch: () => {} });

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};
