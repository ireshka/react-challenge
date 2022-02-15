import { BudgetService } from 'api';
import { useQuery } from 'react-query';

const getBudgets = BudgetService.findAll;

export const useBudgets = () => useQuery('budgets', getBudgets);
