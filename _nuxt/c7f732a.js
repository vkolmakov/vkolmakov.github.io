(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,n){},198:function(t,e,n){!function(){function e(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function n(a){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(a)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function o(a){var b=a.a.offsetWidth,t=b+100;return a.f.style.width=t+"px",a.c.scrollLeft=t,a.b.scrollLeft=a.b.scrollWidth+100,a.g!==b&&(a.g=b,!0)}function r(a,b){function t(){var a=n;o(a)&&a.a.parentNode&&b(a.g)}var n=a;e(a.b,t),e(a.c,t),o(a)}function c(a,b){var t=b||{};this.family=a,this.style=t.style||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"normal"}var l=null,d=null,m=null,h=null;function f(){return null===h&&(h=!!document.fonts),h}function v(){if(null===m){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(t){}m=""!==a.style.font}return m}function _(a,b){return[a.style,a.weight,v()?a.stretch:"","100px",b].join(" ")}c.prototype.load=function(a,b){var t=this,e=a||"BESbswy",o=0,c=b||3e3,m=(new Date).getTime();return new Promise((function(a,b){if(f()&&!function(){if(null===d)if(f()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);d=!!a&&603>parseInt(a[1],10)}else d=!1;return d}()){var h=new Promise((function(a,b){!function n(){(new Date).getTime()-m>=c?b(Error(c+"ms timeout exceeded")):document.fonts.load(_(t,'"'+t.family+'"'),e).then((function(t){1<=t.length?a():setTimeout(n,25)}),b)}()})),v=new Promise((function(a,t){o=setTimeout((function(){t(Error(c+"ms timeout exceeded"))}),c)}));Promise.race([v,h]).then((function(){clearTimeout(o),a(t)}),b)}else!function(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),a()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),a())}))}((function(){function d(){var b;(b=-1!=f&&-1!=g||-1!=f&&-1!=v||-1!=g&&-1!=v)&&((b=f!=g&&f!=v&&g!=v)||(null===l&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=l&&(f==w&&g==w&&v==w||f==y&&g==y&&v==y||f==k&&g==k&&v==k)),b=!b),b&&(C.parentNode&&C.parentNode.removeChild(C),clearTimeout(o),a(t))}var h=new n(e),p=new n(e),q=new n(e),f=-1,g=-1,v=-1,w=-1,y=-1,k=-1,C=document.createElement("div");C.dir="ltr",u(h,_(t,"sans-serif")),u(p,_(t,"serif")),u(q,_(t,"monospace")),C.appendChild(h.a),C.appendChild(p.a),C.appendChild(q.a),document.body.appendChild(C),w=h.a.offsetWidth,y=p.a.offsetWidth,k=q.a.offsetWidth,function t(){if((new Date).getTime()-m>=c)C.parentNode&&C.parentNode.removeChild(C),b(Error(c+"ms timeout exceeded"));else{var a=document.hidden;!0!==a&&void 0!==a||(f=h.a.offsetWidth,g=p.a.offsetWidth,v=q.a.offsetWidth,d()),o=setTimeout(t,50)}}(),r(h,(function(a){f=a,d()})),u(h,_(t,'"'+t.family+'",sans-serif')),r(p,(function(a){g=a,d()})),u(p,_(t,'"'+t.family+'",serif')),r(q,(function(a){v=a,d()})),u(q,_(t,'"'+t.family+'",monospace'))}))}))},t.exports=c}()},199:function(t,e,n){"use strict";n(197)},200:function(t,e,n){"use strict";n.r(e);var o={props:{kind:String,wrapperClass:String}},r=(n(199),n(22)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"icon "+this.wrapperClass},[e("svg",[e("use",{attrs:{"xlink:href":"#"+this.kind}})])])}),[],!1,null,"6ff41076",null);e.default=component.exports},201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},205:function(t,e,n){},206:function(t,e,n){},207:function(t,e,n){},209:function(t,e,n){t.exports=n.p+"fonts/cmunbx.d856aaf.woff2"},210:function(t,e,n){t.exports=n.p+"fonts/cmunrm.8ed477e.woff2"},211:function(t,e,n){"use strict";n(201)},212:function(t,e,n){"use strict";n(202)},213:function(t,e,n){"use strict";n(203)},214:function(t,e,n){"use strict";n(204)},215:function(t,e,n){"use strict";n(205)},216:function(t,e,n){"use strict";n(206)},217:function(t,e,n){"use strict";n(207)},220:function(t,e,n){"use strict";n.r(e);var o={props:{data:Object},data:function(){return this.data}},r=(n(212),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[n("router-link",{staticClass:"header-link",attrs:{to:t.whoami.link,"aria-label":t.whoami.description}},[t._v("\n\t\t\t"+t._s(t.whoami.name)+"\n\t\t")])],1),t._v(" "),n("ul",{staticClass:"contact"},t._l(t.contacts,(function(e,o){return n("li",{key:o},[n("a",{staticClass:"contact-link",attrs:{title:e.label,href:e.link}},[n("icon",{attrs:{kind:e.iconKind,"wrapper-class":e.iconClass}}),t._v(t._s(e.text))],1)])})),0)])}),[],!1,null,"2744c5de",null);e.default=component.exports;installComponents(component,{Icon:n(200).default})},221:function(t,e,n){"use strict";n.r(e);var o={props:{data:Object},data:function(){return this.data}},r=(n(214),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"experience"},[n("h2",[t._v("Professional Experience")]),t._v(" "),t._l(t.jobs,(function(e,o){return n("div",{key:o,staticClass:"job"},[n("div",{staticClass:"info"},[n("div",{staticClass:"company-city"},[n("em",[t._v(t._s(e.company))]),t._v(", "+t._s(e.city)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"positions"},t._l(e.positions,(function(e){return n("div",{key:e.title,staticClass:"position"},[n("div",{staticClass:"title"},[n("strong",[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"position-dates"},[t._v(t._s(e.dates))])])})),0)]),t._v(" "),n("ul",t._l(e.bulletpoints,(function(e,o){return n("li",{key:o},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])})),0)])}))],2)}),[],!1,null,"72505662",null);e.default=component.exports},222:function(t,e,n){"use strict";n.r(e);var o={props:{data:Object},data:function(){return this.data}},r=(n(215),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"education"},[n("h2",[t._v("Education")]),t._v(" "),t._l(t.schools,(function(s){return n("div",{key:s.name,staticClass:"school"},[n("div",{staticClass:"school-row"},[n("div",{staticClass:"school-name"},[n("strong",[t._v(t._s(s.name))]),t._v(", "+t._s(s.city)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"graduation"},[t._v("Graduation: "+t._s(s.graduation))])]),t._v(" "),n("div",{staticClass:"school-row"},[n("div",{staticClass:"major"},[t._v(t._s(s.major))]),t._v(" "),n("div",{staticClass:"gpa"},[t._v("Cumulative GPA: "+t._s(s.gpa))])])])}))],2)}),[],!1,null,"9be47ce2",null);e.default=component.exports},223:function(t,e,n){"use strict";n.r(e);var o={props:{data:Object},data:function(){return this.data}},r=(n(216),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"technical-skills"},[n("h2",[t._v("Technical Skills")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Languages:")]),t._v(" "+t._s(t.languages.join(", ")))]),t._v(" "),n("li",[n("strong",[t._v("Technologies/Frameworks:")]),t._v("\n\t\t\t"+t._s(t.technologies.join(", "))+"\n\t\t")]),t._v(" "),n("li",[n("strong",[t._v("Tools:")]),t._v(" "+t._s(t.tools.join(", ")))])])])}),[],!1,null,"d066d1c6",null);e.default=component.exports},224:function(t,e,n){"use strict";n.r(e);var o={props:{data:Object},data:function(){return this.data}},r=(n(217),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"projects"},[n("h2",[t._v("Projects")]),t._v(" "),t._l(t.projects,(function(p){return n("div",{key:p.name,staticClass:"project"},[n("h3",[t._v(t._s(p.name))]),t._v(" "),n("ul",t._l(p.bulletpoints,(function(e,o){return n("li",{key:o,staticClass:"project-bullet",domProps:{innerHTML:t._s(e)}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])})),0)])}))],2)}),[],!1,null,"97b5008e",null);e.default=component.exports},225:function(t,e,n){"use strict";n.r(e);n(213);var o=n(22),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"separator"})}),[],!1,null,"4e5e999a",null);e.default=component.exports},227:function(t,e,n){"use strict";n.r(e);n(28),n(37),n(11),n(38),n(50);var o=n(198),r=n.n(o),c={head:function(){return{link:[{rel:"preload",href:n(209),as:"font",crossorigin:"annonymous"},{rel:"preload",href:n(210),as:"font",crossorigin:"annonymous"}]}},middleware:function(t){"undefined"!=typeof window&&(t.__fontsToPreload=[{name:"Computer Modern Serif",weight:"normal"},{name:"Computer Modern Serif",weight:"bold"}])},created:function(){var t=this;if("undefined"!=typeof window){var e=this.$nuxt.context.__fontsToPreload;e&&e.length>0&&(this.shouldDisplay=!1,Promise.all(e.map((function(t){var e=t.name,n=t.weight;return new r.a(e,{weight:n}).load(null,2e3)}))).finally((function(){t.shouldDisplay=!0,t.$nuxt.context.__fontsToPreload=void 0})))}},data:function(){return{shouldDisplay:!0,header:{whoami:{name:"Vladimir Kolmakov",link:"/"},contacts:[{iconKind:"icon-envelope",iconClass:"icon-envelope",text:"vkolmakov256@gmail.com",link:"mailto:vkolmakov256@gmail.com",label:"Email address"},{iconKind:"icon-github",iconClass:"icon-github",text:"vkolmakov",link:"https://github.com/vkolmakov",label:"Github"},{iconKind:"icon-linkedin-square",iconClass:"icon-linkedin-square",text:"vkolmakov",link:"https://www.linkedin.com/in/vkolmakov/",label:"LinkedIn"},{iconKind:"icon-map-marker",iconClass:"icon-map-marker",text:"Chicago, IL",link:"https://www.google.com/maps/place/Chicago,+IL/@41.833648,-87.8722379,11z/data=!3m1!4b1!4m5!3m4!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982",label:"Location"}]},education:{schools:[{name:"Illinois Institute of Technology",city:"Chicago, IL",major:"Bachelor of Science: Computer Science",graduation:"December 2017",gpa:"3.84/4.00"}]},experience:{jobs:[{company:"Relativity",city:"Chicago, IL",positions:[{title:"Senior Software Engineer",dates:"November 2020 - present"},{title:"Advanced Software Engineer",dates:"May 2019 - November 2020"},{title:"Software Engineer",dates:"December 2017 - May 2019"}],bulletpoints:[]},{company:"Relativity (formerly kCura)",city:"Chicago, IL",positions:[{title:"Software Engineering Intern",dates:"June 2017 - December 2017"}],bulletpoints:["Improved developer experience by adding incremental builds and fully automating build process for the web component library, which resulted in average raw time savings of 92% per build.","Made a contribution to Choices.js open-source library with library accessibility improvements.","Contributed to multiple projects, including Preact-based web component library, Aurelia and AngularJS based applications."]},{company:"Target",city:"Minneapolis, MN",positions:[{title:"Software Engineering Intern",dates:"June 2016 - August 2016"}],bulletpoints:["Worked with the Threat Detection Operations team at the Cyber Fusion Center on establishing Mac OSX forensics process.","Built an extensible Mac OSX forensics framework using multiple open-source tools.","Contributed to several internal projects."]},{company:"Illinois Institute of Technology",city:"Chicago, IL",positions:[{title:"Teaching Assistant - Data Structures and Algorithms",dates:"August 2016 - May 2017"}],bulletpoints:["Hosted lab sessions and assisted students with their programming assignments.","Evaluated student lab assignments."]},{company:"Wilbur Wright College",city:"Chicago, IL",positions:[{title:"Mathematics Tutor",dates:"May 2014 - present"}],bulletpoints:["Designed and developed a fully functional web-application that allows students to schedule tutoring appointments online.","Provided academic assistance to assigned students with various mathematics courses (calculus, statistics), either individually or in groups."]}]},technicalSkills:{languages:["JavaScript/Node.js","TypeScript","Python","Elm","Scala","C#","F#","Haskell","Java","C"],technologies:["React","Redux","AngularJS","Vue.js","Express","Django",".NET","PostgreSQL","MongoDB","redis","Elasticsearch","Kibana","ReactiveX","Webpack","Rollup","HTML5","CSS3","Sass","jQuery"],tools:["Git","Docker","Kubernetes"]},projects:{projects:[{name:"Math Emporium",bulletpoints:["Self-service web application that allows students to schedule tutoring appointments.","Backend: Node.js, Express, PostgreSQL, MongoDB. Frontend: React + Redux, Elm, Sass.",'Source: <a href="https://github.com/vkolmakov/math-emporium">github.com/vkolmakov/math-emporium</a>. Link: <a href="https://tutoringatwright.com">tutoringatwright.com</a>.']},{name:"Face Recognition Attendance System",bulletpoints:["Web application designed to seamlessly maintain attendance at schools using face recognition.","Built with Vue.js, RxJS and OpenFace.",'Source: <a href="https://github.com/vkolmakov/Facial-Recognition-Attendance">github.com/vkolmakov/Facial-Recognition-Attendance</a>.']}]}}}},l=(n(211),n(22)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shouldDisplay?n("div",{staticClass:"resume"},[n("resume-header",{attrs:{data:t.header}}),t._v(" "),n("resume-separator"),t._v(" "),n("resume-experience",{attrs:{data:t.experience}}),t._v(" "),n("resume-separator"),t._v(" "),n("resume-education",{attrs:{data:t.education}}),t._v(" "),n("resume-separator"),t._v(" "),n("resume-technical-skills",{attrs:{data:t.technicalSkills}}),t._v(" "),n("resume-separator"),t._v(" "),n("resume-projects",{attrs:{data:t.projects}})],1):t._e()}),[],!1,null,"7a5dff23",null);e.default=component.exports;installComponents(component,{ResumeHeader:n(220).default,ResumeSeparator:n(225).default,ResumeExperience:n(221).default,ResumeEducation:n(222).default,ResumeTechnicalSkills:n(223).default,ResumeProjects:n(224).default})}}]);