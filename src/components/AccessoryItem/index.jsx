import PropTypes from "prop-types";
import { styled } from "styled-components";

import { themes } from "../../assets/styles/themes";

const AccessoryStyle = styled.div`
  h3 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 0.6rem;
  }

  p {
    color: ${themes.colors.lightText};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const AccessoryItem = ({ accessory }) => {
  return (
    <AccessoryStyle>
      <img src={accessory.image} alt={accessory.name} />
      <h3>{accessory.name}</h3>
      <p>{accessory.description}</p>
    </AccessoryStyle>
  );
};

AccessoryItem.propTypes = {
  accessory: PropTypes.object
};
