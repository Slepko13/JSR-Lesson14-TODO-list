import React, { Component } from 'react';
import './Task1.scss';
import ListItem from './ListItem/ListItem';


class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.addListItemEnter = this.addListItemEnter.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    addListItem() {
        // let arr = this.state.list;
        // arr.push(this.state.message);
        if (this.state.message) {
            this.setState({
                message: '',
                list: [...this.state.list, this.state.message]
            })
        }
    }
    addListItemEnter(e) {
        if (e.key === "Enter") {
            // let arr = this.state.list;
            // arr.push(this.state.message);
            if (this.state.message) {
                this.setState({
                    message: '',
                    list: [...this.state.list, this.state.message]
                })
            }
        }
    }
    render() {
        let list = this.state.list;

        return (
            <div className="Task1">
                <div className="wrap">
                    <input className="input"
                        placeholder="enter task"
                        onChange={this.handleChange}
                        onKeyPress={this.addListItemEnter}
                        value={this.state.message} />
                    <button className="button" onClick={this.addListItem} >Add</button>
                </div>
                <div className="list">
                    {list.length > 0 ? list.map((item, index) => <ListItem key={index} message={item} />) : null}


                </div>

            </div>
        );
    }
}

export default Task1;