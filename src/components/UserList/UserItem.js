
const UserItem = (props) => {
    return(
        <li className="list-group-item bg-light card">
            {props.children}
        </li>
    )
}

export default UserItem;