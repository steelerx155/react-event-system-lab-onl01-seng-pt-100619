// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

        handleInput = () => console.log('Please enter your password')

    
    render (){
        return (
            <input type="password" 
            onKeyUp={this.handleInput}
            />
        )
    }

}
export default Keypad;
