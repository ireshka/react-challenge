import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { ActionHeader, Button, ButtonGroup, Card } from 'ui';

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
        // eslint-disable-next-line react/jsx-no-useless-fragment
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
  />
);
