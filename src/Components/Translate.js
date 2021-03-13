/** @format */

import React, { useState } from 'react';
import Dropdown from './Dropdown';
// google translate API key - AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import Convert from './Convert';
const options = [
	{
		label: 'Afrikaans',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
	{
		label: 'Dutch',
		value: 'nl',
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');
	return (
		<div>
			<div className='ui fomr'>
				<div className='fields'>
					<label>Enter Text</label>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<div>adding changes to see how to use the git reset</div>
				</div>
			</div>
			<Dropdown
				label='Select a language'
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
			/>
			<hr />
			<h3 className='ui header'>
				<Convert language={language} text={text} />
			</h3>
		</div>
	);
};
export default Translate;
