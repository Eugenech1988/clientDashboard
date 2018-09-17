import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { mainListItems } from 'components/ListItems';
import { toggleSideBar } from 'actions/togglers';
import { styles } from './styles';

const mapStateToProps = state => ({
  isSidebarOpened: state.togglers.isSidebarOpened
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar())
});

@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles, { withTheme: true })
class SideBar extends Component {
  handleCloseDrawerClick = () => {
    const { toggleSideBar } = this.props;
    toggleSideBar();
  };

  render() {
    const { isSidebarOpened, classes } = this.props;
    return (
      <Drawer
        variant='persistent'
        open={isSidebarOpened}
        classes={{
          paper: classes.sidebarPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleCloseDrawerClick}>
            <ChevronRightIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          {mainListItems}
        </List>
      </Drawer>
    );
  }
}

SideBar.propTypes = {
  // own props
  classes: PropTypes.object,
  theme: PropTypes.string,
  // from connect
  isSidebarOpened: PropTypes.bool,
  toggleSideBar: PropTypes.func
};

export default SideBar;
