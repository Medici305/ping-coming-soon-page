import React from "react";
import styled from "styled-components";
import { Container } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import dashboard from "../images/illustration-dashboard.png";

const Bottom = () => {
  return (
    <ContainerX>
      {/* 1. Large Image */}
      <img src={dashboard} alt="dashboard" />
      {/* 2. Socials */}
      <Socials>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </Socials>
          {/* 3. Footer */}
          <h5>	&#169;Copyright Ping. All rights reserved</h5>
    </ContainerX>
  );
};

const ContainerX = styled(Container)`
  min-height: 60vh;
  background: blue;
  img {
    max-width: 50%;
    height: auto;
  }
`;

const Socials = styled.div``;

export default Bottom;
