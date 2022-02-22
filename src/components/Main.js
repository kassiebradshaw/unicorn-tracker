import React from 'react';
import Unicorn from './Unicorn.js';

class Main extends React.Component {
    render() {
        return (
            this.props.unicornData.map((unicorn, idx) => 
            <div key={idx}>
                <Unicorn 
                name={unicorn.name}
                favFood={unicorn.favFood}
                color={unicorn.color}
                location={unicorn.location} />
            </div>
        ))
    }
}

export default Main;