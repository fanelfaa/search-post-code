import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuthStore from '@/libs/data-access/store/useAuthStore';

export const RequiredAuth = () => {
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};
