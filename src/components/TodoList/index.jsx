import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from '../TodoItem'
import { add_todo } from '../../store/actions/todoList'

const TodoList = ({ state, add_todo }) => {
    const [inputValue, setInputValue] = useState('')

    // console.log(state)

    return <div style={styles}>
        <div>
            <input
                placeholder="type smth ... "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => add_todo(inputValue)}>Add</button>
            {/* <button onClick={() => delete_todo(inputValue)}>delete</button> */}
            
        </div>
    
        
        
        <ul>
            {state.map((todo, id) => {
                return <TodoItem todo={todo} id={id} key={id} />
            })}
        </ul>
    </div>
}

const styles = {
    width: '500px',
    margin: '0 auto'
}

const mapStatetoProps = state => ({
    state: state.todolist
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add_todo
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList)