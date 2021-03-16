import React from "react";
import { Container } from "components/common";
import { Wrapper, Details } from "./styles";

export const Contact = () => (
  <Wrapper as={Container} id="kontakt">
    <Details>
      <h1>Jak nás kontaktovat</h1>
      <ul>
        <li>
          E-mail na doktora:{" "}
          <a href="mailto:doktor%40kusakova.cz">doktor@kusakova.cz</a>
        </li>
        <li>
          E-mail na sestru:{" "}
          <a href="mailto:sestra%40kusakova.cz">sestra@kusakova.cz</a>
        </li>
        <li>Telefonní číslo: +420 732 492 723</li>
        <li>Skype na doktora: doktor008</li>
        <li>Skype na doktora: sestra008</li>
      </ul>
      <p>
        Preferovaným prostředkem je e-mail. Pokud potřebujete rychlejší
        komunikaci, pak můžete zvolit telefon nebo Skype.
      </p>
      <p>
        Tato online komunikace slouží pouze pro pacienty naší ordinace, případně
        pro ostatní seriózní zájemce o tuto komunikaci. Vždy však musí dojít k
        jednoznačné identifikaci (buď info přímo ve Skypu nebo řádné představení
        se). V opačném případě můžete být ignorováni.
      </p>
    </Details>
    <Details>
      <h1>Kde nás najdete</h1>
      <h2>Adresa</h2>
      <p>Vratimovská 650, 739 34 Václavovice</p>
      <a target="_blank" href="http://www.mapy.cz/s/l0Ea">
        <img
          src="http://1.im.cz/mapyp/img/usericon.gif"
          width="88"
          height="31"
          border="0"
          alt=""
          title="Mapy.cz: Najdete nás zde"
        />
      </a>
      <p>
        V blízkosti je zastávka autobusů městské hromadné dopravy (číslo 28).
        Zastávka se jmenuje Václavovice střed. Jedete-li autem, pak je pro Vás k
        dispozici 7 parkovacích míst (vjezd z ulice Kaštanová).
      </p>
    </Details>
  </Wrapper>
);
