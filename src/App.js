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


//class component since inaddition to return we need to use renturn constructor etc..
class App extends React.Component {

    constructor() {//called only once
        super();
        //intialize the state of the app.This is the first step to be done   
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    // this is the parent function that is passed to the child components
    // following format shoudl be used to describe function, else correct event cannot be processed
    onSearchChange = (event) => {
        //we will update state with result from the child componet

        this.setState({ searchField: event.target.value });
        console.log(event.target.value);
        //use {} to execute variables
        // this.setState to be used for setting a state variable

    }
    render() {//called everytime there is a change

        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot=> {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());

        })
        return (
            <div>
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox onSearch={this.onSearchChange} />
                </div>
                <CardList robots={filteredRobots} />
            </div>

        );
    }
}

export default App;

