// @flow

import React from 'react';

import ButtonStyled from './button.styled';

type Props = {
  label: string,
  primary?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default ({ label, primary = false, onClick }: Props) => (
  <ButtonStyled primary={primary} onClick={onClick}>
    {label}
  </ButtonStyled>
);
