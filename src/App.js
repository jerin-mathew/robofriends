import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const robots = [
    {
        id: '1',
        name: 'jerin',
        email: "jerinemail.gmail.com"
    },
    {
        id: '2',
        name: 'chinnu',
        email: "chinnuemail.gmail.com"

    },
    {
        id: '3',
        name: 'EJ',
        email: "EJemail.gmail.com"

    }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox />
                </div>
                <CardList robots={robots} />
            </div>

        );
    }
}

export default App;

