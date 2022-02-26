import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Grid } from '@mui/material';
import { ActionHeader, Button, ButtonGroup, Card, LedgerTableWidget } from 'ui';

const PayInButton = (
  <Button text={'Wpłać'} variant={'outlined'} startIcon={<AddRoundedIcon />} />
);

const PayOutButton = (
  <Button
    text={'Wypłać'}
    variant={'outlined'}
    startIcon={<RemoveRoundedIcon />}
  />
);

export const LedgerWidget = () => (
  <Card
    title={
      <ActionHeader
        variant={'h1'}
        title="Portfel"
        renderActions={() => (
          <ButtonGroup>
            <>
              {PayInButton}
              {PayOutButton}
            </>
          </ButtonGroup>
        )}
      />
    }
  >
    <Grid container>
      <Grid item xs={12}>
        <LedgerTableWidget />
      </Grid>
    </Grid>
  </Card>
);
