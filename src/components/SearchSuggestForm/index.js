import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import IconSearch from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { searchKeywords } from 'actions/searching';
import { validate } from './validate';
import { styles } from './style';

const mapDispatchToProps = dispatch => ({
  searchKeywords: data => dispatch(searchKeywords(data))
});

@connect(null, mapDispatchToProps)
@withStyles(styles)
@reduxForm({ form: 'suggestForm', validate })
class SearchSuggestForm extends Component {
  handleSubmit = values => {
    const { searchKeywords } = this.props;
    console.log(values);
    searchKeywords(values);
  };

  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <Form
        onSubmit={handleSubmit(this.handleSubmit)}
        className={classes.searchForm}>
        <Field
          component={TextField}
          name='keyword'
          label='Search Keywords'
          className={classes.inputKeyword}
        />
        <Field
          component={TextField}
          name='url'
          label='Website Url'
          className={classes.inputUrl}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
        >
          <IconSearch
          />
          Search
        </Button>
      </Form>
    );
  }
}

SearchSuggestForm.propTypes = {
  // own props
  handleSubmit: PropTypes.func
};

export default SearchSuggestForm;
