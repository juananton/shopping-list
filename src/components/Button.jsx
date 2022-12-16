const BTN_VARIANTS = {
	text: 'btn-text',
	icon: 'btn-icon'
};
const BTN_USES = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	nobg: 'btn-nobg',
	disabled: 'disabled'
};

const Button = ({
	variant = 'text',
	use = 'secondary',
	className,
	children,
	...props
}) => {
	const btnVariant = BTN_VARIANTS[variant];
	const btnUse = BTN_USES[use];

	return (
		<button
			{...props}
			className={`btn ${btnVariant} ${btnUse} ${className} || ''`}
		>
			{children}
		</button>
	);
};

export default Button;
