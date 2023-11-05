import React, { Component } from 'react'
import './Todo.css'





export default class Todo extends Component {

    





removeClickHandler(id) {
    this.props.onRemove(id)
}

editClickHandler(id) {
    this.props.onEdit(id)
}

render() {
    return (

        <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{this.props.title}</li>

            <button className="check-btn" onClick={this.editClickHandler.bind(this, this.props.id)}>
                <i class="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={this.removeClickHandler.bind(this, this.props.id)}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>

    )
}
}