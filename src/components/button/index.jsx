import React from 'react';
import { Button as BaseButton } from 'react-bootstrap';

export const Button = ({ ...rest }) => {
  return <BaseButton {...rest} />;
};
