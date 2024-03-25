import{_ as M}from"./toPropertyKey-NzAT2yhV.js";function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function N(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||M(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function n(e,t){for(var o=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return o+r}function O(e,t){var o,r;f(1,arguments);var a=N(e);if(isNaN(a.getTime()))throw new RangeError("Invalid time value");var s=String((o=t==null?void 0:t.format)!==null&&o!==void 0?o:"extended"),i=String((r=t==null?void 0:t.representation)!==null&&r!==void 0?r:"complete");if(s!=="extended"&&s!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(i!=="date"&&i!=="time"&&i!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var c="",d="",v=s==="extended"?"-":"",u=s==="extended"?":":"";if(i!=="time"){var m=n(a.getDate(),2),p=n(a.getMonth()+1,2),b=n(a.getFullYear(),4);c="".concat(b).concat(v).concat(p).concat(v).concat(m)}if(i!=="date"){var l=a.getTimezoneOffset();if(l!==0){var g=Math.abs(l),w=n(Math.floor(g/60),2),h=n(g%60,2),S=l<0?"+":"-";d="".concat(S).concat(w,":").concat(h)}else d="Z";var D=n(a.getHours(),2),y=n(a.getMinutes(),2),j=n(a.getSeconds(),2),x=c===""?"":"T",E=[D,y,j].join(u);c="".concat(c).concat(x).concat(E).concat(d)}return c}export{O as f};