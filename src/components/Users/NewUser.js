import React from 'react';

import Card from '../UI/Card';
import styles from './NewUser.module.css';


const NewUser = (props) => {
    return(
        <Card className={styles.container2}>
            <ul>
            {props.users.map(user => 
                <li key={user.id}> 
                    {user.name}  ({user.age} years old)
                </li>
                )}
            </ul>
        </Card>
    )
}

export default NewUser;