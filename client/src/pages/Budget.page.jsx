import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Grid } from '@mui/material';
import * as React from 'react';
import {
  ActionHeader,
  AddNewBudgetRecordModal,
  BudgetTableWidget,
  Button,
  Card,
  Page,
} from 'ui';

export const BudgetPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DefineBudgetButton = (
    <Button
      startIcon={<AddRoundedIcon />}
      text={'Zdefiniuj budżet'}
      onClick={handleClickOpen}
    />
  );
  return (
    <>
      <Page title="Budżet">
        <Card
          title={
            <ActionHeader
              variant="h1"
              title="Budżet"
              renderActions={() => DefineBudgetButton}
            />
          }
        >
          <Grid container>
            <Grid item xs={12}>
              <BudgetTableWidget />
            </Grid>
          </Grid>
        </Card>
      </Page>
      <AddNewBudgetRecordModal open={open} onClose={handleClose} />
    </>
  );
};
