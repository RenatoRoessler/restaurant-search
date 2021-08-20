import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStars from 'react-rating-stars-component';
import restaurantes from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c" />
      <Address>{restaurant.vicinity || restaurant.formatted_addrres}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantes}
      alt="foto do restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;
