(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{GCUs:function(t,e,o){"use strict";o.r(e);var n=o("nKUr"),a=o("q1tI"),s=o.n(a);const i={view:"",setView:function(t){this.view=t},getView:function(){return this.view}};class r extends s.a.Component{constructor(t){super(t),this.state={containerId:null}}shouldPushNewPage(){const{currentUrl:t}=this.props;return""!==i.getView()&&i.getView()!==t}onPageLoad(){const{pageType:t,currentUrl:e}=this.props;this.shouldPushNewPage()&&window._taboola.push({notify:"newPageLoad"});const o=this.shouldPushNewPage()?{[t]:"auto",url:e}:{[t]:"auto"};window._taboola=window._taboola||[],window._taboola.push(o),i.setView(e)}loadWidget({mode:t,placement:e,targetType:o,containerId:n}){try{window._taboola=window._taboola||[],window._taboola.push({mode:t,container:n,placement:e,target_type:o}),window._taboola.push({flush:!0})}catch(a){console.log("Error in react taboola plugin: "+a.message)}}formatContainerId(t){return`${t}-${Math.floor(1e5*Math.random())}`.toLowerCase().split(" ").join("-")}componentDidMount(){try{this.onPageLoad()}catch(t){console.log("Error in taboola-react-plugin: ",t.message)}finally{this.setState({containerId:this.formatContainerId(this.props.placement)},(function(){const{mode:t,placement:e,targetType:o}=this.props,{containerId:n}=this.state;n&&this.loadWidget({mode:t,placement:e,targetType:o,containerId:n})}))}}render(){const{containerId:t}=this.state;return Object(n.jsx)(s.a.Fragment,{children:t&&Object(n.jsx)("div",{id:t})})}}e.default=r}}]);
//# sourceMappingURL=66.0716de9c79e773ecf331.js.map