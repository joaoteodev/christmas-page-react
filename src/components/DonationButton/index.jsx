import { TbGift } from "react-icons/tb";
import { themes } from "../../assets/styles/themes";
import { Button } from "../Button";
import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 4rem;
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease-in-out;
  gap: 1rem;

  svg {
    font-size: 2.4rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    transform: scale(1.03);
  }

  @media (max-width: 991px) {
    margin: 4rem auto 0;
  }
`;

export const DonationButton = ({ children, onClick }) => {
  return (
    <StyledButton
      background={themes.colors.icon}
      color="#fff"
      onClick={onClick}
    >
      <TbGift></TbGift>
      {children}
    </StyledButton>
  );
};

DonationButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};
