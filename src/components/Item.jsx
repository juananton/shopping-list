import { FiMinus, FiPlus } from 'react-icons/fi';
import Button from './Button';

const Item = ({ name, units, days }) => {
	return (
		<div className='item'>
			<div className='wrapper'>
				<h2 className='name'>{name}</h2>
				<span className='days'>{`${days} días`}</span>
			</div>
			<div className='units-controller'>
				<span className='units'>{`${units}`}</span>
				<Button>
					<FiMinus className='icon' />
				</Button>
				<Button>
					<FiPlus className='icon' />
				</Button>
			</div>
		</div>
	);
};

export default Item;
