import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: ${props => (props.size ? props.size + "rem" : "1.6rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
  color: #161212;
`;
