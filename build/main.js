!function(){"use strict";function d(e,o,u,d){return new(u=u||Promise)(function(n,t){function r(e){try{i(d.next(e))}catch(e){t(e)}}function a(e){try{i(d.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,a)}i((d=d.apply(e,o||[])).next())})}function m(r,a){var i,o,u,d={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(n){return function(e){var t=[n,e];if(i)throw new TypeError("Generator is already executing.");for(;d;)try{if(i=1,o&&(u=2&t[0]?o.return:t[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,t[1])).done)return u;switch(o=0,(t=u?[2&t[0],u.value]:t)[0]){case 0:case 1:u=t;break;case 4:return d.label++,{value:t[1],done:!1};case 5:d.label++,o=t[1],t=[0];continue;case 7:t=d.ops.pop(),d.trys.pop();continue;default:if(!(u=0<(u=d.trys).length&&u[u.length-1])&&(6===t[0]||2===t[0])){d=0;continue}if(3===t[0]&&(!u||t[1]>u[0]&&t[1]<u[3])){d.label=t[1];break}if(6===t[0]&&d.label<u[1]){d.label=u[1],u=t;break}if(u&&d.label<u[2]){d.label=u[2],d.ops.push(t);break}u[2]&&d.ops.pop(),d.trys.pop();continue}t=a.call(r,d)}catch(e){t=[6,e],o=0}finally{i=u=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(1<e?"s":"")+" required, but only "+t.length+" present")}function f(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function w(e){if(h(1,arguments),function(e){return h(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}(e)||"number"==typeof e)return e=f(e),!isNaN(Number(e))}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function n(t){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=e.width?String(e.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}var u={date:n({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:n({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function e(a){return function(e,t){var n,t=t||{},r=(t="formatting"===(t.context?String(t.context):"standalone")&&a.formattingValues?(r=a.defaultFormattingWidth||a.defaultWidth,n=t.width?String(t.width):r,a.formattingValues[n]||a.formattingValues[r]):(n=a.defaultWidth,r=t.width?String(t.width):a.defaultWidth,a.values[r]||a.values[n]),a.argumentCallback?a.argumentCallback(e):e);return t[r]}}function t(i){return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.width,r=n&&i.matchPatterns[n]||i.matchPatterns[i.defaultMatchWidth],r=e.match(r);if(!r)return null;var a=r[0],r=n&&i.parsePatterns[n]||i.parsePatterns[i.defaultParseWidth],n=Array.isArray(r)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return}(r,function(e){return e.test(a)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n;return}(r,function(e){return e.test(a)}),r=i.valueCallback?i.valueCallback(n):n;return{value:r=t.valueCallback?t.valueCallback(r):r,rest:e.slice(a.length)}}}var l,b={code:"en-US",formatDistance:function(e,t,n){e=r[e],e="string"==typeof e?e:1===t?e.one:e.other.replace("{{count}}",t.toString());return null!=n&&n.addSuffix?n.comparison&&0<n.comparison?"in "+e:e+" ago":e},formatLong:u,formatRelative:function(e,t,n,r){return c[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),e=n%100;if(20<e||e<10)switch(e%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:e({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:e({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:e({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:e({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:e({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.match(l.matchPattern);if(!n)return null;var n=n[0],r=e.match(l.parsePattern);if(!r)return null;r=l.valueCallback?l.valueCallback(r[0]):r[0];return{value:r=t.valueCallback?t.valueCallback(r):r,rest:e.slice(n.length)}}),era:t({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:t({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:t({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:t({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:t({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){if(null===e||!0===e||!1===e)return NaN;e=Number(e);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(e,t){return h(2,arguments),function(e,t){return h(2,arguments),e=f(e).getTime(),t=g(t),new Date(e+t)}(e,-g(t))}function o(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var a={y:function(e,t){e=e.getUTCFullYear(),e=0<e?e:1-e;return o("yy"===t?e%100:e,t.length)},M:function(e,t){e=e.getUTCMonth();return"M"===t?String(e+1):o(e+1,2)},d:function(e,t){return o(e.getUTCDate(),t.length)},a:function(e,t){var n=1<=e.getUTCHours()/12?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return o(e.getUTCHours()%12||12,t.length)},H:function(e,t){return o(e.getUTCHours(),t.length)},m:function(e,t){return o(e.getUTCMinutes(),t.length)},s:function(e,t){return o(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,e=e.getUTCMilliseconds();return o(Math.floor(e*Math.pow(10,n-3)),t.length)}};function s(e){h(1,arguments);var e=f(e),t=e.getUTCDay(),t=(t<1?7:0)+t-1;return e.setUTCDate(e.getUTCDate()-t),e.setUTCHours(0,0,0,0),e}function p(e){h(1,arguments);var e=f(e),t=e.getUTCFullYear(),n=new Date(0),n=(n.setUTCFullYear(t+1,0,4),n.setUTCHours(0,0,0,0),s(n)),r=new Date(0),r=(r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0),s(r));return e.getTime()>=n.getTime()?t+1:e.getTime()>=r.getTime()?t:t-1}function y(e){h(1,arguments);e=f(e),e=s(e).getTime()-function(e){h(1,arguments);var e=p(e),t=new Date(0);return t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0),s(t)}(e).getTime();return Math.round(e/6048e5)+1}function k(e,t){h(1,arguments);var t=t||{},n=t.locale,n=n&&n.options&&n.options.weekStartsOn,n=null==n?0:g(n),n=null==t.weekStartsOn?n:g(t.weekStartsOn);if(!(0<=n&&n<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");t=f(e),e=t.getUTCDay(),e=(e<n?7:0)+e-n;return t.setUTCDate(t.getUTCDate()-e),t.setUTCHours(0,0,0,0),t}function T(e,t){h(1,arguments);var e=f(e,t),n=e.getUTCFullYear(),r=t||{},a=r.locale,a=a&&a.options&&a.options.firstWeekContainsDate,a=null==a?1:g(a),a=null==r.firstWeekContainsDate?a:g(r.firstWeekContainsDate);if(!(1<=a&&a<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var r=new Date(0),r=(r.setUTCFullYear(n+1,0,a),r.setUTCHours(0,0,0,0),k(r,t)),i=new Date(0),a=(i.setUTCFullYear(n,0,a),i.setUTCHours(0,0,0,0),k(i,t));return e.getTime()>=r.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function A(e,t){h(1,arguments);e=f(e),e=k(e,t).getTime()-function(e,t){h(1,arguments);var n=null==(n=(n=(r=t||{}).locale)&&n.options&&n.options.firstWeekContainsDate)?1:g(n),n=null==r.firstWeekContainsDate?n:g(r.firstWeekContainsDate),r=T(e,t),e=new Date(0);return e.setUTCFullYear(r,0,n),e.setUTCHours(0,0,0,0),k(e,t)}(e,t).getTime();return Math.round(e/6048e5)+1}var P="midnight",C="noon",M="morning",D="afternoon",x="evening",U="night";function S(e,t){var n=0<e?"-":"+",e=Math.abs(e),r=Math.floor(e/60),e=e%60;if(0==e)return n+String(r);t=t||"";return n+String(r)+t+o(e,2)}function I(e,t){return e%60!=0?i(e,t):(0<e?"-":"+")+o(Math.abs(e)/60,2)}function i(e,t){var t=t||"",n=0<e?"-":"+",e=Math.abs(e);return n+o(Math.floor(e/60),2)+t+o(e%60,2)}var W={G:function(e,t,n){var r=0<e.getUTCFullYear()?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){var r;return"yo"===t?(r=e.getUTCFullYear(),n.ordinalNumber(0<r?r:1-r,{unit:"year"})):a.y(e,t)},Y:function(e,t,n,r){e=T(e,r),r=0<e?e:1-e;return"YY"!==t?"Yo"===t?n.ordinalNumber(r,{unit:"year"}):o(r,t.length):o(r%100,2)},R:function(e,t){return o(p(e),t.length)},u:function(e,t){return o(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return o(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return o(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return a.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return o(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){e=A(e,r);return"wo"===t?n.ordinalNumber(e,{unit:"week"}):o(e,t.length)},I:function(e,t,n){e=y(e);return"Io"===t?n.ordinalNumber(e,{unit:"week"}):o(e,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):a.d(e,t)},D:function(e,t,n){e=function(e){h(1,arguments);var e=f(e),t=e.getTime(),e=(e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0),e.getTime());return Math.floor((t-e)/864e5)+1}(e);return"Do"===t?n.ordinalNumber(e,{unit:"dayOfYear"}):o(e,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return o(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return o(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return o(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=1<=e.getUTCHours()/12?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var e=e.getUTCHours(),r=12===e?C:0===e?P:1<=e/12?"pm":"am";switch(t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var e=e.getUTCHours(),r=17<=e?x:12<=e?D:4<=e?M:U;switch(t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){var r;return"ho"===t?(r=e.getUTCHours()%12,n.ordinalNumber(r=0===r?12:r,{unit:"hour"})):a.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):a.H(e,t)},K:function(e,t,n){e=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(e,{unit:"hour"}):o(e,t.length)},k:function(e,t,n){e=e.getUTCHours();return 0===e&&(e=24),"ko"===t?n.ordinalNumber(e,{unit:"hour"}):o(e,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):a.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):a.s(e,t)},S:function(e,t){return a.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return I(a);case"XXXX":case"XX":return i(a);default:return i(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return I(a);case"xxxx":case"xx":return i(a);default:return i(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+i(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+i(a,":")}},t:function(e,t,n,r){r=r._originalDate||e;return o(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,r){return o((r._originalDate||e).getTime(),t.length)}};function Y(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var q={p:N,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1];if(!(r=r[2]))return Y(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,t)).replace("{{time}}",N(r,t))}};var E=["D","DD"],O=["YY","YYYY"];function F(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,j=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L=/^'([^]*?)'?$/,z=/''/g,B=/[a-zA-Z]/;function Q(r,a,e){h(2,arguments);var l=String(a),i=e||{},o=i.locale||b,e=o.options&&o.options.firstWeekContainsDate,e=null==e?1:g(e),e=null==i.firstWeekContainsDate?e:g(i.firstWeekContainsDate);if(!(1<=e&&e<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var t=o.options&&o.options.weekStartsOn,t=null==t?0:g(t),t=null==i.weekStartsOn?t:g(i.weekStartsOn);if(!(0<=t&&t<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var n=f(r);if(!w(n))throw new RangeError("Invalid time value");u=n,(d=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds(),u.getMilliseconds()))).setUTCFullYear(u.getFullYear());var u,d,s=v(n,u.getTime()-d.getTime()),c={firstWeekContainsDate:e,weekStartsOn:t,locale:o,_originalDate:n};return l.match(j).map(function(e){var t=e[0];return"p"!==t&&"P"!==t?e:(0,q[t])(e,o.formatLong,c)}).join("").match(H).map(function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(L)[1].replace(z,"'");var n=W[t];if(n)return i.useAdditionalWeekYearTokens||-1===O.indexOf(e)||F(e,a,r),i.useAdditionalDayOfYearTokens||-1===E.indexOf(e)||F(e,a,r),n(s,e,o.localize,c);if(t.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e}).join("")}function G(e){return isNaN(e.valueOf())?"":Q(e,"MM-dd-yyyy")}function X(e){return isNaN(e.valueOf())?"":Q(e,"MMMM do, yyyy")}var R="Archived Notes",K=R+"::";function $(e,i){var o,u;return d(this,void 0,void 0,function(){var t,n,r,a;return m(this,function(e){switch(e.label){case 0:return[4,function(){var i,o;return d(this,void 0,void 0,function(){var t,n,r,a;return m(this,function(e){switch(e.label){case 0:return t=new Date,n=G(t),[4,null===(i=null===(i=window.roamAlphaAPI.q('[:find ?attr-uid :in $ ?page-uid\n      :where [?p :block/uid ?page-uid]\n             [?p :block/children ?c]\n             [?a :node/title "'+R+'"]\n             [?c :block/refs ?a]\n             [?c :block/uid ?attr-uid]]',n))||void 0===i?void 0:i[0])||void 0===i?void 0:i[0]];case 1:return(r=e.sent())?[3,7]:[4,null===(o=null===(i=window.roamAlphaAPI.q('\n    [:find ?e :where [?e :block/uid "10-10-21"]]\n    '))||void 0===i?void 0:i[0])||void 0===o?void 0:o[0]];case 2:return e.sent()?[3,4]:(a=X(t),[4,window.roamAlphaAPI.data.page.create({page:{uid:n,title:a}})]);case 3:e.sent(),e.label=4;case 4:return r=window.roamAlphaAPI.util.generateUID(),[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":n,order:0},block:{string:K,uid:r,open:!1}})];case 5:return e.sent(),[4,window.roamAlphaAPI.data.block.update({block:{uid:r,open:!1}})];case 6:e.sent(),e.label=7;case 7:return[2,r]}})})}()];case 1:return t=e.sent(),[4,null===(o=null===(o=window.roamAlphaAPI.q("[:find (pull ?e [:block/uid :node/title]) :in $ ?child-uid :where [?c :block/uid ?child-uid] [?c :block/parents ?e] [?e :block/children ?c]]",i))||void 0===o?void 0:o[0])||void 0===o?void 0:o[0]];case 2:return n=e.sent(),r=null!=n&&n.title?"[["+n.title+"]]":"(("+n.uid+"))",[4,null===(u=null===(o=window.roamAlphaAPI.q("[:find ?uid :in $ ?archived-attr-uid ?ref-uid :where [?a :block/uid ?archived-attr-uid] [?a :block/children ?c] [?r :block/uid ?ref-uid] [?c :block/refs ?r] [?c :block/uid ?uid]]",t,n.uid))||void 0===o?void 0:o[0])||void 0===u?void 0:u[0]];case 3:return(a=e.sent())?[3,5]:(a=window.roamAlphaAPI.util.generateUID(),[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":t,order:-1},block:{uid:a,string:r}})]);case 4:e.sent(),e.label=5;case 5:return[4,window.roamAlphaAPI.data.block.move({location:{"parent-uid":a,order:-1},block:{uid:i}})];case 6:return e.sent(),[2]}})})}function _(e,i){return d(this,void 0,void 0,function(){var t,n,r,a;return m(this,function(e){switch(e.label){case 0:return t=window.roamAlphaAPI.util.generateUID(),[4,window.roamAlphaAPI.q("[:find ?parent-uid ?old-order :in $ ?child-uid :where [?b :block/uid ?child-uid] [?b :block/parents ?p] [?p :block/children ?b] [?p :block/uid ?parent-uid] [?b :block/order ?old-order]]",i)[0]];case 1:return r=e.sent(),n=r[0],r=r[1],[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":n,order:r},block:{string:"Refactor: (("+i+"))",uid:t}})];case 2:return e.sent(),[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":t,order:0},block:{string:"",uid:window.roamAlphaAPI.util.generateUID()}})];case 3:return e.sent(),a=window.roamAlphaAPI.util.generateUID(),[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":t,order:1},block:{string:"Notes",uid:a,open:!1}})];case 4:return e.sent(),[4,window.roamAlphaAPI.data.block.move({location:{"parent-uid":a,order:0},block:{uid:i}})];case 5:return e.sent(),window.roamAlphaAPI.ui.rightSidebar.addWindow({window:{type:"block","block-uid":a}}),[2]}})})}function J(){var e=null===(e=document.getElementsByClassName("block-highlight-blue"))||void 0===e?void 0:e[0];return e?function(e){var t=[];for(e=e.parentNode.firstElementChild;e;)3!==e.nodeType&&(t.push(e),e=e.nextElementSibling);return t}(e).filter(function(e){return e.classList.contains("rm-block")&&e.classList.contains("block-highlight-blue")}).map(function(e){return(e=(e=e).querySelectorAll("div[id^='block-input-']")[0].id).substring(e.length-9,e.length)}):[]}function V(i){var o;return d(this,void 0,void 0,function(){var t,n,r,a;return m(this,function(e){switch(e.label){case 0:if(!(n=J()).length){if(!(t=null===(o=window.roamAlphaAPI.ui.getFocusedBlock())||void 0===o?void 0:o["block-uid"]))return[2];n=[t]}t=0,n=n,e.label=1;case 1:return t<n.length?(r=n[t],[4,window.roamAlphaAPI.q("[:find ?page-uid :in $ ?block-uid :where [?b :block/uid ?block-uid] [?b :block/page ?p] [?p :block/uid ?page-uid]]",r)[0][0]]):[3,5];case 2:return a=e.sent(),[4,i(a,r)];case 3:e.sent(),e.label=4;case 4:return t++,[3,1];case 5:return[2]}})})}console.log("Initializing keyboard shortcuts"),document.addEventListener("keydown",function(e){e.ctrlKey&&e.shiftKey&&"Backspace"===e.code?V($):e.ctrlKey&&e.shiftKey&&"KeyX"===e.code&&V(_)}),function(){d(this,void 0,void 0,function(){var t=this;return m(this,function(e){return document.addEventListener("keydown",function(o){return d(t,void 0,void 0,function(){var t,n,r,a,i;return m(this,function(e){switch(e.label){case 0:return o.ctrlKey&&o.altKey&&"KeyW"===o.code?(o.preventDefault(),[4,null===(r=window.roamAlphaAPI.ui.getFocusedBlock())||void 0===r?void 0:r["block-uid"]]):[3,2];case 1:return function(s){var h;d(this,void 0,void 0,function(){var t,n,r,a,i,o,u,d,c,l;return m(this,function(e){switch(e.label){case 0:return window.roamAlphaAPI.data.block.update({block:{uid:s,open:!1}}),[4,null===(h=null===(h=window.roamAlphaAPI.q("[:find (pull ?e [:block/string :block/children :block/order :block/uid {:block/_refs 2} {:block/children 2}]) :in $ ?uid :where [?e :block/uid ?uid]]",s))||void 0===h?void 0:h[0])||void 0===h?void 0:h[0]];case 1:return t=e.sent(),n=t.string,[4,window.roamAlphaAPI.data.block.update({block:{uid:s,string:"[["+n+"]]"}})];case 2:return e.sent(),[4,window.roamAlphaAPI.q('[:find ?uid :where [?e :node/title "'+n+'"] [?e :block/uid ?uid]]')[0][0]];case 3:if(r=e.sent(),null==t||!t.children)return[3,7];a=0,i=null==t?void 0:t.children,e.label=4;case 4:return a<i.length?(o=i[a],c=o.uid,o=o.order,[4,window.roamAlphaAPI.data.block.move({location:{"parent-uid":r,order:o},block:{uid:c}})]):[3,7];case 5:e.sent(),e.label=6;case 6:return a++,[3,4];case 7:if(null==(o=t._refs)||!o.length)return[3,11];u=0,d=o,e.label=8;case 8:return u<d.length?(c=d[u],l=c.string.replaceAll("(("+t.uid+"))","[["+t.string+"]]"),[4,window.roamAlphaAPI.data.block.update({block:{uid:c.uid,string:l}})]):[3,11];case 9:e.sent(),e.label=10;case 10:return u++,[3,8];case 11:return[2]}})})}(n=e.sent()),[3,8];case 2:return o.ctrlKey&&o.altKey&&"KeyQ"===o.code?(t="",[4,null===(r=window.roamAlphaAPI.ui.getFocusedBlock())||void 0===r?void 0:r["block-uid"]]):[3,8];case 3:return(n=e.sent())?[4,null===(a=null===(a=window.roamAlphaAPI.q("[:find ?uid :in $ ?block-uid :where [?b :block/uid ?block-uid] [?b :block/page ?p] [?p :block/uid ?uid]]",n))||void 0===a?void 0:a[0])||void 0===a?void 0:a[0]]:[3,5];case 4:return t=e.sent(),[3,7];case 5:return[4,window.roamAlphaAPI.ui.mainWindow.getOpenPageOrBlockUid()];case 6:t=e.sent(),console.log(t),e.label=7;case 7:if(console.log("ASDF"),a=/^(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])\-\d{4}$/,!t||null!==(i=t.match(a))&&void 0!==i&&i.length)return[2];!function(h){var f;d(this,void 0,void 0,function(){var t,n,r,a,i,o,u,d,c,l,s;return m(this,function(e){switch(e.label){case 0:return t=new Date,t=G(t),[4,null===(f=null===(f=window.roamAlphaAPI.q("[:find (pull ?e [:node/title :block/string :block/children :block/order :block/uid {:block/_refs 2} {:block/children 2}]) :in $ ?uid :where [?e :block/uid ?uid]]",h))||void 0===f?void 0:f[0])||void 0===f?void 0:f[0]];case 1:return n=e.sent(),o=n.title,r=window.roamAlphaAPI.util.generateUID(),[4,window.roamAlphaAPI.data.block.create({location:{"parent-uid":t,order:-1},block:{uid:r,string:o}})];case 2:if(e.sent(),null==n||!n.children)return[3,6];a=0,i=n.children,e.label=3;case 3:return a<i.length?(o=i[a],l=o.uid,u=o.order,[4,window.roamAlphaAPI.data.block.move({location:{"parent-uid":r,order:u},block:{uid:l}})]):[3,6];case 4:e.sent(),e.label=5;case 5:return a++,[3,3];case 6:if(null==(u=n._refs)||!u.length)return[3,10];d=0,c=u,e.label=7;case 7:return d<c.length?(l=c[d],s=l.string.replaceAll("[["+n.title+"]]","(("+r+"))"),[4,window.roamAlphaAPI.data.block.update({block:{uid:l.uid,string:s}})]):[3,10];case 8:e.sent(),e.label=9;case 9:return d++,[3,7];case 10:return[4,window.roamAlphaAPI.data.page.delete({page:{uid:h}})];case 11:return e.sent(),[4,window.roamAlphaAPI.ui.rightSidebar.addWindow({window:{type:"block","block-uid":r}})];case 12:return e.sent(),[2]}})})}(t),e.label=8;case 8:return[2]}})})}),[2]})})}(),console.log("Initialized shan-personal-scripts")}();
