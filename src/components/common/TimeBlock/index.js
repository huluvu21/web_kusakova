import React from "react";

export const TimeBlock = ({ name, blocks }) => {
  return (
    <>
      <h2>{name}</h2>
      {blocks.map((blok) => {
        const isHoursWithNote =
          blok.elements.zacatek.value && blok.elements.poznamka.value;
        const isHoursOnly =
          blok.elements.zacatek.value && !!!blok.elements.poznamka.value;
        const isNoteOnly =
          !!!blok.elements.zacatek.value && blok.elements.poznamka.value;
        return (
          <p>
            {isHoursWithNote && (
              <span>
                {blok.elements.zacatek.value} - {blok.elements.konec.value} (
                {blok.elements.poznamka.value})
              </span>
            )}
            {isHoursOnly && (
              <span>
                {blok.elements.zacatek.value} - {blok.elements.konec.value}
              </span>
            )}
            {isNoteOnly && <span>{blok.elements.poznamka.value}</span>}
          </p>
        );
      })}
    </>
  );
};
