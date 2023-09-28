import './Counter.css';
import React, {createElement} from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: props.count} ;
  }

  increaseButton = createElement(
    "button",
    {className: 'counter-increaseButton',
    onClick: () => {
      this.setState((state) => {
        return {count: state.count + 1}
      });
    }
   },
   'Increase'       
  )

  decreaseButton = createElement (
    "button",
    {className: 'counter-decreaseButton',
     onClick: () => {
      this.setState((state) => {
        return {count: state.count - 1}
      });
     }
    },
    'Decrease'
  )

  render() {
    return createElement(
        "div",
        { className: 'counter-container' },
          createElement(
            'h1',
            {},
            'Counter'
          ),

          createElement(
            "div",
            {className: 'counter-result'},
            this.state.count
          ),

          this.increaseButton,
          this.decreaseButton
    );
  }
};

export default Counter;
