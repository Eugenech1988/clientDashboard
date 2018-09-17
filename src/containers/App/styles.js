export const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingTop: 64,
    marginLeft: -240,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  shifted: {
    marginLeft: 0,

  }
});
