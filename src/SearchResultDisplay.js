import React, { Component } from 'react';
import './css/SearchResults.css';

class SearchResultDisplay extends Component {
    constructor() {
        super();
        this.state = {setFavourite:false};
    }
    onHeartClick = ()=>{
        const state = this.state;
        state['setFavourite'] = true;
        this.setState(state);
    }

    render() {

        if (this.props.data.strMeal === "Search for a meal and look up its ingredients") {
            return (
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.data.strMeal}</div>
            )
        } else {
            let mealData = this.props.data;

            let ingredients = [];
            for(let i=1;i<=20;i++){

                if(mealData['strMeasure'+i]!=""&&mealData['strMeasure'+i]!=null){
                    ingredients.push({
                    ingredient:mealData['strIngredient'+i],
                    measure:mealData['strMeasure'+i]
                    })

                }
               
            }
            console.log(ingredients);
            return (
                <div className="container">
                    <div className="heading">
                        <h2>{mealData.strMeal} <i class="far fa-heart" onClick={this.onHeartClick} style={{float:"right",marginRight:30,color : this.state.setFavourite ? 'red':'black'}}></i></h2>
                    </div>
                     
                        <div className="imagePane inline">
                            <img src={mealData.strMealThumb}></img>
                        </div>
                        <div className="dataPane inline">
                            <p><i>Category of Meal :- </i>{mealData.strCategory}</p>
                            <p><i>Area of Meal :- </i>{mealData.strArea}</p>

                            <p><i>Ingredients</i></p>
                            <div className="ingredientsPane">
                                {
                                    ingredients.map((element)=>{
                                        return <p>{element.ingredient} --- {element.measure}</p>
                                    })
                                }

                            </div>
                            
                            <p style={{textAlign:"center"}}><i>Recipie</i></p>
                            <div className="recipieInstructionPane">
                                
                                
                                {
                                    mealData.strInstructions
                                }
                            </div>
                        </div>

                  


                </div>
            )
        }

    }
}
export default SearchResultDisplay;