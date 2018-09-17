import React, { Component } from 'react';
import Routes from 'routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { styles } from './styles';

const mapStateToProps = state => ({
  isSidebarOpened: state.togglers.isSidebarOpened
});

@connect(mapStateToProps)
@withStyles(styles)
class App extends Component {
  render() {
    const { isSidebarOpened, classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <SideBar/>
        <div className={cx(classes.appFrame, isSidebarOpened && classes.shifted)}>
          <Routes/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  // from connect
  classes: PropTypes.string,
  isSidebarOpened: PropTypes.bool
};

export default App;
