import '../bootstrap/morph/bootstrap.min.css'

import React, { useState } from 'react';
import Container from '../UI/Container';
import Row from '../UI/Row';
import Card from '../UI/Cards';
import Button from '../UI/Button';
import BackDrop from './BackDrop';

const Adduser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const nameHandler = (e) =>{
        setUserName(e.target.value);
    };

    const ageHandler = (e) =>{
        setUserAge(e.target.value);
    };

    const addUserHandler = (e)=>{
        e.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0){
            setError("From shouldn't be empty");
            return;
        }
        if(+userAge < 1){
            setError("Invalid Age Should be greater than > one(1)");
            return;
        }
        props.onApp(userName, userAge);
        setUserName('');
        setUserAge('');
    };
    
    const confirmHandler = (e) =>{
        if(e.target.id === 'backDrop' || e.target.id === 'clsModal'){
            setError(null);
            setUserName('');
            setUserAge('');
        }else{
            return;
        }
    };

    return (
        <React.Fragment>
            {error && <BackDrop error={error} onConfirm={confirmHandler}/>}
            <Container>
                <Card className="mt-5 mb-3">
                <form onSubmit={addUserHandler}>
                        <Row className="p-3 gy-3">
                            <div className="form-floating col-8 mx-auto">
                                <input type="text" className="form-control" placeholder="Name" onChange={nameHandler} value={userName}/>
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>                            
                            <div className="form-floating col-8 mx-auto">
                                <input type="number" className="form-control" placeholder="Age" onChange={ageHandler} value={userAge}/>
                                <label className="form-label" htmlFor="Age">Age</label>
                            </div>    
                        </Row>
                        <Button 
                        type="submit" 
                        className="btn btn-warning mx-auto d-block mb-3" 
                        >
                            Add User 
                        </Button>                        
                </form>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default Adduser;