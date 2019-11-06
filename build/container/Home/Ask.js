import React, { Component } from 'react';
import Topics from './Topics';
import {Link,Route} from 'react-router-dom';

export default class Ask extends Component {
    render() {
        var p=this.props.match.params.page;
        var b=this.props.match.params.tab;
        return (
            <div>
                <div>
                    <Route path='/ask/:page&:tab' component={Topics}/>
                </div>
                <div className='bottom'>
                    <button> <a>《</a></button>
                    <button><Link to={'/ask/'+p+'&'+b}>1</Link></button>
                    <button><Link to={'/ask/'+'2&'+b}>2</Link></button>
                    <button><Link to={'/ask/'+'3&'+b}>3</Link></button>
                    <button><Link to={'/ask/'+'4&'+b}>4</Link></button>
                    <button><Link to={'/ask/'+'5&'+b}>5</Link></button>
                    <button><Link to={'/ask/'+'6&'+b}>6</Link></button>
                    <button><Link to={'/ask/'+'7&'+b}>7</Link></button>
                    <button><Link to={'/ask/'+'8&'+b}>8</Link></button>
                    <button><Link to={'/ask/'+'9&'+b}>9</Link></button>
                    <button><Link to={'/ask/'+'10&'+b}>10</Link></button>
                    <button><a>》</a></button>
                </div>
            </div>
        )
    }
}
