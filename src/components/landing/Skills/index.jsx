import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import { Wrapper, SkillsWrapper, Details } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="o-nas">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>Náš tým</h1>
          <p>
            <strong>MUDr. Kusáková Dagmar</strong> - dlouholetá praxe v interní
            a praktické medicíně
          </p>
          <p>
            <strong>Pastrňáková Lenka</strong> - dlouholetá praxe v interní,
            praktické medicíně a ošetřovatelství
          </p>
        </Details>
        <Details theme={theme}>
          <h1>Profil</h1>
          <p>
            Náš zdravotnický tým klade důraz na systematické sledování a
            komplexní preventivní péči, která vede ke zdárným výsledkům v mnoha
            oblastech. K péči je přistupováno holistickým způsobem s použitím
            komplementárních léčebných prostředků.
          </p>

          <h2>Poskytované služby v rámci všeobecného zdravotního pojištění</h2>
          <ul>
            <li>vyšetření EKG</li>
            <li>odběry krve a biologického materiálu v ordinaci i doma</li>
            <li>okamžité vyšetření glukózy glukometrem</li>
            <li>převazy ran moderními technologiemi</li>
          </ul>

          <h2>
            Poskytované služby mimo rámec všeobecného zdravotního pojištění
          </h2>
          <ul>
            <li>termoregulační medicína a světloterapie</li>
            <li>fyziologická regulační medicína</li>
            <li>terapie nízkých dávek</li>
          </ul>

          <h2>Výkony za přímou úhradu</h2>
          <ul>
            <li>vyšetření a zprávy pro vlastní potřebu</li>
            <li>veškeré služby mimo rámec všeobecného zdravotního pojištění</li>
          </ul>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
