import styled from 'styled-components';

const Button = styled.button`
   font-family: 'Josefin Sans';
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 3px;
   display: block;
   margin: 0 auto;
   width: 60%;
   padding: 3%;
   color: #FF80AB;
   border-radius: 5px;
   border: 3px solid #FF80AB;
   text-decoration: none;
   margin-top: -1%;
   font-size: 18px;

  &:hover, &:active, &:focus {
    background-color: #FF80AB;
    color: #212121;
    border: none
    outline: 0;
    text-decoration: none;
 }
`;

export default Button;
