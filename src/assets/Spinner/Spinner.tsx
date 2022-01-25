import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return <Spin></Spin>;
};

export default Spinner;

const Spin = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid rgba(36, 36, 36, 0.3);
  border-radius: 50%;
  border-top-color: #242424;

  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
