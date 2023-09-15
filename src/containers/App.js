import React, {Component} from "react";
import CardList from "../components/CardList"; 
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
    
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(!this.state.robots.length){
            return (<h1 className="tc">Loading...</h1>)
        }else{
            return (
                <div className="tc">
                    <h1 className="fw2 f1">Robo-Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>    
                        <ErrorBoundry>
                            <CardList data={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;