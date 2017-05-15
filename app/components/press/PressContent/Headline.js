import styled from 'styled-components';

const Headline = styled.h4`
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1%;
  text-align: center;

   &:hover, &:active, &:focus {
     color: #FF80AB;
  }
`;

export default Headline;