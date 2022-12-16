import React from 'react';

const Input = ({ label, ...props }) => {
	return (
		<label>
			<div className='label'>{label}</div>
			<input {...props} type='text' className='input' />
		</label>
	);
};

export default Input;
