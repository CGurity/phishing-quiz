if (self.CavalryLogger) { CavalryLogger.start_js(["IEaAT"]); }

__d("TabBarItem.react",["cx","React","ReactDOM","Focus","Event","Keys","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k,l,m=c("React").PropTypes;i=babelHelpers.inherits(n,c("React").Component);j=i&&i.prototype;n.prototype.render=function(){"use strict";return c("React").createElement("li",this.props,this.props.children)};function n(){"use strict";i.apply(this,arguments)}k=babelHelpers.inherits(o,c("React").Component);l=k&&k.prototype;function o(){__p&&__p();var p,q;"use strict";for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.focus=function(){if(this.props.focused)c("Focus").set(this.refs.tab)}.bind(this),this.onKeyDown=function(event){var u=c("Event").getKeyCode(event);if(u===c("Keys").SPACE&&this.refs.tab){c("ReactDOM").findDOMNode(this.refs.tab).click();c("Event").prevent(event)}}.bind(this),q}o.prototype.render=function(){"use strict";var p=this.props,q=p.selected,r=p.hideFocusRing,s=p.shouldWrapTab,t="_45hc"+(q?" _1hqh":""),u="_3m1v"+(r?" _468f":"");if(s)return this.$TabBarItem1(t,u);return this.$TabBarItem2(c("joinClasses")(t,u))};o.prototype.$TabBarItem1=function(p,q){"use strict";__p&&__p();var r=this.props,s=r.className,t=r.href,u=r.ajaxify,v=r.tabIndex,w=r.rel,x=r.target,y=r.selected,z=r.wrapper,A=r.mockSpacebarClick,B=babelHelpers.objectWithoutProperties(r,["className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick"]);t=t||"#";var C={};if(A)C.onKeyDown=this.onKeyDown;var D=c("React").createElement("a",{ref:"tab",ajaxify:u,href:t,role:"tab",rel:w,target:x,tabIndex:v,className:q,"aria-selected":y},this.props.children);delete B.focused;delete B.hideFocusRing;delete B.shouldWrapTab;return c("React").createElement(z,babelHelpers["extends"]({},B,{tabIndex:null,className:c("joinClasses")(s,p),role:"presentation"}),c("React").cloneElement(D,C))};o.prototype.$TabBarItem2=function(p){"use strict";__p&&__p();var q=this.props,r=q.className,s=q.href,t=q.selected,u=q.mockSpacebarClick,v=babelHelpers.objectWithoutProperties(q,["className","href","selected","mockSpacebarClick"]);s=s||"#";var w={};if(u)w.onKeyDown=this.onKeyDown;delete v.menuAlignh;delete v.menuClassName;delete v.tabComponent;delete v.maxDropdownHeight;delete v.focused;delete v.hideFocusRing;delete v.wrapper;delete v.shouldWrapTab;var x=c("React").createElement("a",babelHelpers["extends"]({},v,{href:s,ref:"tab",role:"tab",className:c("joinClasses")(r,p),"aria-selected":t}),this.props.children);return c("React").cloneElement(x,w)};o.prototype.componentDidMount=function(){"use strict";this.focus()};o.prototype.componentDidUpdate=function(){"use strict";this.focus()};o.propTypes={wrapper:m.func.isRequired,shouldWrapTab:m.bool,tabIndex:m.oneOf([-1,0]),selected:m.bool,focused:m.bool,hideFocusRing:m.bool,mockSpacebarClick:m.bool};o.defaultProps={wrapper:n,shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};f.exports=o}),null);
__d("TabBarItemWrapper.react",["React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.getComponent=function(k){return k.component};j.prototype.render=function(){return this.props.component};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("TabBar.react",["cx","fbt","invariant","React","ReactDOM","TabBarItem.react","Event","RTLKeys","BootloadedComponent.react","JSResource","TabBarItemWrapper.react","joinClasses","setTimeout","clearTimeout","emptyFunction"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=c("React").PropTypes,l=i._("M\u00e1s"),m=c("React").createClass({displayName:"TabBar",_blurTimeout:null,propTypes:{activeTabKey:k.string,alwaysShowActive:k.bool,className:k.string,defaultActiveTabKey:k.string,dropdownMenuAlignh:k.string,dropdownMenuClassName:k.string,maxTabsVisible:k.number.isRequired,moreLabel:k.node,onTabClick:k.func.isRequired,orientation:k.oneOf(["horizontal","vertical"]).isRequired,dropdownTabComponent:k.func.isRequired,onWidthCalculated:k.func.isRequired,onHeightCalculated:k.func.isRequired,shouldCalculateVisibleTabs:k.bool,maxDropdownHeight:k.number},getDefaultProps:function n(){return{alwaysShowActive:true,className:"",dropdownTabComponent:c("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:l,onTabClick:c("emptyFunction").thatReturnsTrue,onHeightCalculated:c("emptyFunction"),onWidthCalculated:c("emptyFunction"),orientation:"horizontal",shouldCalculateVisibleTabs:true}},getInitialState:function n(){return{activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true}},setWidth:function n(o){c("ReactDOM").findDOMNode(this).style.width=o;this.setState({shouldCalculateVisibleTabs:true})},setHeight:function n(o){c("ReactDOM").findDOMNode(this).style.height=o;this.setState({shouldCalculateVisibleTabs:true})},render:function n(){__p&&__p();var o=this.getTabs(),p=o.length,q=this.getActiveTabIndex(),r=o[q],s=this.getActiveTabIndex(true),t,u,v;if(r)t=r.key;var w=this.props.dropdownTabComponent,x=c("React").createElement(w,{key:"_dropdown",ref:"more",className:"_45hd _2pik"},c("React").createElement("span",{className:"_1b0"},this.props.moreLabel));if(this.state.shouldCalculateVisibleTabs){u=o.map(function(H,I){return this._wrapTab(H,I,t,null,s,false,false)}.bind(this));if(p>2)u.push(x)}else{var y=this._groupTabsByVisibility();u=y.visibleTabs;v=y.extraTabs;var z=this._isDropdownSelected(),A=this.state.visibleTabsCount,B=this.state.focusedTabKey;B=B&&this.getFocusedTabIndex()===-1?m.MORE_TAB_KEY:B;u=u.map(function(H,I){return this._wrapTab(H,I,t,B,s,true,true)}.bind(this));v=v.map(function(H,I){return this._wrapTab(H,I,t,null,s,true,false)}.bind(this));if(v.length){var C;if(A===0&&r)C=r;var D=C&&C.props.children||this.props.moreLabel,E="_dropdown",F=c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:x,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:z,focused:B===m.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,E),onBlur:this.onBlur,key:E,ref:"more",label:D,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight},v);if(A===0)u=F;else u.push(F)}}var G=Object.assign({},this.props);delete G.moreLabel;delete G.maxTabsVisible;delete G.onTabClick;delete G.activeTabKey;delete G.onHeightCalculated;delete G.onWidthCalculated;delete G.orientation;delete G.alwaysShowActive;delete G.dropdownTabComponent;delete G.shouldCalculateVisibleTabs;return c("React").createElement("ul",babelHelpers["extends"]({},G,{className:c("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),u)},componentDidMount:function n(){this._calculateVisibleTabs();this._calculateDimensions()},componentWillUnmount:function n(){c("clearTimeout")(this._blurTimeout)},componentWillReceiveProps:function n(o){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:o.activeTabKey||this.state.activeTabKey})},shouldComponentUpdate:function n(o,p){if(this.state.focusedTabKey&&!p.focusedTabKey)return false;if(!this.state.focusedTabKey&&!p.focusedTabKey&&this.state.previousFocusedTabKey&&!p.previousFocusedTabKey)return false;return true},componentDidUpdate:function n(){if(this.state.shouldCalculateVisibleTabs)this._calculateVisibleTabs();this._calculateDimensions()},_calculateDimensions:function n(){if(this.props.orientation==="vertical")this._calculateWidth();else this._calculateHeight()},_calculateWidth:function n(){this.props.onWidthCalculated(c("ReactDOM").findDOMNode(this).clientWidth)},_calculateHeight:function n(){this.props.onHeightCalculated(c("ReactDOM").findDOMNode(this).clientHeight)},_calculateVisibleTabs:function n(){__p&&__p();var o=this.getTabs(),p=o.length,q=Object.keys(this.refs).map(function(z){return this._measure(this.refs[z])}.bind(this)),r=this._measure(this),s=this._measure(this.refs.more),t=Math.min(p,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:t,shouldCalculateVisibleTabs:false});return}var u=this.getActiveTabIndex();if(this.props.alwaysShowActive&&u!==-1){o.unshift(o.splice(u,1)[0]);q.unshift(q.splice(u,1)[0])}t=0;var v=0;for(var w=0;w<p;w++){var x=q[w],y=o[w].key||"";if(v+x>r&&!y.startsWith("visual_poll_")){if(t>0&&p>2)while(t>0&&(v+s>r||p-t<2)){t--;v-=q[t]}else t=0;break}t++;v+=x}this.setState({visibleTabsCount:Math.min(t,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false})},_measure:function n(o){var p=c("ReactDOM").findDOMNode(o);if(!p||!(p instanceof HTMLElement))return 0;return this.props.orientation==="vertical"?p.offsetHeight:p.offsetWidth},getActiveTabIndex:function n(){var o=arguments.length<=0||arguments[0]===undefined?false:arguments[0],p=this.state.activeTabKey,q=[];if(o){var r=this._groupTabsByVisibility(),s=r.visibleTabs;q=s}else q=this.getTabs();return q.findIndex(function(t){return p!=null&&t&&t.key===p})},getFocusedTabIndex:function n(){var o=this.state.focusedTabKey||this.state.previousFocusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs;return q.findIndex(function(r){return o!=null&&r&&r.key===o})},getFocusedTab:function n(){var o=this.state.focusedTabKey,p=this._groupTabsByVisibility(),q=p.visibleTabs,r=q.findIndex(function(s){return o!=null&&s&&s.key===o});return q[r]},onClick:function n(o,event){var p=this.props.onTabClick(o,event);if(p!==false&&this.isMounted())this.activateTab(o)},onMouseDown:function n(){this.setState({hideFocusRing:true})},onKeyDown:function n(event){__p&&__p();var o=c("Event").getKeyCode(event);switch(o){case c("RTLKeys").UP:case c("RTLKeys").getRight():case c("RTLKeys").DOWN:case c("RTLKeys").getLeft():var p,q,r,s=this._groupTabsByVisibility(),t=s.visibleTabs,u=o===c("RTLKeys").UP||o===c("RTLKeys").getLeft(),v=u?-1:1,w=u?0:t.length-1,x=this.getFocusedTabIndex();if(x===-1&&v===-1)x=t.length;if(x===-1)r=null;else if(x===w&&v===1)r=m.MORE_TAB_KEY;else{p=u?Math.max:Math.min;q=p(x+v,w);r=t[q].key}if(r)this.setState({focusedTabKey:r,hideFocusRing:false});break;case c("RTLKeys").RETURN:var y=this.getFocusedTab();if(y){var z=y.key,A=this.props.onTabClick(z,event);if(A!==false&&this.isMounted())this.activateTab(z)}break}},onKeyUp:function n(event){if(c("Event").getKeyCode(event)===c("RTLKeys").TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false})},onFocus:function n(o,event){c("clearTimeout")(this._blurTimeout);if(o!==this.state.focusedTabKey){this.setState({focusedTabKey:o,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation()}},onBlur:function n(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=c("setTimeout")(function(){this.setState({previousFocusedTabKey:null})}.bind(this),m.BLUR_TIMEOUT)},_wrapTab:function n(o,p,q,r,s,t,u){__p&&__p();o.key!==m.MORE_TAB_KEY||j(0);var v=q!=null&&q===o.key,w=r!=null&&r===o.key,x={selected:v,focused:w,tabIndex:v||s===-1&&p===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(t){x.onClick=this.onClick.bind(this,o.key);x.onMouseDown=this.onMouseDown}else x.mockSpacebarClick=false;if(u){x.onFocus=this.onFocus.bind(this,o.key);x.onBlur=this.onBlur}o=c("React").cloneElement(o,x);return c("React").createElement(c("TabBarItemWrapper.react"),{key:o.key,component:o,ref:p})},activateTab:function n(o){if(o)this.setState({activeTabKey:o,focusedTabKey:o,shouldCalculateVisibleTabs:true})},getTabs:function n(){var o=[];c("React").Children.forEach(this.props.children,function(p){if(p)o.push(p)});return o},_groupTabsByVisibility:function n(){__p&&__p();var o=this.state.visibleTabsCount,p=this.getTabs(),q=this.getActiveTabIndex(),r,s,t;if(!this.props.alwaysShowActive||q<o||o===0){t=p.slice(o);s=p.slice(0,o)}else{r=p.splice(q,1)[0];var u=o>0?o-1:0;t=p.slice(u);s=p.slice(0,u);s.push(r)}return{visibleTabs:s,extraTabs:t}},_isDropdownSelected:function n(){var o=this.state.visibleTabsCount,p=this.getActiveTabIndex(),q=!this.props.alwaysShowActive&&p>=o||o===0&&p>-1;return q}});m.MORE_TAB_KEY="_moreTab";m.BLUR_TIMEOUT=120;m.Tab=c("TabBarItem.react");f.exports=m}),null);
__d("XUICardHeaderTitle.react",["cx","React","TabBarItem.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){"use strict";__p&&__p();var m=this.props.itemComponent,n=null;if(this.props.count>0)n=c("React").createElement("span",{className:"_c1b"},this.props.count);var o=this.props.children,p=void 0;if(m===c("TabBarItem.react")&&!n){var q=typeof o==="string"?o:c("React").isValidElement(o)&&o.props.children&&o.props.children.textContent;if(q){o=c("React").createElement("div",{className:"_9hb"},o);p=c("React").createElement("div",{className:"_9hc","aria-hidden":true},q)}}return c("React").createElement(m,babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,"_38my")}),o,p,n,c("React").createElement("span",{className:"_c1c"}))};function l(){"use strict";i.apply(this,arguments)}l.propTypes={count:k.number,href:k.string,itemComponent:k.any};l.defaultProps={itemComponent:c("TabBarItem.react")};f.exports=l}),null);
__d("XUIDialogHeaderTitle.react",["XUICardHeaderTitle.react"],(function a(b,c,d,e,f,g){f.exports=c("XUICardHeaderTitle.react")}),null);
__d("XUICardHeader.react",["cx","invariant","React","TabBar.react","XUICardHeaderTitle.react","XUICardSection.react","XUIDialogHeaderTitle.react","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.$XUICardHeader1=function(){"use strict";var n=0;c("React").Children.forEach(this.props.children,function(o){if(o){o.type===c("XUICardHeaderTitle.react")||o.type===c("XUIDialogHeaderTitle.react")||i(0);n++}});return n};m.prototype.$XUICardHeader2=function(){"use strict";if(this.props.type==="primary")this.props.itemCount==null||i(0);if(this.props.itemCount!=null)return c("React").createElement("span",{className:"_5dw7"},this.props.itemCount);return null};m.prototype.$XUICardHeader3=function(){"use strict";if(this.props.link)return c("React").createElement("span",{className:"_5dw8"},this.props.link);return null};m.prototype.$XUICardHeader4=function(){"use strict";var n=this.$XUICardHeader1();if(n===1)return c("React").Children.map(this.props.children,function(o){return c("React").cloneElement(o,{itemComponent:"span"})});else return c("React").createElement(c("TabBar.react"),{activeTabKey:this.props.activeTabKey,className:"_1ng1",defaultActiveTabKey:this.props.defaultActiveTabKey,onTabClick:this.props.onTabClick,shouldCalculateVisibleTabs:this.props.shouldCalculateVisibleTabs},this.props.children)};m.prototype.render=function(){"use strict";var n=(this.props.type==="primary"?"_5dw9":"")+" _5dwa"+(this.props.type==="secondary"?" _5dwb":"")+(this.$XUICardHeader1()!==1?" _3s3z":"");return c("React").createElement(c("XUICardSection.react"),{className:c("joinClasses")(this.props.className,n)},this.$XUICardHeader4(),this.$XUICardHeader2(),this.$XUICardHeader3(),c("React").createElement("div",{className:"_3s3-"}))};function m(){"use strict";j.apply(this,arguments)}m.propTypes={activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func,type:l.oneOf(["primary","secondary"])};m.defaultProps={onTabClick:function n(){return true},type:"secondary"};f.exports=m}),null);
__d("XUIPageNavigationItem.react",["cx","AsyncRequest","React","TabBarItem.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){__p&&__p();var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.onClick=function(r,event){if(this.props.ajaxify&&this.props.rel==="async")new(c("AsyncRequest"))(this.props.ajaxify).send();if(this.props.onClick)return this.props.onClick(r,event);return true}.bind(this),n}l.prototype.render=function(){"use strict";__p&&__p();var m="_5vwz"+(this.props.selected?" _5vwy":""),n=this.props;if(n.ajaxify&&n.rel==="async"){var o=n,p=o.ajaxify,q=o.rel,r=babelHelpers.objectWithoutProperties(o,["ajaxify","rel"]);n=r;n.onClick=this.onClick}var s=this.props.children,t=void 0,u=typeof s==="string"?s:c("React").isValidElement(s)&&s.props.children&&s.props.children.textContent;if(u){s=c("React").createElement("div",{className:"_4xjz"},s);t=c("React").createElement("div",{className:"_4xj-","aria-hidden":true},u)}return c("React").createElement(c("TabBarItem.react"),babelHelpers["extends"]({},n,{className:c("joinClasses")(this.props.className,m)}),c("React").createElement("div",{className:"_4jq5"},s,t),c("React").createElement("span",{className:"_13xf"}))};l.propTypes={selected:k.bool};l.defaultProps={selected:false};f.exports=l}),null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.componentDidUpdate=function(){"use strict";this.refs.bar.setWidth(this.props.width)};k.prototype.componentDidMount=function(){"use strict";this.refs.bar.setWidth(this.props.width)};k.prototype.render=function(){"use strict";return c("React").createElement(c("TabBar.react"),babelHelpers["extends"]({},this.props,{ref:"bar"}),this.props.children)};function k(){"use strict";h.apply(this,arguments)}k.propTypes={moreLabel:j.string,maxTabsVisible:function l(m,n,o){var p=m[n];if(p!=null&&!(typeof p==="number"&&p>=0))throw new Error("Invalid `"+n+"` supplied to `"+o+"`, expected positive integer.")},width:j.string};k.defaultProps={maxTabsVisible:Infinity};k.Item=c("XUIPageNavigationItem.react");f.exports=k}),null);
__d("XUIPageNavigation.react",["csx","cx","invariant","Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactDOM","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","XUIPageNavigationGroup.react","joinClasses","throttle"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("React").PropTypes,n=15;k=babelHelpers.inherits(o,c("React").PureComponent);l=k&&k.prototype;function o(){__p&&__p();var p,q;"use strict";for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.state={activeTabKey:undefined,leftWidth:null},this.onTabClick=function(u,event){if(this.props.onTabClick){var v=this.props.onTabClick(u,event);if(!v)return v}c("Arbiter").inform("pageNavigation/tabChanged");if(event.button===0)this.setState({activeTabKey:u});return true}.bind(this),this.resizeNavbarGroups=function(){__p&&__p();if(!this.refs.left)return;var u=c("ReactDOM").findDOMNode(this).clientWidth;if(isNaN(u)||u===0)return;if(!isNaN(this.$XUIPageNavigation7)&&this.refs.right){var v;v=u-this.$XUIPageNavigation7-n;if(this.$XUIPageNavigation7<v)v=this.$XUIPageNavigation7-n;this.setState({rightWidth:v+"px"})}if(!isNaN(this.$XUIPageNavigation6)){var w;w=u-this.$XUIPageNavigation6-n;if(w<this.$XUIPageNavigation6)w=this.$XUIPageNavigation6+n;this.setState({leftWidth:w+"px"})}else if(!this.refs.right)this.setState({leftWidth:u+"px"})}.bind(this),q}o.prototype.componentDidMount=function(){"use strict";__p&&__p();this.$XUIPageNavigation1=new(c("SubscriptionsHandler"))();this.resizeNavbarGroups();this.$XUIPageNavigation2();var p="^.fixed_elem._5vx1";this.wrapper=c("DOMQuery").scry(c("ReactDOM").findDOMNode(this),p)[0];if(this.wrapper){this.$XUIPageNavigation3();this.$XUIPageNavigation1.addSubscriptions(c("UITinyViewportAction").subscribe("change",function(){if(c("UITinyViewportAction").isTiny())this.$XUIPageNavigation4.remove();else this.$XUIPageNavigation3()}.bind(this)))}if(this.props.showDropShadowOnScroll&&(this.wrapper||c("DOMQuery").scry(c("ReactDOM").findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null)this.$XUIPageNavigation5()};o.prototype.componentWillUnmount=function(){"use strict";this.$XUIPageNavigation1.release()};o.prototype.onWidthCalculated=function(p,q){"use strict";if(p)this.$XUIPageNavigation6=q;else this.$XUIPageNavigation7=q};o.prototype.render=function(){"use strict";__p&&__p();var p="_5vx2 _5vx4",q=c("joinClasses")(p,this.props.className),r=[],s=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;c("React").Children.forEach(this.props.children,function(t,u){if(t===null)return;var v={onTabClick:this.onTabClick,activeTabKey:s,onWidthCalculated:this.onWidthCalculated.bind(this,u),ref:u?"right":"left",key:u};if(u===0)v.width=this.state.leftWidth;r.push(c("React").cloneElement(t,v))}.bind(this));r.length===1||r.length===2||j(0);return c("React").createElement("div",{className:q},c("React").createElement(c("LeftRight.react"),{className:"_5vx7",direction:this.props.floatDirection},r))};o.prototype.$XUIPageNavigation3=function(){"use strict";var p=this.wrapper.offsetHeight,q=c("ViewportBounds").getTop();this.$XUIPageNavigation4=c("ViewportBounds").addTop(q+p);c("Arbiter").subscribe("page_transition",function(){this.$XUIPageNavigation4.remove()})};o.prototype.$XUIPageNavigation2=function(){"use strict";this.$XUIPageNavigation1.addSubscriptions(c("Event").listen(window,"resize",c("throttle")(this.resizeNavbarGroups,30)))};o.prototype.$XUIPageNavigation5=function(){"use strict";this.$XUIPageNavigation1.addSubscriptions(c("Event").listen(window,"scroll",function(){var p=c("Vector").getScrollPosition().y>this.props.scrollThreshold;if(this.$XUIPageNavigation8===p)return;this.$XUIPageNavigation8=p;c("CSS").conditionClass(c("ReactDOM").findDOMNode(this),"_51j8",p)}.bind(this)))};o.propTypes={onTabClick:m.func,showDropShadowOnScroll:m.bool,scrollThreshold:m.number,floatDirection:m.oneOf(["left","right","both"])};o.defaultProps={showDropShadowOnScroll:true,scrollThreshold:0,floatDirection:"both"};o.Group=c("XUIPageNavigationGroup.react");o.Item=c("XUIPageNavigationGroup.react").Item;f.exports=o}),null);
__d("RequiredFormListener",["Event","Input"],(function a(b,c,d,e,f,g){__p&&__p();c("Event").listen(document.documentElement,"submit",function(h){var i=h.getTarget();if(i.getAttribute("novalidate"))return true;var j=i.getElementsByTagName("*");for(var k=0;k<j.length;k++)if(j[k].getAttribute("required")&&c("Input").isEmpty(j[k])){j[k].focus();return false}},c("Event").Priority.URGENT)}),null);
__d("PopoverMenuShowOnHover",["DOM","Event"],(function a(b,c,d,e,f,g){__p&&__p();var h=250;function i(j){"use strict";this._handleOnSetMenu=function(){this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot())}.bind(this);this._popoverMenu=j;this._listeners=[]}i.prototype.enable=function(){"use strict";this._attachMouseListeners(this._popoverMenu.getTriggerElem());this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._handleOnSetMenu)};i.prototype.disable=function(){"use strict";this._lastHoverEventTime=null;while(this._listeners.length)this._listeners.pop().remove();if(this._setMenuSubscription){this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null}};i.prototype._attachMouseListeners=function(j){"use strict";this._listeners.push(c("Event").listen(j,"mouseleave",function(k){if(c("DOM").contains(this._popoverMenu.getTriggerElem(),k.relatedTarget)||c("DOM").contains(this._popoverMenu.getMenu().getRoot(),k.relatedTarget))return;this._popoverMenu.getPopover().hideLayer(k)}.bind(this)),c("Event").listen(j,"mouseenter",function(k){this._lastHoverEventTime=Date.now();this._popoverMenu.getPopover().showLayer()}.bind(this)),c("Event").listen(j,"click",function(k){if(Date.now()<this._lastHoverEventTime+h)k.stop()}.bind(this)))};f.exports=i}),null);
__d("FacebarPlaceholderShortcut",["KeyEventController","Run","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this._input=i;this._listener=null}h.prototype.enable=function(){this._registerListener()};h.prototype._registerListener=function(){this._listener&&this._listener.remove();this._listener=c("KeyEventController").registerKey("SLASH",this._handleKeydown.bind(this));c("Run").onLeave(function(){c("setTimeoutAcrossTransitions")(this._registerListener.bind(this),0)}.bind(this))};h.prototype.disable=function(){this._listener&&this._listener.remove();this._listener=null};h.prototype._handleKeydown=function(i){this._input.focus();return false};f.exports=h}),null);
__d("XFacebarBootloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="facebar_bootloader",i=h+"_",j={isRequested:false,isFocused:false,isInitialized:false,init:function k(l,m,n,o){__p&&__p();this.reset();this.subscriptions=new(c("SubscriptionsHandler"))();this.placeholder=n;this.searchInput=l;this.shortcutHandler=new(c("FacebarPlaceholderShortcut"))(l);this.loadingIndicator=m;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(c("Event").listen(l,"focus",function(){this.requestSearch();this.showLoadingIndicator()}.bind(this)),c("Event").listen(n,"mouseover",this.requestSearch.bind(this)),c("Event").listen(l,"invalid",function(event){return event.preventDefault()}));if(o)this.subscriptions.addSubscriptions(c("Event").listen(window,"load",this.requestSearch.bind(this)));c("Run").onUnload(this.reset.bind(this));this.isInitialized=true;if(l.value||c("getActiveElement")()==l){this.requestSearch();this.showLoadingIndicator()}},showLoadingIndicator:function k(){if(this.loadingIndicator)c("CSS").show(this.loadingIndicator)},reset:function k(){this.subscriptions&&this.subscriptions.release();this.shortcutHandler&&this.shortcutHandler.disable();this.searchInput=this.subscriptions=this.shortcutHandler=null;this.loadingIndicator=null;this.isRequested=false;this.isFocused=false;this.isInitialized=false},requestSearch:function k(){__p&&__p();if(c("getActiveElement")()==this.searchInput&&!this.isFocused){this.isFocused=true;this.focusTime=Date.now()}if(this.isRequested||!this.isInitialized)return;this.isRequested=true;var l=c("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),m=new(c("AsyncRequest"))();m.setURI(l).setMethod("GET").setReadOnly(true).setAllowCrossPageTransition(true).setErrorHandler(function(n){c("BanzaiODS").bumpEntityKey(h,i+"request_failed");if(n&&n.errorSummary)c("BanzaiODS").bumpEntityKey(h,i+"request_failed_"+n.errorSummary);else c("BanzaiODS").bumpEntityKey(h,i+"request_failed_no_error_summary");this.isRequested=false}).send()},setFocus:function k(l,m,n){__p&&__p();if(!this.searchInput)return;c("BanzaiODS").bumpEntityKey(h,i+"response_arrived");if(this.searchInput.value||this.isFocused){l.getCore().isFocused=true;l.getCore().input.setValue(n.fromString(this.searchInput.value),true);l.getCore().setStartTime(this.focusTime);m.focus();m.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart});m.togglePlaceHolder&&m.togglePlaceholder()}this.reset()}};f.exports=j}),null);
__d("FacebarStructuredFragment",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(k,l){if(k&&l)return k.toLowerCase()==l.toLowerCase();else return!k&&!l}var i=new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");function j(k){this._text=String(k.text);this._uid=k.uid?String(k.uid):null;this._type=k.type?String(k.type):null;this._typeParts=null;this._isLocal=Boolean(k.isLocal);this._categoryName=k.categoryName?k.categoryName:null}j.prototype.getText=function(){return this._text};j.prototype.getUID=function(){return this._uid};j.prototype.getType=function(){return this._type};j.prototype.getTypePart=function(k){return this._getTypeParts()[k]};j.prototype.getLength=function(){return this._text.length};j.prototype.isType=function(k){for(var l=0;l<arguments.length;l++)if(!h(arguments[l],this.getTypePart(l)))return false;return true};j.prototype.isLocal=function(){return this._isLocal};j.prototype.getCategoryName=function(){return this._categoryName};j.prototype.isWhitespace=function(){return/^\s*$/.test(this._text)};j.prototype.hasRTL=function(){return i.test(this._text)};j.prototype.toStruct=function(){return{text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName}};j.prototype.getHash=function(k){var l=k!=null?this._getTypeParts().slice(0,k).join(":"):this._type;return String(l)+"::"+this._text};j.prototype._getTypeParts=function(){var k=this._typeParts;if(k==null){k=this._type!=null?this._type.split(":"):[];this._typeParts=k}return k};f.exports=j}),null);
__d("FacebarStructuredText",["FacebarStructuredFragment","createArrayFromMixed"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=/\s+$/;function i(m){if(!m)return[];else if(m instanceof l)return m.toArray();else return c("createArrayFromMixed")(m).map(function(n){return new(c("FacebarStructuredFragment"))(n)})}function j(m){return new(c("FacebarStructuredFragment"))({text:m,type:"text"})}function k(m,n,o){var p=m.getText(),q=p.replace(n,o);if(p!=q)return new(c("FacebarStructuredFragment"))({text:q,type:m.getType(),uid:m.getUID()});else return m}function l(m){this._fragments=m||[];this._hash=null}l.prototype.matches=function(m,n){__p&&__p();if(m){var o=this._fragments,p=m._fragments;return o.length==p.length&&!o.some(function(q,r){var s=void 0;if(!n&&q.getUID())s=q.getUID()!=p[r].getUID();else s=q.getText()!=p[r].getText()||q.getType()!=p[r].getType();return s||q.isLocal()!=p[r].isLocal()})}return false};l.prototype.trim=function(){__p&&__p();var m=null,n=null;this.forEach(function(p,q){if(!p.isWhitespace()){if(m===null)m=q;n=q}});if(n!==null){var o=this._fragments.slice(m,n+1);o.push(k(o.pop(),h,""));return new l(o)}else return new l([])};l.prototype.pad=function(){var m=this.getFragment(-1);if(m&&!h.test(m.getText())&&m.getText()!=="")return new l(this._fragments.concat(j(" ")));else return this};l.prototype.forEach=function(m){this._fragments.forEach(m);return this};l.prototype.matchType=function(m){var n=null;for(var o=0;o<this._fragments.length;o++){var p=this._fragments[o],q=p.isType.apply(p,arguments);if(q&&!n)n=p;else if(q||!p.isWhitespace())return null}return n};l.prototype.hasType=function(m){var n=arguments;return this._fragments.some(function(o){return!o.isWhitespace()&&o.isType.apply(o,n)})};l.prototype.isLocal=function(){return this._fragments.some(function(m){return m.isLocal()})};l.prototype.getCategoryName=function(){var m=this._fragments.filter(function(n){return n.getCategoryName()});if(m.length>0)return m[0].getCategoryName();return null};l.prototype.endsOnType=function(m){var n=arguments,o=this._fragments[this._fragments.length-1];return!!o&&!o.isWhitespace()&&o.isType.apply(o,n)};l.prototype.isEmptyOrWhitespace=function(){return!this._fragments.some(function(m){return!m.isWhitespace()})};l.prototype.hasRTL=function(){return this._fragments.some(function(m){return m.hasRTL()})};l.prototype.isEmpty=function(){return this.getLength()===0};l.prototype.getFragment=function(m){return this._fragments[m>=0?m:this._fragments.length+m]};l.prototype.getCount=function(){return this._fragments.length};l.prototype.getLength=function(){return this._fragments.reduce(function(m,n){return m+n.getLength()},0)};l.prototype.toStruct=function(){return this._fragments.map(function(m){return m.toStruct()})};l.prototype.toArray=function(){return this._fragments.slice()};l.prototype.toString=function(){return this._fragments.map(function(m){return m.getText()}).join("")};l.prototype.getHash=function(){if(this._hash===null)this._hash=this._fragments.map(function(m){if(m.getUID())return"[["+m.getHash(1)+"]]";else return m.getText()}).join("");return this._hash};l.fromStruct=function(m){return new l(i(m))};l.fromString=function(m){return new l([j(m.toString())])};f.exports=l}),null);
__d("QueryHistory",[],(function a(b,c,d,e,f,g){var h={},i={set:function j(k,l){h[this._key(k)]=l},get:function j(k){return h[this._key(k)]},_key:function j(k){return"uri-"+k.getQualifiedURI().toString()}};f.exports=i}),null);
__d("FacebarNavigation",["csx","Arbiter","DOMQuery","FacebarBootloader","FacebarStructuredText","FlipDirection","Input","QueryHistory","URI"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=null,j=null,k=null,l=false,m=true,n=false;function o(r,s){if(!n)k=r;n=false;l=s;m=false;p()}function p(){__p&&__p();if(m)return;else if(j){l&&j.pageTransition();j.setPageQuery(k);m=true}else if(i&&k&&!c("Input").getValue(i))c("Input").setValue(i,k.structure.toString()+" ");if(i!=null){c("FlipDirection").setDirection(i);i.blur()}}c("Arbiter").subscribe("page_transition",function(r,s){if(!q.isTopControlTransition(s.uri)&&!q.isTimelineAbout(s.uri))o(c("QueryHistory").get(s.uri),true)});c("Arbiter").subscribe("save_facebar_query",function(r,s){n=true});var q={registerInput:function r(s){i=c("DOMQuery").scry(s,"._586f")[0];if(i==null)i=c("DOMQuery").scry(s,"._1frb")[0];p()},registerBehavior:function r(s){j=s;p()},setPageQuery:function r(s){c("QueryHistory").set(c("URI").getNextURI(),s);if(!(s.structure instanceof c("FacebarStructuredText")))s.structure=c("FacebarStructuredText").fromStruct(s.structure);o(s,false);c("FacebarBootloader").requestSearch()},isTopControlTransition:function r(s){return String(s.getPath()).startsWith("/search/")&&s.getQueryData().ref==="top_filter"&&!s.getQueryData().hard_refresh},isTimelineAbout:function r(s){return/\/about$/.test(s.getPath())&&!s.getQueryData().hard_refresh}};f.exports=q}),null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h=null,i=null,j={registerInput:function k(l,m){i=c("DOMQuery").scry(l,"input")[0];if(h)this._updateTitle(h,m);c("Arbiter").subscribe("page_transition",function(n,o){this._updateTitle(c("QueryHistory").get(o.uri))}.bind(this))},_updateTitle:function k(l,m){if(i){c("Input").setValue(i,l||"");i.setAttribute("singlestate",l&&m);i.blur()}},setPageTitle:function k(l,m){c("QueryHistory").set(c("URI").getNextURI(),l);if(i)this._updateTitle(l,m);else h=l;var n={};c("Arbiter").inform("search/updateNullState",n,c("Arbiter").BEHAVIOR_STATE)},setPageQuery:function k(l){c("Arbiter").inform("search/updateNullState",l,c("Arbiter").BEHAVIOR_STATE)}};f.exports=j}),null);
__d("XUIPageNavigationShim",["DOMContainer.react","React","isNode"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=function(){var m=0;return function(){return"XUIPageNavigationShim-"+m++}}();function k(m){__p&&__p();var n;if(m.children){n=m.children.map(function(p){if(typeof p==="object"&&typeof p.ctor==="function")return k(p);else if(c("isNode")(p))return c("React").createElement(c("DOMContainer.react"),{key:j()},p);else return p});if(n.length===1)n=n[0]}var o=m.ctor;return c("React").createElement(o,babelHelpers["extends"]({key:j()},m.props),n)}h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;l.prototype.render=function(){"use strict";return k(this.props)};function l(){"use strict";h.apply(this,arguments)}f.exports=l}),null);
__d("ISODateString",[],(function a(b,c,d,e,f,g){__p&&__p();var h={parseDateComponents:function i(j){var k=j.replace(/-|\+/g,""),l=k.length===10?2:0,m=j.indexOf("-")===0?-1:1;return{year:m*Number(k.substring(0,4+l)),month:Number(k.substring(4+l,6+l))||1,day:Number(k.substring(6+l,8+l))||1}},parseTimeComponents:function i(j){var k=j.replace(":","").replace(":",""),l=+k.substring(0,2)||0,m=+k.substring(2,4)||0,n=parseFloat(k.substring(4))||0,o=Math.floor(n),p=Math.floor(1e3*(n-o));return{hour:l,minute:m,second:o,millisecond:p}},parseTimezone:function i(j){if(!j||j==="Z")return 0;else{var k=j.replace(":",""),l=k[0]==="+"?1:-1,m=+k.substring(1,3)||0,n=+k.substring(3,5)||0;return l*(3600*m+60*n)}},parseComponents:function i(j){var k=j.indexOf("T"),l=k!==-1?Math.max(j.indexOf("+",k),j.indexOf("-",k)):-1,m=k!==-1?j.substring(0,k):j,n=void 0;if(l!==-1)n=j.substring(k+1,l);else if(k!==-1)n=j.substring(k+1);else n="";var o=l!==-1?j.substring(l):"";return babelHelpers["extends"]({},h.parseDateComponents(m),h.parseTimeComponents(n||""),{offset:h.parseTimezone(o)})}};f.exports=h}),null);
__d("parseISODate",["ISODateString"],(function a(b,c,d,e,f,g){function h(i){var j=c("ISODateString").parseComponents(i),k=j.year,l=j.month,m=j.day,n=j.hour,o=j.minute,p=j.second,q=j.millisecond,r=j.offset;return new Date(Date.UTC(k,l-1,m,n,o,p,q)-1e3*r)}f.exports=h}),null);