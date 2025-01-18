import PropTypes from 'prop-types';
const Props = ({name, Message, Person,PhoneNumber }) => {
  return (
    <div>Hello Props{name} {Message} {PhoneNumber} {Person.name} {Person.Message} {Person.PhoneNumber}</div>
  )
}
Props.propTypes = {
  name: PropTypes.string.isRequired,
  Message: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
  Person: PropTypes.object.isRequired,
}

export default Props;