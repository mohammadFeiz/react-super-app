import React,{Component} from 'react';
import AIOButton from 'aio-button';
import {Icon} from '@mdi/react';
import {mdiAccount,mdiClose} from '@mdi/js';
import RVD from 'react-virtual-dom';
import './index.css';


export default class SuperApp extends Component {
    constructor(props){
      super(props);
      this.state = {activeSideIndex:0}
    }
    side_layout() {
      let {sideMenuItems,logo,title,subtitle} = this.props;
      let {activeSideIndex} = this.state;
      return {
        size: 240,
        html: (
          <Side 
            items={sideMenuItems} logo={logo} title={title} subtitle={subtitle} activeIndex={activeSideIndex} 
            onChange={(activeSideIndex)=>this.setState({activeSideIndex})}
          />
        )
      };
    }
    page_layout(){
        let {activeSideIndex} = this.state;
        let {getContent} = this.props;
        return {
            flex:1,
            column:[
                this.header_layout(),
                {flex:1,html:getContent(activeSideIndex)}
            ]
        } 
    }
    header_layout(){
        let {sideMenuItems,userName} = this.props;
        let {activeSideIndex} = this.state;
        return {
          style:{flex:'none'},
          align:'v',
          className:'superapp-header',
          row:[
            {html:sideMenuItems[activeSideIndex].text,className:'superapp-header-title'},
            {flex:1},
            {html:<Icon path={mdiAccount} size={1}/>},
            {size:6},
            {html:userName,className:'superapp-header-username'}
          ]
        }
    }
    render() {
      return (
        <>
          <RVD layout={{className: 'superapp',row: [this.side_layout(),this.page_layout()]}}/>
          <Loading />
        </>
      );
    }
  }
  class Side extends Component {
    header_layout() {
      let {logo,title,subtitle} = this.props;
      return {
        align: 'vh',gap:12,
        row: [
          { html: logo,show:!!logo },
          {
            column: [
              { flex: 1 },
              { html: title, className: 'superapp-sidemenu-title' },
              { html: subtitle,show:!!subtitle, className: 'superapp-sidemenu-subtitle' },
              { flex: 1 },
            ],
          },
        ],
      };
    }
    items_layout(){
      let {items,onChange,activeIndex} = this.props;
      return {
        gap:12,
        column:items.map(({icon,text},i)=>{
          let active = i === activeIndex;
          return {
            size:36,className:'superapp-sidemenu-item' + (active?' active':''),attrs:{onClick:()=>onChange(i)},
            row:[
              {show:!!icon,size:48,html:icon(active),align:'vh'},
              {html:text,align:'v'}
            ]
          }
        })
      }
    }
    render() {
      return (<RVD layout={{className: 'superapp-sidemenu',column: [{size:24},this.header_layout(),{size:24},this.items_layout()]}}/>);
    }
  }

  class Loading extends Component{
    cubes2(obj = {}){
      var {count = 5,thickness = [5,16],delay = 0.1,borderRadius = 0,colors = ['dodgerblue'],duration = 1,gap = 3} = obj;
      let Thickness = Array.isArray(thickness)?thickness:[thickness,thickness];
      let getStyle1 = (i)=>{
        return {
          width:Thickness[0],height:Thickness[1],background:colors[i % colors.length],margin:`0 ${gap/2}px`,
          animation: `${duration}s loadingScaleY infinite ease-in-out ${i * delay + 1}s`,
          borderRadius:borderRadius + 'px'
        }
      }
      let chars = ['B','U','R','U','X']
      let items = [];
      for(var i = 0; i < count; i++){
        items.push(<div key={i} className='cube' style={getStyle1(i)}>{chars[i]}</div>)
      }
      return (
        <div className="rect" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'transparent'}}>
          {items}
        </div>
      )
    }
    
    render(){
      return (
        <div className='loading'>
          {this.cubes2({thickness:[12,90],colors:['transparent']})}
        </div>
      );
    }
  }
  export function splitNumber(price,count = 3,splitter = ','){
    if(!price){return price}
    let str = price.toString()
    let dotIndex = str.indexOf('.');
    if(dotIndex !== -1){
        str = str.slice(0,dotIndex)
    }
    let res = ''
    let index = 0;
    for(let i = str.length - 1; i >= 0; i--){
        res = str[i] + res;
        if(index === count - 1){
            index = 0;
            if(i > 0){res = splitter + res;}
        }
        else{index++}
    }
    return res
  }

export class Popup extends Component{
    constructor(props){
      super(props);
      this.state = {activeTabIndex:0}
    }
    header_layout(){
      let {onClose,title} = this.props;
      return {
        size:48,className:'superapp-popup-header',
        row:[
          {flex:1,html:title,align:'v',className:'superapp-popup-title'},
          {size:48,html:<Icon path={mdiClose} size={0.8}/>,align:'vh',attrs:{onClick:()=>onClose()}}
        ]
      }
    }
    body_layout(){return {flex:1,column:[this.tabs_layout(),this.content_layout()]}}
    tabs_layout(){
      let {tabs} = this.props;
      if(!tabs){return false}
      let {activeTabIndex} = this.state;
      return {html:(<AIOButton type='tabs' options={tabs.map((o,i)=>{return {text:o,value:i}})} value={activeTabIndex} onChange={(activeTabIndex)=>this.setState({activeTabIndex})}/>)}
    }
    content_layout(){
      let {tabs,getContent} = this.props;
      let content;
      if(tabs){
        let {activeTabIndex} = this.state;
        content = getContent(activeTabIndex)
      }
      else {content = getContent()}
      if(content === 'loading'){return {flex:1,html:'در حال بارگزاری',align:'vh'}}
      if(content === 'empty'){return {flex:1,html:'موردی موجود نیست',align:'vh'}}
      return {flex:1,html:content}
    }
    render(){
      return (  
        <div className='superapp-popup-container'>
          <RVD layout={{className:'superapp-poppup',style:{flex:'none'},column:[this.header_layout(),this.body_layout()]}}/>  
        </div>
      )
    }
  }