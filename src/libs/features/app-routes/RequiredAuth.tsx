import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequiredAuth = () => {
	const location = useLocation();
	const isAuthenticated = false;

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};