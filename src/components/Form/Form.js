import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Styles from './Form.module.css';


const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length ===0 || enteredAge.trim().length ===0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (enteredAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        props.onAddNewUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }
    const ErrorHandler = () => {
        setError(null);    
    }


    return(
        <div>
        { error && <ErrorModal title={error.title} message={error.message} 
        onAddErrorHandler={ErrorHandler}/>}
        <Card className={Styles.container}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>Username</label> 
                    <input type='text' value={enteredName} id='username'
                    onChange={nameChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age'
                    onChange={ageChangeHandler} value={enteredAge}></input>
                </div>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    )
}


export default Form;