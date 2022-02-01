import { Button as MuiButton } from '@mui/material';
import * as PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => (
  <MuiButton {...props}>{children}</MuiButton>
);

Button.propTypes = {
  children: PropTypes.node,
};
