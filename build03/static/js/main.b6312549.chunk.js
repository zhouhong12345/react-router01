(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(9),o=a.n(r),l=a(15),p=a(16),g=a(18),c=a(17),m=a(19),h=a(10),s=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:["1","2","3"],imgHeight:176,imgOne:["./image/img-01.png","./image/img-02.png","./image/img-03.png"],imgTwo:["./image/bottomOne.png","./image/bottomOne.png","./image/bottomOne.png"]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),100)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(h.b,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"130px"}},n.a.createElement("span",{style:{fontSize:"40px"}},"\u4f4f\u5427\u5bb6\u5c45"))),n.a.createElement(h.e,{style:{margin:"0"}},n.a.createElement(h.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return n.a.createElement("img",{src:"./image/lunboOne.png",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}})})))),n.a.createElement("div",{style:{height:"350px",width:"100%",backgroundColor:"#eeeeee",paddingTop:"35px"}},n.a.createElement("div",{style:{margin:"0 auto",height:"280px",width:"980px"}},this.state.imgOne.map((function(e,t){return n.a.createElement("div",null,n.a.createElement("img",{src:e,style:{width:"280px",height:"279px",float:"left",marginLeft:"29px",marginRight:"10px"}}))})))),n.a.createElement("div",{style:{width:"100%",height:"1557px"}},n.a.createElement("div",{style:{backgroundColor:"#3fcccb",height:"60px",width:"20px",float:"left",marginTop:"20px"}}),n.a.createElement("p",{style:{float:"left",fontSize:"40px",marginTop:"17px",marginLeft:"30px",marginBottom:"0"}},"\u70ed\u95e8\u63a8\u8350"),this.state.imgTwo.map((function(e,t){return n.a.createElement("img",{src:e,style:{width:"100%",float:"left",marginTop:"20px"}})}))))}}]),t}(i.Component),x=a(83),d=[],f=["\u684c","\u5e8a","\u6905","\u51e0","\u67dc","\u4e66\u67b6","\u6c99\u53d1","\u5bb6\u5c45\u9970\u54c1","\u6237\u5916\u5bb6\u5177","\u5168\u90e8\u5206\u7c7b"],u=["./image/table.png","./image/bed.png","./image/chair.png","./image/tea.png","./image/cupboard.png","./image/book.png","./image/sofa.png","./image/wind.png","./image/lamp.png","./image/all.png"],b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:["1","2","3"],imgHeight:176},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]})}),100)}},{key:"render",value:function(){for(var e=this,t=0;t<10;t++){var a=n.a.createElement("div",{style:{backgroundColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",width:"150px",height:"150px",borderRadius:"150px"}},n.a.createElement("img",{src:u[t],style:{width:"80px",height:"80px",marginTop:"37px"}}));d[t]=a}return n.a.createElement("div",null,n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(h.b,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"130px"}},n.a.createElement("span",{style:{fontSize:"40px"}},"\u5546\u57ce"),n.a.createElement("img",{src:"./image/car.png",style:{width:"60px",height:"60px",position:"absolute",right:"20px",top:"35px"}}))),n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(h.e,{style:{margin:"0"}},n.a.createElement(h.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return n.a.createElement("img",{src:"http://img0.imgtn.bdimg.com/it/u=3731061007,454323389&fm=26&gp=0.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}})})))),n.a.createElement("div",{style:{height:"100px",width:"100%",backgroundColor:"rgb(0,0,0,0.5)",position:"absolute",top:"0",paddingTop:"3px"}},n.a.createElement("img",{src:"./image/hide.png",style:{height:"80px",width:"60px",marginLeft:"30px",marginBottom:"20px"}}),n.a.createElement("img",{src:"./image/big.png",style:{height:"40px",width:"40px",position:"absolute",top:"30px",left:"150px"}}),n.a.createElement("input",{type:"type",style:{width:"840px",height:"70px",backgroundColor:"#f5e9e2",border:"none",borderRadius:"5px",marginLeft:"25px",fontSize:"30px",marginTop:"10px"},placeholder:"           \u8bf7\u8f93\u5165\u5173\u952e\u5b57"})),n.a.createElement("img",{src:"./image/erweima.png",style:{position:"absolute",right:"0",top:"150px"}}),n.a.createElement("p",{style:{position:"absolute",right:"20px",top:"320px",fontSize:"25px",color:"white"}},"\u626b\u7801\u9886\u52b5")),n.a.createElement("div",{style:{backgroundColor:"white",height:"510px",paddingTop:"35px"}},n.a.createElement("ul",{style:{height:"400px"}},d.map((function(e,t){return n.a.createElement("li",{style:{textAlign:"center",float:"left",marginLeft:"25px",marginRight:"20px"}},e,n.a.createElement("p",{style:Object(x.a)({fontSize:"30px",marginBottom:"0",marginTop:"20px"},"marginBottom","20px")},f[t]))})))),n.a.createElement("div",{style:{paddingTop:"40px",paddingLeft:"30px"}},n.a.createElement("div",{style:{float:"left"}},n.a.createElement("img",{src:"./image/cup.png",style:{width:"446px",height:"310px",marginRight:"20px"}}),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0",marginTop:"15px",color:"gray"}},"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6.."),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0"}},"$39.95")),n.a.createElement("div",{style:{float:"left"}},n.a.createElement("img",{src:"./image/clock.png",style:{width:"446px",height:"310px",marginLeft:"10px"}}),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0",marginTop:"15px",color:"gray"}},"\u987a\u987a\u5de5\u827a\u6b27\u5f0f\u98ce\u683c\u5851\u6599\u5916\u6846\u9ed1.."),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0"}},"$83.99")),n.a.createElement("div",{style:{height:"700px",float:"left"}},n.a.createElement("img",{src:"http://img5.imgtn.bdimg.com/it/u=2273493416,3270799213&fm=26&gp=0.jpg",style:{width:"922px"}}),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0",marginTop:"15px",color:"gray"}},"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6.."),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0"}},"$39.95")),n.a.createElement("div",{style:{height:"670px",float:"left"}},n.a.createElement("img",{src:"http://img5.imgtn.bdimg.com/it/u=2273493416,3270799213&fm=26&gp=0.jpg",style:{width:"922px"}}),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0",marginTop:"15px",color:"gray"}},"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6.."),n.a.createElement("p",{style:{fontSize:"35px",marginBottom:"0"}},"$39.95"))))}}]),t}(i.Component),y=[{title:"\u63a8\u8350"},{title:"\u51ac\u5b63"},{title:"\u5b9c\u5bb6"},{title:"\u5c0f\u6e05\u65b0"},{title:"\u5c0f\u6237\u578b"},{title:"\u4e2a\u6027\u8272\u5f69"},{title:"\u5c0f\u6e05\u65b0"}],E=["./image/timg.jpg","./image/timgOne.jpg","./image/timgTwo.jpg","./image/timgThree.jpg","./image/timgFour.jpg","./image/timgFive.jpg","./image/timgSix.jpg","./image/timgSeven.jpg"],w=["./image/picOne.png","./image/picTwo.png","./image/picThree.png","./image/picFour.png","./image/picOne.png","./image/picTwo.png","./image/picThree.png","./image/picFour.png"],v=function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,",'./image/picTwo.png'",n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(h.b,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"130px"}},n.a.createElement("span",{style:{fontSize:"40px"}},"\u7075\u611f"),n.a.createElement("img",{src:"./image/bigTwo.png",style:{width:"60px",height:"60px",position:"absolute",right:"20px",top:"35px"}}))),n.a.createElement("div",null,n.a.createElement(h.d,{tabs:y,initialPage:0,tabBarUnderlineStyle:{border:"2px solid #ffdb2c",backgroundColor:"yellow"},onChange:function(e,t){console.log("onChange",t,e)},onTabClick:function(e,t){console.log("onTabClick",t,e)}},n.a.createElement("div",{style:{justifyContent:"center11",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))),n.a.createElement("div",{style:{justifyContent:"center",height:"2210px",backgroundColor:"#eeeeee"}},w.map((function(e,t){return n.a.createElement("div",{style:{float:"left",width:"450px",height:"520px",backgroundColor:"white",marginLeft:"27px",marginTop:"30px",position:"relative"}},n.a.createElement("img",{src:e,style:{width:"450px",height:"430px",float:"left"}}),n.a.createElement("div",{style:{borderRadius:"80px",backgroundColor:"red",width:"80px",height:"80px",position:"absolute",bottom:"40px",left:"15px",float:"left"}},n.a.createElement("img",{src:E[t],style:{width:"80px",height:"80px",borderRadius:"80px"}})),n.a.createElement("p",{style:{fontSize:"35px",marginLeft:"130px",marginTop:"10px",width:"200px",marginRight:"0",float:"left"}},"\u6a59\u8272\u5f8b\u52a8"),n.a.createElement("img",{src:"./image/heart.png",style:{width:"40px",height:"40px",float:"right",marginTop:"15px",marginRight:"10px"}}))}))))))}}]),t}(i.Component),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(g.a)(this,Object(c.a)(t).call(this,e))).state={selectedTab:"redTab"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},n.a.createElement(h.c,{unselectedTintColor:"#8a8a8a",tintColor:"#3fcccb",barTintColor:"white"},n.a.createElement(h.c.Item,{title:"\u9996\u9875",key:"Life",icon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/shouye.png") center center /  21px 21px no-repeat'}}),selectedIcon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/clickone.png") center center /  21px 21px no-repeat'}}),selected:"blueTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"blueTab"})}},n.a.createElement(s,null)),n.a.createElement(h.c.Item,{icon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/linggan.png") center center /  21px 21px no-repeat'}}),selectedIcon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/clicktwo.png") center center /  21px 21px no-repeat'}}),title:"\u7075\u611f",key:"Koubei",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})}},n.a.createElement(v,null)),n.a.createElement(h.c.Item,{icon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/shangcheng.png") center center /  21px 21px no-repeat'}}),selectedIcon:n.a.createElement("div",{style:{width:"22px",height:"22px",background:'url("./image/clickthree.png") center center /  21px 21px no-repeat'}}),title:"\u5546\u57ce",key:"friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab"})}},n.a.createElement(b,null)),n.a.createElement(h.c.Item,{icon:{uri:"./image/my.png"},selectedIcon:{uri:"./image/clickfour.png"},title:"\u6211\u7684",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}},"\u6211\u7684")))}}]),t}(n.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(T,null))}}]),t}(i.Component);a(159),a(160);o.a.render(n.a.createElement(k,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a(161)}},[[84,1,2]]]);
//# sourceMappingURL=main.b6312549.chunk.js.map