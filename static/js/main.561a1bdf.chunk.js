(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{204:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var s=a(21),r=a(254),i=a(251),n=(a(195),a(9)),o=a.n(n),l=a(120),c=a.n(l),d=a(184),m=a(248),u=a(249),h=a(250),j=a(244),g=a(38),v=a(31),b=a(85),p=a(169),x=a(186);function f(e){var t=e.elementId,a=e.title;return Object(n.useEffect)((function(){var e=v.j(t,g.h);e.data=[{date:"2013-01-16",market1:71,market2:75,sales1:5,sales2:8},{date:"2013-01-17",market1:74,market2:78,sales1:4,sales2:6},{date:"2013-01-18",market1:78,market2:88,sales1:5,sales2:2},{date:"2013-01-19",market1:85,market2:89,sales1:8,sales2:9},{date:"2013-01-20",market1:82,market2:89,sales1:9,sales2:6},{date:"2013-01-21",market1:83,market2:85,sales1:3,sales2:5},{date:"2013-01-22",market1:88,market2:92,sales1:5,sales2:7},{date:"2013-01-23",market1:85,market2:90,sales1:7,sales2:6},{date:"2013-01-24",market1:85,market2:91,sales1:9,sales2:5},{date:"2013-01-25",market1:80,market2:84,sales1:5,sales2:8},{date:"2013-01-26",market1:87,market2:92,sales1:4,sales2:8},{date:"2013-01-27",market1:84,market2:87,sales1:3,sales2:4},{date:"2013-01-28",market1:83,market2:88,sales1:5,sales2:7},{date:"2013-01-29",market1:84,market2:87,sales1:5,sales2:8},{date:"2013-01-30",market1:81,market2:85,sales1:4,sales2:7}];var a=e.xAxes.push(new g.d);a.renderer.grid.template.location=0,a.renderer.minGridDistance=30;var s=e.yAxes.push(new g.g);s.title.text="Sales";var r=e.yAxes.push(new g.g);r.title.text="Market Days",r.renderer.opposite=!0,r.renderer.grid.template.disabled=!0;var i=e.series.push(new g.c);i.dataFields.valueY="sales1",i.dataFields.dateX="date",i.yAxis=s,i.name="Target Sales",i.tooltipText="{name}\n[bold font-size: 20]${valueY}M[/]",i.fill=e.colors.getIndex(0),i.strokeWidth=0,i.clustered=!1,i.columns.template.width=v.k(40);var n=e.series.push(new g.c);n.dataFields.valueY="sales2",n.dataFields.dateX="date",n.yAxis=s,n.name="Actual Sales",n.tooltipText="{name}\n[bold font-size: 20]${valueY}M[/]",n.fill=e.colors.getIndex(0).lighten(.5),n.strokeWidth=0,n.clustered=!1,n.toBack();var o=e.series.push(new g.f);o.dataFields.valueY="market1",o.dataFields.dateX="date",o.name="Market Days",o.strokeWidth=2,o.tensionX=.7,o.yAxis=r,o.tooltipText="{name}\n[bold font-size: 20]{valueY}[/]";var l=o.bullets.push(new g.b);l.circle.radius=3,l.circle.strokeWidth=2,l.circle.fill=v.i("#fff");var c=e.series.push(new g.f);c.dataFields.valueY="market2",c.dataFields.dateX="date",c.name="Market Days ALL",c.strokeWidth=2,c.tensionX=.7,c.yAxis=r,c.tooltipText="{name}\n[bold font-size: 20]{valueY}[/]",c.stroke=e.colors.getIndex(0).lighten(.5),c.strokeDasharray="3,3";var d=c.bullets.push(new g.b);d.circle.radius=3,d.circle.strokeWidth=2,d.circle.fill=v.i("#fff"),e.cursor=new g.j,e.legend=new g.e,e.legend.position="top",e.scrollbarX=new g.i,e.scrollbarX.series.push(i),e.scrollbarX.series.push(o),e.scrollbarX.parent=e.bottomAxesContainer}),[t]),Object(s.jsxs)(x.a,{elevation:3,style:{padding:24},children:[Object(s.jsx)(p.a,{variant:"h4",color:"textSecondary",style:{marginBottom:16},children:a}),Object(s.jsx)("div",{id:t,style:{height:500}})]})}function O(e){var t=e.elementId,a=e.title;return Object(n.useEffect)((function(){var e=v.j(t,g.h);e.data=function(){var e=[],t=new Date;t.setDate(t.getDate()-150);for(var a=-40,s=.6,r=0;r<150;r++){var i=new Date(t);i.setDate(i.getDate()+r),r>80&&(s=.4),a+=Math.round((Math.random()<s?1:-1)*Math.random()*10),e.push({date:i,visits:a})}return e}();var a=e.xAxes.push(new g.d);a.startLocation=.5,a.endLocation=.5;var s=e.yAxes.push(new g.g),r=e.series.push(new g.f);r.dataFields.valueY="visits",r.dataFields.dateX="date",r.strokeWidth=3,r.tooltipText="{valueY.value}",r.fillOpacity=.1,r.tensionX=.75;var i=s.createSeriesRange(r);i.value=0,i.endValue=-1e3,i.contents.stroke=e.colors.getIndex(4),i.contents.fill=i.contents.stroke,i.contents.strokeOpacity=.7,i.contents.fillOpacity=.1,e.cursor=new g.j,e.cursor.xAxis=a,e.scrollbarX=new v.e,r.tooltip.getFillFromObject=!1,r.tooltip.adapter.add("x",(function(t,a){return r.tooltip.tooltipDataItem.valueY<0?r.tooltip.background.fill=e.colors.getIndex(4):r.tooltip.background.fill=e.colors.getIndex(0),t}))}),[t]),Object(s.jsxs)(x.a,{elevation:3,style:{padding:24},children:[Object(s.jsx)(p.a,{variant:"h4",color:"textSecondary",style:{marginBottom:16},children:a}),Object(s.jsx)("div",{id:t,style:{height:500}})]})}v.m(b.a),v.m(b.a),v.m(b.a);var y=a(78),k=a(181),w=a(185);function C(e){var t=e.elementId,a=e.title;return Object(n.useEffect)((function(){var e=v.j(t,y.a);e.maxZoomLevel=64,e.geodata=k.a,e.projection=new y.e.AlbersUsa;var a=e.tooltipContainer.createChild(v.g);a.align="right",a.valign="top",a.margin(20,20,20,20),a.events.on("hit",(function(){n&&n.hide(),e.goHome(),a.hide(),(n=o.US.series).show()})),a.hide();var s=e.series.push(new y.c);s.useGeodata=!0,s.calculateVisualCenter=!0;var r=s.mapPolygons.template;function i(t){var r=e.series.push(new y.b);r.dataFields.value=t;var l=r.mapImages.template;l.verticalCenter="middle",l.horizontalCenter="middle",l.propertyFields.latitude="lat",l.propertyFields.longitude="long",l.tooltipText="{name}:\n[bold]{stores} stores[/]";var c=l.createChild(v.b);c.radius=10,c.fillOpacity=.7,c.verticalCenter="middle",c.horizontalCenter="middle",c.nonScaling=!0;var d=l.createChild(v.d);return d.text="{stores}",d.fill=v.i("#fff"),d.verticalCenter="middle",d.horizontalCenter="middle",d.nonScaling=!0,r.heatRules.push({target:c,property:"radius",min:10,max:30}),r.mapImages.template.events.on("hit",(function(t){var r=t.target.dataItem.dataContext;if(r.target){if(o[r.target].series||(o[r.target].series=i("count"),o[r.target].series.data=r.markerData),n&&n.hide(),"state"===r.type){var l=s.getPolygonById("US-"+r.state);e.zoomToMapObject(l)}else"city"===r.type&&e.zoomToGeoPoint({latitude:r.lat,longitude:r.long},64,!0);a.show(),(n=o[r.target].series).show()}})),r}r.tooltipText="{name}",r.fill=e.colors.getIndex(0),e.events.on("ready",(function(){var e=new v.c;e.url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/TargetStores.json",e.events.on("parseended",(function(e){var t;t=e.target.data,o.US={markerData:[],series:i("stores")},n=o.US.series,v.h.each(t.query_results,(function(e){var t={state:e.MAIL_ST_PROV_C,long:v.l.toNumber(e.LNGTD_I),lat:v.l.toNumber(e.LATTD_I),location:e.co_loc_n,city:e.mail_city_n,count:v.l.toNumber(e.count)};if(void 0===o[t.state]){var a=s.getPolygonById("US-"+t.state);if(!a)return;o[t.state]={target:t.state,type:"state",name:a.dataItem.dataContext.name,count:t.count,stores:1,lat:a.visualLatitude,long:a.visualLongitude,state:t.state,markerData:[]},o.US.markerData.push(o[t.state])}else o[t.state].stores++,o[t.state].count+=t.count;void 0===o[t.city]?(o[t.city]={target:t.city,type:"city",name:t.city,count:t.count,stores:1,lat:t.lat,long:t.long,state:t.state,markerData:[]},o[t.state].markerData.push(o[t.city])):(o[t.city].stores++,o[t.city].count+=e.count),o[t.city].markerData.push({name:t.location,count:t.count,stores:1,lat:t.lat,long:t.long,state:t.state})})),o.US.series.data=o.US.markerData})),e.load()}));var n,o={}}),[t]),Object(s.jsxs)(x.a,{elevation:3,style:{padding:24},children:[Object(s.jsx)(p.a,{variant:"h4",color:"textSecondary",style:{marginBottom:16},children:a}),Object(s.jsx)("div",{id:t,style:{height:500}})]})}v.m(w.a),v.m(b.a);a(182),a(168);v.m(b.a);var S=a(242),D=a(243),I=a(245),T=a(166),F=a(241),A=a(165),B=a(167),z=a(240),X=a(230),L=a(231),M=a(232),R=a(233),Y=a(234),U=a(235),W=a(236),_=a(237),N=a(238),P=a(239),H=a(30),E={bubble:X.a,calendar:L.a,chart:M.a,donut:R.a,money:Y.a,receipt:U.a,schedule:W.a,sum:_.a,trendingDown:N.a,trendingUp:P.a},G=Object(z.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},avatar:{},cardHeaderRoot:{backgroundColor:"#1e2021",opacity:.9,padding:e.spacing(1)},cardHeaderTitle:{fontSize:"2em",color:"white",whiteSpace:"nowrap"},cardHeaderSubheader:{color:"white"},cardContentRoot:{padding:e.spacing(3,2)},blue:{color:T.a[500]},purple:{color:F.a[500]},red:{color:A.a[800]},green:{color:B.a[800]},skeletonRoot:{borderRadius:4,minWidth:350}}}));function $(e){var t=G(),a=e.avatar,r=e.avatarColor,i=void 0===r?"blue":r,n=e.icon,o=void 0===n?"trendingUp":n,l=e.loading,c=void 0!==l&&l,d=e.title,m=e.value,u=E[o],h=Object(s.jsx)(u,{className:Object(H.a)(t[i]),shapeRendering:"crispEdges",style:{fontSize:48}});return c?Object(s.jsxs)(S.a,{classes:{root:t.root},children:[Object(s.jsx)(D.a,{avatar:Object(s.jsx)(j.a,{animation:"wave",variant:"circle",width:48,height:48}),title:Object(s.jsx)(j.a,{animation:"wave",height:10,width:"80%"}),subheader:Object(s.jsx)(j.a,{animation:"wave",height:10,width:"40%"})}),Object(s.jsx)(j.a,{animation:"wave",variant:"rect",height:75})]}):Object(s.jsxs)(S.a,{classes:{root:t.root},children:[Object(s.jsx)(D.a,{classes:{root:t.cardHeaderRoot,title:t.cardHeaderTitle,subheader:t.cardHeaderSubheader},avatar:a||h,title:d}),Object(s.jsx)(I.a,{classes:{root:t.cardContentRoot},children:Object(s.jsx)(p.a,{variant:"h3",color:"textSecondary",component:"p",style:{fontSize:"3em"},children:m})})]})}a(204);var V=a(246),J=a(247),q=a(252),Z=a(183),K=a.n(Z),Q=Object(z.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(3)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ee(e){var t=Q();return Object(s.jsx)("div",{className:t.root,children:Object(s.jsx)(V.a,{color:"default",position:"static",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)(q.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(s.jsx)(K.a,{})}),Object(s.jsx)(p.a,{variant:"h6",className:t.title,children:"Data Vulcans"})]})})})}var te=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),1500)})),Object(s.jsxs)("div",{children:[Object(s.jsx)(m.a,{}),Object(s.jsx)(ee,{}),Object(s.jsxs)(u.a,{maxWidth:"xl",children:[Object(s.jsxs)(h.a,{container:!0,spacing:3,style:{marginBottom:24},children:[Object(s.jsx)(h.a,{item:!0,md:3,sm:6,xs:12,children:Object(s.jsx)($,{avatarColor:"green",icon:"money",title:"Total Charges",value:"$1,932,438,031",loading:a})}),Object(s.jsx)(h.a,{item:!0,md:3,sm:6,xs:12,children:Object(s.jsx)($,{avatarColor:"red",icon:"receipt",title:"Total Payments",value:"$984,823,207",loading:a})}),Object(s.jsx)(h.a,{item:!0,md:3,sm:6,xs:12,children:Object(s.jsx)($,{avatarColor:"purple",icon:"chart",title:"Average Charges",value:"$780,404",loading:a})}),Object(s.jsx)(h.a,{item:!0,md:3,sm:6,xs:12,children:Object(s.jsx)($,{avatarColor:"blue",icon:"sum",title:"Average Charge by Visit",value:"$99",loading:a})})]}),Object(s.jsxs)(h.a,{container:!0,spacing:3,style:{marginBottom:24},children:[Object(s.jsx)(h.a,{item:!0,md:6,sm:12,children:a?Object(s.jsx)(j.a,{variant:"rect",width:"100%",height:600}):Object(s.jsx)(O,{elementId:"linechart",title:"Charges by Year"})}),Object(s.jsx)(h.a,{item:!0,md:6,sm:12,children:a?Object(s.jsx)(j.a,{variant:"rect",width:"100%",height:600}):Object(s.jsx)(f,{elementId:"combined",title:"Wall Road"})})]}),Object(s.jsx)(h.a,{container:!0,spacing:3,style:{marginBottom:24},children:Object(s.jsx)(h.a,{item:!0,xs:12,children:a?Object(s.jsx)(j.a,{variant:"rect",width:"100%",height:600}):Object(s.jsx)(C,{elementId:"usmap",title:"'Merica"})})})]})]})},ae=(a(207),function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,457)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),i(e),n(e)}))}),se=Object(r.a)({productionPrefix:"dash-"});c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(i.b,{generateClassName:se,injectFirst:!0,children:Object(s.jsx)(te,{})})}),document.getElementById("root")),ae()}},[[208,1,3]]]);
//# sourceMappingURL=main.561a1bdf.chunk.js.map