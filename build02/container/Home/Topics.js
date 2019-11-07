import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Topics extends Component {
    constructor(){
        super();
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        let page=this.props.match.params.page;
        let tab=this.props.match.params.tab;
        if(!page&&!tab){
            fetch('https://cnodejs.org/api/v1/topics')
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    user:res.data
                })
            })
         }
         else{
            fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab='+tab)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    user:res.data
                })
            })
         }
        
    }
    componentDidUpdate(prevProps,prevState){
        let page=this.props.match.params.page;
        let tab=this.props.match.params.tab;
        if(prevProps.match.params.page !==page){
            fetch('https://cnodejs.org/api/v1/topics?page='+page+'&tab='+tab)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    user:res.data
                })
            })
        }

    }
    render() {
        return (
            <div>
            {
                this.state.user.map((items)=>(
                    <div className='small'>
                        <div className='smallOne'>
                            {
                               <img src={items.author.avatar_url}></img>
                            }
                        </div>
                         
                        <div className='smallTwo'>
                            {
                                items.reply_count+'/'
                            }
                        </div>
                         
                        <div className='smallThree'>
                            {
                                items.visit_count
                            }
                        </div>
                        <div class='topa'>
                        
                              <p>分享</p>  
                        </div>
                        <div className='smallFour'>
                            {
                                <Link to={'/topic/'+items.id}>{items.title}</Link>
                            }
                        </div>
                        <div className='topb'>
                            <img src='https://avatars0.githubusercontent.com/u/17956058?v=4&s=120'></img>
                        </div>
                        <div className='topc'>
                            <p>32分钟前</p>
                        </div>
                         
                     </div>
                ))
            }
            
        </div>
        
        )   
    }
}
