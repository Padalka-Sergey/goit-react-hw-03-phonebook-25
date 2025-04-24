import PropTypes from 'prop-types';
import { NameBox, Button } from './ContactListItem.styled';

export const ContactListItem = ({ deleteContact, filterNames }) => {
  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </li>
  ));
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filterNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
