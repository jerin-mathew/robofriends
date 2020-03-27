import React,{Component} from 'react';

class SearchBox extends Component{
    render() {
        return (
            <div>
                <input className='pa3 ba b--green bg-lightest-blue' type='text' placeholder='Search for robots' />
            </div>
        );
    }
}

export default SearchBox;