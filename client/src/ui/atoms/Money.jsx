import { formatCentsToDollars } from 'utils';

export const Money = ({ inCents }) => <>{formatCentsToDollars(inCents)} PLN</>;
