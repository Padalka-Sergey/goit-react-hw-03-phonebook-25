import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputFilter = styled.input`
  margin-top: 10px;
  width: 200px;
  &:focus-visible {
    outline-offset: 0;
  }
  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;
