import React,{Component} from 'react';
import RecipieSearch from './RecipieSearch'
import SearchResultDisplay from './SearchResultDisplay';
import $ from 'jquery';
class RecipieFinder extends Component{

    constructor(){
        super();
        this.state = {};
    }
    fetchResult = (query)=>{
        let results;
        console.log(`Fetch Query ${query}`);
        let request = new XMLHttpRequest();
        request.open('GET','https://www.themealdb.com/api/json/v1/1/search.php?s='+query);
        request.onreadystatechange = function(){
            if(this.readyState==4){
                // console.log(this.responseText);
                results = JSON.parse(this.responseText);
                console.log(results);
                
            }
        }
        request.send();

    }



    render(){
        return(
            <div>
                <RecipieSearch fetchResult={this.fetchResult}/>
                <SearchResultDisplay/>
            </div>
            

        );
    }

}
export default RecipieFinder;
