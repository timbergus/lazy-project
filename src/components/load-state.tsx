import React from 'react';
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadStateComponent = () => (
  <GridLoader
    css={override}
    sizeUnit="px"
    size={15}
    color="#0012BD"
    loading
  />
);

export const LoadStateClient = () => (
  <GridLoader
    css={override}
    sizeUnit="px"
    size={15}
    color="#BD0000"
    loading
  />
);
