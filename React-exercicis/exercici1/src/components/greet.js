import React from 'react';

class Greet extends React.Component {

    constructor(props) {
        super(props);

        this.state = { val: "impressionant" };
    }


    changeValue = () => {
        this.setState(
            { val: "Maravellós" }
        );
    }

    render() {
        return (
            <div>
                <h1>Hola {this.state.val} Mon</h1>
                <button type="button" onClick={this.changeValue}>Canvia el valor</button>
            </div>
        );
    }
}


export default Greet;