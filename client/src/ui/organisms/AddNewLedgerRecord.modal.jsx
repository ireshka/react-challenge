import * as PropTypes from 'prop-types';
import { Modal } from 'ui';

export const AddNewLedgerRecordModal = ({
  type,
  children,
  open,
  onClose,
  onSubmit,
}) => {
  const modalTitle = type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek';

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

AddNewLedgerRecordModal.propTypes = {
  type: PropTypes.oneOf(['INCOME', 'EXPENSE']),
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};
