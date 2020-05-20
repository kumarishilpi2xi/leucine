import * as React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  state = {
    count: 1
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <div className='counter'>
          <div className='decrement-div'>
            <button onClick={this.decrement} className='decrement'>
                <span className="material-icons" style={{color:'#00aab6'}}>
                remove
                </span>
                </button>
          </div>

        <div className='count'>
          
            {this.state.count}</div>
          
        
        <div className='increment-div'>
        <button onClick={this.increment} className='increment'>
                <span className="material-icons" style={{color:'#00aab6'}}>
        add
        </span>
        </button>
        </div>
      </div>
    );
  }
}
