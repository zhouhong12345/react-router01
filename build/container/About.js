import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class about extends Component {
    render() {
        return (
            <div>
                <div className="homediv">
                    <Link to ='/'>主页 /</Link>
                    关于
                </div>
                <div>
                    嘿嘿嘿
                </div>
            </div>
        )
    }
}
