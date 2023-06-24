import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
	email?: string;
	apikey?: string;
	isAuthenticated: boolean;
};

type AuthAction = {
	setValues: (values: Partial<NonNullable<AuthState>>) => void;
	logout(): void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
	persist(
		(set) => ({
			email: undefined,
			apikey: undefined,
			isAuthenticated: false,
			setValues: (values) => set(() => values),
			logout: () => set(() => ({ apikey: undefined, email: undefined })),
		}),
		{
			name: 'user-auth',
			partialize: (state) => ({ apikey: state.apikey }),
		}
	)
);

export default useAuthStore;
