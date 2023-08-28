import { styled } from "styled-components";

import { Title } from "../Title";
import { DonationButton } from "../DonationButton";

import celebrateImg from "../../assets/images/shared.svg";
import { themes } from "../../assets/styles/themes";
import { Container } from "../Container";

const CelebrateWrapper = styled.section`
  background: ${themes.colors.background};
  padding: 10rem 0;

  img {
    max-width: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 22rem;

    div {
      width: clamp(1rem, 48rem, 100%);
    }
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 5rem;
      text-align: center;

      button {
        margin: 4rem auto 0;
      }
      /* 
      div {
        width: 100%;
      } */
    }
  }
`;

export const Celebrate = () => {
  return (
    <CelebrateWrapper id="donation">
      <Container>
        <>
          <img src={celebrateImg} alt="Celebrate!" />
          <div>
            <Title>Celebrate with much love!</Title>
            <p>
              On these holidays, celebrate with lots of love and peace, offering
              many blessings to our loved ones, friends and neighbors, wishing
              them Merry Christmas.
            </p>
            <DonationButton>Donate</DonationButton>
          </div>
        </>
      </Container>
    </CelebrateWrapper>
  );
};
