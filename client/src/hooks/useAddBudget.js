import { BudgetService } from 'api';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const addBudget = (requestBody) => BudgetService.create({ requestBody });

export const useAddBudget = () => {
  const queryClient = useQueryClient();

  return useMutation(addBudget, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.refetchQueries([BUDGET_QUERY]),
        queryClient.refetchQueries([CATEGORIES_QUERY]),
      ]);
    },
  });
};
