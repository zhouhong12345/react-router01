import React, { Component } from 'react'

export default class HomeSider extends Component {
    render() {
        return (
            <div>
                <div className='innerOne'>
                    <p>CNode：Node.js专业中文社区</p>
                    <p style={{fontSize:'13px'}}>您可以 <a>登录</a> 或 <a>注册</a> , 也可以</p>
                    <button className='login'>
                        通过GitHub登录
                    </button>
                </div>
                <div className='innerTwo'>
                    <img src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_'></img>
                    <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS'></img>
                    <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'></img>
                </div>
                <div className='innerTwob'>
                    <div className='header'>
                        无人回复的话题
                    </div>
                    <p>node安装完成后npm -v检查报错</p>
                    <p>前端react window.location.href='下载路径'</p>
                    <p>一种支持插件式开发的命令行工具开发模式</p>
                    <p>请问缓存的内存模型是什么呢</p>
                    <p>Hackers周刊第十期（2019-11-03）</p>
                </div>
                <div className='innerThree'>
                    <div className='header'>
                        积分榜   TOP 100 >>
                    </div>
                    <ul>
                        <li><span style={{marginRight:'15px'}}>21755</span>i5ting</li>
                        <li><span style={{marginRight:'15px'}}>15675</span>alsotang</li>
                        <li><span style={{marginRight:'15px'}}>9350</span>leapon</li>
                        <li><span style={{marginRight:'15px'}}>9150</span>atian25</li>
                        <li><span style={{marginRight:'15px'}}>8780</span>jiyinyiyong</li>
                        <li><span style={{marginRight:'15px'}}>7335</span>yakczh</li>
                        <li><span style={{marginRight:'15px'}}>6825</span>im-here</li>
                        <li><span style={{marginRight:'15px'}}>6095</span>DevinXian</li>
                        <li><span style={{marginRight:'15px'}}>5815</span>chapgaga</li>
                        <li><span style={{marginRight:'15px'}}>5350</span>magicdawn</li>
                    </ul>
                </div>
                <div className='innerFour'>
                    <div className='header'>
                        友情社区
                    </div>
                    <img src='https://static2.cnodejs.org/public/images/ruby-china-20150529.png'></img>
                    <img src='https://static2.cnodejs.org/public/images/golangtc-logo.png'></img>
                    <img src='https://static2.cnodejs.org/public/images/phphub-logo.png'></img>
                    <img src='https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK'></img>
                </div>
                <div className='innerFive'>
                    <div className='header'>
                        客户端二维码
                    </div>
                    <img src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU'></img>
                    <p>客户端源码地址</p>
                </div>
            </div>
        )
    }
}
