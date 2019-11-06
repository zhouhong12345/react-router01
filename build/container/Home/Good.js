import React, { Component } from 'react';
import Topics from './Topics';
import {Link,Route} from 'react-router-dom';

export default class Good extends Component {
    render() {
        var p=this.props.match.params.page;
        var b=this.props.match.params.tab;
        return (
            <div>
                <div>
                    <Route path='/good/:page&:tab' component={Topics}/>
                </div>
                <div className='bottom'>
                    <button> <a>《</a></button>
                    <button><Link to={'/good/'+p+b}>1</Link></button>
                    <button><Link to={'/good/'+'2&'+b}>2</Link></button>
                    <button><Link to={'/good/'+'3&'+b}>3</Link></button>
                    <button><Link to={'/good/'+'4&'+b}>4</Link></button>
                    <button><Link to={'/good/'+'5&'+b}>5</Link></button>
                    <button><Link to={'/good/'+'6&'+b}>6</Link></button>
                    <button><Link to={'/good/'+'7&'+b}>7</Link></button>
                    <button><Link to={'/good/'+'8&'+b}>8</Link></button>
                    <button><Link to={'/good/'+'9&'+b}>9</Link></button>
                    <button><Link to={'/good/'+'10&'+b}>10</Link></button>
                    <button><a>》</a></button>
                </div>
            </div>
        )
    }
}
