"use strict";(self["webpackChunktemplate_vue_platform"]=self["webpackChunktemplate_vue_platform"]||[]).push([[829],{3829:function(e,l,t){t.r(l),t.d(l,{default:function(){return Ne}});var a=t(3396),n=t(1550),o=t(7103),s=t(836),i=t(3289),u=t(6052),r=t(8777),d=t(4193),c=t(240),v=t(165),p=t(1556),m=t(5863),f=t(2370),w=t(1819),y=t(4357),x=t(3185),g=t(4019),h=t(1629),b=t(8717),_=t(4906),k=t(4870),V=t(3766),W=t(131),C=t(1107),I=t(2385),A=t(9888);function F(e,l,t){if(null==l)return e;if(Array.isArray(l))throw new Error("Multiple matches is not implemented");return"number"===typeof l&&~l?(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,l)]),(0,a.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(l,t)]),(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(l+t)])]):e}const S=(0,V.U)({autoSelectFirst:{type:[Boolean,String]},search:String,...(0,w.Up)({filterKeys:["title"]}),...(0,c.fL)(),...(0,W.CE)((0,v.w)({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...(0,_.X)({transition:!1})},"VAutocomplete"),D=(0,C.ev)()({name:"VAutocomplete",props:S(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:t}=l;const{t:c}=(0,h.bU)(),_=(0,k.iH)(),V=(0,k.XI)(!1),C=(0,k.XI)(!0),S=(0,k.XI)(!1),D=(0,k.iH)(),T=(0,k.iH)(),U=(0,b.z)(e,"menu"),E=(0,a.Fl)({get:()=>U.value,set:e=>{U.value&&!e&&D.value?.ΨopenChildren||(U.value=e)}}),P=(0,k.XI)(-1),H=(0,a.Fl)((()=>_.value?.color)),z=(0,a.Fl)((()=>E.value?e.closeText:e.openText)),{items:Y,transformIn:R,transformOut:B}=(0,g.Ce)(e),{textColorClasses:L,textColorStyles:M}=(0,f.rY)(H),j=(0,b.z)(e,"search",""),Z=(0,b.z)(e,"modelValue",[],(e=>R(null===e?[null]:(0,W.FT)(e))),(l=>{const t=B(l);return e.multiple?t:t[0]??null})),O=(0,y.cI)(),{filteredItems:$,getMatches:q}=(0,w.L0)(e,Y,(()=>C.value?"":j.value)),K=(0,a.Fl)((()=>e.hideSelected?$.value.filter((e=>!Z.value.some((l=>l.value===e.value)))):$.value)),X=(0,a.Fl)((()=>Z.value.map((e=>e.props.value)))),G=(0,a.Fl)((()=>{const l=!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&j.value===K.value[0]?.title;return l&&K.value.length>0&&!C.value&&!S.value})),N=(0,a.Fl)((()=>e.hideNoData&&!Y.value.length||e.readonly||O?.isReadonly.value)),Q=(0,k.iH)(),{onListScroll:J,onListKeydown:ee}=(0,m.B)(Q,_);function le(l){e.openOnClear&&(E.value=!0),j.value=""}function te(){N.value||(E.value=!0)}function ae(e){N.value||(V.value&&(e.preventDefault(),e.stopPropagation()),E.value=!E.value)}function ne(l){if(e.readonly||O?.isReadonly.value)return;const t=_.value.selectionStart,a=Z.value.length;if((P.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(E.value=!0),["Escape"].includes(l.key)&&(E.value=!1),G.value&&["Enter","Tab"].includes(l.key)&&ve(K.value[0]),"ArrowDown"===l.key&&G.value&&Q.value?.focus("next"),e.multiple){if(["Backspace","Delete"].includes(l.key)){if(P.value<0)return void("Backspace"!==l.key||j.value||(P.value=a-1));const e=P.value,t=Z.value[P.value];t&&!t.props.disabled&&ve(t),P.value=e>=a-1?a-2:e}if("ArrowLeft"===l.key){if(P.value<0&&t>0)return;const e=P.value>-1?P.value-1:a-1;Z.value[e]?P.value=e:(P.value=-1,_.value.setSelectionRange(j.value?.length,j.value?.length))}if("ArrowRight"===l.key){if(P.value<0)return;const e=P.value+1;Z.value[e]?P.value=e:(P.value=-1,_.value.setSelectionRange(0,0))}}}function oe(e){j.value=e.target.value}function se(e){if((0,W.Ku)(_.value,":autofill")||(0,W.Ku)(_.value,":-webkit-autofill")){const l=Y.value.find((l=>l.title===e.target.value));l&&ve(l)}}function ie(){V.value&&(C.value=!0,_.value?.focus())}function ue(e){V.value=!0,setTimeout((()=>{S.value=!0}))}function re(e){S.value=!1}function de(l){(null==l||""===l&&!e.multiple)&&(Z.value=[])}const ce=(0,k.XI)(!1);function ve(l){if(e.multiple){const t=Z.value.findIndex((t=>e.valueComparator(t.value,l.value)));if(-1===t)Z.value=[...Z.value,l];else{const e=[...Z.value];e.splice(t,1),Z.value=e}}else Z.value=[l],ce.value=!0,j.value=l.title,E.value=!1,C.value=!0,(0,a.Y3)((()=>ce.value=!1))}return(0,a.YP)(V,((l,t)=>{l!==t&&(l?(ce.value=!0,j.value=e.multiple?"":String(Z.value.at(-1)?.props.title??""),C.value=!0,(0,a.Y3)((()=>ce.value=!1))):(e.multiple||j.value?!G.value||S.value||Z.value.some((e=>{let{value:l}=e;return l===K.value[0].value}))||ve(K.value[0]):Z.value=[],E.value=!1,j.value="",P.value=-1))})),(0,a.YP)(j,(e=>{V.value&&!ce.value&&(e&&(E.value=!0),C.value=!e)})),(0,a.YP)(E,(()=>{if(!e.hideSelected&&E.value&&Z.value.length){const e=K.value.findIndex((e=>Z.value.some((l=>e.value===l.value))));I.BR&&window.requestAnimationFrame((()=>{e>=0&&T.value?.scrollToIndex(e)}))}})),(0,A.L)((()=>{const l=!(!e.chips&&!t.chip),m=!!(!e.hideNoData||K.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),f=Z.value.length>0,[w]=v.h.filterProps(e);return(0,a.Wm)(v.h,(0,a.dG)({ref:_},w,{modelValue:j.value,"onUpdate:modelValue":de,focused:V.value,"onUpdate:focused":e=>V.value=e,validationValue:Z.externalValue,counterValue:Z.value.length,dirty:f,onInput:oe,onChange:se,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":E.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":P.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:f?void 0:e.placeholder,"onClick:clear":le,"onMousedown:control":te,onKeydown:ne}),{...t,default:()=>(0,a.Wm)(a.HY,null,[(0,a.Wm)(d.T,(0,a.dG)({ref:D,modelValue:E.value,"onUpdate:modelValue":e=>E.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ie},e.menuProps),{default:()=>[m&&(0,a.Wm)(u.i,{ref:Q,selected:X.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:ee,onFocusin:ue,onFocusout:re,onScrollPassive:J,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[t["prepend-item"]?.(),!K.value.length&&!e.hideNoData&&(t["no-data"]?.()??(0,a.Wm)(r.l,{title:c(e.noDataText)},null)),(0,a.Wm)(p.t,{ref:T,renderless:!0,items:K.value},{default:l=>{let{item:o,index:s,itemRef:u}=l;const d=(0,a.dG)(o.props,{ref:u,key:s,active:!(!G.value||0!==s)||void 0,onClick:()=>ve(o)});return t.item?.({item:o,index:s,props:d})??(0,a.Wm)(r.l,d,{prepend:l=>{let{isSelected:t}=l;return(0,a.Wm)(a.HY,null,[e.multiple&&!e.hideSelected?(0,a.Wm)(n.p,{key:o.value,modelValue:t,ripple:!1,tabindex:"-1"},null):void 0,o.props.prependIcon&&(0,a.Wm)(i.t,{icon:o.props.prependIcon},null)])},title:()=>C.value?o.title:F(o.title,q(o)?.title,j.value?.length??0)})}}),t["append-item"]?.()]})]}),Z.value.map(((n,i)=>{function u(e){e.stopPropagation(),e.preventDefault(),ve(n)}const r={"onClick:close":u,onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},d=l?!!t.chip:!!t.selection,c=d?(0,W._g)(l?t.chip({item:n,index:i,props:r}):t.selection({item:n,index:i})):void 0;if(!d||c)return(0,a.Wm)("div",{key:n.value,class:["v-autocomplete__selection",i===P.value&&["v-autocomplete__selection--selected",L.value]],style:i===P.value?M.value:{}},[l?t.chip?(0,a.Wm)(s.z,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[c]}):(0,a.Wm)(o.v,(0,a.dG)({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},r),null):c??(0,a.Wm)("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&i<Z.value.length-1&&(0,a.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,a.Uk)(",")])])])}))]),"append-inner":function(){for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(0,a.Wm)(a.HY,null,[t["append-inner"]?.(...n),e.menuIcon?(0,a.Wm)(i.t,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ae,onClick:W.ZT,"aria-label":c(z.value),title:c(z.value)},null):void 0])}})})),(0,x.F)({isFocused:V,isPristine:C,menu:E,search:j,filteredItems:$,select:ve},_)}});var T=t(870),U=t(11),E=t(6572),P=t(1888),H=t(1334),z=t(3601);const Y=(0,a._)("div",{class:"flex justify-between"},[(0,a._)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-400"},"Reportes de Formulario")],-1),R={class:"py-5"},B={class:"block w-full lg:flex justify-between gap-2 items-center mb-4"},L={class:"block w-full md:flex lg:flex gap-3 lg:w-[70%] md:w-[100%] items-center"};function M(e,l,t,n,o,s){const i=(0,a.up)("TableAnsweredFormVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Y,(0,a._)("div",R,[(0,a._)("div",B,[(0,a._)("div",L,[(0,a.Wm)(v.h,{label:"Fecha desde",type:"date","hide-details":"",density:"compact",modelValue:n.dateFrom,"onUpdate:modelValue":l[0]||(l[0]=e=>n.dateFrom=e),variant:"outlined",color:"indigo",class:"mb-3 md:mb-0"},null,8,["modelValue"]),(0,a.Wm)(v.h,{label:"Fecha hasta",type:"date","hide-details":"",density:"compact",modelValue:n.dateTo,"onUpdate:modelValue":l[1]||(l[1]=e=>n.dateTo=e),variant:"outlined",color:"indigo",class:"mb-3 md:mb-0"},null,8,["modelValue"]),(0,a.Wm)(D,{label:"Conductores",items:n.dropdownDrivers,color:"blue",modelValue:n.driver,"onUpdate:modelValue":l[2]||(l[2]=e=>n.driver=e),variant:"outlined","hide-details":"",density:"compact",class:"mb-3 md:mb-0 md:w-[20rem] w-full"},null,8,["items","modelValue"]),(0,a.Wm)(T.T,{color:"indigo",class:"custom-btn mb-3 md:mb-0",onClick:n.searchReport},{default:(0,a.w5)((()=>[(0,a.Uk)("Buscar")])),_:1},8,["onClick"])])]),(0,a.Wm)(i,{desserts:n.dessertsAnsweredForms,dataDrivers:n.dataDrivers},null,8,["desserts","dataDrivers"]),(0,a.Wm)(z.B,{modelValue:n.showAlert,"onUpdate:modelValue":l[4]||(l[4]=e=>n.showAlert=e),persistent:"","max-width":"400"},{default:(0,a.w5)((()=>[(0,a.Wm)(U._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E.E,{class:"headline"},{default:(0,a.w5)((()=>[(0,a.Uk)(" ¡Alerta! ")])),_:1}),(0,a.Wm)(P.Z,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Por favor, seleccione ambas fechas. ")])),_:1}),(0,a.Wm)(H.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T.T,{color:"primary",onClick:l[3]||(l[3]=e=>n.showAlert=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Entendido ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])],64)}t(1719);var j=t(3041);const Z="http://204.48.17.106:3020/api/v1";function O(e,l){return j.Z.post(`${Z}/answered-forms/report`,e,{headers:{Authorization:`Bearer ${l}`}})}const $="http://204.48.17.106:3020/api/v1";function q(e){return j.Z.get(`${$}/drivers`,{headers:{Authorization:`Bearer ${e}`}})}var K=t(7139),X=t(678);const G={class:"flex gap-1 justify-center"},N=["onClick"];function Q(e,l,t,n,o,s){const i=(0,a.up)("v-data-table"),u=(0,a.up)("VisualizeAnsweredForm");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{headers:o.headers,items:t.desserts,class:"elevation-1 text-sm"},{["item.answeredquestions"]:(0,a.w5)((({item:e})=>[(0,a.Uk)((0,K.zw)(e.answeredquestions.length),1)])),["item.driver"]:(0,a.w5)((({item:e})=>[(0,a.Uk)((0,K.zw)(t.dataDrivers.find((l=>l.id==e.driverId)).name),1)])),["item.createdAt"]:(0,a.w5)((({item:e})=>[(0,a.Uk)((0,K.zw)(n.formatCreatedAt(e.createdAt)),1)])),["item.actions"]:(0,a.w5)((({item:e})=>[(0,a._)("div",G,[(0,a._)("span",{onClick:l=>n.visualizeItem(e)},[(0,a.Wm)(T.T,{icon:"mdi-eye",size:"small",variant:"text",color:"green"}),(0,a.Wm)(X.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Visualizar")])),_:1})],8,N)])])),_:2},1032,["headers","items"]),(0,a.Wm)(u,{openModal:n.openModalView,itemView:n.itemView,dataDrivers:t.dataDrivers,onCancelItem:l[0]||(l[0]=e=>n.openModalView=!1)},null,8,["openModal","itemView","dataDrivers"])],64)}var J=t(5557),ee=t(9166),le=t(6107),te=t(1970),ae=t(1138),ne=t(5935);const oe=Symbol.for("vuetify:v-expansion-panel"),se=["default","accordion","inset","popout"],ie=(0,V.U)({color:String,variant:{type:String,default:"default",validator:e=>se.includes(e)},readonly:Boolean,...(0,ee.l)(),...(0,te.k4)(),...(0,ae.Q)(),...(0,ne.x$)()},"VExpansionPanels"),ue=(0,C.ev)()({name:"VExpansionPanels",props:ie(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;(0,te._v)(e,oe);const{themeClasses:n}=(0,ne.ER)(e),o=(0,a.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,le.AF)({VExpansionPanel:{color:(0,k.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,k.Vh)(e,"readonly")}}),(0,A.L)((()=>(0,a.Wm)(e.tag,{class:["v-expansion-panels",n.value,o.value,e.class],style:e.style},t))),{}}});t(560);var re=t(9242),de=t(8952),ce=t(1136);const ve=(0,V.U)({...(0,ee.l)(),...(0,ce.H)()},"VExpansionPanelText"),pe=(0,C.ev)()({name:"VExpansionPanelText",props:ve(),setup(e,l){let{slots:t}=l;const n=(0,a.f3)(oe);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:s}=(0,ce.l)(e,n.isSelected);return(0,A.L)((()=>(0,a.Wm)(de.Fx,{onAfterLeave:s},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&o.value&&(0,a.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[t.default?.()])]),[[re.F8,n.isSelected.value]])]}))),{}}});var me=t(4960),fe=t(3824);const we=(0,V.U)({color:String,expandIcon:{type:me.lE,default:"$expand"},collapseIcon:{type:me.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...(0,ee.l)()},"VExpansionPanelTitle"),ye=(0,C.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:fe.H},props:we(),setup(e,l){let{slots:t}=l;const n=(0,a.f3)(oe);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:s}=(0,f.Y5)(e,"color"),u=(0,a.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,A.L)((()=>(0,a.wy)((0,a.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value},o.value,e.class],style:[s.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[(0,a.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),t.default?.(u.value),!e.hideActions&&(0,a.Wm)("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(u.value):(0,a.Wm)(i.t,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,a.Q2)("ripple"),e.ripple]]))),{}}});var xe=t(2465),ge=t(4231);const he=(0,V.U)({title:String,text:String,bgColor:String,...(0,ee.l)(),...(0,xe.c)(),...(0,te.YQ)(),...(0,ce.H)(),...(0,ge.I)(),...(0,ae.Q)(),...we()},"VExpansionPanel"),be=(0,C.ev)()({name:"VExpansionPanel",props:he(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=(0,te.Yt)(e,oe),{backgroundColorClasses:o,backgroundColorStyles:s}=(0,f.Y5)(e,"bgColor"),{elevationClasses:i}=(0,xe.Y)(e),{roundedClasses:u}=(0,ge.b)(e),r=(0,a.Fl)((()=>n?.disabled.value||e.disabled)),d=(0,a.Fl)((()=>n.group.items.value.reduce(((e,l,t)=>(n.group.selected.value.includes(l.id)&&e.push(t),e)),[]))),c=(0,a.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&d.value.some((l=>l-e===1))})),v=(0,a.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&d.value.some((l=>l-e===-1))}));return(0,a.JJ)(oe,n),(0,le.AF)({VExpansionPanelText:{eager:(0,k.Vh)(e,"eager")}}),(0,A.L)((()=>{const l=!(!t.text&&!e.text),d=!(!t.title&&!e.title);return(0,a.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":c.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":r.value},u.value,o.value,e.class],style:[s.value,e.style]},{default:()=>[(0,a.Wm)("div",{class:["v-expansion-panel__shadow",...i.value]},null),d&&(0,a.Wm)(ye,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),l&&(0,a.Wm)(pe,{key:"text"},{default:()=>[t.text?t.text():e.text]}),t.default?.()]})})),{}}});var _e=t(8521),ke=t(9234),Ve=t(1328);const We=(0,a._)("span",{class:"px-4 w-full text-center text-blue-500 font-bold title_views"},"REGISTRO DE FORMULARIO",-1),Ce={class:"flex justify-between py-1"},Ie=(0,a._)("span",{class:"font-bold text-gray-600"}," Formulario: ",-1),Ae={class:"flex justify-between py-1"},Fe=(0,a._)("span",{class:"font-bold text-gray-600"}," Descripción: ",-1),Se={class:"flex justify-between py-1"},De=(0,a._)("span",{class:"font-bold text-gray-600"}," Conductor: ",-1),Te=(0,a._)("p",{class:"font-bold pb-3 text-indigo-600"},"Preguntas: ",-1),Ue={class:"flex justify-between py-1"},Ee=(0,a._)("span",{class:"font-bold"}," Respuesta: ",-1),Pe={class:"flex justify-between py-1"},He=(0,a._)("span",{class:"font-bold"}," Descripción: ",-1),ze={class:"py-1"},Ye=(0,a._)("span",{class:"font-bold"}," Imagen: ",-1),Re=["src"];function Be(e,l,t,n,o,s){return(0,a.wg)(),(0,a.j4)(z.B,{modelValue:n.dialog,"onUpdate:modelValue":l[0]||(l[0]=e=>n.dialog=e),width:"550","onClick:outside":n.closeItem},{default:(0,a.w5)((()=>[(0,a.Wm)(U._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Ve.i,null,{default:(0,a.w5)((()=>[We])),_:1}),(0,a.Wm)(P.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_e.D,{cols:"12",class:"text-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",Ce,[Ie,(0,a._)("span",null,(0,K.zw)(t.itemView.form.title),1)]),(0,a._)("div",Ae,[Fe,(0,a._)("span",null,(0,K.zw)(t.itemView.form.description),1)]),(0,a._)("div",Se,[De,(0,a._)("span",null,(0,K.zw)(t.dataDrivers.find((e=>e.id==t.itemView.driverId)).name),1)]),(0,a._)("div",null,[Te,(0,a.Wm)(ue,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.itemView.answeredquestions,(e=>((0,a.wg)(),(0,a.j4)(be,{key:e.name},{default:(0,a.w5)((()=>[(0,a.Wm)(ye,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,K.zw)(e.question.description),1)])),_:2},1024),(0,a.Wm)(pe,null,{default:(0,a.w5)((()=>[(0,a._)("div",Ue,[Ee,(0,a._)("span",null,(0,K.zw)(e.answer),1)]),(0,a._)("div",Pe,[He,(0,a._)("span",null,(0,K.zw)(e.description),1)]),(0,a._)("div",ze,[Ye,(0,a._)("div",null,[(0,a._)("img",{src:"http://204.48.17.106:3020/api/v1/answered-forms/getImage/"+e.img,alt:"",class:"w-[50%]"},null,8,Re)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1}),(0,a.Wm)(H.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ke.C),(0,a.Wm)(T.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.closeItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var Le={props:{dataDrivers:Array,itemView:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:l}){const t=(0,k.iH)(!1);(0,a.YP)((()=>e.openModal),(async e=>{t.value=e})),(0,a.YP)((()=>e.itemView),(e=>{console.log(e)}));const n=()=>{l("cancel-item")};return{dialog:t,closeItem:n}}},Me=t(89);const je=(0,Me.Z)(Le,[["render",Be]]);var Ze=je,Oe={props:{desserts:Array,dataDrivers:Array},components:{VDataTable:J.y_,VisualizeAnsweredForm:Ze},emits:["delete-item"],data(){return{headers:[{title:"Código",key:"id"},{title:"Formulario",align:"start",key:"form.title"},{title:"Preguntas respondidas",align:"start",key:"answeredquestions"},{title:"Conductor",align:"start",key:"driver"},{title:"Fecha de creación",align:"center",key:"createdAt"},{title:"Acciones",align:"center",key:"actions"}]}},setup(e,{emit:l}){const t=(0,k.iH)({}),a=(0,k.iH)(!1),n=e=>{a.value=!0,t.value=e},o=e=>{l("delete-item",{item:e})},s=e=>{const l={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"},t=new Date(e).toLocaleDateString("es-PE",l);return t};return{itemView:t,openModalView:a,formatCreatedAt:s,visualizeItem:n,deleteItem:o}}};const $e=(0,Me.Z)(Oe,[["render",Q]]);var qe=$e,Ke=t(4239),Xe={components:{TableAnsweredFormVue:qe},setup(){const e=(0,k.iH)(""),l=(0,k.iH)(""),t=(0,k.iH)(""),n=(0,k.iH)(0),o=(0,k.iH)([]),s=(0,k.iH)([]),i=(0,k.iH)([]),u=(0,k.iH)(!1);(0,a.bv)((async()=>{r()}));const r=()=>{q(Ke.Z.state.token).then((e=>{o.value=e.data.data;const l=e.data.data.map((e=>e.name));l.unshift("Todos"),s.value=l}))};(0,a.YP)((()=>t.value),(e=>{n.value="Todos"!==e?o.value.find((l=>l.name===e)).id:0}));const d=()=>{if(!e.value||!l.value)return void(u.value=!0);const t={dateFrom:e.value,dateTo:l.value,driverId:n.value};O(t,Ke.Z.state.token).then((e=>{i.value=e.data.data})).catch((e=>{console.error("Error al realizar la búsqueda:",e)}))};return{driver:t,dateFrom:e,dateTo:l,dataDrivers:o,dropdownDrivers:s,searchReport:d,dessertsAnsweredForms:i,showAlert:u}}};const Ge=(0,Me.Z)(Xe,[["render",M]]);var Ne=Ge}}]);
//# sourceMappingURL=829.1d99850c.js.map