'use strict';

var React = require('react');
const names = ['John', 'Jill', 'Jack', 'Борис'];

class HomePage extends React.Component{

    render() {
        return (
            <div>
                <h2>Names</h2>

                <ul className="names">{
                    names.map((name) =>
                        <li className="name">{name}</li>
                    )
                }</ul>
            </div>
        );
    }
}

module.exports = HomePage;