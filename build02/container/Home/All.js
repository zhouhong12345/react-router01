import React, { Component } from 'react';
import Topics from './Topics';
import {Link,Route} from 'react-router-dom';

export default class All extends Component {

    render() {
        var b=this.props.match.params.tab;
        if(!b){
            b='all';
        }
        return (
            <div>
                <div>
                    <Route exact path='/' component={Topics}/>
                    <Route path='/home/:page&:tab' component={Topics}/>
                </div>
                <div className='bottom'>
                    <button> <a>《</a></button>
                    <button><Link to={'/home/'+'1&'+b}>1</Link></button>
                    <button><Link to={'/home/'+'2&'+b}>2</Link></button>
                    <button><Link to={'/home/'+'3&'+b}>3</Link></button>
                    <button><Link to={'/home/'+'4&'+b}>4</Link></button>
                    <button><Link to={'/home/'+'5&'+b}>5</Link></button>
                    <button><Link to={'/home/'+'6&'+b}>6</Link></button>
                    <button><Link to={'/home/'+'7&'+b}>7</Link></button>
                    <button><Link to={'/home/'+'8&'+b}>8</Link></button>
                    <button><Link to={'/home/'+'9&'+b}>9</Link></button>
                    <button><Link to={'/home/'+'10&'+b}>10</Link></button>
                    <button><a>》</a></button>
                </div>
            </div>
        )
    }
}
