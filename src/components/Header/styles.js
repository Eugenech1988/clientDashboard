import {DRAWER_WIDTH} from '../../conf';

export const styles = theme => ({
  menuButton: {
    marginLeft: -12
  },
  header: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  grow: {
    flexGrow: 1
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});
