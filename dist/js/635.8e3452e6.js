"use strict";(self["webpackChunktemplate_vue_platform"]=self["webpackChunktemplate_vue_platform"]||[]).push([[635],{4418:function(e,t,l){l.r(t),l.d(t,{default:function(){return H}});var a=l(3396),s=l(7139),o=l(7771);const n=e=>((0,a.dD)("data-v-537b8903"),e=e(),(0,a.Cn)(),e),r={class:"flex justify-center items-center w-full h-screen overflow-y-hidden bg-login"},i={class:"w-full h-full"},c=n((()=>(0,a._)("div",{class:"w-full flex justify-end"},[(0,a._)("h1",{class:"text-gray-600 pt-10 font-bold text-5xl mr-15"},"eDrivers")],-1))),d={class:"flex justify-start w-full pt-[2rem]"},u={class:"min-w-[30rem] rounded-xl ml-20 pt-3 bg-white"},p={key:0,class:"flex justify-center"};function v(e,t,l,n,v,m){const f=(0,a.up)("FormAuthVue");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[c,(0,a._)("div",d,[(0,a._)("div",u,[n.statusError?((0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(o.w,{color:"#FF5250",theme:"dark",icon:"mdi-alert-circle",density:"compact",closable:"",class:"max-w-[25rem]",border:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(n.messageError),1)])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(f,{onValidateLogin:n.onValidateLogin},null,8,["onValidateLogin"])])])])])}l(560);var m=l(4870),f=l(870),b=l(5039),g=l(165);const y={class:"w-full pt-4"},x={class:"w-full flex justify-center"},_=["src"],k=(0,a._)("p",{class:"text-2xl pb-2 font-bold text-blue-600 text-center"},"Bienvenido!",-1),w=(0,a._)("p",{class:"text-xs pb-2 text-gray-500 text-center"},"Ingresa las credenciales otorgadas por tu proveedor",-1),h=["action"],C=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis"},"Usuario",-1),V=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},[(0,a.Uk)(" Contraseña "),(0,a._)("a",{class:"text-caption text-decoration-none text-blue",href:"#",rel:"noopener noreferrer",target:"_blank"}," Olvidaste tu contraseña?")],-1);function W(e,t,l,s,o,n){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",null,[(0,a._)("div",x,[(0,a._)("img",{src:e.imgLogo,alt:"",class:"w-12"},null,8,_)]),k,w]),(0,a.Wm)(b._,{class:"mx-auto pa-8 pt-2 elevation-0",elevation:"8","max-width":"448",rounded:"lg"},{default:(0,a.w5)((()=>[(0,a._)("form",{action:s.validateLogin},[C,(0,a.Wm)(g.h,{density:"compact",placeholder:"Ingrese su usuario","prepend-inner-icon":"mdi-account",variant:"outlined",modelValue:s.username,"onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),color:"blue"},null,8,["modelValue"]),V,(0,a.Wm)(g.h,{"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",density:"compact",placeholder:"Ingrese su contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[1]||(t[1]=t=>e.visible=!e.visible),modelValue:s.password,"onUpdate:modelValue":t[2]||(t[2]=e=>s.password=e),color:"blue"},null,8,["append-inner-icon","type","modelValue"]),(0,a.Wm)(f.T,{block:"",class:"mb-8",color:"blue",size:"large",variant:"tonal",onClick:s.validateLogin},{default:(0,a.w5)((()=>[(0,a.Uk)(" Ingresar ")])),_:1},8,["onClick"])],8,h)])),_:1})])}var I=l.p+"img/logo_sysnet.27bcaa54.png",L={data:()=>({visible:!1,imgLogo:I}),emits:["validate-login"],setup(e,{emit:t}){const l=(0,m.iH)(""),a=(0,m.iH)(""),s=()=>{const e={username:l.value,password:a.value};t("validate-login",e)};return{username:l,password:a,validateLogin:s}}},F=l(89);const S=(0,F.Z)(L,[["render",W]]);var U=S,z=l.p+"img/FrontPage.4e70548d.png",E=(l(3041),l(1076));const $="http://204.48.17.106:3020/api/v1";function j(e){return E.Z.post(`${$}/auth/login/web`,e)}var B=l(2483),Z=l(4239),A={components:{FormAuthVue:U},data:()=>({visible:!1,imgFrontPage:z}),setup(){const e=(0,m.iH)(""),t=(0,m.iH)(!1),l=(0,B.tv)(),a=a=>{j(a).then((e=>{const t=e.data.data;Z.Z.commit("setUsername",t.username),Z.Z.commit("setToken",t.token),Z.Z.commit("setRole",t.role),Z.Z.commit("setIsAuthenticated",!0),l.push("/")})).catch((l=>{t.value=!0,l.response?401===l.response.status?e.value="Las credenciales de usuario no son válidas":500===l.response.status?e.value="Error 500: Error interno del servidor":e.value=l.response.data.message:l.request?e.value="No se recibió respuesta del servidor":(e.value="Error al configurar la solicitud:",l.message)}))};return{onValidateLogin:a,messageError:e,statusError:t}}};const D=(0,F.Z)(A,[["render",v],["__scopeId","data-v-537b8903"]]);var H=D},7771:function(e,t,l){l.d(t,{w:function(){return L}});var a=l(3396),s=l(1114);const o=(0,s.J)("v-alert-title");var n=l(870),r=l(836),i=l(3289),c=l(2370),d=l(9166),u=l(9694),p=l(4544),v=l(2465),m=l(4960),f=l(1629),b=l(5180),g=l(489),y=l(8717),x=l(4231),_=l(1138),k=l(5935),w=l(5221),h=l(4870),C=l(3766),V=l(1107);const W=["success","info","warning","error"],I=(0,C.U)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:m.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>W.includes(e)},...(0,d.l)(),...(0,u.f)(),...(0,p.x)(),...(0,v.c)(),...(0,b.y)(),...(0,g.F)(),...(0,x.I)(),...(0,_.Q)(),...(0,k.x$)(),...(0,w.bk)({variant:"flat"})},"VAlert"),L=(0,V.ev)()({name:"VAlert",props:I(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:s}=t;const d=(0,y.z)(e,"modelValue"),m=(0,a.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),_=(0,a.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:C}=(0,k.ER)(e),{colorClasses:V,colorStyles:W,variantClasses:I}=(0,w.c1)(_),{densityClasses:L}=(0,u.t)(e),{dimensionStyles:F}=(0,p.$)(e),{elevationClasses:S}=(0,v.Y)(e),{locationStyles:U}=(0,b.T)(e),{positionClasses:z}=(0,g.K)(e),{roundedClasses:E}=(0,x.b)(e),{textColorClasses:$,textColorStyles:j}=(0,c.rY)((0,h.Vh)(e,"borderColor")),{t:B}=(0,f.bU)(),Z=(0,a.Fl)((()=>({"aria-label":B(e.closeLabel),onClick(e){d.value=!1,l("click:close",e)}})));return()=>{const t=!(!s.prepend&&!m.value),l=!(!s.title&&!e.title),c=!(!s.close&&!e.closable);return d.value&&(0,a.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},C.value,V.value,L.value,S.value,z.value,E.value,I.value,e.class],style:[W.value,F.value,U.value,e.style],role:"alert"},{default:()=>[(0,w.Ux)(!1,"v-alert"),e.border&&(0,a.Wm)("div",{key:"border",class:["v-alert__border",$.value],style:j.value},null),t&&(0,a.Wm)("div",{key:"prepend",class:"v-alert__prepend"},[s.prepend?(0,a.Wm)(r.z,{key:"prepend-defaults",disabled:!m.value,defaults:{VIcon:{density:e.density,icon:m.value,size:e.prominent?44:28}}},s.prepend):(0,a.Wm)(i.t,{key:"prepend-icon",density:e.density,icon:m.value,size:e.prominent?44:28},null)]),(0,a.Wm)("div",{class:"v-alert__content"},[l&&(0,a.Wm)(o,{key:"title"},{default:()=>[s.title?.()??e.title]}),s.text?.()??e.text,s.default?.()]),s.append&&(0,a.Wm)("div",{key:"append",class:"v-alert__append"},[s.append()]),c&&(0,a.Wm)("div",{key:"close",class:"v-alert__close"},[s.close?(0,a.Wm)(r.z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[s.close?.({props:Z.value})]}):(0,a.Wm)(n.T,(0,a.dG)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},Z.value),null)])]})}}})}}]);
//# sourceMappingURL=635.8e3452e6.js.map