import React, { Component } from 'react';
import { NavBar,Carousel, WingBlank } from 'antd-mobile';


var circle = [];
var p = ['桌', '床', '椅', '几', '柜', '书架', '沙发', '家居饰品', '户外家具', '全部分类'];
var img = ['./image/table.png', './image/bed.png', './image/chair.png', './image/tea.png', './image/cupboard.png', './image/book.png', './image/sofa.png', './image/wind.png', './image/lamp.png', './image/all.png'];
export default class AppShop extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        for (var i = 0; i < 10; i++) {
            var html = <div style={{ backgroundColor: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')', width: '150px', height: '150px', borderRadius: '150px' }}>
                <img src={img[i]} style={{ width: '80px', height: "80px", marginTop: '37px' }} />
            </div>
            circle[i] = html;
        }
        return (
            <div style={{backgroundColor:'#eeeeee'}}>
                <div style={{ position: 'relative' }}>
                    <NavBar
                        style={{ backgroundColor: '#3fcccb', color: '#fff', height: '130px' }}
                    ><span style={{ fontSize: '40px' }}>商城</span>
                        <img src={'./image/car.png'} style={{ width: '60px', height: "60px", position: 'absolute', right: '20px', top: '35px' }} />
                    </NavBar>
                </div>
                <div style={{ position: "relative" }}>
                    <WingBlank style={{ margin: '0' }}>
                        <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (

                                <img
                                    src={'http://img0.imgtn.bdimg.com/it/u=3731061007,454323389&fm=26&gp=0.jpg'}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </WingBlank>
                    <div style={{ height: '100px', width: '100%', backgroundColor: 'rgb(0,0,0,0.5)', position: 'absolute', top: '0', paddingTop: '3px' }}>
                        <img src={'./image/hide.png'} style={{ height: '80px', width: '60px', marginLeft: '30px', marginBottom: '20px' }} />
                        <img src={'./image/big.png'} style={{ height: '40px', width: '40px', position: "absolute", top: '30px', left: "150px" }} />
                        <input type='type' style={{ width: '840px', height: "70px", backgroundColor: '#f5e9e2', border: 'none', borderRadius: '5px', marginLeft: '25px', fontSize: '30px', marginTop: "10px" }} placeholder={'           请输入关键字'} />
                    </div>
                    <img src={'./image/erweima.png'} style={{ position: 'absolute', right: '0', top: '150px' }} />
                    <p style={{ position: 'absolute', right: '20px', top: '320px', fontSize: '25px', color: 'white' }}>扫码领劵</p>
                </div>
                <div style={{ backgroundColor: 'white', height: '510px', paddingTop: '35px' }}>
                    <ul style={{ height: '400px' }}>
                        {
                            circle.map((item, idex) => <li style={{ textAlign: 'center', float: 'left', marginLeft: '25px', marginRight: '20px' }}>
                                {item}
                                <p style={{ fontSize: '30px', marginBottom: "0", marginTop: '20px', marginBottom: '20px' }}>{p[idex]}</p>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div style={{ paddingTop: '40px', paddingLeft: '30px' }}>
                    <div style={{ float: 'left' }}>
                        <img src={'./image/cup.png'} style={{ width: '446px', height: '310px', marginRight: '20px' }} />
                        <p style={{ fontSize: '35px', marginBottom: '0', marginTop: '15px', color: 'gray' }}>Top Art Studio 欧式风格精细..</p>
                        <p style={{ fontSize: '35px', marginBottom: '0' }}>$39.95</p>
                    </div>
                    <div style={{ float: 'left' }}>
                        <img src={'./image/clock.png'} style={{ width: '446px', height: '310px', marginLeft: '10px' }} />
                        <p style={{ fontSize: '35px', marginBottom: '0', marginTop: '15px', color: 'gray' }}>顺顺工艺欧式风格塑料外框黑..</p>
                        <p style={{ fontSize: '35px', marginBottom: '0' }}>$83.99</p>
                    </div>
                    <div style={{height:'700px',float:'left'}}>
                        <img src={'http://img5.imgtn.bdimg.com/it/u=2273493416,3270799213&fm=26&gp=0.jpg'} style={{ width: '922px'}} />
                        <p style={{ fontSize: '35px', marginBottom: '0', marginTop: '15px', color: 'gray' }}>Top Art Studio 欧式风格精细..</p>
                        <p style={{ fontSize: '35px', marginBottom: '0' }}>$39.95</p>
                    </div>
                    <div style={{height:'670px',float:'left'}}>
                        <img src={'http://img5.imgtn.bdimg.com/it/u=2273493416,3270799213&fm=26&gp=0.jpg'} style={{ width: '922px'}} />
                        <p style={{ fontSize: '35px', marginBottom: '0', marginTop: '15px', color: 'gray' }}>Top Art Studio 欧式风格精细..</p>
                        <p style={{ fontSize: '35px', marginBottom: '0' }}>$39.95</p>
                    </div>
                </div>
            </div>
        )
    }
}
