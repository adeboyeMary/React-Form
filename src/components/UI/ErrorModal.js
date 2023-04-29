import React from 'react';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return(
        <div>
            <div className={styles.backdrop} onClick={props.onAddErrorHandler}/>
            <Card className={styles.errorContainer}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <p>{props.message}</p>
                <footer>
                    <Button onClick={props.onAddErrorHandler}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;