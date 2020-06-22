import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Colors, fontSizes } from "../../styles/variables"

export const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 50px;
`

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
`

export const LinkListItem = styled.li`
    display: flex;
    justify-content: center;
    width: 33%;
`

export const LinkListLink = styled(Link)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${Colors["white"]};
  font-size: ${fontSizes["sm"]};
  text-transform: uppercase;

  /* &:hover {
    background-color:  ${Colors["grey"]};
  } */

  @media (min-width: 576px) {
    padding: $guttermd;
    font-size: $md;
  }
`