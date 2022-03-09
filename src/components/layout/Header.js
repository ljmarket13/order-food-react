import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import CartBtn from './CartBtn';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
			<h1>Order Food app</h1>
				<CartBtn onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImg} alt="food" />
			</div>
		</>
	)
}

export default Header;