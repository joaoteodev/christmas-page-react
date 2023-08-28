import { styled } from "styled-components";

import { Logo } from "../Logo";
import { Container } from "../Container";
import { Link } from "../Link";
import { themes } from "../../assets/styles/themes";
import { Twitter, YouTube, LinkedIn, Instagram, Facebook } from "../Icons";

const FooterWrapper = styled.footer`
  padding: 4.5rem 0;
  background: ${themes.colors.lightBackground};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4.3rem;

    a {
      background: ${themes.colors.background};
      padding: 1rem;
      border-radius: 50%;
    }

    svg {
      stroke: ${themes.colors.icon};
      font-size: 2.4rem;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    .social {
      gap: 1rem;
      width: 100%;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <Container>
        <>
          <Logo />
          <div className="social">
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <YouTube />
            </Link>
            <Link href="#">
              <LinkedIn />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
          </div>
        </>
      </Container>
    </FooterWrapper>
  );
};
