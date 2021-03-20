import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Details } from "./styles";

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Zdravotnické zařízení Kusákovi</h2>
        <span>
          © Všechna práva vyhrazena | {new Date().getFullYear()} | S{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          vyrobil{" "}
          <a
            href="https://github.com/huluvu21"
            rel="noopener noreferrer"
            target="_blank"
          >
            huluvu21
          </a>
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
