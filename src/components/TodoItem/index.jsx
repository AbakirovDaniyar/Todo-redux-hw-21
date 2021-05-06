import React from 'react'
import { connect } from 'react-redux'
import { toggle_todo, delete_todo } from '../../store/actions/todoList'


const TodoItem = ({ todo, toggle_todo, delete_todo, id }) => {

    return <div style={styles}>
      <div style={{
                textDecoration: todo.complete ? 'line-through' : 'none' }}>
        <span>
            {todo.text}
        </span>
        <button className="btn" onClick={() => toggle_todo(id)}>completed</button>

    </div>
        <button className="btn"  onClick={() => delete_todo(id)}>delete</button>
    </div>
    
    
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between'
}

const mapDispatchToProps = dispatch => ({
    toggle_todo: (id) => dispatch(toggle_todo(id)),
    delete_todo:(todo, id) => dispatch(delete_todo(todo, id))
})

// эгерде state кереги жок болсо, биринчи аргументке null жазабыз
export default connect(null, mapDispatchToProps)(TodoItem)