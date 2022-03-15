import { Box, MenuItem, Stack } from '@mui/material';
import { formInputs } from 'data';
import { useCategories } from 'hooks';
import * as PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CategoryCell, Input, Modal } from 'ui';
import { Select } from 'ui/atoms/Select';

const defaultValues = {
  nameValue: '',
  amountValue: '',
  categoryValue: '',
};

const generateSelectCategories = (categoryList) => {
  categoryList.sort((categoryA, categoryB) => categoryA.id - categoryB.id);
  return categoryList.map((category) => (
    <MenuItem value={category.id} key={category.id}>
      <CategoryCell name={category.name} color={category.color} />
    </MenuItem>
  ));
};

export const AddNewLedgerRecordModal = ({ type, open, onClose }) => {
  const { data: categoriesList } = useCategories({ unlinkedToBudget: false });
  const modalTitle = type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek';
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues,
    mode: 'all',
  });

  const onSubmit = () => {
    reset(defaultValues);
    onClose();
  };

  const handleClose = () => {
    reset(defaultValues);
    onClose();
  };

  return (
    <Modal
      title={modalTitle}
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      canSubmit={formState.isValid}
    >
      <Box component={'form'} autoComplete={'off'} noValidate>
        <Stack direction={'column'} spacing={4}>
          <Input
            elementName={formInputs.name.elementName}
            control={control}
            label={formInputs.name.label}
            validationRules={formInputs.name.validationRules}
            type={'text'}
          />
          <Input
            elementName={formInputs.amount.elementName}
            control={control}
            label={formInputs.amount.label}
            validationRules={formInputs.amount.validationRules}
            type={'number'}
          />
          {type === 'EXPENSE' && (
            <Select
              elementName={formInputs.category.elementName}
              control={control}
              label={formInputs.category.label}
              labelId={formInputs.category.labelId}
              menuItems={generateSelectCategories(categoriesList)}
              validationRules={formInputs.category.validationRules}
            />
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

AddNewLedgerRecordModal.propTypes = {
  type: PropTypes.oneOf(['INCOME', 'EXPENSE']),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
