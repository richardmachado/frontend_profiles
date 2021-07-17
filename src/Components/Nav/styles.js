import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavStyles = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  box-shadow: 10px 5px 5px grey;
`;

export const Links = styled.li`
  list-style-type: none;
  margin-left: 20px;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
`;
