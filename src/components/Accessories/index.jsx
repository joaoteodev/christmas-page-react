import { styled } from "styled-components";
import { Container } from "../Container";
import { AccessoryItem } from "../AccessoryItem";

import { themes } from "../../assets/styles/themes";

import { allAccessories } from "../../assets/images/accessories";
import { Title } from "../Title";

const AccessoriesWrapper = styled.section`
  padding: 10rem 0;
  text-align: center;
  background: ${themes.colors.lightBackground};

  p {
    color: ${themes.colors.text};
    font-family: Poppins;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .accessoriesList {
    display: grid;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 4rem;
    gap: 5rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Accessories = () => {
  return (
    <AccessoriesWrapper id="accessories">
      <Container>
        <>
          <Title>Accessories</Title>
          <p>
            This year-end festivities, send a gift to your loved one and share
            the joy of Christmas.
          </p>
          <div className="accessoriesList">
            {allAccessories.map(accessory => (
              <AccessoryItem key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </>
      </Container>
    </AccessoriesWrapper>
  );
};
