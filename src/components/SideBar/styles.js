import {
  DRAWER_WIDTH
} from '../../conf';

export const styles = theme => ({
  sidebarPaper: {
    position: 'relative',
    width: DRAWER_WIDTH,
    minHeight: '100vh'
  },
  hide: {
    display: 'none'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});
