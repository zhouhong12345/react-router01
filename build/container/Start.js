import React, { Component } from 'react';
import { Link,Route} from 'react-router-dom';
import Home from './Home/Home';

export default class Start extends Component {
    render() {
        return (
            <div>
                <div className="homediv">
                    <Link to ='/'>主页 /</Link>
                    Node.js 新手入门
                </div>
                <div>
                    啊啊啊啊啊啊啊
                </div>
            </div>
        )
    }
}
