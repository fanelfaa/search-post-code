import { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/login/Login';
import HomePage from '../pages/home/Home';

export const publicRoutes: RouteObject[] = [
	{
		path: '/login',
		element: <LoginPage />,
	},
];

export const privateRoutes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
];
