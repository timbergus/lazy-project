import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

export default styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
`;
