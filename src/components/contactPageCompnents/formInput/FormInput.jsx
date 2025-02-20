import React from "react";
import { Form } from "react-bootstrap";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { FeedBack, Input } from "./formInput.styles";

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  isInvalid,
  error,
}) => (
  <Form.Group className="mb-3">
    <Form.Label>
      <SecondaryText>{label}</SecondaryText>
    </Form.Label>
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      isInvalid={isInvalid}
    />
    {isInvalid && <FeedBack>{error}</FeedBack>}
  </Form.Group>
);
export default FormInput;
