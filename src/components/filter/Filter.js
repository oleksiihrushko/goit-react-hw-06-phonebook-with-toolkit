import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <form>
    <label>
      Find contacts by name
      <br />
      <input
        style={{ borderRadius: 4 }}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </label>
  </form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
