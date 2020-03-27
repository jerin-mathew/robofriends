import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        const { robots } = this.props;
        return (
            <div>{
                robots.map((user, i) => {
                    return (
                        <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} key={i} />
                    );
                }
                )
            }

            </div>
        );
    }
}



export default CardList;