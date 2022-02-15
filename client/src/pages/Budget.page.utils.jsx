import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, CategoryCell, LocalizedDate, Money } from 'ui';

export const DefineBudgetButton = (
  <Button startIcon={<AddRoundedIcon />} text={'Zdefiniuj budżet'} />
);

export const budgetHeadCells = [
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

export const getUniqueId = (row) => row.id;
