import { LedgerService } from 'api';
import { LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const deleteLedger = (values) => LedgerService.remove({ ids: values });

export const useDeleteLedger = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteLedger, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(LEDGER_QUERY);
      await queryClient.invalidateQueries(SUMMARY_QUERY);
    },
  });
};
