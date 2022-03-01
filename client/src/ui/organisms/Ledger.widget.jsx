import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Grid } from '@mui/material';
import * as React from 'react';
import { ActionHeader, Button, ButtonGroup, Card, LedgerTableWidget } from 'ui';

import { AddNewLedgerRecordModal } from './AddNewLedgerRecord.modal';

export const LedgerWidget = () => {
  // TODO: Create hook
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);

  const handleClickOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalType(null);
  };

  const PayInButton = (
    <Button
      text={'Wpłać'}
      variant={'outlined'}
      startIcon={<AddRoundedIcon />}
      onClick={() => handleClickOpen('INCOME')}
    />
  );

  const PayOutButton = (
    <Button
      text={'Wypłać'}
      variant={'outlined'}
      startIcon={<RemoveRoundedIcon />}
      onClick={() => handleClickOpen('EXPENSE')}
    />
  );

  return (
    <>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => (
              <ButtonGroup>
                <>
                  {PayInButton}
                  {PayOutButton}
                </>
              </ButtonGroup>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <LedgerTableWidget />
          </Grid>
        </Grid>
      </Card>
      <AddNewLedgerRecordModal
        open={open}
        onClose={handleClose}
        type={modalType}
      />
    </>
  );
};
