import React from 'react';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter; 