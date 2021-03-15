import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, HoursWrapper } from './styles';

const Hours = ({ hours }) => {
  const { theme } = useContext(ThemeContext);

  console.log(JSON.stringify(hours));

  return (
    <Wrapper id="ordinacni-hodiny">
      <HoursWrapper as={Container}>
        <h2>Pondělí</h2>
        {hours.pondeli.value.map(blok => (
            <p>{blok.elements.zacatek.value} - {blok.elements.konec.value} ({blok.elements.poznamka.value})</p>
        ))}
        <h2>Úterý</h2>
        {hours.utery.value.map(blok => (
            <p>{blok.elements.zacatek.value} - {blok.elements.konec.value} ({blok.elements.poznamka.value})</p>
        ))}
        <h2>Středa</h2>
        {hours.streda.value.map(blok => (
            <p>{blok.elements.zacatek.value} - {blok.elements.konec.value} ({blok.elements.poznamka.value})</p>
        ))}
        <h2>Čtvrtek</h2>
        {hours.ctvrtek.value.map(blok => (
            <p>{blok.elements.zacatek.value} - {blok.elements.konec.value} ({blok.elements.poznamka.value})</p>
        ))}
        <h2>Pátek</h2>
        {hours.patek.value.map(blok => (
            <p>{blok.elements.zacatek.value} - {blok.elements.konec.value} ({blok.elements.poznamka.value})</p>
        ))}
      </HoursWrapper>
    </Wrapper>
  );
};

export default Hours;
