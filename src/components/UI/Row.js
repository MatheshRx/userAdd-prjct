import '../bootstrap/morph/bootstrap.min.css'

const Row = (props) => {
    return <div className={`row ${props.className}`}>{props.children}</div>
}

export default Row;