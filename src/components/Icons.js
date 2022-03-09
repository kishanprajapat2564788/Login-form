import Styled from "styled-components";
import React from 'react'

export default function Icons({color , children}) {
  return (
    <StyledIcons background={color}>{children}</StyledIcons>
  )
}
const StyledIcons = Styled.div`
    height: 3.5rem;
    width: 3.5rem;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
    width: 1.5rem;
    height: 1.5rem;
    }
`;
