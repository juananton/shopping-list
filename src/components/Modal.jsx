import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import Button from './Button';

const Modal = ({ formTitle, children, closeModal, formId }) => {
	if (!children) return null;

	return createPortal(
		<div className='modal-overlay'>
			<div className='modal-window'>
				<div className='modal-window-header'>
					<h1>{`${formTitle} ítem`}</h1>
					<Button
						className='close'
						variant='icon'
						use='nobg'
						onClick={closeModal}
					>
						<FiX className='icon' />
					</Button>
				</div>
				{children}
				<div className='modal-window-footer'>
					<Button type='button' onClick={closeModal}>
						Cancelar
					</Button>
					<Button type='submit' use='primary' form={formId}>
						{formTitle}
					</Button>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
