import { styled } from "styled-components";

export const Button = styled.button`
  width: ${props => (props.width ? props.width + "rem" : "auto")};
  height: ${props => (props.height ? props.height + "rem" : "auto")};
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 2rem;
  font-size: ${props => (props.fontSize ? props.fontSize : 1.6)}rem;
  background: ${props => (props.background ? props.background : "none")};
  z-index: 5;
  color: ${props => (props.color ? props.color : "inherit")};
  border: none;
  outline: none;
  cursor: pointer;
`;
