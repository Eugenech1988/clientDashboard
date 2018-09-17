import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames';

import { styles } from './styles';
import { toggleSideBar } from 'actions/togglers';

const mapStateToProps = state => ({
  isSidebarOpened: state.togglers.isSidebarOpened
});

const mapDispatchToProps = dispatch => ({
  toggleSideBar: () => dispatch(toggleSideBar())
});

@connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles, {withTheme: true})
class Header extends Component {
  handleBurgerClick() {
    const { toggleSideBar } = this.props;
    toggleSideBar();
  };

  render() {
    const { isSidebarOpened, classes } = this.props;
    return (
      <AppBar
        className={cx(classes.appBar, {
          [classes.appBarShift]: isSidebarOpened
        })}>
        <Toolbar>
          <IconButton
            className={cx(classes.menuButton, isSidebarOpened && classes.hide)}
            color='inherit'
            aria-label='open-drawer'
            onClick={::this.handleBurgerClick}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  //own props
  classes: PropTypes.object,
  theme: PropTypes.string,
  //from connect
  toggleSideBar: PropTypes.func,
  isSidebarOpened: PropTypes.bool
};

export default Header;
