import styled from'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaTicketAlt} from 'react-icons/fa';
 
export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
list-style-type: none;
  margin: 0;
  padding: 0;

`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-item: center;
text-decoration: none;
cursor: pointer;


@media screen and (max-width: 480px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;



p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`;

 export const Bars = styled(FaTicketAlt)`
 font-size: 2rem;
transform: translate(-50%, -15%);

 `;
