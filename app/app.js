import React, {Component} from 'react'
import Header from './components/header.js'
import Symbol from './components/symbol.js'
import Symbols from './data/symbols.json'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: Symbols
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.data.map((symbol, i) => <Symbol key={i} data={symbol} />)}
            </div>
        );
    }
}