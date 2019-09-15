import React from 'react';
import './styles.scss';
import CardList from '../CardList';
import Filter from '../Filter';

function App() {
    return (
        <div className='App'>
            <p> App </p> <CardList /> <Filter />
        </div>
    );
}

export default App;
