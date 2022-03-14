import * as PropTypes from 'prop-types';
import { Modal } from 'ui';

export const AddNewBudgetRecordModal = ({
  children,
  open,
  onClose,
  onSubmit,
}) => {
  const modalTitle = 'Zdefiniuj budżet';

  return (
    <Modal
      title={modalTitle}
      open={open}
      onClose={onClose}
      onSubmit={onSubmit || onClose}
    >
      {children}
    </Modal>
  );
};

AddNewBudgetRecordModal.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};
