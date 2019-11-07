import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";

import Header from './components/Header';
import Home from './container/Home/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';

import Topic from './container/Home/Topic';

import LoginSider from './container/LoginSider';
import HomeSider from './container/HomeSider';

export default class APP extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className='content'>
                            <Route exact path='/' component={Home}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/good' component={Home}/>
                            <Route path='/share' component={Home}/>
                            <Route path='/ask' component={Home}/>
                            <Route path='/job' component={Home}/>

                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>

                            <Route path={'/topic/'+':id'} component={Topic}/>
                        </div>
                        
                        <div className='sider'>
                            <Route exact path='/' component={HomeSider}/>
                            <Route path='/home' component={HomeSider}/>
                            <Route path='/good' component={HomeSider}/>
                            <Route path='/share' component={HomeSider}/>
                            <Route path='/ask' component={HomeSider}/>
                            <Route path='/job' component={HomeSider}/>
                            <Route path='/login' component={LoginSider}/>
                            <Route path='/about' component={HomeSider}/>
                            <Route path='/start' component={HomeSider}/>
                            <Route path='/api' component={HomeSider}/>
                            <Route path={'/topic/'+':id'} component={HomeSider}/>
                        </div>
                        
                    </div>
                    <div className='bottomDiv'>
                        <p>RSS <span style={{color:"#C0C0C0"}}>|</span> 源码地址</p>
                        <p><span style={{color:'gray'}}>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</span></p>
                        <p><span style={{color:'gray'}}>服务器赞助商为<img src='https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9'></img>，存储赞助商为
                            <img src='https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX'></img>
                            ，由
                            <img src='https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD'></img>
                            提供应用性能服务。
                            </span>
                        </p>
                        <p><span style={{color:'gray'}}>新手搭建 Node.js 服务器，推荐使用无需备案的</span> <a>DigitalOcean(https://www.digitalocean.com/)</a></p>
                    </div>
                </div>
            </Router>
        )
    }
}
