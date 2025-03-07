import{_ as f,H as k,Q as E,k as A,G as F,E as N,A as _}from"./POTMTable.vue_vue_type_style_index_0_lang.0f48aa8c.js";import{Q as h,a as C,W as Q,S as M,b as O,c as T,u as V,d as z,e as D}from"./EventsPage.vue_vue_type_style_index_0_scoped_true_lang.990d4960.js";import{r as u,K as r,L as p,O as t,P as l,M as o,Q as m,R as y,Y as L,X as S,z as W,N as b,C as $,W as q,f as R,w as I,S as w,a5 as j}from"./index.c843a950.js";import{L as H}from"./LadyLuckGallery.7e9005e7.js";import{d as X}from"./QBtn.419d845c.js";import{C as K,E as Y,N as Z,B as J}from"./EventsPage.0b70d07f.js";import{O as U,P as ee,a as te}from"./PlayerActivity.c1da62d8.js";import"./pinia.2fa718d3.js";import"./debounce.72798129.js";import"./POTMTable.5fcd9d3b.js";const oe={setup(){const g=u("first"),e=u(!1),a=u(null),d=u(null),n=u(0),c=s=>s<1e6?`${(s/1e3).toFixed(2)}K`:`${(s/1e9).toFixed(3)}B`;return(async()=>{e.value=!0;const s=new Q({apiKey:"ag5idzcxq01s1yoocwth0llc",userAgent:"dopesyc"});console.log("API Key:","ag5idzcxq01s1yoocwth0llc"),console.log("Client initialized:",s);try{const B=(await s.groups.getGroupHiscores(6847,M.OVERALL)).reduce((G,P)=>G+(P.player.exp||0),0);n.value=c(B);const x=await s.groups.getGroupDetails(6847);a.value=x.memberCount,d.value=x}catch(v){console.error("Failed to fetch group data:",v)}finally{e.value=!1}})(),{slide:g,loading:e,memberCount:a,totalGroupXp:n,overallGroup:d,autoplay:u(!0)}}},ae={class:"q-pa-md"},se={class:"absolute-bottom custom-caption"},ne={class:"text-h2"},ie={class:"absolute-bottom custom-caption"},re={class:"text-h2"};function le(g,e,a,d,n,c){return r(),p("div",ae,[t(C,{class:"infobox",arrows:"",animated:"",infinite:"",autoplay:d.autoplay,modelValue:d.slide,"onUpdate:modelValue":e[0]||(e[0]=i=>d.slide=i),height:"100px",onMouseenter:e[1]||(e[1]=i=>d.autoplay=!1),onMouseleave:e[2]||(e[2]=i=>d.autoplay=!0)},{default:l(()=>[t(h,{name:"first","img-src":"/gallery/massive1.png"},{default:l(()=>[o("div",se,[o("div",ne,m(d.memberCount),1),e[3]||(e[3]=o("div",{class:"text-subtitle1"},"Active Members",-1))])]),_:1}),t(h,{name:"second","img-src":"/homepage/fishing1.png"},{default:l(()=>[o("div",ie,[o("div",re,m(d.totalGroupXp),1),e[4]||(e[4]=o("div",{class:"text-subtitle1"},"Collective Clan EXP",-1))])]),_:1}),t(h,{name:"third","img-src":"/gallery/drop1.png"},{default:l(()=>e[5]||(e[5]=[o("div",{class:"absolute-bottom custom-caption"},[o("div",{class:"text-h2"},"8.4B GP"),o("div",{class:"text-subtitle1"},"Donated / Dropped / Awarded")],-1)])),_:1}),t(h,{name:"fourth","img-src":"/homepage/Wilderness_Obelisk.png"},{default:l(()=>e[6]||(e[6]=[o("div",{class:"absolute-bottom custom-caption"},[o("div",{class:"text-h2"},"5.23B GP"),o("div",{class:"text-subtitle1"},"Lost in the Wilderness")],-1)])),_:1})]),_:1},8,["autoplay","modelValue"])])}var de=f(oe,[["render",le],["__scopeId","data-v-0fda8dc8"]]);const pe={name:"EventCard",props:{images:{type:Array,required:!0},overline:{type:String,default:"Overline"},title:{type:String,required:!0},description:{type:String,required:!0},extraContent:{type:String,default:""},extraLink:{type:Object,default:null}},data(){return{slide:0,autoplay:!0,expanded:!1}},methods:{toggleExpanded(){this.expanded=!this.expanded},share(){console.log("Share clicked for",this.title)},book(){console.log("Book clicked for",this.title)}}},ce={class:"text-overline text-purple-13"},ue={class:"text-h5 q-mt-sm q-mb-xs"},me={class:"text-caption text-light-blue-4"},ge={key:0},he=["href"],ve={key:1};function fe(g,e,a,d,n,c){return r(),y(F,{class:"my-card",flat:"",bordered:""},{default:l(()=>[t(C,{animated:"",modelValue:n.slide,"onUpdate:modelValue":e[0]||(e[0]=i=>n.slide=i),navigation:"",infinite:"",autoplay:n.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:e[1]||(e[1]=i=>n.autoplay=!1),onMouseleave:e[2]||(e[2]=i=>n.autoplay=!0)},{default:l(()=>[(r(!0),p(L,null,S(a.images,(i,s)=>(r(),y(h,{key:s,name:s,"img-src":i},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue","autoplay"]),t(k,null,{default:l(()=>[o("div",ce,m(a.overline),1),o("div",ue,m(a.title),1),o("div",me,m(a.description),1)]),_:1}),t(O,null,{default:l(()=>[t(T),t(X,{color:"grey",round:"",flat:"",dense:"",icon:n.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:c.toggleExpanded},null,8,["icon","onClick"])]),_:1}),t(E,null,{default:l(()=>[W(o("div",null,[t(A),t(k,{class:"text-subtitle2"},{default:l(()=>[a.extraLink?(r(),p("div",ge,[e[3]||(e[3]=b(" Check out the ")),o("a",{href:a.extraLink.url,target:"_blank"},m(a.extraLink.text),9,he),e[4]||(e[4]=b(" directly or peep our Events tab! "))])):(r(),p("div",ve,m(a.extraContent),1))]),_:1})],512),[[$,n.expanded]])]),_:1})]),_:1})}var _e=f(pe,[["render",fe],["__scopeId","data-v-5bb753f1"]]);const ye={name:"EventList",components:{EventCard:_e},data(){return{events:[{images:["/homepage/mar/drop1items.png","/homepage/mar/zerca99wc.png","/homepage/mar/drop2items.png","/homepage/mar/drop2.png"],overline:"Mar 3 / 2025",title:"Major Drop Party &  99 WC Party",description:"Thank you to Fortunate1 for donating over HALF A BILLION GP to the clan in a several massive drop parties over the last few weeks! On top of this, Zercaz, one of the mods, even got 99 woodcutting at the same time! Gzzzz Zercaz and TYVM Fortunate1!",extraContent:"Shout out to sidvicious26 for all the smelly socks, that was jokes lol!"},{images:["/homepage/mar/sotwfarm.png","/homepage/mar/survloot.png","/homepage/mar/survtangle.png"],overline:"Feb 16 - Mar 2 / 2025",title:"Skill of the Week - Farming",description:"After a fun two week competition, Survivor takes the win, Yurik 2nd and Vantri 3rd! Grats folks! Survivor profited over 100m from farming and looted a pet! Talk about RNG!",extraLink:{url:"https://wiseoldman.net/competitions/78623",text:"competition"}},{images:["/homepage/mar/corpmeme1.png","/homepage/mar/arcane1.png","/homepage/mar/arcane2.png"],overline:"Feb 28 / 2025",title:"Double Arcane Sigil Drop - Corp Friday",description:"After weeks of going dry, the corp crew was finally blessed with major RNG and looted 2 sigils! That 'one more' sure paid off eh mates?! ",extraContent:"Shout out to ballista for handling the splits this time!"},{images:["/homepage/fashionfeb/lineup2.png","/homepage/fashionfeb/finals.png"],overline:"Feb 1 / 2025",title:"Fashionscape Fiesta",description:"Lords of RNG Fashionscape Fiesta!",extraContent:"Congratulations to the winners! We plan to throw more fashionscape events in the future, perhaps with different themes?!"},{images:["/homepage/dec31/zhwigmax.jpg","/homepage/dec31/99party1.png","/homepage/dec31/99party2.png","/homepage/dec31/rumble1.png"],overline:"Dec 29 / 2024 - Jan 1 / 2025",title:"Holiday Festivities",description:"Zhwiggy's Max Party, Group 99s Party & NEW YEARS RUMBLE",extraContent:"Congratulations to Zhwiggy for maxing, and everyone who recently got a 99 at the major 99 event! Also gz to anyone who got some killer loot from the drop party!"},{images:["/homepage/ritual1.png","/homepage/ritual2.png","/homepage/ritual3.png"],overline:"Oct 18 - Nov 1 / 2024",title:"Bingo",description:"November 2024 - Winner: Team Jad Bods",extraContent:"After a vicious 2 week grind it's finally over. Everyone started day one super aggressively and kept the momentum. RNG decided a lot of the game-winning tiles. Thank you everyone for participating and please dont hesitate to give your feedback about what you liked or didn't like, what you think could be improved for next time, etc. The Wise-Old-Man tracker was priceless despite the initial bugs that were discovered when generating the live-tables. Perhaps our next major event can be more long-term with smaller teams that will potentially only use the tracker versus a combination of screenshots like we did for codeword: Jeopardy69 and Oryx.",shareLink:"https://example.com/share/new-years-rumble",bookLink:"https://example.com/events/new-years-rumble"}]}}},xe={class:"q-pa-md row items-center justify-center q-gutter-md"};function ke(g,e,a,d,n,c){const i=q("EventCard");return r(),p("div",xe,[(r(!0),p(L,null,S(n.events,(s,v)=>(r(),y(i,{key:v,images:s.images,overline:s.overline,title:s.title,description:s.description,extraContent:s.extraContent,extraLink:s.extraLink,shareLink:s.shareLink,bookLink:s.bookLink},null,8,["images","overline","title","description","extraContent","extraLink","shareLink","bookLink"]))),128))])}var be=f(ye,[["render",ke],["__scopeId","data-v-27b4c9e0"]]);const we={class:"page-wrapper"},Ce={class:"center-container"},Le={class:"top-scroll"},Se={class:"mid-scroll"},Be={class:"table-container"},Ge={key:0},Pe={key:1},Ee={key:2},Ae={key:3},Fe={key:4},Ne={key:5},Qe={class:"bottom-scroll"},Me=Object.assign({name:"IndexPage"},{__name:"HomePage",setup(g){const e=N(),a=R(()=>e.activeButton);V().addressbarColor.set("#a2e3fa");const n=u(!1);return I(()=>a.value,c=>{c==="tiddi"?n.value=!0:n.value=!1}),(c,i)=>(r(),p("div",we,[o("div",Ce,[t(z,{style:{width:"100%","max-width":"650px",margin:"auto"}},{default:l(()=>[t(D,{class:"top-scroll-container"},{default:l(()=>[o("div",Le,[t(_,{src:"/tiddi3.png"})]),o("div",Se,[o("div",Be,[a.value==="minigames"?(r(),p("div",Ge,[t(K),i[0]||(i[0]=o("p",{style:{"text-align":"center","text-shadow":"2px 2px 4px rgba(0, 0, 0, 0.5)"}}," Dynamic BOTW table coming soon ",-1))])):a.value==="leagues"?(r(),p("div",Pe,[t(Y)])):a.value==="witch"?(r(),p("div",Ee,[t(U),t(ee),t(te)])):a.value==="bingo"?(r(),p("div",Ae,[i[1]||(i[1]=o("h4",{style:{"text-align":"center","text-shadow":"1px 1px 1px black"}}," Lords of RNG Bingo ",-1)),t(Z),t(J)])):w("",!0),n.value?(r(),p("div",Fe,[t(H),t(j,{name:"bounce"},{default:l(()=>[t(_,{src:"/LordsofRNG_Mascot.png",class:"bounce-loop"})]),_:1})])):a.value==="home"?(r(),p("div",Ne,[t(de),t(be)])):w("",!0)])]),o("div",Qe,[t(_,{src:"/bottom.gif"})])]),_:1})]),_:1})])]))}});var je=f(Me,[["__scopeId","data-v-3d721458"]]);export{je as default};
