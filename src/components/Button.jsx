const Button = props => {
	return (
		<button {...props} className='btn icon-btn'>
			{props.children}
		</button>
	);
};

export default Button;
