/** @format */

import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
const Route = ({ path, children }) => {
	const [curentPath, setCurrentPath] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', onLocationChange);
		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);
	return curentPath === path ? children : null;
};

export default Route;
