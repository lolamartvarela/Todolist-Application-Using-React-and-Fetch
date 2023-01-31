import React, {useState, useEffect} from "react";

// create your first component
const Home = () => {
    const [Datos, setDatos] = useState("");
    const [save, setSave] = useState([]);

    function crearUsuario() {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/lolamartvarela', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([])
        }).then((response) => response.json()).then((data) => console.log(data))
    }


    function enviarDatos(e) {
        e.preventDefault();
        setSave(save.concat(Datos));
        setDatos("");
    }

    const eliminarDatos = (indexItem) => {
      setSave((prevState) =>
        prevState.filter((saveItems, index) => index !== indexItem)
      );
      };

    function obtenerDatos() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/lolamartvarela', {
        method:"GET",
    })

      .then ((response) => response.json ())
      .then ((data) => console.log (data))
}

    function borrarDatos() {
      fetch('https://assets.breatheco.de/apis/fake/todos/user/lolamartvarela', {
        method:"DELETE",
    })

      .then ((response) => response.json ())
      .then ((data) => console.log (data.results))
      if (data.results === "ok"){
        setSave([])
      }
    }

    function actualizarDatos() {
      fetch('https://assets.breatheco.de/apis/fake/todos/user/lolamartvarela', {
        method:"PUT",
    })

    .then ((response) => response.json ())
    .then ((data) => console.log (data))
    }

    useEffect(() => {
      // crearUsuario();
      obtenerDatos()
    }, [])

    useEffect (() => {
      actualizarDatos()
    }), [save]
    
    return (
        <>
            <div className="container-fluid border col-md-8 mt-4">
                <div>
                    <p className="fst-italic fw-light fs-1 d-flex  justify-content-center col-md-4 offset-md-4 mt-4">
                        todos.
                    </p>
                </div>
                <div className="container col-md-4 offset-md-4 mt-4">
                    <div className="input-group mb-3 mt-3">
                        <input id="exampleDatos"
                            onChange={
                                (e) => {
                                    setDatos(e.target.value);
                                }
                            }
                            type="text"
                            className="form-control"
                            aria-describedby="inputHelp"
                            value={Datos}/>

                        <button className="btn btn-outline-secondary" type="submit" id="enviar"
                            onClick={enviarDatos}>
                            Enviar
                        </button>
                    </div>

                    <ul> {
                        save.map((item, index) => (
                            <li className="list-group-item"
                                key={index}>
                                {item}
                                <button className="btn" type="button"
                                    onClick={
                                        () => eliminarDatos(index)
                                }>
                                    <i className="fas fa-trash-alt"/>
                                </button>
                            </li>
                        ))
                    }
                        {" "} </ul>

                    <div>
                      <div className="delete-lista d-flex justify-content-center mt-3 md-w50 mb-2">
                      <button type="submit" className="btn border btn-sm mt-2" onClick={borrarDatos}>Borrar Lista</button>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;


