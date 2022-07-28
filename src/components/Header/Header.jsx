import React, { useEffect, useState } from 'react';
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import { Link } from 'react-router-dom';

const Header = () => {
	const [showModeratorBoard, setShowModeratorBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
			console.log(user);
			// setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
			setShowAdminBoard(user.user.role.includes('ADMIN_ROLE'));
		}

		EventBus.on('logout', () => {
			logOut();
		});

		return () => {
			EventBus.remove('logout');
		};
	}, []);

	const logOut = () => {
		AuthService.logout();
		setShowModeratorBoard(false);
		setShowAdminBoard(false);
		setCurrentUser(undefined);
	};

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<Link to={'/'} className="navbar-brand">
				App
			</Link>
			<div className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link to={'/home'} className="nav-link">
						Home
					</Link>
				</li>

				{showModeratorBoard && (
					<li className="nav-item">
						<Link to={'/mod'} className="nav-link">
							Moderator Board
						</Link>
					</li>
				)}

				{showAdminBoard && (
					<li className="nav-item">
						<Link to={'/admin'} className="nav-link">
							Admin Board
						</Link>
					</li>
				)}

				{currentUser && (
					<li className="nav-item">
						<Link to={'/user'} className="nav-link">
							User
						</Link>
					</li>
				)}
			</div>

			{currentUser ? (
				<div className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={'/profile'} className="nav-link">
							{currentUser.username}
						</Link>
					</li>
					<li className="nav-item">
						<a href="/login" className="nav-link" onClick={logOut}>
							LogOut
						</a>
					</li>
				</div>
			) : (
				<div className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={'/login'} className="nav-link">
							Login
						</Link>
					</li>

					<li className="nav-item">
						<Link to={'/register'} className="nav-link">
							Sign Up
						</Link>
					</li>
				</div>
			)}
		</nav>
	);
};

export default Header;
