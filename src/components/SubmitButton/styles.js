import styled from 'styled-components';

export const Button = styled.button`
  background: #2a2af3;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;