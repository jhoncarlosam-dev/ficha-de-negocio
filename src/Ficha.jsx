function Ficha({ nombre, origen, presentacion, whatsapp }) {
    return (
        <article>
            <h1>{nombre}</h1>
            <p>{origen}</p>
            <p>{presentacion}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </article>
    )
}

export default Ficha;