import React, { Component } from 'react'

import { connect } from 'react-redux'
import { inc, dec } from '../state/counter';

class Counter extends Component {
    render() {
        return (
            <div >

                <div>
                    <h1>{this.props.counter}</h1>
                </div>
                <button
                    onClick={this.props.inc}

                >
                    +
        </button>
                <button
                    onClick={this.props.dec}
                >
                    -
        </button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counterReducerName.counter
})

const mapDispatchToProps = (dispatch) => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
