import React from 'react';
import FoodItem from '../FoodItem/FoodItem';

import './FoodList.css';

const FoodList = (props) => {
    {/*creatorId={food.creator}
           coordinates={food.location}*/}
    return (
       <ul className='food-list'>
           {props.items.map((food) => (
               <FoodItem
                key={food.id}
                id={food.id}
                image={food.imageUrl}
                profileImageUrl={food.profileImageUrl}
                title={food.title}
                description={food.description}
                address={food.address}
                user={food.user}
                coordinates={food.location}
               />
           ))}
       </ul>
    )
}

export default FoodList;
