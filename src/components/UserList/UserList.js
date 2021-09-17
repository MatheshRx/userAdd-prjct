import Container from '../UI/Container';
import Row from '../UI/Row';
import Card from '../UI/Cards';
import UserItem from './UserItem';

const UserList = (props) => {
    return(
        <Container>
            <Card>
                <Row>
                    <div className="col-8 mx-auto p-3">
                        <ul className="list-group">
                            {props.users.map( user => {
                                return (
                                <UserItem key={user.id}>
                                    {`${user.name} - (Age :${user.age})`}
                                </UserItem>
                                )
                            })}
                        </ul>                        
                    </div>
                </Row>
            </Card>
        </Container>
    )
}

export default UserList;