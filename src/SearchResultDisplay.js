import React,{Component} from 'react';
class SearchResultDisplay extends Component{
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.setState(this.props.data);
        console.log("Form Search Result"+this.state);
    }
render(){
    console.log("From Search Result"+this.state);
    return(
        <div></div>
    )
}
}
export  default SearchResultDisplay;