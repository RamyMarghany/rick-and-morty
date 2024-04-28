import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useCharacters } from "graphql/queries";
import { CharactersType } from "types/definition";
import { CharacterCard } from "components/CharacterCard/CharacterCard";
import { InputField } from "components/InputField/InputField";
import { Spinner } from "components/Spinner/Spinner";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Dropdown } from "components/Dropdown/Dropdown";
import { CharactersList, FiltrationForm, NotFound } from "./Characters.styled";

const MemoizedCharacterCard = React.memo(CharacterCard);

export const Characters = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("");
  const { getCharacters, loading, error, characters } = useCharacters();

  useEffect(() => {
    getCharacters({ variables: { name: "", species: "" } });
  }, [getCharacters]);

  const [optimizedCharacterName] = useDebounce(characterName, 500);
  const [optimizedSpeciesFilter] = useDebounce(speciesFilter, 500);

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeciesFilter(event.target.value);
  };

  const filteredCharacters = characters.filter((character: CharactersType) => {
    const nameMatch = character.name
      .toLowerCase()
      .includes(optimizedCharacterName.toLowerCase());
    let speciesMatch = true;
    if (optimizedSpeciesFilter === "human") {
      speciesMatch = character.species.toLowerCase() === "human";
    } else if (optimizedSpeciesFilter === "alien") {
      speciesMatch = character.species.toLowerCase() !== "human";
    }
    return nameMatch && speciesMatch;
  });

  if (loading) return <Spinner size={100} />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <h2>Rick & Morty Characters</h2>
      <FiltrationForm>
        <InputField
          type="text"
          id="name"
          label="Name"
          value={characterName}
          placeholder="search by name..."
          onChange={(e) => {
            setCharacterName(e.target.value);
          }}
        />
        <div>
          <Dropdown
            id="speciesFilter"
            label="Species"
            value={speciesFilter}
            onChange={handleSpeciesChange}
            options={["human", "alien"]}
          />
        </div>
      </FiltrationForm>
      {filteredCharacters.length > 0 ? (
        <CharactersList>
          {filteredCharacters.map((character: CharactersType) => (
            <MemoizedCharacterCard key={character.id} character={character} />
          ))}
        </CharactersList>
      ) : (
        <NotFound>
          No characters founded, please change the search parameters!
        </NotFound>
      )}
    </div>
  );
};
