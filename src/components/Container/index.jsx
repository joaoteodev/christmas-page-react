import PropTypes from "prop-types";
import { styled } from "styled-components";

const ContainerTag = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Container = ({ children }) => {
  return <ContainerTag className="container">{children}</ContainerTag>;
};

Container.propTypes = {
  children: PropTypes.element
};
