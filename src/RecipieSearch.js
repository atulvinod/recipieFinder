import React,{Component} from 'react';
import './css/RecipieSearch.css'
class RecipieSearch extends Component{
render(){
    return(
        <div>
            <h4>Recipie Finder</h4>
            <div>
                <form>
                    <input name="search" id="search" placeholder="Enter the name of the dish"/>
                    <button> Get Ingredients</button>
                </form>
            </div>
        </div>
    );
}
}
export default RecipieSearch;