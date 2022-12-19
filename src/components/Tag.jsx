const Tag = ({ className, children }) => {
	return <span className={`tag ${className || ''}`}>{children}</span>;
};

export default Tag;
