import React, {PureComponent} from 'react';

class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true
        }
        return false
    }

    render() {
        console.log('counter');
        return (
          <button
          id = 'counter' 
          color={this.props.color} 
          onClick={()=> this.setState(state =>({count: state.count+1}))}>
            Count: {this.state.count}
          </button>  
        );
    }
}

export default CounterButton;