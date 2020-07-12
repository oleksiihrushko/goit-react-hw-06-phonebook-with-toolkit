import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { id, name, number }, onRemoveContact }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        {name}: {number}
      </p>
      <button
        className={styles.listItemButton}
        onClick={onRemoveContact}
        type="button"
      >
        Удалить
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsActions.removeContact(ownProps.contact.id)),
});

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactItem);
