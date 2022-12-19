import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Select = ({ label, children, ...props }) => {
	return (
		<label className='select'>
			<span className='label'>{label}</span>
			<div className='wrapper'>
				<select {...props} className='select'>
					{children}
				</select>
				<FiChevronDown className='icon' />
			</div>
		</label>
	);
};

export default Select;
