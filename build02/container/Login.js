import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="homediv">
                    <Link to ='/'>主页 /</Link>
                    登录
                </div>
                <div className='in'>
                    <p>用户名</p><input type='text' />
                    <p><span style={{marginLeft:"14px"}}>密码</span></p><input type='text' />
                    <Link to='/'><button>登录</button></Link>
                </div>
                
            </div>
        )
    }
}
