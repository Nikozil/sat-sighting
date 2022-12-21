import React from 'react';
import styled from 'styled-components';

const Spinner: React.FC<PropTypes> = ({ size }) => {
  return <Spin theme={{ size }}></Spin>;
};

export default Spinner;

const Spin = styled.div`
  display: inline-block;
  width: ${(props) => (props.theme.size ? `${props.theme.size}px` : '1.5em')};
  height: ${(props) => (props.theme.size ? `${props.theme.size}px` : '1.5em')};
  border: ${(props) =>
      props.theme.size ? `${props.theme.size / 10}px` : '0.2em'}
    solid rgba(36, 36, 36, 0.3);
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

interface PropTypes {
  size?: number;
}
