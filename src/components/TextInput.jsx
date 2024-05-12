import PropTypes from "prop-types";

const TextInput = ({ type, name, placeholder, required, onInvalid, onInput, className, value, onChange }) => {
     return (
          <input type={type} name={name} placeholder={placeholder} required={required} onInvalid={onInvalid} onInput={onInput} className={className} value={value} onChange={onChange} />
     );
};

TextInput.propTypes = {
     type: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     placeholder: PropTypes.string.isRequired,
     required: PropTypes.bool,
     onInvalid: PropTypes.func,
     onInput: PropTypes.func,
     className: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
     onChange: PropTypes.func.isRequired,
};

export default TextInput;
