import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import Button from './Button';

const Modal = ({ title, children, closeModal }) => {
	return createPortal(
		<div className='modal-overlay'>
			<div className='modal-window'>
				<div className='header'>
					<h1>{title}</h1>
					<Button className='close' variant='icon' onClick={closeModal}>
						<FiX className='icon' />
					</Button>
				</div>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;