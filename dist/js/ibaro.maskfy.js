"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Maskfy=function(){function e(t){_classCallCheck(this,e),this.objectTag="string"==typeof t?t:t.tag,this.objectSize=t.size,this.objectMask=t.mask,this.objectReverse=t.reverse,this.init(this.objectTag)}return _createClass(e,[{key:"init",value:function(e){var t=this;document.querySelectorAll(e).forEach(function(e){t.paste(e),t.input(e),t.format(e)})}},{key:"input",value:function(e){var t=this;e.addEventListener("input",function(n){var i,a=e.value,s=a.length,o=t.objectMask||e.dataset.mask,r=o.length,l=t.objectSize||e.dataset.maskSize,c=a.replace(/\D/g,""),u=c.split(""),f=t.objectReverse||e.hasAttribute("data-mask-reverse");if(s>r&&u.pop(),f){/\d/.test(u[0])&&u.length>l&&"0"===u[0]&&u.shift();for(i in a.split(""))/\D/.test(o[r-i-1])&&u.splice(u.length-i,0,o[r-i-1]);"deleteContentBackward"===n.inputType&&(c.length<l&&u.unshift(0),/\D/.test(u[0])&&u.shift())}else{for(i in a.split(""))/\D/.test(o[i])&&u.splice(i,0,o[i]);if("deleteContentBackward"===n.inputType)for(i=u.length-1;i>=0;i--)/\D/.test(u[i])?u.pop():i=-1}e.value=u.join(""),"mobile"!==deviceType()&&"tablet"!==deviceType()||t.responsive(e)})}},{key:"paste",value:function(e){e.addEventListener("paste",function(e){return e.preventDefault()})}},{key:"format",value:function(e){for(var t=e.value.split(""),n=t.length,i=this.objectSize||e.dataset.maskSize||0,a=i;a>n;a--)t.unshift(0);e.value="",t.map(function(t){e.value+=t;var n=new MouseEvent("input");e.dispatchEvent(n)})}},{key:"responsive",value:function(e){setTimeout(function(){e.selectionStart=e.selectionEnd=e.value.length,e.focus()},0)}}]),e}();