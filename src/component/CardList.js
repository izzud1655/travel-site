import React from 'react';
import Card from './Card';

const CardList = ({ robot }) => {
    return (
        <div>
            {
                robot.map((robo, i) => {
                    return (
                        <Card key={i} id={robo.id} 
                        name={robo.name} 
                        age={robo.age} />
                    );
                })
            }
        </div>
    );
}
export default CardList;