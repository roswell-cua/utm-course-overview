import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }



    render () {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default App;