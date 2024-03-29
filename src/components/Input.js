import Styled from 'styled-components';

export default function Input({ type, placeholder }) {
    return <StyledInput type={type} placeholder={placeholder} />;
  }
const StyledInput= Styled.input`

    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.39);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b19cd9;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
      }
    &::placeholder {
        color: #666666;
        font-weight: 300;
        font-size: 1rem;
        opacity: 0.5;
      }  

`;

