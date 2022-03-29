import { LedgerService } from 'api';
import { BUDGET_QUERY, LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const addLedger = (requestBody) => LedgerService.create({ requestBody });

export const useAddLedger = () => {
  const queryClient = useQueryClient();

  return useMutation(addLedger, {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
      await queryClient.refetchQueries([SUMMARY_QUERY]);
      await queryClient.refetchQueries([BUDGET_QUERY]);
    },
  });
};
