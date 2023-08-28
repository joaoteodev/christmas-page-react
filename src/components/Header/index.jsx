import { useState } from "react";
import { styled } from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { Container } from "../Container";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { MenuLink } from "../MenuItem";
import { themes } from "../../assets/styles/themes";
import { Button } from "../Button";

const HeaderTag = styled.header`
  background: ${props => props.theme.colors.background};
  padding: 1.75rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    button {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .headerMenu {
      position: absolute;
      display: none;
      right: 0;
      top: 0;
      z-index: -1;
      flex-direction: column;
      align-items: center;
      padding: 8rem 0 2rem;
      gap: 1rem;
      background: ${props => props.theme.colors.background};

      &.openMenu {
        display: flex;
      }

      li {
        padding: 1rem 3rem;
      }
    }
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderTag theme={themes}>
      <Container>
        <>
          <Logo onClick={handleMenu} />
          <Menu className={`headerMenu ${isOpen ? "openMenu" : ""}`}>
            <MenuLink>
              <Link onClick={handleMenu} href="#">
                Home
              </Link>
            </MenuLink>
            <MenuLink>
              <Link onClick={handleMenu} href="#accessories">
                Accessories
              </Link>
            </MenuLink>
            <MenuLink>
              <Link onClick={handleMenu} href="#donation">
                Donation
              </Link>
            </MenuLink>
            <MenuLink>
              <Link onClick={handleMenu} href="#contact">
                Contact
              </Link>
            </MenuLink>
          </Menu>

          <Button onClick={handleMenu} width={5} height={5} fontSize={3}>
            {isOpen ? <IoClose /> : <HiOutlineMenu />}
          </Button>
        </>
      </Container>
    </HeaderTag>
  );
};
