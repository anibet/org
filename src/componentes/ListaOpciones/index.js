import "./ListaOpciones.css"

const ListaOpciones = () => {

        //Metodo map -> arreglo.map( (equipo, index) => {
        //    return <option></option>   
        // })
        const equipos = [
            "Programacion",
            "Front End",
            "Data Science",
            "Devops",
            "UX y Diseño",
            "Movil",
            "Innovación y Gestión",
        ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map(( equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones