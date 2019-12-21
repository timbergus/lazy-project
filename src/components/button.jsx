// @flow

import React from 'react';

import ButtonStyled from './button.styled';

type Props = {
  label: string,
  primary: boolean,
  onClick: Function,
}

export default ({ label, primary = false, onClick }: Props) => (
  <ButtonStyled primary={primary} onClick={onClick}>
    {label}
  </ButtonStyled>
);
