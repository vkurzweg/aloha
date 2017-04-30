import styled from 'styled-components';

const Button = styled.button`
   font-family: 'Josefin Sans';
   text-transform: uppercase;
   letter-spacing: 3px;
   font-size: 22px;
   font-weight: bold;
   display: block;
   margin: 0 auto;
   width: 30%;
   padding: 1.5%;
   color: #FAFAFA;
   border: 3px solid #FAFAFA;


  &:hover, &:active, &:focus {
    background-color: #FFC233;
    color: #686E8E;
    border: none
    outline: 0;
 }
`;

export default Button;
