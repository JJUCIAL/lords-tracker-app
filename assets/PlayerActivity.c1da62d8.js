import{f as v,h as w,i as x,e as b,W as k,S as U}from"./EventsPage.vue_vue_type_style_index_0_scoped_true_lang.990d4960.js";import{d as T,f as X}from"./debounce.72798129.js";import{_ as A}from"./POTMTable.vue_vue_type_style_index_0_lang.0f48aa8c.js";import{r as d,f as q,p as B,K as f,R as P,P as p,O as c,M as G,V as W,N as F,Q as Y,ay as C,L as S,S as N}from"./index.c843a950.js";import{d as I}from"./QBtn.419d845c.js";const j={setup(){d([]);const n=d([]),a=d(""),r=d(null),l=d(!1),e=d(!1),i=t=>t<1e6?"xp-low":t<1e7?"xp-medium":t<1e8?"xp-high":t<5e8?"xp-super":t<1e9?"xp-mega":"xp-ultra",s={regular:"/icons/maxed.png",ironman:"/icons/ironman.png",ultimate:"/icons/uim.png",hardcore:"/icons/hcim.png",unknown:"/icons/unknown.png"},V=d([{name:"username",required:!0,label:"Username",align:"left",field:"username",sortable:!0},{name:"type",label:"Type",align:"left",field:"type"},{name:"exp",label:"EXP",align:"right",field:"rawXp",format:(t,u)=>u.exp,sortable:!0},{name:"lastChangedAt",label:"Last Change",align:"right",field:"lastChangedAt"},{name:"achievementName",label:"Latest Achievement",align:"right",field:"achievementName",sortable:!0}]),D=async()=>{e.value=!0;const t=new k({apiKey:{}.VUE_APP_WOM_API_KEY,userAgent:"dopesyc"});try{const m=await t.groups.getGroupDetails(6847),O=await t.groups.getGroupAchievements(6847),M=await t.groups.getGroupHiscores(6847,U.OVERALL),Q=o=>o<0?`${(o/1e3).toFixed(2)}K`:`${(o/1e6).toFixed(2)}M`;n.value=m.memberships.map(o=>{const y=O.find(_=>_.playerId===o.player.id),g=M.find(_=>_.player.id===o.player.id),h=o.player.exp||0;return{id:o.player.id,username:o.player.username,type:o.player.type,exp:h?Q(h):"0",rawXp:h,lastChangedAt:X(new Date(o.player.lastChangedAt),new Date,{addSuffix:!0}),achievementName:(y==null?void 0:y.name)||"None",hiScore:(g==null?void 0:g.data.level)||"NA"}})}catch(u){console.error("Failed to fetch group data:",u)}finally{e.value=!1}},L=t=>r.value===t.id?"highlighted-row":"",E=t=>{r.value=t,setTimeout(()=>{r.value=null},2e3)},K=T(()=>{if(!a.value.trim())return;const t=n.value.find(u=>u.username.toLowerCase().includes(a.value.toLowerCase()));if(t){const u=n.value.findIndex(m=>m.id===t.id);if(u!==-1){const[m]=n.value.splice(u,1);n.value.unshift(m),E(m.id)}}else l.value=!0},300),R=q(()=>a.value.trim()?n.value.filter(t=>t.username.toLowerCase().includes(a.value.toLowerCase())):n.value);return B(D),{columns:V,filteredRows:R,searchQuery:a,highlightedId:r,getRowClass:L,debouncedSearch:K,playerNotFoundDialog:l,loading:e,typeImages:s,getXpClass:i}}},z=["src","alt"];function H(n,a,r,l,e,i){return f(),P(b,{class:"app-container"},{default:p(()=>[c(v,{filled:"",modelValue:l.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=s=>l.searchQuery=s),label:"Search Clan Members...","label-color":"accent",onInput:l.debouncedSearch,class:"input-box"},null,8,["modelValue","onInput"]),c(w,{dense:"",flat:"",class:"input-box",title:"Lords of RNG Members",rows:l.filteredRows,"rows-per-page-options":[15,30,60,l.filteredRows.length],columns:l.columns,"row-key":"id","virtual-scroll-item-size":48,"row-class":l.getRowClass,loading:"loading"},{"body-cell-type":p(s=>[c(x,{props:s},{default:p(()=>[G("img",{src:l.typeImages[s.row.type],alt:s.row.type,width:"28",height:"28"},null,8,z)]),_:2},1032,["props"])]),"body-cell-exp":p(s=>[c(x,{props:s,class:W(l.getXpClass(s.row.rawXp))},{default:p(()=>[F(Y(s.row.exp),1)]),_:2},1032,["props","class"])]),_:1},8,["rows","rows-per-page-options","columns","row-class"])]),_:1})}var ie=A(j,[["render",H],["__scopeId","data-v-2cd08b97"]]);const J={name:"PlayerLookup",data(){return{username:"",stats:[],columns:[{name:"skill",label:"Skill",align:"left",field:"skill"},{name:"rank",label:"Rank",align:"right",field:"rank",sortable:!0},{name:"level",label:"Level",align:"right",field:"level",sortable:!0},{name:"xp",label:"Experience",align:"right",field:"xp",sortable:!0}]}},methods:{async fetchPlayerStats(){if(!this.username.trim())return;const n=new k({apiKey:{}.VUE_APP_WOM_API_KEY,userAgent:"dopesyc"});try{const r=(await n.players.getPlayerDetails(this.username)).latestSnapshot.data.skills,l=Object.keys(r);this.stats=l.map(e=>({skill:e.charAt(0).toUpperCase()+e.slice(1),rank:r[e].rank||"N/A",level:r[e].level||"N/A",xp:r[e].experience||"N/A"}))}catch(a){console.error("Error fetching player stats:",a)}}}},Z={key:0,class:"q-mt-md"};function $(n,a,r,l,e,i){return f(),P(b,{class:"q-pa-md"},{default:p(()=>[c(v,{filled:"",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=s=>e.username=s),label:"Search Player Stats...",onKeyup:C(i.fetchPlayerStats,["enter"])},null,8,["modelValue","onKeyup"]),c(I,{color:"primary",label:"Search",onClick:i.fetchPlayerStats},null,8,["onClick"]),e.stats.length?(f(),S("div",Z,[c(w,{rows:e.stats,columns:e.columns,"rows-per-page-options":[-1],"row-key":"skill",title:"Player Stats"},null,8,["rows","columns"])])):N("",!0)]),_:1})}var ce=A(J,[["render",$],["__scopeId","data-v-a082fbea"]]);const ee={name:"PlayerActivitiesLookup",data(){return{username:"",activities:[],columns:[{name:"activity",label:"Activity",align:"left",field:"activity"},{name:"score",label:"Score",align:"right",field:"score"},{name:"rank",label:"Rank",align:"right",field:"rank"}]}},methods:{async fetchPlayerActivities(){if(!this.username.trim())return;const n=new k({apiKey:{}.VUE_APP_WOM_API_KEY,userAgent:"dopesyc"});try{const r=(await n.players.getPlayerDetails(this.username)).latestSnapshot.data.activities,l=Object.keys(r);this.activities=l.map(e=>({activity:e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),score:r[e].score||"N/A",rank:r[e].rank||"N/A"}))}catch(a){console.error("Error fetching player activities:",a)}}}},ae={key:0,class:"q-mt-md"};function te(n,a,r,l,e,i){return f(),P(b,{class:"q-pa-md"},{default:p(()=>[c(v,{filled:"",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=s=>e.username=s),label:"Search Player Activities...",onKeyup:C(i.fetchPlayerActivities,["enter"])},null,8,["modelValue","onKeyup"]),c(I,{color:"primary",label:"Search",onClick:i.fetchPlayerActivities},null,8,["onClick"]),e.activities.length?(f(),S("div",ae,[c(w,{rows:e.activities,columns:e.columns,"rows-per-page-options":[-1],"row-key":"activity",title:"Player Activities"},null,8,["rows","columns"])])):N("",!0)]),_:1})}var ue=A(ee,[["render",te],["__scopeId","data-v-9d58a93a"]]);export{ie as O,ce as P,ue as a};
