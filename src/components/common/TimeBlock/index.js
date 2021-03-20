import React from "react";

export const TimeBlock = ({ name, blocks }) => {
  return (
    <>
      <h2>{name}</h2>
      {blocks.map((blok) => (
        <p>
          {blok.elements.zacatek.value} - {blok.elements.konec.value}
          {blok.elements.poznamka.value && (
            <span> ({blok.elements.poznamka.value})</span>
          )}
        </p>
      ))}
    </>
  );
};
