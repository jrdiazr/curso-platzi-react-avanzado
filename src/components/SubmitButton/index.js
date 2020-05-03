import React from "react";
import { Button } from "./styles";
import Proptypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: Proptypes.bool,
  onClick: Proptypes.func,
  children: Proptypes.node.isRequired,
};
