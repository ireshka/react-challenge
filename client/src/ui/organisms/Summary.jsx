import { Box, Paper, Stack, Typography } from '@mui/material';
import { useSummary } from 'hooks';
import { Doughnut, Loader, Money } from 'ui';

const Summary = () => {
  const { data, isLoading } = useSummary();
  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <Paper sx={{ p: 5, borderRadius: 2 }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography component={'h4'}>Saldo</Typography>
            </Box>
            <Box>
              <Typography component={'h3'}>
                <Money inCents={data.balance} />
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ marginBottom: '45px' }}>
            <Typography variant={'subtitle1'}>Pozostała kwota</Typography>
          </Box>
          <Doughnut data={data} />
        </Paper>
      )}
    </>
  );
};

export { Summary };
