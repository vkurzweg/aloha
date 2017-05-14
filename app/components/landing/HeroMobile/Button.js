import styled from 'styled-components';

const Button = styled.button`
   font-family: 'Josefin Sans';
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 3px;
   display: block;
   margin: 0 auto;
   width: 50%;
   padding: 1.5%;
   color: #4BF1C3;
   border-radius: 5px;
   border: 3px solid #4BF1C3;
   margin-top: 3%;


  &:hover, &:active, &:focus {
    background-color: #FF80AB;
    color: #212121;
    border: none
    outline: 0;
 }
`;

export default Button;