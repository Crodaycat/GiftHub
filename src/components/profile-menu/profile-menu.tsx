import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';

import { useAuth0 } from '../../react-auth0-spa';

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const auth0Context = useAuth0();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <div>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </div>
  );

  const renderButtons = (
    <ButtonGroup
      variant='text'
      color='inherit'
      aria-label='text primary button group'
    >
      <Button
        onClick={() => {
          if (auth0Context) {
            auth0Context.loginWithRedirect();
          }
        }}
      >
        Login
      </Button>
      <Button>Sign in</Button>
    </ButtonGroup>
  );

  return auth0Context && auth0Context.isAuthenticated
    ? renderMenu
    : renderButtons;
}
