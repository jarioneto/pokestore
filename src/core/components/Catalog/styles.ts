import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 40px;
  }
`;
