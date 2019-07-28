import React,{Component} from 'react';
import RecipieSearch from './RecipieSearch'
import SearchResultDisplay from './SearchResultDisplay';

class RecipieFinder extends Component{

    constructor(){
        super();
        // Initail state of the App
        this.state = {
            recipies:[{meals:[{strMeal:"Type a Dish Name to Search for its Ingredients"}]}]
        };
    }

    //Function to fetch the data from the API
    fetchResult = async (query)=>{
        let results;
        let state=this.state;
        let context = this;
       
        console.log(`Fetch Query ${query}`);
        let request = new XMLHttpRequest();
        request.open('GET','https://www.themealdb.com/api/json/v1/1/search.php?s='+query);
        request.onreadystatechange = function(){
            if(this.readyState==4){
            
                
                //To Handle the null condition
                results = JSON.parse(this.responseText);

                //Pop the already present data in the state array
                try{state.recipies.pop();}catch(err){}

                //Check if the data is null, if null , display the error message
                if(results.meals!=null){
                state.recipies.push(results);
                console.log(results);
                context.setState(state);
                }else{
                    results={meals:[{strMeal:"No data has been received"}]};
                    state.recipies.push(results);
                    console.log(results);
                    context.setState(state);
                }
                
                // console.log(context.state);
            }
        }
       await request.send();
     
     
        
        

    }



    render(){
       
        return(
            <div>
                <RecipieSearch fetchResult={this.fetchResult}/>
             <div style={{marginTop:30}}>  {
                    this.state.recipies.map((element,index)=>{
                        return <SearchResultDisplay  data={element.meals[0]} key={index}/>
                    })
                }

            </div> 
            </div>
            

        );
    }

}
export default RecipieFinder;
