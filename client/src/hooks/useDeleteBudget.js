import { BudgetService } from 'api';
import { useMutation, useQueryClient } from 'react-query';

const deleteBudget = (values) => BudgetService.remove({ ids: values });

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBudget, {
    onSuccess: () => {
      queryClient.invalidateQueries('budgets');
    },
  });
};
