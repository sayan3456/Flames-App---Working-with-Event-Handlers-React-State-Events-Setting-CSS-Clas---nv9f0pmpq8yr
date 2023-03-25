import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    state = {
        output: "",
        checkDisability: false,
        name1: '',
        name2: ''
    };
    render() {



        const setName1 = (e) => this.setState({ name1: e.target.value })
        const setName2 = (e) => this.setState({ name2: e.target.value })
        let inp1 = this.state.name1, inp2 = this.state.name2;

        const evaluate = (e) => {
            clr();
            inp1 = inp1.split('').sort().join('');
            inp2 = inp2.split('').sort().join('');
            //   console.log(inp1.charAt(2) < inp2.charAt(2))
            this.setState({
                output: flames(inp1, inp2),
                checkDisability: true
            });
        }

        const flames = (name1, name2) => {
            if (name1 === '' || name2 === '')
                return "Please Enter valid input"
            let i = 0, j = 0, count = 0;
            let n = name1.length, m = name2.length;
            let alph1 = [];
            let alph2 = [];
            for (let i = 0; i < 26; i++) {
                alph1.push(0);
                alph2.push(0);
            }
            for (let i = 0; i < name1.length; i++) {
                let vr = name1.charCodeAt(i) - 97;
                alph1[vr]++;
            }
            for (let i = 0; i < name2.length; i++) {
                let vr = name2.charCodeAt(i) - 97;
                alph2[vr]++;
            }
            for (let i = 0; i < 26; i++) {
                if (alph1[i] < alph2[i]) {
                    count += alph1[i] * 2;
                }
                else {
                    count += alph2[i] * 2;
                }
            }
            count = (n + m - count) % 6;

            switch (count % 6) {
                case 1:
                    return "Friends"
                case 2:
                    return "Love"
                case 3:
                    return "Affection"
                case 4:
                    return "Marriage"
                case 5:
                    return "Enemy"
                default:
                    return "Siblings"
            }

        }
        const clr = () => {
            this.setState({
                name1: '',
                name2: '',
                checkDisability: false,
                output: ""
            });


        }
        return (
            <div id="main">

                <input type={"text"} data-testid="input1" placeholder="First Name" value={this.state.name1} onChange={setName1}></input>
                <input type={"text"} data-testid="input2" placeholder="Second Name" value={this.state.name2} onChange={setName2}></input>
                <button data-testid="calculate_relationship" onClick={evaluate}>Calculate Relationship Future</button>
                <h3 data-testid="answer">{this.state.output}</h3>
                <button data-testid="clear" onClick={clr}>Clear</button>

            </div>
        )

    }
}


export default App;