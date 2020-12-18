import React from 'react';
import style from './recipe.module.css';
// function for recipe representation
const Recipe = ({title,calories,image, ingredients}) => {
    const cal = Math.round(calories);
    return(
        <div className={style.recipe}>
            <h1 className={style.recipe}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {cal}</p>
            <img className={style.image} src={image} alt = ""/>
        </div>
    );
}

export default Recipe;