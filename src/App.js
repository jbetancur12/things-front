import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout/Layout';
import MainRouter from './MainRouter';

const App = () => {
	return (
		<Layout>
			<MainRouter />
		</Layout>
	);
};

export default App;
