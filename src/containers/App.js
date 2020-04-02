import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';



//tells what state values  i need to listen to 
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
//tell what events i need to listen to
const MapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            return dispatch(setSearchField(event.target.value))//dispatching an object


        },
        onRobotRequest: () => {
            return dispatch(requestRobots())//dispatching a function
        }

    }
}

//class component since inaddition to return we need to use renturn constructor etc..
class App extends React.Component {

    componentDidMount() {
        this.props.onRobotRequest();
    }
    render() {//called everytime there is a change

        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());


        })
        //if (0)=>false and if(1)=>true
        return isPending ? <h1>Loading...</h1> : (//while array is fetched from webservice
            <div>
                <div className='tc'>
                    <h1 className='f1'>Robo Friends with redux</h1>
                    <SearchBox onSearch={onSearchChange} />
                </div>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
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


