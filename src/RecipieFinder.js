import React,{Component} from 'react';
import RecipieSearch from './RecipieSearch'
import SearchResultDisplay from './SearchResultDisplay';
import $ from 'jquery';
class RecipieFinder extends Component{

    constructor(){
        super();
        this.state = {
            recipies:[]
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
                
                state.recipies.push(results);
                context.setState(state);
                console.log(context.state);
            }
        }
       await request.send();
     
     
        
        

    }



    render(){
        // console.log(this.state);
        return(
            <div>
                <RecipieSearch fetchResult={this.fetchResult}/>
                {
                    this.state.recipies.map((element,index)=>{
                        return <SearchResultDisplay data={element.meals[0]} key={index}/>
                    })
                }
            </div>
            

        );
    }

}
export default RecipieFinder;
