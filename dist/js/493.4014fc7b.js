"use strict";(self["webpackChunktemplate_vue_platform"]=self["webpackChunktemplate_vue_platform"]||[]).push([[493],{6493:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var l=a(3396);const n={class:"flex justify-between"},o=(0,l._)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-400"},"ADMINISTRADORES",-1),i={class:"py-5"};function r(e,t,a,r,d,s){const m=(0,l.up)("ModalCreateAdministratorVue"),u=(0,l.up)("TableAdministratorVue"),c=(0,l.up)("ModalEditAdministratorVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[o,(0,l.Wm)(m,{onCreateItem:r.onCreateItem},null,8,["onCreateItem"])]),(0,l._)("div",i,[(0,l.Wm)(u,{desserts:r.dataAdministrator,onEditItem:r.onEditItem,onDeleteItem:r.onDeleteItem},null,8,["desserts","onEditItem","onDeleteItem"])]),(0,l.Wm)(c,{itemEdit:r.itemEdit,openModal:r.dialogEdit,onCancelItem:t[0]||(t[0]=e=>r.dialogEdit=!1),onEditItem:r.onUpdateItem},null,8,["itemEdit","openModal","onEditItem"])],64)}var d=a(4870),s=a(3512),m=a(3041);const u="http://204.48.17.106:3020/api/v1";function c(e){return m.Z.get(`${u}/administrator`,{headers:{Authorization:`Bearer ${e}`}})}function p(e,t){return m.Z.post(`${u}/administrator`,e,{headers:{Authorization:`Bearer ${t}`}})}function v(e,t,a){return m.Z.patch(`${u}/administrator/${a}`,e,{headers:{Authorization:`Bearer ${t}`}})}var g=a(870),w=a(11),f=a(1888),h=a(1334),I=a(3601),k=a(8521),_=a(9234),b=a(3289),C=a(165),V=a(1328);const W=(0,l._)("span",{class:"px-4 w-full text-center text-indigo-500 font-bold title_views"},"CREAR ADMINISTRADORES",-1);function E(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(g.T,{size:"small",class:"text-none",color:"indigo-darken-1",onClick:t[0]||(t[0]=e=>n.dialog=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(b.t,{icon:"mdi-plus"}),(0,l.Uk)(" Nuevo")])),_:1}),(0,l.Wm)(I.B,{modelValue:n.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>n.dialog=e),width:"550","onClick:outside":n.closeItem},{default:(0,l.w5)((()=>[(0,l.Wm)(w._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(V.i,null,{default:(0,l.w5)((()=>[W])),_:1}),(0,l.Wm)(f.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(C.h,{variant:"outlined",label:"Nombre",color:"indigo",modelValue:n.name,"onUpdate:modelValue":t[1]||(t[1]=e=>n.name=e),"prepend-inner-icon":"mdi-text"},null,8,["modelValue"]),(0,l.Wm)(C.h,{variant:"outlined",label:"Usuario","prepend-inner-icon":"mdi-account",color:"indigo",modelValue:n.username,"onUpdate:modelValue":t[2]||(t[2]=e=>n.username=e)},null,8,["modelValue"]),(0,l.Wm)(C.h,{variant:"outlined",label:"Contraseña","prepend-inner-icon":"mdi-lock",color:"indigo",modelValue:n.password,"onUpdate:modelValue":t[3]||(t[3]=e=>n.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(h.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.C),(0,l.Wm)(g.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:n.closeItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,l.Wm)(g.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.createItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])],64)}var y={emits:["create-item"],setup(e,{emit:t}){const a=(0,d.iH)(!1),l=(0,d.iH)(""),n=(0,d.iH)(""),o=(0,d.iH)(""),i=()=>{console.log("----------------------------------1"),t("create-item",{name:l.value,username:n.value,password:o.value}),r()},r=()=>{a.value=!1,l.value=n.value=o.value=""};return{dialog:a,name:l,username:n,password:o,createItem:i,closeItem:r}}},A=a(89);const U=(0,A.Z)(y,[["render",E]]);var x=U,D=a(678);const H={class:"flex gap-1 justify-center"},T=["onClick"];function Z(e,t,a,n,o,i){const r=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.j4)(r,{headers:o.headers,items:a.desserts,class:"elevation-1 text-sm"},{["item.actions"]:(0,l.w5)((({item:e})=>[(0,l._)("div",H,[(0,l._)("span",{onClick:t=>n.editItem(e)},[(0,l.Wm)(g.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,l.Wm)(D.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Editar")])),_:1})],8,T)])])),_:2},1032,["headers","items"])}var M=a(5557),R={props:{desserts:Array},components:{VDataTable:M.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Nombre",align:"start",key:"name"},{title:"Usuario",align:"start",key:"user.username"},{title:"Acciones",align:"center",key:"actions"}]}},setup(e,{emit:t}){const a=e=>{t("edit-item",{item:e})},l=e=>{t("delete-item",{item:e})},n=e=>{const t={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"},a=new Date(e).toLocaleDateString("es-PE",t);return a};return{formatCreatedAt:n,editItem:a,deleteItem:l}}};const S=(0,A.Z)(R,[["render",Z]]);var N=S;const $=(0,l._)("span",{class:"px-4 w-full text-center text-blue-500 font-bold title_views"},"EDITAR ADMINISTRADORES",-1);function j(e,t,a,n,o,i){return(0,l.wg)(),(0,l.j4)(I.B,{modelValue:n.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>n.dialog=e),width:"550","onClick:outside":n.closeItem},{default:(0,l.w5)((()=>[(0,l.Wm)(w._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(V.i,null,{default:(0,l.w5)((()=>[$])),_:1}),(0,l.Wm)(f.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(C.h,{variant:"outlined",label:"Nombre",color:"blue",modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),"prepend-inner-icon":"mdi-text"},null,8,["modelValue"]),(0,l.Wm)(C.h,{variant:"outlined",label:"Usuario","prepend-inner-icon":"mdi-account",color:"blue",modelValue:n.username,"onUpdate:modelValue":t[1]||(t[1]=e=>n.username=e)},null,8,["modelValue"]),(0,l.Wm)(C.h,{variant:"outlined",label:"Contraseña","prepend-inner-icon":"mdi-lock",color:"blue",modelValue:n.password,"onUpdate:modelValue":t[2]||(t[2]=e=>n.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(h.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.C),(0,l.Wm)(g.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:n.closeItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,l.Wm)(g.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.editItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var z={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const a=(0,d.iH)(!1),n=(0,d.iH)(""),o=(0,d.iH)(""),i=(0,d.iH)(""),r=(0,d.iH)("");(0,l.YP)((()=>e.openModal),(async e=>{a.value=e})),(0,l.YP)((()=>e.itemEdit),(e=>{console.log(e),0!==Object.keys(e).length&&(n.value=e.item.id,o.value=e.item.name,i.value=e.item.user.username,r.value=e.item.user.password)}));const s=()=>{t("edit-item",{id:n.value,name:o.value,username:i.value,password:r.value}),m()},m=()=>{t("cancel-item")};return{dialog:a,name:o,username:i,password:r,id:n,editItem:s,closeItem:m}}};const B=(0,A.Z)(z,[["render",j]]);var L=B,O=a(4239),Y={components:{ModalCreateAdministratorVue:x,ModalEditAdministratorVue:L,TableAdministratorVue:N},setup(){const e=(0,d.iH)([]),t=(0,d.iH)({}),a=(0,d.iH)(!1);(0,l.bv)((()=>{o()}));const n=async e=>{console.log("gaaaaaaaaaa"),""!=e.name&&""!=e.username&&""!=e.password?await p(e,O.Z.state.token).then((()=>{(0,s.y)((()=>{o()}),"success","Logrado","Se ha creado correctamente")})).catch((e=>{(0,s.y)((()=>{}),"error","Error",e.message)})):(0,s.y)((()=>{}),"warning","Error","Los campos no deben estar vacios")},o=async()=>{const t=await c(O.Z.state.token);e.value=t.data.data},i=e=>{a.value=!0,t.value=e},r=()=>{},m=async e=>{""!==e.name&&""!==e.username&&""!==e.password?await v(e,O.Z.state.token,e.id).then((()=>{(0,s.y)((()=>{o(),a.value=!1}),"success","Logrado","Se ha actualizado correctamente")})).catch((e=>{(0,s.y)((()=>{}),"error","Error",e.message)})):(0,s.y)((()=>{}),"warning","Error","Los campos no deben estar vacíos")};return{dialogEdit:a,dataAdministrator:e,itemEdit:t,onUpdateItem:m,onDeleteItem:r,onCreateItem:n,onEditItem:i}}};const P=(0,A.Z)(Y,[["render",r]]);var q=P}}]);
//# sourceMappingURL=493.4014fc7b.js.map