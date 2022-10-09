import React,{Component} from 'react';
import AIOButton from 'aio-button';
import {Icon} from '@mdi/react';
import {mdiAccount,mdiClose} from '@mdi/js';
import RVD from 'react-virtual-dom';
import './index.css';

export default class SuperApp extends Component {
    constructor(props){
      super(props);
      this.state = {
        activeNavigationIndex:0,confirm:false,
        setConfirm:(confirm)=>this.setState({confirm})
      }
    }
    navigation_layout() {
      let {navigationItems,logo,title,subtitle} = this.props;
      let {activeNavigationIndex} = this.state;
      return {
        size: 240,
        html: (
          <Navigation 
            items={navigationItems} logo={logo} title={title} subtitle={subtitle} activeIndex={activeNavigationIndex} 
            onChange={(activeNavigationIndex)=>this.setState({activeNavigationIndex})}
          />
        )
      };
    }
    page_layout(){
        let {getContent} = this.props;
        return {
            flex:1,
            column:[
                this.header_layout(),
                {flex:1,html:getContent(this.state)}
            ]
        } 
    }
    header_layout(){
        let {navigationItems,userName} = this.props;
        let {activeNavigationIndex} = this.state;
        return {
          style:{flex:'none'},
          align:'v',
          className:'superapp-header',
          row:[
            {html:navigationItems[activeNavigationIndex].text,className:'superapp-header-title'},
            {flex:1},
            {html:<Icon path={mdiAccount} size={1}/>},
            {size:6},
            {html:userName,className:'superapp-header-username'}
          ]
        }
    }
    render() {
        let {touch} = this.props;
        if(touch){return <SuperAppTouch {...this.props}/>}
        let {confirm} = this.state;
        return (
            <>
            <RVD layout={{className: 'superapp',row: [this.navigation_layout(),this.page_layout()]}}/>
            {confirm && <Confirm {...confirm} onClose={()=>this.setState({confirm:false})}/>}
            <Loading />
            </>
        );
    }
  }
  class SuperAppTouch extends Component {
    constructor(props){
      super(props);
      this.state = {
        activeNavigationIndex:0,confirm:false,touch:true,
        setConfirm:(confirm)=>this.setState({confirm})
      }
    }
    navigation_layout() {
      let {navigationItems} = this.props;
      let {activeNavigationIndex} = this.state;
      return {
        html: (
          <NavigationTouch 
            items={navigationItems} activeIndex={activeNavigationIndex}
            onChange={(activeNavigationIndex)=>this.setState({activeNavigationIndex})}
          />
        )
      };
    }
    page_layout(){
        let {getContent} = this.props;
        return {
            flex:1,
            column:[
                this.header_layout(),
                {flex:1,html:getContent(this.state)}
            ]
        } 
    }
    header_layout(){
        let {navigationItems,userName} = this.props;
        let {activeNavigationIndex} = this.state;
        return {
            style:{flex:'none'},
            align:'v',
            className:'superapp-header touch-mode',
            row:[
                {flex:1,html:navigationItems[activeNavigationIndex].text,className:'superapp-header-title'},
                {html:<Icon path={mdiAccount} size={1}/>,attrs:{title:userName}},
            ]
        }
    }
    render() {
      let {confirm} = this.state;
      return (
        <>
          <RVD layout={{className: 'superapp',column: [this.page_layout(),this.navigation_layout()]}}/>
          {confirm && <Confirm {...confirm} onClose={()=>this.setState({confirm:false})}/>}
          <Loading />
        </>
      );
    }
  }
  class Navigation extends Component {
    header_layout() {
      let {logo,title,subtitle} = this.props;
      return {
        align: 'vh',gap:12,
        row: [
          { html: logo,show:!!logo },
          {
            column: [
              { flex: 1 },
              { html: title, className: 'superapp-navigation-title' },
              { html: subtitle,show:!!subtitle, className: 'superapp-navigation-subtitle' },
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
            size:36,className:'superapp-navigation-item' + (active?' active':''),attrs:{onClick:()=>onChange(i)},
            row:[
              {show:!!icon,size:48,html:icon(active),align:'vh'},
              {html:text,align:'v'}
            ]
          }
        })
      }
    }
    render() {
      return (<RVD layout={{className: 'superapp-navigation',column: [{size:24},this.header_layout(),{size:24},this.items_layout()]}}/>);
    }
  }
  class NavigationTouch extends Component {
    render() {
        let {items,onChange,activeIndex} = this.props;
        return (
            <RVD 
                layout={{
                    className: 'superapp-bottom-menu',
                    row: items.map(({icon,text},i)=>{
                        let active = i === activeIndex;
                        return {
                            flex:1,className:'superapp-bottom-menu-item' + (active?' active':''),attrs:{onClick:()=>onChange(i)},
                            html:icon(active),align:'vh'
                        }
                    })
                }}
            />
        );
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


  export class Confirm extends Component{
    constructor(props){
      super(props);
    }
    header_layout(){
      let {onClose,title} = this.props;
      if(!title){return false}
      return {
        size:48,className:'superapp-popup-header',
        row:[
          {flex:1,html:title,align:'v',className:'superapp-popup-title'},
          {size:48,html:<Icon path={mdiClose} size={0.8}/>,align:'vh',attrs:{onClick:()=>onClose()}}
        ]
      }
    }
    body_layout(){
      let {text} = this.props;
      return {flex:1,html:text,scroll:'v'}
    }
    onSubmit(){
      let {onClose,onSubmit} = this.props;
      onSubmit();
      onClose();
    }
    footer_layout(){
      let {onClose,onSubmit,closeText = 'No',submitText = 'Yes'} = this.props;
      return {
        gap:12,
        size:48,
        align:'v',
        style:{padding:'0 12px'},
        row:[
          {flex:1},
          {html:<button className='superapp-popup-footer-button' onClick={()=>onClose()}>{closeText}</button>},
          {show:!!onSubmit,html:<button className='superapp-popup-footer-button' onClick={()=>this.onSubmit()}>{submitText}</button>},
          {flex:1}
        ]
      }
    }
    render(){
      let {style = {width:400,height:300}} = this.props;
      return (  
        <div className='superapp-popup-container'>
          <RVD layout={{className:'superapp-poppup',style:{flex:'none',...style},column:[this.header_layout(),this.body_layout(),this.footer_layout()]}}/>  
        </div>
      )
    }
  }