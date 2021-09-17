import '../bootstrap/morph/bootstrap.min.css'

const Button = (props) =>{
    return <button id={props.id} className={props.className} onClick={props.onClick}>{props.children}</button>
}

export default Button;