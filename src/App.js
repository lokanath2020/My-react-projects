/** @format */

import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';
const items = [
	{
		title: 'What is React',
		content: 'React is a frontend framework',
	},
	{
		title: 'what is Node.js',
		content: 'node is a server side language written in javascript',
	},
	{
		title: 'what is express',
		content: 'Express is a node library',
	},
];
const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A Shade of Blue',
		value: 'blue',
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);
	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					label='Select a color'
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};
