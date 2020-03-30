import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>{
            robots.map((user, i) => {
                return (
                    <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} key={i} />
                    //always use key while in loop. this is used to add or remove in vitual dom
                );
            }
            )
        }

        </div>

    );
}

export default CardList;