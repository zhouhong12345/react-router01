import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <div className='homediv'>
                    <Link to={url+'/all/topic/:id'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link>
                </div> */}
                <div className='homediv'>
                    <Link to='/home/1&all'>全部</Link>
                    <Link to='/good/1&good'>精华</Link>
                    <Link to='/share/1&share'>分享</Link>
                    <Link to='/ask/1&ask'>问答</Link>
                    <Link to='/job/1&job'>招聘</Link>
                </div>
                {/* <div className='inner'>
                    <Route path='/home' component={All}></Route>
                    <Route path={`${url}/all`} component={All}/>
                    <Route path={`${url}/good`}  component={Good}/>
                </div> */}
                <div className='inner'>
                    <Route exact path='/' component={All}/>
                    <Route path='/home/:page&:tab' component={All}/>
                    <Route path='/good/:page&:tab' component={Good}/>
                    <Route path='/share/:page&:tab' component={Share}/>
                    <Route path='/ask/:page&:tab' component={Ask}/>
                    <Route path='/job/:page&:tab' component={Job}/>
                </div>
            </div>
        )
    }
}
