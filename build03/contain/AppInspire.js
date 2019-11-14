import React, { Component } from 'react';
import { NavBar, Tabs, Carousel, WingBlank } from 'antd-mobile';



const tabs2 = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '小清新' }
];
var picture = ['./image/timg.jpg', './image/timgOne.jpg', './image/timgTwo.jpg', './image/timgThree.jpg', './image/timgFour.jpg', './image/timgFive.jpg', './image/timgSix.jpg', './image/timgSeven.jpg'];
var pic = ['./image/picOne.png', './image/picTwo.png', './image/picThree.png', './image/picFour.png', './image/picOne.png', './image/picTwo.png', './image/picThree.png', './image/picFour.png'];
export default class Appinspire extends Component {
    render() {
        return (
            <div>,'./image/picTwo.png'
                <div style={{ position: 'relative' }}>
                    <NavBar
                        style={{ backgroundColor: '#3fcccb', color: '#fff', height: '130px' }}
                    ><span style={{ fontSize: '40px' }}>灵感</span>
                        <img src={'./image/bigTwo.png'} style={{ width: '60px', height: "60px", position: 'absolute', right: '20px', top: '35px' }} />
                    </NavBar>
                </div>
                <div>
                    <Tabs tabs={tabs2}
                        initialPage={0}
                        tabBarUnderlineStyle={{ border: '2px solid #ffdb2c', backgroundColor: 'yellow' }}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    // style={{backgroundColor:'yellow'}}
                    >
                        <div style={{ justifyContent: 'center11', height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{ justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{ justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                        <div style={{justifyContent: 'center',  height: '2210px', backgroundColor: '#eeeeee' }}>
                            {
                                pic.map((item, idex) =>
                                    <div style={{ float: 'left', width: '450px', height: '520px', backgroundColor: 'white', marginLeft: "27px", marginTop: '30px', position: 'relative' }}>
                                        <img src={item} style={{ width: "450px", height: '430px', float: 'left' }} />
                                        <div style={{ borderRadius: '80px', backgroundColor: 'red', width: '80px', height: '80px', position: 'absolute', bottom: '40px', left: '15px', float: "left" }}>
                                            <img src={picture[idex]} style={{ width: '80px', height: '80px', borderRadius: '80px' }} />
                                        </div>
                                        <p style={{ fontSize: '35px', marginLeft: '130px', marginTop: '10px', width: '200px', marginRight: '0', float: 'left' }}>橙色律动</p>
                                        <img src={'./image/heart.png'} style={{ width: '40px', height: '40px', float: 'right', marginTop: '15px', marginRight: '10px' }} />
                                    </div>)
                            }
                        </div>
                    </Tabs>
                </div>

            </div>
        )
    }
}
