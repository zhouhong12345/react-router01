import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class Api extends Component {
    render() {
        return (
            <div>
                <div className="homediv">
                    <Link to ='/'>主页 /</Link>
                    API
                </div>
                <div>
                    啦啦啦啦啦
                </div>
            </div>
        )
    }
}
