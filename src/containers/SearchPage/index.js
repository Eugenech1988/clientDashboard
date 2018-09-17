import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchSuggestForm from 'components/SearchSuggestForm';

@connect()
class SearchPage extends Component {

  render() {
    return (
      <SearchSuggestForm/>
    );
  }
}

SearchPage.propTypes = {};

export default SearchPage;
