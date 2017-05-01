import styled from 'styled-components';

const Button = styled.button`
   font-family: 'Josefin Sans';
   font-size: 22px;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 3px;
   display: block;
   margin: 0 auto;
   width: 30%;
   padding: 1.5%;
   color: #FFC233;
   border: 3px solid #FFC233;


  &:hover, &:active, &:focus {
    background-color: #FF80AB;
    color: #686E8E;
    border: none
    outline: 0;
 }
`;

export default Button;
