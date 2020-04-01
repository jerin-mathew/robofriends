import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



//tells what state values  i need to listen to 
const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}
//tell what events i need to listen to
const MapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            return dispatch(setSearchField(event.target.value))
        }

    }
}

//class component since inaddition to return we need to use renturn constructor etc..
class App extends React.Component {

    constructor() {//called only once
        super();
        //intialize the state of the app.This is the first step to be done   
        this.state = {
            robots: []

        }
    }
    // this is the parent function that is passed to the child components
    // following format shoudl be used to describe function, else correct event cannot be processed
    // onSearchChange = (event) => {
    //     //we will update state with result from the child componet

    //     this.setState({ searchField: event.target.value });
    //     //use {} to execute variables
    //     // this.setState to be used for setting a state variable

    // }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    render() {//called everytime there is a change

        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());


        })
        //if (0)=>false and if(1)=>true
        return !robots.length ? <h1>Loading...</h1> : (//while array is fetched from webservice
            <div>
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox onSearch={onSearchChange} />
                </div>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>

        );
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);

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


