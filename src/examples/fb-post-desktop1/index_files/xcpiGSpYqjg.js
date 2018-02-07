if (self.CavalryLogger) { CavalryLogger.start_js(["2I7lE"]); }

__d("AbstractDockingElement",["Arbiter","Event","Run","SubscriptionsHandler","onEnclosingPageletDestroy","queryThenMutateDOM","removeFromArray"],(function a(b,c,d,e,f,g){__p&&__p();var h=[],i=null;function j(){c("queryThenMutateDOM")(function(){return h.forEach(function(m){return m.queryDOM()})},function(){return h.forEach(function(m){return m.updateWithCache()})},"AbstractDockingElement")}function k(){if(!i){i=new(c("SubscriptionsHandler"))();i.addSubscriptions(c("Event").listen(window,"scroll",j),c("Event").listen(window,"resize",j),c("Run").onLeave(function(){while(h.length)l(h[0])}));i=i}return i}function l(m){__p&&__p();try{m.onPageletDestroyed&&c("Arbiter").unsubscribe(m.onPageletDestroyed)}catch(n){}finally{m.onPageletDestroyed=null}if(!i||h.indexOf(m)===-1)return;c("removeFromArray")(h,m);if(h.length)return;i.release();i=null}f.exports={register:function m(n,o,p){var i=k(),q={onPageletDestroyed:i.addSubscriptions(c("onEnclosingPageletDestroy")(n,function(){l(q)})),queryDOM:o,updateWithCache:p};h.push(q)}}}),null);
__d("DirectionalDockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","Scroll","Style","UITinyViewportAction","UserAgent","ViewportBounds","getElementPosition","getStyleProperty","queryThenMutateDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=true,j=false,k=c("UserAgent").isBrowser("Safari < 10")||c("UserAgent").isBrowser("Mobile Safari < 10");function l(m){"use strict";__p&&__p();this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement2=null;this.$DirectionalDockingElement7=false;this.$DirectionalDockingElement12=m;this.$DirectionalDockingElement8=0;this.$DirectionalDockingElement11=null;this.$DirectionalDockingElement13=0;this.register();this.$DirectionalDockingElement14=c("ViewportBounds").getTop();c("Style").set(this.$DirectionalDockingElement12,"width",this.$DirectionalDockingElement12.getBoundingClientRect().width+"px");this.$DirectionalDockingElement9=c("DOM").create("div");c("CSS").addClass(this.$DirectionalDockingElement9,"_lwx");c("Style").set(this.$DirectionalDockingElement9,"position","relative");c("DOM").replace(this.$DirectionalDockingElement12,this.$DirectionalDockingElement9);c("DOM").appendContent(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.update()}l.prototype.register=function(){"use strict";c("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};l.prototype.subscribe=function(event,m,n){"use strict";if(!this.$DirectionalDockingElement1)this.$DirectionalDockingElement1=new(c("Arbiter"))();return this.$DirectionalDockingElement1.subscribe(event,m,n)};l.prototype.destroy=function(){"use strict";c("DOM").replace(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12)};l.prototype.__queryDOM=function(){"use strict";__p&&__p();var m=-c("getElementPosition")(this.$DirectionalDockingElement9).y;if(m!==this.$DirectionalDockingElement13){this.$DirectionalDockingElement15=m>this.$DirectionalDockingElement13?j:i;this.$DirectionalDockingElement13=m}this.$DirectionalDockingElement6=this.$DirectionalDockingElement12.getBoundingClientRect();var n=document,o=n.body,p=n.documentElement;if(o&&p){var q=p.clientHeight,r=p.scrollHeight;this.$DirectionalDockingElement7=c("Scroll").getTop(o)+q>Math.max(q,r)}if(k){this.$DirectionalDockingElement11=c("getElementPosition")(this.$DirectionalDockingElement9);var s=parseInt(c("getStyleProperty")(this.$DirectionalDockingElement12,"left"),10);if(this.$DirectionalDockingElement11&&!isNaN(s)&&s!==this.$DirectionalDockingElement11.x)this.$DirectionalDockingElement11=babelHelpers["extends"]({},this.$DirectionalDockingElement11,{x:s})}if(this.$DirectionalDockingElement12.style.position==="fixed")this.$DirectionalDockingElement5=c("getElementPosition")(this.$DirectionalDockingElement12).y+this.$DirectionalDockingElement13};l.prototype.$DirectionalDockingElement16=function(m,n,o){"use strict";__p&&__p();if(n===this.$DirectionalDockingElement4&&m===this.$DirectionalDockingElement3&&o===this.$DirectionalDockingElement2)return;var p=m!==this.$DirectionalDockingElement3,q={};if(n!==this.$DirectionalDockingElement4){q.top=n+"px";this.$DirectionalDockingElement4=n}if(m!==this.$DirectionalDockingElement3){q.position=m;this.$DirectionalDockingElement3=m}if(k)if(o!==this.$DirectionalDockingElement2){q.left=typeof o==="number"?o+"px":"auto";this.$DirectionalDockingElement2=o}c("Style").apply(this.$DirectionalDockingElement12,q);if(p&&this.$DirectionalDockingElement1)this.$DirectionalDockingElement1.inform("changedposition")};l.prototype.$DirectionalDockingElement17=function(){"use strict";this.$DirectionalDockingElement16("fixed",this.$DirectionalDockingElement14,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null)};l.prototype.$DirectionalDockingElement18=function(){"use strict";this.$DirectionalDockingElement16("fixed",this.$DirectionalDockingElement8,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null)};l.prototype.$DirectionalDockingElement19=function(){"use strict";this.$DirectionalDockingElement16("absolute",this.$DirectionalDockingElement5,null)};l.prototype.unfixAndScrollBy=function(m){"use strict";this.$DirectionalDockingElement5=Math.max(0,this.$DirectionalDockingElement5-m);this.$DirectionalDockingElement19()};l.prototype.translateY=function(m){"use strict";var n=c("getElementPosition")(this.$DirectionalDockingElement12).y,o=c("getElementPosition")(this.$DirectionalDockingElement9).y,p=n-o;this.$DirectionalDockingElement5=m+p;this.$DirectionalDockingElement19()};l.prototype.__updateWithCache=function(){"use strict";__p&&__p();var m=Math.round(this.$DirectionalDockingElement6.height);if(m!==this.$DirectionalDockingElement10){c("Style").set(this.$DirectionalDockingElement9,"height",m+"px");this.$DirectionalDockingElement10=m;this.$DirectionalDockingElement1&&this.$DirectionalDockingElement1.inform("changedheight")}if(this.$DirectionalDockingElement7)return;if(this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<0||c("UITinyViewportAction").isTiny()){this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement19();c("Arbiter").inform("reflow");return}if(this.$DirectionalDockingElement15===j&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement8>=this.$DirectionalDockingElement5)this.$DirectionalDockingElement18();else if(this.$DirectionalDockingElement15===i&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=this.$DirectionalDockingElement5)this.$DirectionalDockingElement17();else this.$DirectionalDockingElement19();c("Arbiter").inform("reflow")};l.prototype.update=function(){"use strict";c("queryThenMutateDOM")(function(){this.__queryDOM()}.bind(this),function(){this.__updateWithCache()}.bind(this))};l.prototype.setOffset=function(m){"use strict";return this.setOffsetAndTop(m,this.$DirectionalDockingElement14)};l.prototype.setOffsetAndTop=function(m,n){"use strict";c("queryThenMutateDOM")(function(){this.__queryDOM();this.$DirectionalDockingElement8=Math.round(m);this.$DirectionalDockingElement14=n}.bind(this),function(){this.__updateWithCache()}.bind(this));return this};l.prototype.setTop=function(m){"use strict";return this.setOffsetAndTop(this.$DirectionalDockingElement8,m)};l.prototype.getPlaceholder=function(){"use strict";return this.$DirectionalDockingElement9};l.prototype.getRoot=function(){"use strict";return this.$DirectionalDockingElement12};f.exports=l}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UserAgent","UIGridColumnsConfig","UITinyViewportAction","getElementPosition","mixin"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=c("UserAgent").isBrowser("Safari")||c("UserAgent").isBrowser("Mobile Safari < 11");function j(k){__p&&__p();var l=arguments.length<=1||arguments[1]===undefined?false:arguments[1];"use strict";this.$DockingElement13=k;this.$DockingElement12=l;this.$DockingElement9=c("DOM").create("div");c("CSS").addClass(this.$DockingElement9,"_1pfm");c("Style").set(this.$DockingElement9,"position","relative");c("DOM").replace(this.$DockingElement13,this.$DockingElement9);c("DOM").appendContent(this.$DockingElement9,this.$DockingElement13);this.$DockingElement8=0;this.register();this.update()}j.prototype.register=function(){"use strict";c("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};j.prototype.subscribe=function(event,k,l){"use strict";if(!this.$DockingElement1)this.$DockingElement1=new(c("Arbiter"))();return this.$DockingElement1.subscribe(event,k,l)};j.prototype.__queryDOM=function(){"use strict";this.$DockingElement11=c("getElementPosition")(this.getPlaceholder());this.$DockingElement5=c("DOMDimensions").getElementDimensions(this.$DockingElement13)};j.prototype.__updateWithCache=function(){"use strict";__p&&__p();var k=this.$DockingElement8,l=this.getPlaceholder(),m=!c("UIGridColumnsConfig").responsive_rhc_when_narrow&&c("UITinyViewportAction").isTiny();if(!m&&this.$DockingElement11.y<=k){if(!this.$DockingElement7&&this.$DockingElement13.parentNode){c("CSS").addClass(this.$DockingElement13,"fixed_elem");this.$DockingElement7=true}var n;if(this.$DockingElement4!==k){n={};n.top=k+"px";this.$DockingElement4=k}var o=this.$DockingElement5.width;if(o!==this.$DockingElement3){if(!this.$DockingElement12){n=n||{};n.width=o+"px"}this.$DockingElement3=o}if(i){var p=this.$DockingElement11.x;if(p!==this.$DockingElement2){n=n||{};n.left=p+"px";this.$DockingElement2=p}}n&&c("Style").apply(this.$DockingElement13,n);var q=this.$DockingElement5.height;c("Style").set(l,"height",q+"px");if(q+1<this.$DockingElement10||q-1>this.$DockingElement10){this.$DockingElement10=q;this.$DockingElement1&&this.$DockingElement1.inform("changedheight")}}else if(this.$DockingElement7){c("Style").set(l,"height","");c("Style").apply(this.$DockingElement13,{left:"",top:"",width:""});c("CSS").removeClass(this.$DockingElement13,"fixed_elem");this.$DockingElement7=false;this.$DockingElement2=null;this.$DockingElement3=null;this.$DockingElement4=null}};j.prototype.update=function(){"use strict";this.__queryDOM();this.__updateWithCache()};j.prototype.getPlaceholder=function(){"use strict";return this.$DockingElement9};j.prototype.getRoot=function(){"use strict";return this.$DockingElement13};j.prototype.setOffset=function(k){"use strict";this.$DockingElement8=k;this.update();return this};f.exports=j}),null);
__d("StickyRHC",["csx","$","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","Run","SubscriptionsHandler","ViewportBounds","JSReliabilityFixesGatingConfig","ge","getElementPosition","getViewportDimensions","removeFromArray","throttle"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=35,j=[],k;function l(z,A){__p&&__p();if(!A||!A.dom_id){j.forEach(m);return}var B=c("$")(A.dom_id);for(var C=0;C<j.length;C++)if(c("DOMQuery").contains(j[C].getRoot(),B)){m(j[C]);return}}function m(z){__p&&__p();var A=z.getRoot(),B=z.updateOffset.bind(z),C=c("DOMQuery").scry(A,"img.img");C.forEach(function(D){if(D.complete||D.getAttribute("height")||D.naturalHeight===undefined&&D.naturalHeight!==0)return;var E=function E(){B();F.remove();G.remove();H.remove()},F=c("Event").listen(D,"load",E),G=c("Event").listen(D,"error",E),H=c("Event").listen(D,"abort",E)});B()}function n(){j.forEach(function(z){z.updateOffset()})}function o(){n();n()}function p(z){var A=c("DOMQuery").scry(z,"._4-u2"),B=c("DOMQuery").scry(z,"._4-u3"),C=c("DOMQuery").scry(z,".uiHeader"),D=c("DOMQuery").scry(z,".ego_unit");return[].concat(A,B,C,D).filter(function(E){return t(E)!==0})}function q(z){return c("getElementPosition")(z).y}function r(z,A){return z-A}function s(){return t(c("ge")("pageFooter"))}function t(z){return z?c("DOMDimensions").getElementDimensions(z).height:0}var u=v(n);function v(z){return function(A){return c("Arbiter").subscribe(A,z)}}function w(z,A){__p&&__p();var B=arguments.length<=2||arguments[2]===undefined?true:arguments[2],C=arguments.length<=3||arguments[3]===undefined?false:arguments[3];"use strict";this.$StickyRHC1=z;this.$StickyRHC2=A?new(c("DirectionalDockingElement"))(z):new(c("DockingElement"))(z,C);this.$StickyRHC3=B;this.$StickyRHC2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();m(this);if(!j.length){k=new(c("SubscriptionsHandler"))();k.addSubscriptions(u("header_loaded"),u("responsive_rhc_loaded"),u("browse_top_filters_full_width_displayed"),u("search_top_bar_displayed"),u("ad_home_pagelet_loaded"),c("Arbiter").subscribe("netego_loaded",l),c("Arbiter").subscribe("video_fullscreen_change",o),c("Event").listen(window,"resize",c("throttle")(n)))}c("Run").onLeave(function(){return this.destroy()}.bind(this));j.push(this)}w.getInstances=function(){"use strict";return j};w.prototype.getRoot=function(){"use strict";return this.$StickyRHC1};w.prototype.subscribe=function(event,z){"use strict";return this.$StickyRHC2.subscribe(event,z)};w.prototype.destroy=function(){"use strict";this.$StickyRHC2=null;c("removeFromArray")(j,this);if(!j.length&&k){k.release();k=null}};w.prototype.unfixAndScrollBy=function(z){"use strict";if(c("JSReliabilityFixesGatingConfig").should_get_fix)this.$StickyRHC2&&this.$StickyRHC2.unfixAndScrollBy(z);else this.$StickyRHC2.unfixAndScrollBy(z)};w.prototype.updateOffset=function(){"use strict";if(c("JSReliabilityFixesGatingConfig").should_get_fix)this.$StickyRHC2&&this.$StickyRHC2.setOffset(this.calculateRHCOffset());else this.$StickyRHC2.setOffset(this.calculateRHCOffset())};w.prototype.calculateRHCOffset=function(){"use strict";__p&&__p();var z=this.getRoot(),A=t(z),B=x(),C=y();if(A<C)return B;if(this.$StickyRHC3){var D=p(z).map(q).sort(r),E=A+q(z);for(var F=D,G=Array.isArray(F),H=0,F=G?F:F[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var I;if(G){if(H>=F.length)break;I=F[H++]}else{H=F.next();if(H.done)break;I=H.value}var J=I,K=E-J;if(K<C)return B-(A-K)}}return B-(A-C)};function x(){return c("ViewportBounds").getTop()}function y(){var z=x(),A=c("getViewportDimensions")().height,B=s();return A-z-i-B}f.exports=w}),null);
__d("FbFeedHighlight",["cx","CSS","DOM","DOMScroll","JSXDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=1e3,j=1e3,k=null;function l(){return c("JSXDOM").div({className:"_1usz"},c("JSXDOM").div({className:"_1us-"}),c("JSXDOM").div({className:"_1us_"}),c("JSXDOM").div({className:"_1ut0"}),c("JSXDOM").div({className:"_1ut1"}))}var m={highlightAndScrollTo:function n(o){m.highlightAndScrollToWithTime(o,j,0)},highlightAndScrollToWithTime:function n(o,p,q){m.highlightWithTime(o,p);m.scrollTo(o,q,0)},highlightSingle:function n(o){m.highlightSingleWithTime(o,j)},highlightSingleWithTime:function n(o,p){__p&&__p();var q=l();c("DOM").appendContent(o,q);setTimeout(function(){if(k)c("DOM").remove(k);k=q;c("CSS").addClass(o,"_1ut2")},0);setTimeout(function(){c("CSS").removeClass(o,"_1ut2");setTimeout(function(){c("DOM").remove(q);if(q==k)k=null},i+p)},i+p)},highlight:function n(o){m.highlightWithTime(o,j)},highlightWithTime:function n(o,p){var q=m.highlightPermanent(o);setTimeout(function(){c("CSS").removeClass(o,"_1ut2");setTimeout(c("DOM").remove.bind(null,q),i+i)},i+p)},highlightPermanent:function n(o){var p=l();c("DOM").appendContent(o,p);setTimeout(function(){c("CSS").addClass(o,"_1ut2")},0);return p},scrollTo:function n(o,p,q){setTimeout(function(){c("DOMScroll").scrollTo(o,750,false,false,p)},q)}};f.exports=m}),null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=false,j={likeContent:function k(){},like:function k(l,m){__p&&__p();this.likeContent=l;if(i)return;if(h)this.likeContent();else{var n=new(c("AsyncRequest"))().setURI("/like/confirm_like.php").setRelativeTo(m);c("AsyncDialog").send(n,function(o){i=true;o.subscribe("hide",this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m)}.bind(this))}return false},isShowingConfirmation:function k(){return i},onCloseLikeConfirmDialog:function k(){i=false},likeSkipConfirmation:function k(l){h=l;this.likeContent()}};f.exports=j}),null);