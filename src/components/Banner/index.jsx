import { styled } from "styled-components";

import { Container } from "../Container";
import { themes } from "../../assets/styles/themes";
import { DonationButton } from "../DonationButton";
import bannerImage from "../../assets/images/banner.svg";

const BannerWrapper = styled.div`
  padding: 8rem 0 14rem;
  background: ${props => props.theme.colors.background};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }

  .bannerContent {
    width: 46rem;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 1130px) {
    img {
      width: 50%;
    }
  }

  @media (max-width: 991px) {
    .container {
      flex-direction: column;
      align-items: center;
      gap: 6rem;

      .bannerContent {
        width: 100%;
        text-align: center;
      }
    }

    img {
      width: 70%;
    }
  }
`;

export const Banner = () => {
  const handleClick = () => {
    const { location } = window;
    location.href = location.origin + "/#donation";
  };

  return (
    <BannerWrapper theme={themes}>
      <Container>
        <>
          <div className="bannerContent">
            <h1>Merry Christmas and Happy New Year!</h1>
            <p>
              We are happy to welcome you to our website. We hope you enjoyed
              our website and hope you have a great day!
            </p>
            <DonationButton onClick={handleClick}>
              Make a donation
            </DonationButton>
          </div>
          <img src={bannerImage} alt="banner" />
        </>
      </Container>
    </BannerWrapper>
  );
};
