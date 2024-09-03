export const ContenedorPokemon = ({ infoPoke }) => {
  const { nombre, imagen, estadisticas, habilidades } = infoPoke;

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "30rem",
          backgroundColor: "#ffffff",
          border: "2px solid #000000",
        }}
      >
        <div className="row g-0">
          {imagen && (
            <div className="col-12 text-center p-4">
              <img
                src={imagen}
                className="img-fluid rounded"
                alt={`${nombre} sprite`}
                style={{
                  width: "50%",
                  maxHeight: "150px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
          <div className="col-12">
            <div className="card-body">
              <h5 className="card-title text-center">
                Pokemon elegido {nombre}
              </h5>
              {estadisticas && estadisticas.length > 0 && (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Estadísticas:</strong>
                  </li>
                  {estadisticas.map((statFiltrada) => (
                    <li key={statFiltrada.nombre} className="list-group-item">
                      {statFiltrada.nombre}: {statFiltrada.base}
                    </li>
                  ))}
                </ul>
              )}
              {habilidades && habilidades.length > 0 && (
                <ul className="list-group list-group-flush mt-2">
                  <li className="list-group-item">
                    <strong>Habilidades:</strong>
                  </li>
                  {habilidades.map((habilidad, index) => (
                    <li key={index} className="list-group-item">
                      {habilidad.habilidad}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
