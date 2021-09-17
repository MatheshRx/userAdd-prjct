import '../bootstrap/morph/bootstrap.min.css'

const Cards = (props) => {
    return <div className={`card ${props.className}`}>{props.children}</div>
}

export default Cards;