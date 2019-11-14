import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import MaterialUITextField from "@material-ui/core/TextField";

export class TextField extends React.PureComponent {
  render() {
    let {
      error,
      id,
      required,
      label,
      value,
      onChange,
      type,
      disabled,
      margin
    } = this.props;

    error = error || "";

    if (!type) {
      type = "text";
    }

    return (
      <FormGroup>
        <MaterialUITextField
          required={required}
          error={error.length > 0}
          id={id}
          disabled={disabled}
          label={label}
          margin={margin}
          type={type}
          value={value ? value : ""}
          onChange={onChange}
        />
        {error.length > 0 && <Typography color="error">{error}</Typography>}
      </FormGroup>
    );
  }
}

TextField.defaultProps = {
  margin: "normal"
};

TextField.propTypes = {
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default TextField;
