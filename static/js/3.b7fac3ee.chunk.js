(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[3],{102:function(e,t,i){"use strict";var n=i(3),a=i(101),s=i(0),r=i(24),o=function(){return Object(s.h)("section",null,Object(s.h)("div",{class:"content-section"},Object(s.h)("footer",null,Object(s.h)("hr",null),"Developed with ",Object(s.h)("i",{class:"fas fa-heart"})," and"," ",Object(s.h)("i",{class:"fas fa-coffee"})," using"," ",Object(s.h)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(s.h)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(s.h)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(s.h)("a",{href:"".concat(Object(r.b)(),"/atom.xml"),class:"float-right"},Object(s.h)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))};t.a=function(e){var t=e.children,i=e.fullWidth,r=Object(a.a)(e,["children","fullWidth"]);return r.class=r.class?"container "+r.class:"container",r.style=Object(n.a)({},r.style||{},{maxWidth:i?"100%":""}),Object(s.h)("div",Object.assign({},r,{id:"layout"}),t,Object(s.h)(o,null))}},107:function(e,t,i){"use strict";var n=i(36),a=i(37),s=i(39),r=i(38),o=i(40),l=i(0);t.a=function(e){return function(t){return function(i){function c(){return Object(n.a)(this,c),Object(s.a)(this,Object(r.a)(c).apply(this,arguments))}return Object(o.a)(c,i),Object(a.a)(c,[{key:"componentDidMount",value:function(){e(this.props)}},{key:"render",value:function(e){return Object(l.h)(t,e)}}]),c}(l.a)}}},124:function(e,t,i){},125:function(e,t,i){"use strict";i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return u}));var n=i(1),a=i.n(n),s=i(3),r=i(126),o=i.n(r),l=i(127).keys().sort().reverse().reduce((function(e,t){var n=o()(t);return e.set(n.id.toLowerCase(),(function(){return i(229)("./".concat(n.file,".md")).then((function(e){return Object(s.a)({id:n.id,date:n.date,body:e.__content},e)}))}))}),new Map),c=function(e){var t=l.get(e.toLowerCase());return t?t():Promise.resolve({})},u=function(){var e,t,i,n,s,r,o,c;return a.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:e=l.values(),t=!0,i=!1,n=void 0,u.prev=4,s=e[Symbol.iterator]();case 6:if(t=(r=s.next()).done){u.next=17;break}return o=r.value,u.next=10,a.a.awrap(o());case 10:if(!(c=u.sent).hasOwnProperty("skip")||!c.skip){u.next=13;break}return u.abrupt("continue",14);case 13:return u.abrupt("return",c);case 14:t=!0,u.next=6;break;case 17:u.next=23;break;case 19:u.prev=19,u.t0=u.catch(4),i=!0,n=u.t0;case 23:u.prev=23,u.prev=24,t||null==s.return||s.return();case 26:if(u.prev=26,!i){u.next=29;break}throw n;case 29:return u.finish(26);case 30:return u.finish(23);case 31:return u.abrupt("return",{});case 32:case"end":return u.stop()}}),null,null,[[4,19,23,31],[24,,26,30]])};t.a=l},126:function(e,t){e.exports=function(e){var t=(e=e.match(/([\w\d-.]+)\.md/)[1]).match(/^(\d{4}-\d{2}-\d{2})-(\d{2}-\d{2})(.*)/);if(!t&&!t[1]&&!t[2]&&!t[3])throw new Error("no ^YYYY-MM-DD-HH-mm date in blog filename");var i=t[1],n=t[2],a=i+t[3],s=(i+"-"+n).split("-");return{date:new Date(Date.UTC(parseInt(s[0],10),parseInt(s[1],10)-1,parseInt(s[2],10),parseInt(s[3],10),parseInt(s[4],10))),id:a,file:e}}},127:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":128,"./2017-12-21-00-00-1.2.10-Release.md":129,"./2018-01-12-00-00-1.2.11-Release.md":130,"./2018-01-18-00-00-1.2.12-Release.md":131,"./2018-01-25-00-00-1.2.13-Release.md":132,"./2018-02-01-00-00-1.2.14-Release.md":133,"./2018-02-08-00-00-1.2.15-Release.md":134,"./2018-02-15-00-00-1.2.16-Release.md":135,"./2018-02-22-00-00-1.2.17-Release.md":136,"./2018-03-01-00-00-1.2.18-Release.md":137,"./2018-03-08-00-00-1.2.19-Release.md":138,"./2018-03-15-00-00-1.3.0-Release.md":139,"./2018-03-22-00-00-1.3.1-Release.md":140,"./2018-03-29-00-00-1.3.2-Release.md":141,"./2018-04-05-00-00-1.3.3-Release.md":142,"./2018-04-12-00-00-1.3.4-Release.md":143,"./2018-04-19-00-00-1.3.5-Release.md":144,"./2018-04-26-00-00-1.3.6-Release.md":145,"./2018-05-03-00-00-1.3.7-Release.md":146,"./2018-05-10-00-00-1.3.8-Release.md":147,"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":148,"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":149,"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":150,"./2018-05-18-00-00-1.3.9-Release.md":151,"./2018-05-24-00-00-1.4.0-Release.md":152,"./2018-05-25-23-00-Phishing-Attempts.md":153,"./2018-05-31-07-00-1.4.1-Release.md":154,"./2018-06-07-07-00-1.4.2-Release.md":155,"./2018-06-14-07-00-1.4.3-Release.md":156,"./2018-06-21-07-00-1.4.4-Release.md":157,"./2018-06-28-07-00-1.4.5-Release.md":158,"./2018-07-05-07-00-1.4.6-Release.md":159,"./2018-07-12-07-00-1.4.7-Release.md":160,"./2018-07-19-07-00-1.4.8-Release.md":161,"./2018-07-26-07-00-1.4.9-Release.md":162,"./2018-08-02-10-00-1.4.10-Release.md":163,"./2018-08-09-10-00-1.4.11-Release.md":164,"./2018-08-16-10-00-1.4.12-Release.md":165,"./2018-08-23-10-00-1.4.13-Release.md":166,"./2018-08-30-10-00-1.4.15-Release.md":167,"./2018-09-06-10-00-1.4.16-Release.md":168,"./2018-09-13-10-00-1.4.17-Release.md":169,"./2018-09-18-21-00-Worldhopper-disabled.md":170,"./2018-09-20-10-00-1.4.18-Release.md":171,"./2018-09-27-10-00-1.4.19-Release.md":172,"./2018-10-04-10-00-1.4.20-Release.md":173,"./2018-10-11-10-00-1.4.21-Release.md":174,"./2018-10-18-10-00-1.4.22-Release.md":175,"./2018-10-25-10-00-1.4.23-Release.md":176,"./2018-11-01-10-00-1.4.24-Release.md":177,"./2018-11-08-10-00-1.4.25-Release.md":178,"./2018-11-15-10-00-1.4.26-Release.md":179,"./2018-11-16-12-00-1.5.0-Release.md":180,"./2018-11-22-10-00-1.5.1-Release.md":181,"./2018-11-29-10-00-1.5.2-Release.md":182,"./2018-12-06-10-00-1.5.3-Release.md":183,"./2018-12-13-10-00-1.5.4-Release.md":184,"./2018-12-20-10-00-1.5.5-Release.md":185,"./2019-01-03-10-00-1.5.6-Release.md":186,"./2019-01-10-10-00-1.5.7-Release.md":187,"./2019-01-17-10-00-1.5.8-Release.md":188,"./2019-01-24-10-00-1.5.9-Release.md":189,"./2019-01-31-10-00-1.5.10-Release.md":190,"./2019-02-07-10-00-1.5.11-Release.md":191,"./2019-02-14-10-00-1.5.12-Release.md":192,"./2019-02-16-16-00-Launcher-1.6.2-Release.md":193,"./2019-02-21-10-00-1.5.13-Release.md":194,"./2019-02-28-10-00-1.5.14-Release.md":195,"./2019-03-07-10-00-1.5.15-Release.md":196,"./2019-03-14-10-00-1.5.16-Release.md":197,"./2019-03-21-12-00-1.5.17-Release.md":198,"./2019-03-28-10-00-1.5.18-Release.md":199,"./2019-04-11-10-00-1.5.19-Release.md":200,"./2019-04-18-10-00-1.5.20-Release.md":201,"./2019-04-25-10-00-1.5.21-Release.md":202,"./2019-05-03-10-00-1.5.22-Release.md":203,"./2019-05-16-10-00-1.5.23-Release.md":204,"./2019-05-30-10-00-1.5.25-Release.md":205,"./2019-06-06-10-00-1.5.26-Release.md":206,"./2019-06-20-10-00-1.5.27-Release.md":207,"./2019-07-04-10-00-1.5.28-Release.md":208,"./2019-07-18-10-00-1.5.29-Release.md":209,"./2019-08-01-10-00-1.5.30-Release.md":210,"./2019-08-15-10-00-1.5.31-Release.md":211,"./2019-08-16-10-00-Launcher-Release-2.0.0.md":212,"./2019-08-29-10-00-1.5.32-Release.md":213,"./2019-09-12-10-00-1.5.33-Release.md":214,"./2019-09-26-10-00-1.5.34-Release.md":215,"./2019-10-02-10-00-1.5.35-Release.md":216,"./2019-10-17-10-00-1.5.36-Release.md":217,"./2019-10-30-10-00-1.5.37-Release.md":218,"./2019-11-14-10-00-1.5.40-Release.md":219,"./2019-11-28-10-00-1.5.42-Release.md":220,"./2019-12-16-10-00-1.5.43-Release.md":221,"./2019-12-19-10-00-1.6.0-Release.md":222,"./2020-01-09-10-00-1.6.1-Release.md":223,"./2020-01-16-10-00-1.6.2-Release.md":224,"./2020-01-22-10-00-1.6.4-Release.md":225,"./2020-01-29-10-00-1.6.5-Release.md":226,"./2020-02-13-10-00-1.6.6-Release.md":227,"./2020-02-27-10-00-1.6.8-Release.md":228};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=127},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},132:function(e,t){},133:function(e,t){},134:function(e,t){},135:function(e,t){},136:function(e,t){},137:function(e,t){},138:function(e,t){},139:function(e,t){},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},150:function(e,t){},151:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},155:function(e,t){},156:function(e,t){},157:function(e,t){},158:function(e,t){},159:function(e,t){},160:function(e,t){},161:function(e,t){},162:function(e,t){},163:function(e,t){},164:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},172:function(e,t){},173:function(e,t){},174:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t){},182:function(e,t){},183:function(e,t){},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},205:function(e,t){},206:function(e,t){},207:function(e,t){},208:function(e,t){},209:function(e,t){},210:function(e,t){},211:function(e,t){},212:function(e,t){},213:function(e,t){},214:function(e,t){},215:function(e,t){},216:function(e,t){},217:function(e,t){},218:function(e,t){},219:function(e,t){},220:function(e,t){},221:function(e,t){},222:function(e,t){},223:function(e,t){},224:function(e,t){},225:function(e,t){},226:function(e,t){},227:function(e,t){},228:function(e,t){},229:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":[280,17],"./2017-12-21-00-00-1.2.10-Release.md":[281,18],"./2018-01-12-00-00-1.2.11-Release.md":[282,19],"./2018-01-18-00-00-1.2.12-Release.md":[283,20],"./2018-01-25-00-00-1.2.13-Release.md":[284,21],"./2018-02-01-00-00-1.2.14-Release.md":[285,22],"./2018-02-08-00-00-1.2.15-Release.md":[286,23],"./2018-02-15-00-00-1.2.16-Release.md":[287,24],"./2018-02-22-00-00-1.2.17-Release.md":[288,25],"./2018-03-01-00-00-1.2.18-Release.md":[289,26],"./2018-03-08-00-00-1.2.19-Release.md":[290,27],"./2018-03-15-00-00-1.3.0-Release.md":[291,28],"./2018-03-22-00-00-1.3.1-Release.md":[292,29],"./2018-03-29-00-00-1.3.2-Release.md":[293,30],"./2018-04-05-00-00-1.3.3-Release.md":[294,31],"./2018-04-12-00-00-1.3.4-Release.md":[295,32],"./2018-04-19-00-00-1.3.5-Release.md":[296,33],"./2018-04-26-00-00-1.3.6-Release.md":[297,34],"./2018-05-03-00-00-1.3.7-Release.md":[298,35],"./2018-05-10-00-00-1.3.8-Release.md":[299,36],"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":[300,37],"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":[301,38],"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":[302,39],"./2018-05-18-00-00-1.3.9-Release.md":[303,40],"./2018-05-24-00-00-1.4.0-Release.md":[304,41],"./2018-05-25-23-00-Phishing-Attempts.md":[305,42],"./2018-05-31-07-00-1.4.1-Release.md":[306,43],"./2018-06-07-07-00-1.4.2-Release.md":[307,44],"./2018-06-14-07-00-1.4.3-Release.md":[308,45],"./2018-06-21-07-00-1.4.4-Release.md":[309,46],"./2018-06-28-07-00-1.4.5-Release.md":[310,47],"./2018-07-05-07-00-1.4.6-Release.md":[311,48],"./2018-07-12-07-00-1.4.7-Release.md":[312,49],"./2018-07-19-07-00-1.4.8-Release.md":[313,50],"./2018-07-26-07-00-1.4.9-Release.md":[314,51],"./2018-08-02-10-00-1.4.10-Release.md":[315,52],"./2018-08-09-10-00-1.4.11-Release.md":[316,53],"./2018-08-16-10-00-1.4.12-Release.md":[317,54],"./2018-08-23-10-00-1.4.13-Release.md":[318,55],"./2018-08-30-10-00-1.4.15-Release.md":[319,56],"./2018-09-06-10-00-1.4.16-Release.md":[320,57],"./2018-09-13-10-00-1.4.17-Release.md":[321,58],"./2018-09-18-21-00-Worldhopper-disabled.md":[322,59],"./2018-09-20-10-00-1.4.18-Release.md":[323,60],"./2018-09-27-10-00-1.4.19-Release.md":[324,61],"./2018-10-04-10-00-1.4.20-Release.md":[325,62],"./2018-10-11-10-00-1.4.21-Release.md":[326,63],"./2018-10-18-10-00-1.4.22-Release.md":[327,64],"./2018-10-25-10-00-1.4.23-Release.md":[328,65],"./2018-11-01-10-00-1.4.24-Release.md":[329,66],"./2018-11-08-10-00-1.4.25-Release.md":[330,67],"./2018-11-15-10-00-1.4.26-Release.md":[331,68],"./2018-11-16-12-00-1.5.0-Release.md":[332,69],"./2018-11-22-10-00-1.5.1-Release.md":[333,70],"./2018-11-29-10-00-1.5.2-Release.md":[334,71],"./2018-12-06-10-00-1.5.3-Release.md":[335,72],"./2018-12-13-10-00-1.5.4-Release.md":[336,73],"./2018-12-20-10-00-1.5.5-Release.md":[337,74],"./2019-01-03-10-00-1.5.6-Release.md":[338,75],"./2019-01-10-10-00-1.5.7-Release.md":[339,76],"./2019-01-17-10-00-1.5.8-Release.md":[340,77],"./2019-01-24-10-00-1.5.9-Release.md":[341,78],"./2019-01-31-10-00-1.5.10-Release.md":[342,79],"./2019-02-07-10-00-1.5.11-Release.md":[343,80],"./2019-02-14-10-00-1.5.12-Release.md":[344,81],"./2019-02-16-16-00-Launcher-1.6.2-Release.md":[345,82],"./2019-02-21-10-00-1.5.13-Release.md":[346,83],"./2019-02-28-10-00-1.5.14-Release.md":[347,84],"./2019-03-07-10-00-1.5.15-Release.md":[348,85],"./2019-03-14-10-00-1.5.16-Release.md":[349,86],"./2019-03-21-12-00-1.5.17-Release.md":[350,87],"./2019-03-28-10-00-1.5.18-Release.md":[351,88],"./2019-04-11-10-00-1.5.19-Release.md":[352,89],"./2019-04-18-10-00-1.5.20-Release.md":[353,90],"./2019-04-25-10-00-1.5.21-Release.md":[354,91],"./2019-05-03-10-00-1.5.22-Release.md":[355,92],"./2019-05-16-10-00-1.5.23-Release.md":[356,93],"./2019-05-30-10-00-1.5.25-Release.md":[357,94],"./2019-06-06-10-00-1.5.26-Release.md":[358,95],"./2019-06-20-10-00-1.5.27-Release.md":[359,96],"./2019-07-04-10-00-1.5.28-Release.md":[360,97],"./2019-07-18-10-00-1.5.29-Release.md":[361,98],"./2019-08-01-10-00-1.5.30-Release.md":[362,99],"./2019-08-15-10-00-1.5.31-Release.md":[363,100],"./2019-08-16-10-00-Launcher-Release-2.0.0.md":[364,101],"./2019-08-29-10-00-1.5.32-Release.md":[365,102],"./2019-09-12-10-00-1.5.33-Release.md":[366,103],"./2019-09-26-10-00-1.5.34-Release.md":[367,104],"./2019-10-02-10-00-1.5.35-Release.md":[368,105],"./2019-10-17-10-00-1.5.36-Release.md":[369,106],"./2019-10-30-10-00-1.5.37-Release.md":[370,107],"./2019-11-14-10-00-1.5.40-Release.md":[371,108],"./2019-11-28-10-00-1.5.42-Release.md":[372,109],"./2019-12-16-10-00-1.5.43-Release.md":[373,110],"./2019-12-19-10-00-1.6.0-Release.md":[374,111],"./2020-01-09-10-00-1.6.1-Release.md":[375,112],"./2020-01-16-10-00-1.6.2-Release.md":[376,113],"./2020-01-22-10-00-1.6.4-Release.md":[377,114],"./2020-01-29-10-00-1.6.5-Release.md":[378,115],"./2020-02-13-10-00-1.6.6-Release.md":[379,116],"./2020-02-27-10-00-1.6.8-Release.md":[380,117]};function a(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return i.e(t[1]).then((function(){return i.t(a,7)}))}a.keys=function(){return Object.keys(n)},a.id=229,e.exports=a},248:function(e,t,i){"use strict";var n=i(0);i(249);t.a=function(e){var t=e.image,i=e.title,a=e.description,s=e.link,r=e.linkAlt;return Object(n.h)("div",{class:"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},Object(n.h)("div",{class:"card"},Object(n.h)("img",{class:"card-img-top",alt:i,src:t}),Object(n.h)("div",{class:"card-body"},Object(n.h)("h5",{class:"card-title"},s?Object(n.h)("a",{href:s,alt:r},i):i),Object(n.h)("p",{class:"card-text"},a))))}},249:function(e,t,i){},250:function(e,t,i){"use strict";t.a=[{image:"/img/features/mousehighlight.png",title:"Action tooltips",description:"Displays tooltips for actions under your mouse cursor.",link:"https://github.com/runelite/runelite/wiki/Mouse-Tooltips"},{image:"/img/features/agility.png",title:"Agility",description:"Displays clickboxes for agility courses, and counts the number of laps you have done.",link:"https://github.com/runelite/runelite/wiki/Agility"},{image:"/img/features/kourend.png",title:"Arceuus Library",description:"Shows you where books are in the Arceuus Library.",link:"https://github.com/runelite/runelite/wiki/Kourend-Library"},{image:"/img/features/attackstyles.png",title:"Attack style",description:"Indicates your attack style and hides unwanted styles.",link:"https://github.com/runelite/runelite/wiki/Attack-Styles"},{image:"/img/features/bankeval.png",title:"Bank evaluator",description:"Displays your bank's total value based on GE and alch prices.",link:"https://github.com/runelite/runelite/wiki/Bank-Value"},{image:"/img/features/banktags.png",title:"Bank tags",description:"Allows you to set searchable tags on items for your bank.",link:"https://github.com/runelite/runelite/wiki/Bank-Tags"},{image:"/img/features/tagtabs.png",title:"Bank Tag Tabs",description:"A tab on the left side of the bank to auto search the assigned tag when clicked.",link:"https://github.com/runelite/runelite/wiki/Bank-Tags"},{image:"/img/features/barbassault.png",title:"Barbarian Assault",description:"Displays a timer for the next change of horn commands.",link:"https://github.com/runelite/runelite/wiki/Barbarian-Assault"},{image:"/img/features/barrows.png",title:"Barrows",description:"Marks the location of brothers and shows puzzle answers",link:"https://github.com/runelite/runelite/wiki/Barrows-Brothers"},{image:"/img/features/blastfurnace.png",title:"Blast Furnace",description:"Shows your current bars/ores and marks the clickbox of the conveyor belt.",link:"https://github.com/runelite/runelite/wiki/Blast-Furnace"},{image:"/img/features/birdhouses.png",title:"Birdhouse Timers",description:"Displays birdhouses and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"},{image:"/img/features/cannontiles.png",title:"Cannon double hit spots",description:"Shows you where to position enemies for double cannonball hits.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/chatcolor.png",title:"Chat Color",description:"Configures chat colors for each type of message in transparent and non transparent chat.",link:"https://github.com/runelite/runelite/wiki/Chat-Color"},{image:"/img/features/chatcommands.png",title:"Chat commands",description:"Allows easy lookup of !level(s), !price(s), !kc(s), and !pb(s) from the chat box.",link:"https://github.com/runelite/runelite/wiki/Chat-Commands"},{image:"/img/features/clanchat.png",title:"Clan chat",description:"Adds the sender's rank to clan chat messages.",link:"https://github.com/runelite/runelite/wiki/Clan-Chat"},{image:"/img/features/cluescroll.png",title:"Clue scroll helper",description:"Gives answers to clue scroll riddles/anagrams/ciphers/cryptic clues.",link:"https://github.com/runelite/runelite/wiki/Clue-Scrolls"},{image:"/img/features/moveableoverlay.png",title:"Custom overlay position",description:"Allows you to move RuneLite overlays to any position on the screen."},{image:"/img/features/daily.png",title:"Daily task indicators",description:"Notifies you on login what daily tasks you are able to complete.",link:"https://github.com/runelite/runelite/wiki/Daily-Task-Indicator"},{image:"/img/features/deathlocation.png",title:"Death Indicator",description:"Displays your last death location and on which world.",link:"https://github.com/runelite/runelite/wiki/Death-Indicator"},{image:"/img/features/discord.png",title:"Discord integration",description:"Integrates with Discord's Rich Presence to display what you're doing in the game and allows to form in-game parties",link:"https://github.com/runelite/runelite/wiki/Discord",home:!0},{image:"/img/features/cannon.png",title:"Dwarf multicannon",description:"Displays the number of cannonballs left in your cannon, along with common cannon spots.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/fairyringsearch.png",title:"Fairy Ring Filter",description:"Allows you to filter the fairy ring destination menu.",link:"https://github.com/runelite/runelite/wiki/Fairy-Rings"},{image:"/img/features/farmingtracker.png",title:"Farming Tracker",description:"Displays current farming patches and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"},{image:"/img/features/fishing.png",title:"Fishing",description:"Highlights fishing spots and tracks fishing stats.",link:"https://github.com/runelite/runelite/wiki/Fishing"},{image:"/img/features/gpu.png",title:"GPU",description:"Renders game using your GPU, which provides better FPS, increased draw distance, enhanced scaling and anti-aliasing.",link:"https://github.com/runelite/runelite/wiki/GPU",home:!0},{image:"/img/features/gesearch.png",title:"Grand Exchange lookup",description:"Quickly price-check any item on the Grand Exchange.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/ge.png",title:"Grand Exchange offers",description:"Lists your current Grand Exchange offers.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/grounditems.png",title:"Ground items",description:"Hides, highlights, and adds filterable price colors to dropped items.",link:"https://github.com/runelite/runelite/wiki/Ground-Items"},{image:"/img/features/herbiboar.png",title:"Herbiboar",description:"Highlights the path and objects to search at the end of the trail.",link:"https://github.com/runelite/runelite/wiki/Herbiboar"},{image:"/img/features/hunter.png",title:"Hunter",description:"Adds timers to hunter traps.",link:"https://github.com/runelite/runelite/wiki/Hunter"},{image:"/img/features/idle.png",title:"Idle notifications",description:"Sends system tray alerts when idle or about to be logged out.",link:"https://github.com/runelite/runelite/wiki/Idle-Notifier"},{image:"/img/features/imp.png",title:"Impling finder",description:"Highlights nearby implings on the minimap and on-screen.",link:"https://github.com/runelite/runelite/wiki/Implings"},{image:"/img/features/inventorytags.png",title:"Inventory Tags",description:"Allows you to assign group tags to inventory items.",link:"https://github.com/runelite/runelite/wiki/Inventory-Tags"},{image:"/img/features/inventoryviewer.png",title:"Inventory Viewer",description:"Displays an overlay of your current inventory.",link:"https://github.com/runelite/runelite/wiki/Inventory-Viewer"},{image:"/img/features/itemstats.png",title:"Item stats",description:"Displays information about food and potion effects.",link:"https://github.com/runelite/runelite/wiki/Item-Stats"},{image:"/img/features/jewellerycount.png",title:"Jewellery charges",description:"Displays the number of charges that your jewellery has.",link:"https://github.com/runelite/runelite/wiki/Jewellery-Count"},{image:"/img/features/lightboxsolver.png",title:"Light Box Puzzle Solver",description:"Solves light box puzzles during clue scrolls.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver"},{image:"/img/features/loottracker.png",title:"Loot Tracker",description:"Shows kill count and drops with prices from monsters you kill.",link:"https://github.com/runelite/runelite/wiki/Loot-Tracker",home:!0},{image:"/img/features/lowdetail.png",title:"Low detail mode",description:"Enables low detail mode, removing some of the game's eye candy.",link:"https://github.com/runelite/runelite/wiki/Low-Detail"},{image:"/img/features/mta.png",title:"Mage Training Arena",description:"Overlays to assist in each of the MTA rooms.",link:"https://github.com/runelite/runelite/wiki/Mage-Training-Arena"},{image:"/img/features/menuswap.png",title:"Menu entry swapping",description:"Swaps the left-click actions of certain objects.",link:"https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper"},{image:"/img/features/minimapdots.png",title:"Minimap dot customizer",description:"Customizes the color of minimap dots.",link:"https://github.com/runelite/runelite/wiki/Minimap"},{image:"/img/features/favor.png",title:"Miscellania favor",description:"Displays your current favor and treasury in the Kingdom of Miscellania.",link:"https://github.com/runelite/runelite/wiki/Kingdom-of-Miscellania"},{image:"/img/features/mlm.png",title:"Motherlode Mine",description:"Marks veins and rock obstacles in the Motherlode Mine.",link:"https://github.com/runelite/runelite/wiki/Motherload-Mine"},{image:"/img/features/newsfeed.png",title:"News feed",description:"Displays the latest RuneLite blog posts, OldSchool RuneScape news, and a Twitter feed of JMods.",link:"https://github.com/runelite/runelite/wiki/News-Feed"},{image:"/img/features/nmz.png",title:"Nightmare Zone",description:"Displays NMZ points/absorption and notifies you about expiring potions.",link:"https://github.com/runelite/runelite/wiki/Nightmare-Zone"},{image:"/img/features/npctag.png",title:"NPC tagging",description:"Tags and keeps track of an NPC.",link:"https://github.com/runelite/runelite/wiki/NPC-Indicators"},{image:"/img/features/discordparty.png",title:"Party",description:"Integrates with Discord's party feature to display party members discord name, hp, prayer points, and map location",link:"https://github.com/runelite/runelite/wiki/Party"},{image:"/img/features/playerindicators.png",title:"Player indicators",description:"Draws the names of friends, clan mates and yourself overhead.",link:"https://github.com/runelite/runelite/wiki/Player-Indicators"},{image:"/img/features/poh.png",title:"Player-owned houses",description:"Displays minimap icons and marks unlit/lit burners.",link:"https://github.com/runelite/runelite/wiki/Player-owned-House"},{image:"/img/features/prayerbar.png",title:"Prayer Bar",description:"Displays a prayer bar underneath your hitpoints bar.",link:"https://github.com/runelite/runelite/wiki/Prayer"},{image:"/img/features/puzzlebox.png",title:"Puzzle box solver",description:"Shows you where to click to solve puzzle boxes.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver"},{image:"/img/features/raids.png",title:"Raid scouter",description:"Displays the current layout of raids and tracks the raid duration.",link:"https://github.com/runelite/runelite/wiki/Chambers-of-Xeric"},{image:"/img/features/regen.png",title:"Regen timers",description:"Tracks and displays the hitpoints & special attack regen timers.",link:"https://github.com/runelite/runelite/wiki/Regeneration-Meter"},{image:"/img/features/roguesden.png",title:"Rogues' Den",description:"Marks tiles and clickboxes to help you traverse the maze.",link:"https://github.com/runelite/runelite/wiki/Rogues%27-Den"},{image:"/img/features/abyss.png",title:"Runecraft",description:"Displays minimap icons and clickboxes for abyssal rifts.",link:"https://github.com/runelite/runelite/wiki/Runecraft"},{image:"/img/features/runepouch.png",title:"Rune pouch",description:"Shows what runes are currently in your rune pouch.",link:"https://github.com/runelite/runelite/wiki/Rune-Pouch"},{image:"/img/features/shiftclick.png",title:"Shift click configuration",description:"Allows you to change/set shift click actions on items.",link:"https://github.com/runelite/runelite/wiki/Shift-Click-Configuration"},{image:"/img/features/statusbars.png",title:"Status Bars",description:"Shows health and prayer bars next to the inventory.",link:"https://github.com/runelite/runelite/wiki/Status-Bars"},{image:"/img/features/boosts.png",title:"Status widgets",description:"Shows boost timers, enemy HP, and other useful overlays.",home:!0},{image:"/img/features/stretchedfixed.png",title:"Stretched mode",description:"Stretches the game to the size of your window.",link:"https://github.com/runelite/runelite/wiki/Stretched-Mode"},{image:"/img/features/teamcapes.png",title:"Team cape overlay",description:"Displays team cape wearer counts.",link:"https://github.com/runelite/runelite/wiki/Team-Capes"},{image:"/img/features/tearsofguthix.png",title:"Tears of Guthix",description:"Displays the remaining time for streams of tears.",link:"https://github.com/runelite/runelite/wiki/Tears-Of-Guthix"},{image:"/img/features/tileindicators.png",title:"Tile indicator",description:"Marks the tile you last clicked on.",link:"https://github.com/runelite/runelite/wiki/Tile-Indicators"},{image:"/img/features/tithefarm.png",title:"Tithe Farm",description:"Displays timers for the farming patches within the Tithe farm minigame.",link:"https://github.com/runelite/runelite/wiki/Tithe-Farm"},{image:"/img/features/wcing.png",title:"Woodcutting",description:"Displays information about the logs you are cutting.",link:"https://github.com/runelite/runelite/wiki/Woodcutting"},{image:"/img/features/xpglobes.png",title:"XP globes",description:"Displays skill globes when you gain XP, with more detailed stats on hover.",link:"https://github.com/runelite/runelite/wiki/XP-Globes"},{image:"/img/features/xptracker.png",title:"XP Tracker",description:"Side panel displaying xp data for each skill you have trained.",link:"https://github.com/runelite/runelite/wiki/XP-Tracker"},{image:"/img/features/zoom.png",title:"Zoom unlimiter",description:"Allows you to zoom past the default camera distance limits.",link:"https://github.com/runelite/runelite/wiki/Camera-Zoom"}]},466:function(e,t,i){},685:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(0),r=(i(466),i(124),i(35)),o=i(248),l=i(102),c=i(36),u=i(37),m=i(39),d=i(38),h=i(66),g=i(40),p=i(467),f=i.n(p),b=i(77),k=i(674),R=i(12),w=i(65),y=i(28),v=i(24),O=i(43),j=i(116),x=i.n(j),S=function(e){var t=e.url,i=e.message,n=e.author,a=e.date;return t&&Object(s.h)(s.b,null,Object(s.h)("h6",null,"Latest commit:"),Object(s.h)("a",{href:t},i)," ",Object(s.h)("span",{class:"text-muted"},"by ",Object(s.h)("a",{href:n.url?n.url:t},n.name,",")," ",x()(a)))};var D=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleScroll=i.handleScroll.bind(Object(h.a)(i)),i.state={interval:0},i}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleScroll",value:function(){var e=document.getElementById("jumbo"),t=e.offsetTop+e.offsetHeight-document.getElementsByClassName("navbar")[0].offsetHeight,i=window.scrollY||window.pageYOffset||document.body.scrollTop;this.props.navbarDark?i>t&&this.props.makeNavbarDefault():i<=t&&this.props.makeNavbarDark()}},{key:"componentDidMount",value:function(){var e=this;this.setState({interval:setInterval((function(){var t=e.props,i=t.images,n=t.heroImage,a=t.nextHeroImage,s=i.length,r=(n+1)%s,o=new Image;o.src=Object(w.a)(i[r]),o.onload=function(){return a(s)},e.setState({loadingHeroImg:o})}),8e3)}),this.handleScroll(),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.interval,i=e.loadingHeroImg;clearInterval(t),i&&delete i.onload,this.props.makeNavbarDefault(),document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(e){e.title;var t=e.description,i=e.buttons,n=e.release,a=e.commit,r=e.playing,o=e.loggedIn,l=e.heroImage,c=Object(b.a)((function(e){return e.dropdown}))(i),u=Object(k.a)((function(e){return"all"===e.os}))(c),m=Object(k.a)((function(e){return function(e){if(!f.a.os.family)return!1;var t=f.a.os.architecture,i=f.a.os.family.toLowerCase();return-1!==i.indexOf("os x")||-1!==i.indexOf("mac")?"macOS"===e:-1!==i.indexOf("win")?"Windows32"===e:-1!==i.indexOf("linux")?e===(64===t?"Linux64":"Linux32"):e===i}(e.os)}))(c)||u;return Object(s.h)("div",{class:"jumbotron jumbotron-fluid",style:{backgroundImage:"url(".concat(Object(w.a)(this.props.images[l]),")")},id:"jumbo"},Object(s.h)("div",{class:"jumbotron-cell"},Object(s.h)("div",{class:"jumbotron-body"},Object(s.h)("div",{class:"jumbotron-header"},Object(s.h)("h1",null,"RUNELITE",Object(s.h)("span",null,".NET")),Object(s.h)("p",null,t),Object(s.h)("a",{id:"contribute",class:"btn",href:O.a.github},"Contribute"),Object(s.h)("div",{id:"download"},Object(s.h)("div",{class:"btn-group dropdown"},Object(s.h)("a",{id:"direct-download-btn",class:"btn btn-"+m.color,href:m.link},"Download"),Object(s.h)("button",{class:"btn dropdown-toggle dropdown-toggle-split btn-"+m.color},Object(s.h)("span",{class:"sr-only"},"Toggle Dropdown")),Object(s.h)("div",{class:"dropdown-menu",style:{textShadow:"none"}},c.map((function(e){var t=e.link,i=e.icon,n=e.text;return Object(s.h)("a",{class:"dropdown-item",href:t,native:!0},Object(s.h)("i",{class:i})," ",n)})))))),Object(s.h)("div",{class:"small"},Object(s.h)("h6",null,"Players:"),Object(v.c)(r)||"unknown"," online (",Object(v.c)(o)||"unknown"," in game)",Object(s.h)("h6",null,"Latest release:"),Object(s.h)("a",{href:"#news"},n||"unknown"),Object(s.h)(S,a)))))}}]),t}(s.a),C=Object(r.b)((function(e){return{navbarDark:e.app.navbarDark,heroImage:e.app.heroImage}}),(function(e){return Object(R.b)({makeNavbarDark:y.b,makeNavbarDefault:y.c,nextHeroImage:y.d},e)}))(D),I=i(125),T=i(74),L=i(34),M=i.n(L),P=i(250),A=i(68),E=i(57),N=i(14),z=i(11),B=i(107),H=i(6);t.default=Object(r.b)((function(e,t){return{commit:Object(T.c)(e,t),release:Object(H.c)(e,t),sessionCount:Object(A.e)(e,t),loggedInCount:Object(A.d)(e,t)}}),(function(e){return Object(R.b)({fetchCommits:T.b,fetchSessionCount:A.c,fetchLoggedInCount:A.b},e)}))(Object(B.a)((function(e){var t,i,n;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.fetchCommits,i=e.fetchSessionCount,n=e.fetchLoggedInCount,t(),s.next=4,a.a.awrap(i());case 4:return s.next=6,a.a.awrap(n());case 6:case"end":return s.stop()}}))}))((function(e){var t=e.commit,i=e.release,n=e.sessionCount,a=e.loggedInCount;return Object(s.h)(l.a,null,Object(s.h)(E.a,{title:"".concat(M.a.title," - Open Source Old School RuneScape Client"),description:M.a.description}),Object(s.h)("section",{id:"intro"},Object(s.h)(C,Object.assign({},M.a,{release:i,commit:t,playing:n,loggedIn:a}))),Object(s.h)("section",{id:"features-home"},Object(s.h)("div",{class:"content-section homepage"},Object(s.h)("h1",null,"FEATURES"),Object(s.h)(N.a,{href:"/features",style:{color:"inherit"}},Object(s.h)("h4",null,"SHOW ALL FEATURES")),Object(s.h)("div",{class:"row"},P.a.filter((function(e){return e.home})).map((function(e){return Object(s.h)(o.a,Object.assign({key:e.title,linkAlt:"View on Wiki"},e))}))))),Object(s.h)("section",{id:"news"},Object(s.h)("div",{class:"content-section homepage"},Object(s.h)("h1",{id:"news"},"LATEST NEWS"),Object(s.h)(N.a,{href:"/blog",style:{color:"inherit"}},Object(s.h)("h4",null,"SHOW ALL NEWS")),Object(s.h)(z.a,{getComponent:function(){return Object(I.c)().then((function(e){var t=e.body;return Object(s.h)("div",{class:"markdown-body news-page",dangerouslySetInnerHTML:{__html:t}})}))}}))))})))}}]);
//# sourceMappingURL=3.b7fac3ee.chunk.js.map