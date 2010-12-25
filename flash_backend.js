/*! fxCanvas v0.2(beta3) (20101225)  - Flash backend */
$Unit(__PATH__,__FILE__,function(d,q){$Import(d,"buz.fxcanvas.*","buz.util.*");q.createElement("canvas");q.createStyleSheet().cssText="canvas{display:inline-block;width:300px;height:150px;}";$Package("buz.fxcanvas.backend",function(m){function n(a){return a.replace(/[%&=\+]/g,function(b){if(b=="%")return"%25";else if(b=="&")return"%26";else if(b=="=")return"%3D";else if(b=="+")return"%2B"})}function p(a){a.getBackend("2d")._resize(a.width,a.height);p.oldWidth=a.width;p.oldHeight=a.height}var r=Array.prototype.slice,
z=function(){return this[this.length-1]};d.lastCanvasID=0;d.pageUUID=(+new Date).toString(36);d._HTMLCanvasElement={prototype:{getContext:function(a){return this.__getContext(a)},__getContext:function(a){return a==="2d"?this.__fx_context_2d:null},getBackend:function(a){return a==="2d"?this.__fx_context_2d._backend:null},toDataURL:function(a){var b=arguments,c=b.length==3?parseFloat(b[b.length-2]):0;b=b[b.length-1];var e=this.getBackend("2d"),f=a.toLowerCase();switch(f){case "image/png":case "image/jpeg":case "image/svg+xml":break;
default:b("data:,");return}e._invoke(["toDataURL",f,c,b]);return null},loadImage:function(){if(arguments.length){var a=r.call(arguments,0),b=this.getBackend("2d"),c=this,e=a.pop(),f=e.tagName?e.tagName.toUpperCase():"IMG",g=0,h,k=false,i;if(f=="IMG"){g=0;h=typeof e=="object"?e.src:e;id=typeof e=="object"?e.id:null;i=(k=h.substr(0,4).toLowerCase()=="data")?{nodeType:1,tagName:"img",readyState:"complete",width:0,height:0}:new Image}else if(f=="CANVAS"){g=1;i=e}else if(f=="VIDEO")g=2;if(k||g==1){if(k)i.src=
h;b._invoke(["_loadImage",g,i,function(j){if(g==0){i.width=j.width;i.height=j.height}typeof c.onload=="function"&&c.onload(i);a.length&&c.loadImage.apply(c,a)}])}else{if(id)i.id=id;i.onload=function(){b._invoke(["_loadImage",g,i,function(){typeof c.onload=="function"&&c.onload(i);a.length&&c.loadImage.apply(c,a)}])};i.src=h}}},loadFont:function(){},loadVideo:function(){}},toString:function(){return"[object HTMLCanvasElement]"},__w3c_fake:true};var A="z";m.FlashRenderingBackend2D=function(a){function b(){if(!c._idle)if(c._writeCount)c._writeCount=
0;else{c._flobject.FlashVars="l=0&c="+A;c._idle=true}}var c=this;this.canvas=a;this._stack=[];this._buf=[];this._queue=[];this._ext=a.__fx_context_2d;this.transformMatrix=null;this._resize=function(g,h){this._stack[this._stack.length]=["y",parseInt(g),parseInt(h),""].join("\u0001")};this._setup=function(g,h){this._flobject=g;this._fdur=null;this._frameDuration=h};this._init=function(){this._flobject.FlashVars="#=1";if(d.config.idleInterval)e=setInterval(b,d.config.idleInterval)};var e=null;this._idle=
false;this._writeCount=0;this._onframe=function(){if(this._stack.length){if(this._fdur!=this._frameDuration){this._fdur=this._frameDuration;this._stack[this._stack.length]=["@",this._fdur,""].join("\u0001")}this._stack[this._stack.length]="'";var g=0;this._buf[g++]="l=";this._buf[g++]=this._stack.length;this._buf[g++]="&c=";this._buf[g++]=this._stack.join("");this._flobject.FlashVars=this._buf.join("");this._stack=[];this._buf=[];this._idle=false;this._writeCount++}else this._flobject.FlashVars="l=0&c="};
this._clear=function(){this._stack=[];this._buf=[];this._flobject=null;clearInterval(e)};this._stateStack=[];var f=0;this._getStyleId=function(){return"s"+f++}};m.FlashRenderingBackend2D.prototype={canvas:null,clearRect:function(a,b,c,e){this._stack[this._stack.length]=["P",a,b,c,e,""].join("\u0001")},fillRect:function(a,b,c,e){this._setCompositing();this._setShadows();this._setFillStyle();this._stack[this._stack.length]=["Q",a,b,c,e,""].join("\u0001")},strokeRect:function(a,b,c,e){this._setCompositing();
this._setShadows();this._setStrokeStyle();this._setLineStyles();this._stack[this._stack.length]=["R",a,b,c,e,""].join("\u0001")},beginPath:function(){this._setTransformMatrix();this._stack[this._stack.length]="A"},closePath:function(){this._stack[this._stack.length]="K"},moveTo:function(a,b){this._stack[this._stack.length]=["B",a,b,""].join("\u0001")},lineTo:function(a,b){this._stack[this._stack.length]=["C",a,b,""].join("\u0001")},quadraticCurveTo:function(a,b,c,e){this._stack[this._stack.length]=
["D",a,b,c,e,""].join("\u0001")},bezierCurveTo:function(a,b,c,e,f,g){this._stack[this._stack.length]=["E",a,b,c,e,f,g,""].join("\u0001")},arcTo:function(a,b,c,e,f){f<0&&d.throwException("INDEX_SIZE_ERR");this._stack[this._stack.length]=["G",a,b,c,e,f,""].join("\u0001")},rect:function(a,b,c,e){this._stack[this._stack.length]=["H",a,b,c,e,""].join("\u0001")},arc:function(a,b,c,e,f,g){c<0&&d.throwException("INDEX_SIZE_ERR");this._stack[this._stack.length]=["F",a,b,c,e,f,g?"1":"0",""].join("\u0001")},
fill:function(){this._setCompositing();this._setShadows();this._setFillStyle();this._stack[this._stack.length]="J"},stroke:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._stack[this._stack.length]="I"},clip:function(){this._stack[this._stack.length]="x"},isPointInPath:function(a,b){this._stack[this._stack.length]=["n",a,b,""].join("\u0001");return false},isPointInPathBounds:function(){},getPathBounds:function(){},appendPath:function(a){this._stack[this._stack.length]=
a},drawFocusRing:function(){},drawImage:function(a,b,c,e,f,g,h,k,i){var j=arguments.length;if(b+e<1||c+f<1)d.throwException("INDEX_SIZE_ERR");if(g+k<1||h+i<1)d.throwException("INDEX_SIZE_ERR");s(a);this._setCompositing();this._setShadows();this._stack[this._stack.length]=["S",j,a._imageId,b,c,j>=5?[e,f].join("\u0001"):"",j==9?[g,h,k,i].join("\u0001"):"",""].join("\u0001")},createImageData:function(){if(arguments.length>1){isFinite(arguments[0])&&isFinite(arguments[0])||d.throwException("NOT_SUPPORTED_ERR");
arguments[0]&&arguments[0]||d.throwException("INDEX_SIZE_ERR");return new d.ImageData(arguments[0],arguments[1])}else{arguments[0]||d.throwException("NOT_SUPPORTED_ERR");return new d.ImageData(arguments[0])}},getImageData:function(a,b,c,e){var f;if(arguments.length==1){f=a.x;b=a.y;c=a.width;e=a.height}else f=a;isFinite(f)&&isFinite(b)&&isFinite(c)&&isFinite(e)||d.throwException("NOT_SUPPORTED_ERR");c&&e||d.throwException("INDEX_SIZE_ERR");this._stack[this._stack.length]=["l",f,b,c,e,""].join("\u0001")},
putImageData:function(a,b,c,e,f,g,h){d.assertImageDataIsValid(a);var k={data:a.__useCache?a.__cachedData||[]:[],toString:function(){return this.data.join("")}};if(!a.__useCache||a.__useCache&&!k.data.length){for(var i=[],j=0;j<256;j++)switch(j){case 0:case 37:case 38:case 43:case 61:i[j]=1;break;default:i[j]=0}for(j=0;j<a.data.length;j++){var l=a.data[j],o=l>>24&255,t=l>>16&255,u=l>>8&255;l=l&255;var v=i[o]<<1,w=i[t]<<2,x=i[u]<<3,y=i[l]<<4;k.data[j]=String.fromCharCode(v+w+x+y+1,o^v,t^w,u^x,l^y)}if(a.__useCache)a.__cachedData=
k.data}isFinite(b)&&isFinite(c)||d.throwException("NOT_SUPPORTED_ERR");this._stack[this._stack.length]=["o",arguments.length,a.width,a.height,k,b,c,""].join("\u0001");if(arguments.length>3){isFinite(arguments[1])&&isFinite(arguments[2])&&isFinite(arguments[3])||isFinite(arguments[4])&&isFinite(arguments[5])&&isFinite(arguments[6])||d.throwException("NOT_SUPPORTED_ERR");this._stack[this._stack.length]=[e,f,g,h,""].join("\u0001")}},createLinearGradient:function(a,b,c,e){var f=new d._CanvasGradient(this);
this._stack[this._stack.length]=["h",f.id,a,b,c,e,""].join("\u0001");return f},createRadialGradient:function(a,b,c,e,f,g){var h=new d._CanvasGradient(this);this._stack[this._stack.length]=["i",h.id,a,b,c,e,f,g,""].join("\u0001");return h},createPattern:function(a,b){s(a);switch(b){case "repeat":case undefined:case null:case "":b="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":break;default:d.throwException("SYNTAX_ERR")}var c=new d._CanvasPattern(this);this._stack[this._stack.length]=
["r",c.id,a._imageId,b,""].join("\u0001");return c},scale:function(a,b){this._stack[this._stack.length]=["T",a,b,""].join("\u0001")},rotate:function(a){this._stack[this._stack.length]=["U",a,""].join("\u0001")},translate:function(a,b){this._stack[this._stack.length]=["V",a,b,""].join("\u0001")},transform:function(a,b,c,e,f,g){this._stack[this._stack.length]=["W",a,b,c,e,f,g,""].join("\u0001")},setTransform:function(a,b,c,e,f,g){this._stack[this._stack.length]=["X",a,b,c,e,f,g,""].join("\u0001")},
save:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setFillStyle();this._setLineStyles();this._setFontStyles();this._stateStack.push({globalAlpha:this.globalAlpha,globalCompositeOperation:this.globalCompositeOperation,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,
font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this._stack[this._stack.length]="L"},restore:function(){if(this._stateStack.length>0){var a=this._stateStack.pop();this.globalAlpha=a.globalAlpha;this.globalCompositeOperation=a.globalCompositeOperation;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.miterLimit=a.miterLimit;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;
this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this._stack[this._stack.length]="M"},font:d.defProp.font,textAlign:d.defProp.textAlign,textBaseline:d.defProp.textBaseline,fillText:function(a,b,c,e){this._setCompositing();this._setShadows();this._setFillStyle();this._setFontStyles();this._stack[this._stack.length]=["s",a,b,c,e==undefined?4294967295:e,""].join("\u0001")},strokeText:function(a,b,c,e){this._setCompositing();
this._setShadows();this._setStrokeStyle();this._setLineStyles();this._setFontStyles();this._stack[this._stack.length]=["t",a,b,c,e==undefined?4294967295:e,""].join("\u0001")},measureText:function(a){this._stack[this._stack.length]=["m",a,""].join("\u0001")},lineWidth:d.defProp.lineWidth,lineCap:d.defProp.lineCap,lineJoin:d.defProp.lineJoin,miterLimit:d.defProp.miterLimit,strokeStyle:d.defProp.strokeStyle,fillStyle:d.defProp.fillStyle,globalAlpha:d.defProp.globalAlpha,globalCompositeOperation:d.defProp.globalCompositeOperation,
shadowOffsetX:d.defProp.shadowOffsetX,shadowOffsetY:d.defProp.shadowOffsetY,shadowBlur:d.defProp.shadowBlur,shadowColor:d.defProp.shadowColor,toDataURL:function(a,b){this._stack[this._stack.length]=["(",a,isFinite(b)&&b||0,""].join("\u0001")},_loadImage:function(a,b){var c=0,e=this.canvas._images;if(a==0)if(b._imageId>-1&&e[b._imageId]===b)return;if(a>0)c=b.__id;b._imageId=e.length;this.canvas._images.push(b);this._stack[this._stack.length]=["$",a,c,b._imageId,b.src?n(b.src):"none",""].join("\u0001")},
_invoke:function(a){var b=r.call(a,1,a.length-1),c=a[0];a=z.call(a);this._stack[this._stack.length]=["~",this._queue.length,c,""].join("\u0001");this._queue[this._queue.length]=[c,a];this[c].apply(this,b)},_ondata:function(a,b,c){switch(b){case "toDataURL":a=a.args;break;case "isPointInPath":a=a.args=="1"?true:false;break;case "measureText":a=a.args.split("\u0001");a=new d._TextMetrics(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));break;case "getImageData":var e=this._decodePixel(a,0);b=((e&
255)<<8)+(e>>24&255);e=((e>>16&255)<<8)+(e>>8&255);for(var f=Array(b*e),g=0;g<f.length;g++)f[g]=this._decodePixel(a,5+g*5);a=new d.ImageData(b,e,f);break;case "_loadImage":a=a.args.split("\u0001");a={type:a[0],width:a[1],height:a[2],url:a[3]};break;case "putImageData":default:a=null}c.call(this._ext,a)},_decodePixel:function(a,b){var c=a.args.charCodeAt(b),e=a.args.charCodeAt(b+1)^c&2,f=a.args.charCodeAt(b+2)^c&4,g=a.args.charCodeAt(b+3)^c&8;c=a.args.charCodeAt(b+4)^c&16;return(e<<24)+(f<<16)+(g<<
8)+c},dummy:function(){this._stack[this._stack.length]=")"},_viewImage:function(){this._stack[this._stack.length]="."},_saveImage:function(){this._stack[this._stack.length]=","},_setTransformMatrix:function(){},_setLineStyles:function(){this.lineWidth=this._ext.lineWidth;this.lineCap=this._ext.lineCap;this.lineJoin=this._ext.lineJoin;this.miterLimit=this._ext.miterLimit;this._stack[this._stack.length]=["c",this.lineWidth,"d",this.lineCap,"e",this.lineJoin,"f",this.miterLimit,""].join("\u0001")},_setFillStyle:function(){this.fillStyle=
this._ext.fillStyle;this._stack[this._stack.length]=["N",this.fillStyle.id||this.fillStyle.replace(/%/g,"%25"),""].join("\u0001")},_setStrokeStyle:function(){this.strokeStyle=this._ext.strokeStyle;this._stack[this._stack.length]=["O",this.strokeStyle.id||this.strokeStyle.replace(/%/g,"%25"),""].join("\u0001")},_setCompositing:function(){this.globalAlpha=this._ext.globalAlpha;this.globalCompositeOperation=this._ext.globalCompositeOperation;this._stack[this._stack.length]=["j",this.globalAlpha,"k",
this.globalCompositeOperation,""].join("\u0001")},_setShadows:function(){},_setFontStyles:function(){this.font=this._ext.font;this.textAlign=this._ext.textAlign;this.textBaseline=this._ext.textBaseline;this._stack[this._stack.length]=["u",this.font,"v",this.textAlign,"w",this.textBaseline,""].join("\u0001")},_lockBitmap:function(){this._stack[this._stack.length]="*"},_unlockBitmap:function(){this._stack[this._stack.length]="+"}};d._CanvasGradient=function(a){this.ctx=a;this.id=a._getStyleId(this)};
d._CanvasGradient.prototype={addColorStop:function(a,b){this.ctx._stack[this.ctx._stack.length]=["q",this.id,a,b,""].join("\u0001")}};d._CanvasPattern=function(a){this.ctx=a;this.id=a._getStyleId(this)};d._TextMetrics=function(a,b,c,e){this.width=a;this.height=b;this.ascent=c;this.descent=e};d.extendContext=function(){};d.initialize=function(){var a,b;d.swf_url=d.config.script_path+"fxcanvas.swf";a=new ActiveXObject("Microsoft.XMLHTTP");a.open("GET",d.swf_url,false);a.send(null);a=document.getElementsByTagName("canvas");
for(var c=0;c<a.length;c++){b=a[c];d.initElement(b);d.object.extend(b,d._HTMLCanvasElement.prototype)}};d.initElement=function(a){if(!a.getContext){var b=d.lastCanvasID++;__canvasElement[b]=a;__canvasElement[b].__id=b;var c,e;setTimeout(function(){d.initFlash(a,b,c,e)},1);var f=d.getCanvasParams(a);a.onload=f.onload;a.oncanvasframe=f.oncanvasframe;a.oncanvasresize=f.oncanvasresize;a.width=f.width||300;a.height=f.height||150;if(!f.id)a.id=d.getCanvasUUID();c=a.width;e=a.height;(a.__fx_context_2d=new d.extCanvasRenderingContext2D(a,
null))._backend=new m.FlashRenderingBackend2D(a);a._data={args:"",data:"",toString:function(){return this.data}};a._images=[];w3c(a);a._fscmd=function(g){var h=this.getBackend("2d");if(g>-1){var k=h._queue[g];h._ondata(this._data,k[0],k[1]);h._queue[g]=null}else if(g=="#")h._init();else if(g=="^")this._data.args=="2"&&a.oncanvasresize&&this.oncanvasresize();else g=="!"?d.throwError(this._data.args):d.throwError("Unknown command "+g);this.oncanvasframe&&this.oncanvasframe(0);h._onframe()};return a}};
d.initFlash=function(a,b,c,e){width=a.width;height=a.height;var f=a.currentStyle,g=width,h=height;if(f&&f.width!="300px")g=parseInt(f.width);if(f&&f.height!="150px")h=parseInt(f.height);var k=Math.abs(parseInt(a.frameDuration||d.config.frameDuration)),i=d.config.viewImageURL.substr(0,4)==="http"?d.config.viewImageURL:d.config.script_path+d.config.viewImageURL,j=d.config.saveAsURL.substr(0,4)==="http"?d.config.saveAsURL:d.config.script_path+d.config.saveAsURL;g=[width,height,g,h,k,b,d.pageUUID,n(location.protocol+
"//"+location.hostname),n(i),n(j),n(d.config.imageProxy)].join("\u0001");b=['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  width="',width,'" height="',height,'"  id="__fx_canvas_',b,'"><param name="allowScriptAccess" value="always"><param name="movie" value="',d.swf_url,'"><param name="quality" value="high"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="scale" value="noscale"><param name="FlashVars" value="c=',g,'"></object><script id=__fscmd_hdlr_',
b," event=FSCommand(cmd,args) for=__fx_canvas_",b,">if(__canvasElement){__canvasElement[",b,"]._data.args=args;__canvasElement[",b,"]._fscmd(cmd);}<\/script>"].join("");a.innerHTML=b;var l=a.firstChild;if(f&&f.width!="300px")l.style.width=f.width;if(f&&f.height!="150px")l.style.height=f.height;a.style.width=width+"px";a.style.height=height+"px";if(c!=width||e!=height)a.oncanvasresize&&a.oncanvasresize();a.getBackend("2d")._setup(l,k);c={view:function(){a.getBackend("2d")._viewImage()},save_as:function(){a.getBackend("2d")._saveImage()},
about:function(){window.location=d.config.projectURL}};a.contextMenu=d.config.contextMenu?new d.ContextMenu(d.config.contextMenu,c):null;l.style.cursor="default";a._onContextMenu=function(o){a.contextMenu&&a.contextMenu.show(o.x,o.y);return false};a._onMouseDown=function(){l.focus()};a._onCanvasEnter=function(){l.style.cursor=a.style.cursor;a.setCapture(true);if(a.contextMenu){document.attachEvent("oncontextmenu",a._onContextMenu);document.attachEvent("onmousedown",a._onMouseDown)}};a._onCanvasLeave=
function(){l.style.cursor="none";a.releaseCapture();if(a.contextMenu){document.detachEvent("oncontextmenu",a._onContextMenu);document.detachEvent("onmousedown",a._onMouseDown)}};a.attachEvent("onmouseenter",a._onCanvasEnter);a.attachEvent("onmouseleave",a._onCanvasLeave);a.attachEvent("onpropertychange",d.onPropertyChange);l.attachEvent("onfocus",d.onFocus)};d.onPropertyChange=function(a){var b=a.propertyName,c,e;switch(b){case "width":case "height":case "frameDuration":case "style.cursor":case "style.width":case "style.height":c=
a.srcElement;e=c.getBackend("2d")}if(b=="width"||b=="height"){a=parseInt(c[b]);if(isNaN(a)||a<0)a=b=="width"?300:150;e._flobject[b]=a;clearTimeout(c._resizeIntId);c._resizeIntId=setTimeout(function(){p(c)},1)}else if(b=="frameDuration"){b=Math.abs(parseInt(c.frameDuration));e._frameDuration=b}else if(b=="style.cursor")e._flobject.style.cursor=c.style.cursor;else if(b=="style.width")e._flobject.style.width=c.style.width;else if(b=="style.height")e._flobject.style.height=c.style.height};d.onFocus=function(a){a=
a.srcElement;var b=a.parentNode;a.blur();b.focus()};d.onUnload=function(){window.detachEvent("onbeforeunload",d.onUnload);for(var a=0,b=window.__canvasElement.length;a<b;a++){var c=window.__canvasElement[a],e=c.getBackend("2d"),f=e._flobject,g;for(g in c)if(typeof c[g]==="function")c[g]=null;c._data=null;c.detachEvent("onpropertychange",d.onPropertyChange);try{c.detachEvent("onmouseenter",c._onCanvasEnter);c.detachEvent("onmouseleave",c._onCanvasLeave);f.detachEvent("onfocus",d.onFocus);document.detachEvent("onmousedown",
c._onMouseDown);document.detachEvent("oncontextmenu",c._onContextMenu)}catch(h){}e._clear()}window.CanvasRenderingContext2D=null;window.CanvasGradient=null;window.CanvasPattern=null;window.TextMetrics=null;window.HTMLCanvasElement=null;window.DOMException=null;window.__canvasElement=null};d._HTMLCanvasElement.__IElementConstructor=function(a){return d.initElement(a)};var s=function(a){var b=a&&a.tagName&&a.tagName.toUpperCase()||null;if(!a||a.nodeType!=1||!b)d.throwException("TYPE_MISMATCH_ERR");
b in{IMG:true,CANVAS:true}||d.throwException("TYPE_MISMATCH_ERR");a.readyState!="complete"&&d.throwException("INVALID_STATE_ERR");b==="IMG"&&!("_imageId"in a)&&d.throwException("INVALID_STATE_ERR")};window.HTMLCanvasElement=d._HTMLCanvasElement;window.CanvasRenderingContext2D=m.FlashRenderingBackend2D;window.CanvasGradient=d._CanvasGradient;window.CanvasPattern=d._CanvasPattern;window.TextMetrics=d._TextMetrics;window.DOMException=d.DOMException;window.__canvasElement=[];m.extendContext=d.extendContext;
m.initialize=d.initialize;m.initElement=d.initElement;window.attachEvent("onbeforeunload",d.onUnload)})});
