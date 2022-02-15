import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Grid } from '@mui/material';
import { BudgetService } from 'api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  ActionHeader,
  Button,
  Card,
  CategoryCell,
  Error,
  Loader,
  LocalizedDate,
  Money,
  NoContent,
  Page,
  Table,
} from 'ui';

const DefineBudgetButton = (
  <Button startIcon={<AddRoundedIcon />} text={'Zdefiniuj budżet'} />
);

const budgetHeadCells = [
  {
    id: 'category-name',
    label: 'Nazwa',
    renderCell: (row) => (
      <CategoryCell color={row.category.color} name={row.category.name} />
    ),
  },
  {
    id: 'planned-amount',
    label: 'Planowane wydatki',
    renderCell: (row) => <Money inCents={row.amountInCents} />,
  },
  {
    id: 'current-amount',
    label: 'Obecna kwota',
    renderCell: (row) => <Money inCents={row.currentSpending} />,
  },
  {
    id: 'status',
    label: 'Status',
    renderCell: (row) => {
      const status = row.amountInCents - row.currentSpending;
      // eslint-disable-next-line no-nested-ternary
      return status < 0
        ? 'Przekroczone'
        : status > 0
        ? 'W normie'
        : 'Wykorzystany';
    },
  },
  {
    id: 'creation-date',
    label: 'Data utworzenia',
    renderCell: (row) => <LocalizedDate date={row.createdAt} />,
  },
];

const getUniqueId = (row) => row.id;

export const BudgetPage = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(
    'budgets',
    BudgetService.findAll,
  );

  const removeBudget = useMutation(
    (values) => {
      BudgetService.remove({ ids: values });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('budgets');
      },
    },
  );

  const deleteRecords = (recordIds) => {
    removeBudget.mutate(recordIds);
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
