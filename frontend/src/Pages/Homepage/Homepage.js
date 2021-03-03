import React from 'react';
import { useParams } from 'react-router-dom';
import FoodList from '../../Components/FoodList/FoodList';

const dummy = [

    {
        id: "p1",
        title: 'Lunch',
        description: 'Burrito in my tummy',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=980:*',
        profileImageUrl: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60',
        user: 'hmm',
        address: '528 Jericho Turnpike Ste A, Mineola, NY 11501',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
          }
    },

    {
        id: 'p2',
        title: 'Breakfast',
        description: 'Pancakes all day everyday',
        imageUrl: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg',
        profileImageUrl: 'https://kottke.org/plus/misc/images/ai-faces-01.jpg',
        user: 'kenneth',
        address: '145 Hillside Avenue, Williston Park, NY 11596',
        location: {
            lat: 40.7363857,
            lng: -73.9130339
          }
          
    },

    {
        id: 'p3',
        title: 'English breakfast',
        description: 'Pancakes all day everyday',
        imageUrl: 'https://static01.nyt.com/images/2018/11/21/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg',
        profileImageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401',
        user: 'lindsey',
        address: '145 Hillside Avenue, Williston Park, NY 11596',
        location: {
            lat: 40.7363857,
            lng: -73.9130339
          }
          
    }

]
    


const Homepage = () => {
    
    return (
        <div>
            <FoodList items={dummy}/>
        </div>
    )
}

export default Homepage
