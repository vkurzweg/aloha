import styled from 'styled-components';

const Btn = styled.h4`
  text-align: center;
  color: #7C4DFF;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 2%;
  border: 1px solid #7C4DFF;
  padding: 2%;
  width: 15em;
  display: block;
  margin: 0 auto;
  border-radius: 2px;

   &:hover, &:active, &:focus {
     background-color: #7C4DFF;
     color: #ECECEC;
     border: none;
     outline: 0;
  }

`;

export default Btn;
