(this["webpackJsonprtk-task"]=this["webpackJsonprtk-task"]||[]).push([[0],{17:function(e,t,c){e.exports={button:"Button_button__j-cX8"}},29:function(e,t,c){},3:function(e,t,c){e.exports={wrapper:"Result_wrapper__3fYk2",title:"Result_title__Jm0bp",question:"Result_question__2MItS",question__title:"Result_question__title__1r-Ag",answers:"Result_answers__2iAMo",answers__item:"Result_answers__item__3z2fe",button:"Result_button__yHPWl"}},30:function(e,t,c){"use strict";c.r(t);var i=c(14),n=c(0),s=c.n(n),d=c(7),l=function(){return Object(d.b)()},a=d.c,r=c(4),u=c(5),o=c(8),h=c.n(o),j=c(1),k=function(e){var t=e.question,c=e.setQuestion,i=function(e,i){var n=e.target.checked;c((function(e){return Object(u.a)(Object(u.a)({},e),{},{options:e.options.map((function(e){return e.title===i?Object(u.a)(Object(u.a)({},e),{},{checked:n}):t.isMultyple?e:Object(u.a)(Object(u.a)({},e),{},{checked:!1})}))})}))};return Object(j.jsxs)("div",{className:h.a.wrapper,children:[Object(j.jsx)("h1",{className:h.a.title,children:t.question}),Object(j.jsxs)("div",{className:h.a.inner,children:[Object(j.jsx)("p",{className:h.a.subtitle,children:t.isMultyple?"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430:"}),t.options.map((function(e){return t.isMultyple?Object(j.jsx)(f,{title:e.title,checked:e.checked,handleChecked:i},e.title):Object(j.jsx)(O,{name:t.question,title:e.title,checked:e.checked,handleChecked:i},e.title)}))]})]})},p=c(3),b=c.n(p),_=function(){var e=l(),t=a((function(e){return e.questions})).data;return Object(j.jsxs)("div",{className:b.a.wrapper,children:[Object(j.jsx)("h1",{className:b.a.title,children:"\u0412\u0430\u0448\u0438 \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:"}),Object.keys(t).map((function(e){return Number(e)})).map((function(e){return Object(j.jsxs)("div",{className:b.a.question,children:[Object(j.jsx)("h2",{className:b.a.question__title,children:t[e].question}),Object(j.jsx)("div",{className:b.a.answers,children:t[e].options.filter((function(e){return e.checked})).map((function(e){return Object(j.jsx)("span",{className:b.a.answers__item,children:e.title},e.id)}))})]},e)})),Object(j.jsx)(q,{handleClick:function(){return e(Object(r.b)())},customClassName:b.a.button,children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},f=function(e){var t=e.title,c=e.checked,i=e.handleChecked;return Object(j.jsxs)("div",{className:"field__wrapper",children:[Object(j.jsx)("input",{type:"checkbox",id:t,name:t,checked:c,className:"field",onChange:function(e){return i(e,t)}}),Object(j.jsx)("label",{htmlFor:t,className:"field__title",children:t})]})},O=function(e){var t=e.name,c=e.title,i=e.checked,n=e.handleChecked;return Object(j.jsxs)("div",{className:"field__wrapper",children:[Object(j.jsx)("input",{type:"radio",id:c,name:t,value:c,checked:i,className:"field",onChange:function(e){return n(e,c)}}),Object(j.jsx)("label",{htmlFor:c,className:"field__title",children:c})]})},m=c(16),x=c.n(m),v=c(17),N=c.n(v),q=function(e){var t=e.children,c=e.handleClick,i=e.customClassName;return Object(j.jsx)("button",{className:x()(N.a.button,i),onClick:c,children:t})};c(29),t.default=function(){var e=l(),t=a((function(e){return e.questions})),c=t.data,n=t.currentStep,d=s.a.useState(c[n]),u=Object(i.a)(d,2),o=u[0],h=u[1],p=s.a.useState(0),b=Object(i.a)(p,2),f=b[0],O=b[1];s.a.useEffect((function(){return h(c[n])}),[c,n]),s.a.useEffect((function(){return O(Object.keys(c).length+1)}),[c]);return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)("div",{className:"container",children:n===f?Object(j.jsx)(_,{}):o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{question:o,setQuestion:h}),Object(j.jsx)("div",{className:"question-button__wrappper",children:Object(j.jsx)(q,{handleClick:function(){o.options.every((function(e){return!e.checked}))?alert("\u0412\u044b\u0435\u0431\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0432\u0442\u0435\u0442\u0430!"):(e(Object(r.c)(o)),e(Object(r.d)()))},children:"\u0414\u0430\u043b\u0435\u0435"})}),Object(j.jsxs)("div",{className:"step-counter",children:[n,"/",f]})]})})})}},31:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(9),d=c.n(s),l=c(7),a=c(6),r=c(2),u=c(4),o=Object(r.c)({questions:u.a});var h=Object(a.a)({reducer:o}),j=c(1);!function(){var e=c(30).default;d.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l.a,{store:h,children:Object(j.jsx)(e,{})})}),document.getElementById("root"))}()},4:function(e,t,c){"use strict";c.d(t,"d",(function(){return a})),c.d(t,"c",(function(){return r})),c.d(t,"b",(function(){return u}));var i=c(6),n={1:{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?",options:[{id:1,title:"18",checked:!1},{id:2,title:"19",checked:!1},{id:3,title:"20",checked:!1},{id:4,title:"21",checked:!1},{id:5,title:"22",checked:!1},{id:6,title:"23",checked:!1},{id:7,title:"\u041c\u0435\u043d\u044c\u0448\u0435 18",checked:!1},{id:8,title:"\u0411\u043e\u043b\u044c\u0448\u0435 23",checked:!1}]},2:{question:"\u0418\u0437 \u043a\u0430\u043a\u043e\u0433\u043e \u0432\u044b \u0433\u043e\u0440\u043e\u0434\u0430?",options:[{id:1,title:"\u041c\u043e\u0441\u043a\u0432\u0430",checked:!1},{id:2,title:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",checked:!1},{id:3,title:"\u041a\u0430\u0437\u0430\u043d\u044c",checked:!1},{id:4,title:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",checked:!1},{id:5,title:"\u0421\u0430\u043c\u0430\u0440\u0430",checked:!1},{id:6,title:"\u0421\u044b\u0437\u0440\u0430\u043d\u044c",checked:!1},{id:7,title:"\u0421\u043e\u0447\u0438",checked:!1},{id:8,title:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",checked:!1}]},3:{question:"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b?",options:[{id:1,title:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u0435\u043d\u044c",checked:!1},{id:2,title:"\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a",checked:!1},{id:3,title:"\u0413\u0438\u0431\u043a\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043a",checked:!1},{id:4,title:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430",checked:!1},{id:5,title:"\u0412\u0430\u0445\u0442\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434",checked:!1}],isMultyple:!0},4:{question:"\u041a\u0430\u043a\u0438\u0435 \u044f\u0437\u044b\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435?",options:[{id:1,title:"JavaScript",checked:!1},{id:2,title:"Java",checked:!1},{id:3,title:"Python",checked:!1},{id:4,title:"C++",checked:!1},{id:5,title:"C#",checked:!1},{id:6,title:"C",checked:!1},{id:7,title:"PHP",checked:!1}],isMultyple:!0},5:{question:"\u041a\u0430\u043a\u043e\u0439 \u0443 \u0432\u0430\u0441 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b?",options:[{id:1,title:"2 \u0433\u043e\u0434\u0430",checked:!1},{id:2,title:"3 \u0433\u043e\u0434\u0430",checked:!1},{id:3,title:"4 \u0433\u043e\u0434\u0430",checked:!1},{id:4,title:"5 \u0433\u043e\u0434\u0430",checked:!1},{id:5,title:"\u041c\u0435\u043d\u044c\u0448\u0435 2 \u043b\u0435\u0442",checked:!1},{id:6,title:"\u0411\u043e\u043b\u044c\u0448\u0435 5 \u043b\u0435\u0442",checked:!1}]},6:{question:"\u041d\u0430 \u043a\u0430\u043a\u0443\u044e \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0443\u044e \u043f\u043b\u0430\u0442\u0443 \u0432\u044b \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0435?",options:[{id:1,title:"40.000 \u0440\u0443\u0431\u043b\u0435\u0439",checked:!1},{id:2,title:"50.000 \u0440\u0443\u0431\u043b\u0435\u0439",checked:!1},{id:3,title:"60.000 \u0440\u0443\u0431\u043b\u0435\u0439",checked:!1},{id:4,title:"70.000 \u0440\u0443\u0431\u043b\u0435\u0439",checked:!1},{id:5,title:"\u0411\u043e\u043b\u044c\u0448\u0435 70.000 \u0440\u0443\u0431\u043b\u0435\u0439",checked:!1}]},7:{question:"\u041a\u0430\u043a\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435?",options:[{id:1,title:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",checked:!1},{id:2,title:"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439",checked:!1},{id:3,title:"\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439",checked:!1},{id:4,title:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439",checked:!1},{id:5,title:"\u041d\u0435 \u0437\u043d\u0430\u044e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430",checked:!1}],isMultyple:!0}},s={data:n,currentStep:1},d=Object(i.b)({name:"questions",initialState:s,reducers:{setChangedData:function(e,t){e.data[e.currentStep]=t.payload},setNextStep:function(e){e.currentStep++},resetState:function(e){e.data=n,e.currentStep=1}}}),l=d.actions,a=l.setNextStep,r=l.setChangedData,u=l.resetState;t.a=d.reducer},8:function(e,t,c){e.exports={wrapper:"Question_wrapper__2Ng2c",title:"Question_title__cpL7L",inner:"Question_inner__2d_Tp",subtitle:"Question_subtitle__20Zj3"}}},[[31,1,2]]]);
//# sourceMappingURL=main.3512458d.chunk.js.map