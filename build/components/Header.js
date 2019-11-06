import React from 'react';
import {Link} from 'react-router-dom';


export default function Header(){

    return(
        <div className='headerwrap'>
            <header>
                <img src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' alt='' style={{float:'left'}}/>
                <input type='text' style={{width:'250px',height:'30px',marginLeft:'25px',marginTop:'10px',float:'left',borderRadius:'20px',border:'1px solid black'}}/>
                <div style={{float:'right',lineHeight:'50px'}}>
                    <Link to='/'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    <Link>注册</Link>
                    <Link to='/login'>登录</Link>
                </div>
            </header>
        </div>
    )
}