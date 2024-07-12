import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css'
import Scroll from './Scroll'


class App extends Component {
constructor(){
    super()
    this.state={
        robots:[],
        searchfield: ''
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
       return Response.json();
    })
    .then(users=>{
        this.setState({robots:robots})
    })
   
}
onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  
}

    render(){
const {robots,searchfield} = this.state;
        const filteredRobots =robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        
        })
        if(robots.length===0){
            return <h1 className="tc bg-black">Loading</h1>
        }
    return ( 
        
<div className="tc">
<h1>RoboFriends</h1>
<Searchbox searchChange={this.onSearchChange}/>
<Scroll>
<CardList robots={filteredRobots}/>
</Scroll>
</div>

     );

} 
}
export default App;