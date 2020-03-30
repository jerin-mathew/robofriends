import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


//class component since inaddition to return we need to use renturn constructor etc..
class App extends React.Component {

    constructor() {//called only once
        super();
        //intialize the state of the app.This is the first step to be done   
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    // this is the parent function that is passed to the child components
    // following format shoudl be used to describe function, else correct event cannot be processed
    onSearchChange = (event) => {
        //we will update state with result from the child componet

        this.setState({ searchField: event.target.value });
        //use {} to execute variables
        // this.setState to be used for setting a state variable

    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }
    render() {//called everytime there is a change

        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());

        })
        //if (0)=>false and if(1)=>true
        return !robots.length ? <h1>Loading...</h1> : (//while array is fetched from webservice
            <div>
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox onSearch={this.onSearchChange} />
                </div>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>

        );
    }
}

export default App;

// const robots = [
//     {
//         id: '1',
//         name: 'jerin',
//         email: "jerinemail.gmail.com"
//     },
//     {
//         id: '2',
//         name: 'chinnu',
//         email: "chinnuemail.gmail.com"

//     },
//     {
//         id: '3',
//         name: 'EJ',
//         email: "EJemail.gmail.com"

//     }
// ];


