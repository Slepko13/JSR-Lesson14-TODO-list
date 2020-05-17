import React, { Component } from 'react';
import './Task2.scss';
import Item from './Item/Item';



class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            correction: '',
            title: '',
            isDone: false,
            inCorrection: false,
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

        if (this.state.message) {
            this.setState({
                message: '',
                list: [...this.state.list, { title: this.state.message, isDone: false, inCorrection: false }]
            })
        }
    }
    addListItemEnter(e) {
        if (e.key === "Enter") {

            if (this.state.message) {
                this.setState({
                    message: '',
                    list: [...this.state.list, { title: this.state.message, isDone: false, inCorrection: false }]
                })
            }


        }
    }

    deleteListItem(item, index, e) {

        this.setState({
            list: this.state.list.filter(el => el !== item)
        })
        console.log(item);
        console.log(index);
        console.log(e);
    }

    toggleIsDone(item) {
        item.isDone = !item.isDone;
        this.setState({
            list: [...this.state.list]
        })
    }

    setInput(item) {
        item.inCorrection = true;

        console.log(item.inCorrection);
        this.setState({
            correction: item.title,
            list: [...this.state.list]
        })
        console.log(this.state);

    }
    handleCorrection(e) {
        this.setState({
            correction: e.target.value
        })
    }
    setDiv(item) {
        item.inCorrection = false;
        item.isDone = false;
        item.title = this.state.correction;
        this.setState({
            list: [...this.state.list]
        })
    }
    setDivEnter(item, e) {
        if (e.key === "Enter") {

            if (this.state.correction) {

                item.inCorrection = false;
                item.title = this.state.correction;
                this.setState({
                    list: [...this.state.list]
                })
            }


        }
    }

    render() {
        let list = this.state.list;

        return (
            <div className="Task2">
                Double click to change item. Blur/enter to save.
                <div className="list">

                    {list.length > 0 ? list.map((item, index) =>
                        <Item
                            key={index}
                            message={item.title}
                            isDone={item.isDone}
                            inCorrection={item.inCorrection}
                            correction={this.state.correction}
                            deleteListItem={this.deleteListItem.bind(this, item, index)}
                            toggleIsDone={this.toggleIsDone.bind(this, item)}
                            setInput={this.setInput.bind(this, item)}
                            handleCorrection={this.handleCorrection.bind(this)}
                            setDiv={this.setDiv.bind(this, item)}
                            setDivEnter={this.setDivEnter.bind(this, item)}


                        />) : null}

                </div>

                <div className="wrap">Task
                    <input className="input"
                        placeholder="What do you need to do?"
                        onChange={this.handleChange}
                        onKeyPress={this.addListItemEnter}
                        value={this.state.message}
                    />

                    <button className="button" onClick={this.addListItem} >Save item</button>
                </div>


            </div >
        );
    }
}

export default Task2;