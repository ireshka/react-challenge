import { Grid } from '@mui/material';
import { useBudgets, useDeleteBudget } from 'hooks';
import { ActionHeader, Card, Error, Loader, NoContent, Page, Table } from 'ui';

import {
  budgetHeadCells,
  DefineBudgetButton,
  getUniqueId,
} from './Budget.page.utils';

export const BudgetPage = () => {
  const { isLoading, isError, data } = useBudgets();

  const deleteBudget = useDeleteBudget();

  const deleteRecords = (recordIds) => {
    deleteBudget.mutate(recordIds);
  };

  return (
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
            {isLoading && <Loader />}
            {isError && <Error />}
            {data && data.length > 0 && (
              <Table
                rows={data}
                headCells={budgetHeadCells}
                getUniqueId={getUniqueId}
                deleteRecords={deleteRecords}
              />
            )}
            {data && data.length === 0 && !isLoading && !isError && (
              <NoContent />
            )}
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
