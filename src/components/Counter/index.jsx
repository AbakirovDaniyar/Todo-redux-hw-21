import React from 'react'
import { increaseCount, decreaseCount } from '../../store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Counter = ({ count, increaseCount, decreaseCount }) => {
    return <div>
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={increaseCount}>+</button>
    </div>
}

const mapStatetoProps = state => ({
    count: state.count
})

// 1 - метод
// const mapDispatchToProps = dispatch => ({
// increaseCount: () => dispatch(increaseCount()),
// decreaseCount: () => dispatch(decreaseCount())
// })

// 2 - метод
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increaseCount,
        decreaseCount
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter)