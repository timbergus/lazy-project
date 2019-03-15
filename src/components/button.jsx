// @flow

import React, { Component } from 'react';

import ButtonStyled from './button.styled.js';

type Props = {
  label: string,
  primary: boolean,
}

export default class Button extends Component<Props> {
  defaultProps = {
    label: 'Push me!',
    primary: false,
  }

  handleClick() {
    console.log('Click!');
  }

  render() {
    return (
      <ButtonStyled primary={this.props.primary} onClick={this.handleClick}>
        {this.props.label}
      </ButtonStyled>
    );
  }
}
