import React, { Component } from "react";
import Whether from "./whether";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: "",
            error:""
        };
       
    };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            this.setState({ latitude: position.coords.latitude })

        },
            err => {
                console.log(err);
                this.setState({ error: err.message });
            }
        );
    };

    render() {
        if (this.state.latitude && !this.state.error) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        < Whether lat ={this.state.latitude} />
                        </div>
                    </div>
                </div>
        
            )
        };
        if (!this.state.latitude && this.state.error) {
            return (<div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>ERROR: {this.state.error}</h2>
                    </div>
                </div>
            </div>);
        }
        else {
            return <div className="container">LOADING....</div>
      }
    };
};

export default App;