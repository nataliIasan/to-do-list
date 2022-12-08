import { Component } from "react";
import check from './check.png';

export class ToDoList extends Component {
    state= {
        userInput: " ",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input){
        if(input === '') {
            alert("Enter an item!")
        }
        else{
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
    }
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="What do you have to do today?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value= {this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    </div>
                    <ul>{this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={check} width="20px" alt="check"/>{item}</li>
                    ))}
                    </ul>
                    <div className="container">
                        <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}