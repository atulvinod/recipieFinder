import React,{Component} from 'react';
import RecipieSearch from './RecipieSearch'
import SearchResultDisplay from './SearchResultDisplay';
import $ from 'jquery';
class RecipieFinder extends Component{

    constructor(){
        super();
        this.state = {
            recipies:[{meals:[{strMeal:"Search for a meal and look up its ingredients"}]}]
        };
    }
    fetchResult = async (query)=>{
        let results;
        let state=this.state;
       let context = this;
       
        console.log(`Fetch Query ${query}`);
        let request = new XMLHttpRequest();
        request.open('GET','https://www.themealdb.com/api/json/v1/1/search.php?s='+query);
        request.onreadystatechange = function(){
            if(this.readyState==4){
            
                
                //TODO : Handle the null condition
                results = JSON.parse(this.responseText);
                try{state.recipies.pop();}catch(err){}
                if(results.meals!=null){
                state.recipies.push(results);
                console.log(results);
                context.setState(state);
                }else{
                    results['meals']=""
                    
                }
                
                // console.log(context.state);
            }
        }
       await request.send();
     
     
        
        

    }



    render(){
        // console.log(this.state);
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
