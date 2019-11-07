import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            inner:[]
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>{
                return res.json();
        })
        .then((res)=>{
            this.setState({
                inner:res.data
            })
        })
     }
    componentDidUpdate(prevProps,prevState){
        let id=this.props.match.params.id;
        if(prevProps.match.params.id!==id){
            fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    inner:res.data
                })
            })
        }
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html:this.state.inner.content}}></div>
            </div>
        )
    }
}
