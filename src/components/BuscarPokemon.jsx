import { useState } from "react";

export const BuscarPokemon = ({ handleGetPokemonInfo }) => {
  const [pokemon, setPokemon] = useState("");
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center mt-5"
        style={{ maxWidth: "600px" }}
      >
        <form
          className="input-group"
          onSubmit={(e) => {
            handleGetPokemonInfo(pokemon, e);
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre en minúscula o numero del Pokémon"
            onChange={(e) => {
              setPokemon(e.target.value);
            }}
            style={{
              borderRadius: "5px 0 0 5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              borderRadius: "0 5px 5px 0",
              backgroundColor: "#FF00FF ",
              borderColor: "#FF00FF",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            Buscar Pokemon
          </button>
        </form>
      </div>
    </>
  );
};
