import { Grid } from '@mui/material';
import { ActionHeader, Card, Page } from 'ui';

export const BudgetPage = () => (
  <Page title="Budżet">
    <Card
      title={
        <ActionHeader variant="h1" title="Budżet" renderActions={() => null} />
      }
    >
      <Grid container>
        <Grid item xs={12} />
      </Grid>
    </Card>
  </Page>
);
