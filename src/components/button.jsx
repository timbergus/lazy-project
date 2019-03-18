// @flow

import React from 'react';

import ButtonStyled from './button.styled';

type Props = {
  label: string,
  primary?: boolean,
  onClick: Function,
}

const Button = (props: Props) => {
  const { primary, label, onClick } = props;

  return (
    <ButtonStyled primary={primary} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  primary: false,
};

export default Button;
