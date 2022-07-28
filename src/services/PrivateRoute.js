import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import AuthService from './auth.service';

const PrivateRoute = () => {
	const location = useLocation();
	const auth = AuthService.getCurrentUser();
	return auth ? <Outlet /> : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
