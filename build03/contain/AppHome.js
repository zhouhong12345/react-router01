import React, { Component } from 'react';
import { NavBar, Icon, Tabs, Carousel, WingBlank } from 'antd-mobile';


export default class AppHome extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        imgOne: ['./image/img-01.png', './image/img-02.png', './image/img-03.png'],
        imgTwo: ['./image/bottomOne.png', './image/bottomOne.png', './image/bottomOne.png']
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
        return (
            <div>
                <div>
                    <NavBar
                        style={{ backgroundColor: '#3fcccb', color: '#fff', height: '130px' }}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ color: '#000', marginRight: '16px' }} />,
                    // ]}
                    ><span style={{ fontSize: '40px' }}>住吧家居</span>
                    </NavBar>
                </div>

                <WingBlank style={{ margin: '0' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <img
                                src={'./image/lunboOne.png'}
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
                <div style={{ height: "350px", width: '100%', backgroundColor: '#eeeeee', paddingTop: '35px' }}>
                    <div style={{ margin: '0 auto', height: "280px", width: '980px' }}>{
                        this.state.imgOne.map((item, idex) => <div ><img src={item} style={{ width: '280px', height: '279px', float: 'left', marginLeft: '29px', marginRight: '10px' }}></img></div>)
                    }
                    </div>

                </div>
                <div style={{ width: '100%', height: '1557px' }}>
                    <div style={{ backgroundColor: '#3fcccb', height: '60px', width: '20px', float: 'left', marginTop: '20px' }}></div>
                    <p style={{ float: "left", fontSize: "40px", marginTop: '17px', marginLeft: '30px', marginBottom: '0' }}>热门推荐</p>
                    {/* <img src={'./image/bottomOne.png'} style={{width:"100%",float:'left',marginBottom:'20px'}}></img> */}
                    {this.state.imgTwo.map((item, inde) => <img src={item} style={{ width: "100%", float: 'left', marginTop: '20px' }} />)}
                </div>
            </div>
        )
    }
}