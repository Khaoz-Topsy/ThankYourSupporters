import{t as a,d as M,c as w,s as k,i,a as c,F as A,S as P,b as y,P as O,C as G}from"./index-955eda4a.js";const H=a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="1.5em" version="1.0"><path id="path2413" d="m100 0c-55.2 0-100 44.8-100 100-5.0495e-15 55.2 44.8 100 100 100s100-44.8 100-100-44.8-100-100-100zm0 12.812c48.13 0 87.19 39.058 87.19 87.188s-39.06 87.19-87.19 87.19-87.188-39.06-87.188-87.19 39.058-87.188 87.188-87.188zm1.47 21.25c-5.45 0.03-10.653 0.737-15.282 2.063-4.699 1.346-9.126 3.484-12.876 6.219-3.238 2.362-6.333 5.391-8.687 8.531-4.159 5.549-6.461 11.651-7.063 18.687-0.04 0.468-0.07 0.868-0.062 0.876 0.016 0.016 21.702 2.687 21.812 2.687 0.053 0 0.113-0.234 0.282-0.937 1.941-8.085 5.486-13.521 10.968-16.813 4.32-2.594 9.808-3.612 15.778-2.969 2.74 0.295 5.21 0.96 7.38 2 2.71 1.301 5.18 3.361 6.94 5.813 1.54 2.156 2.46 4.584 2.75 7.312 0.08 0.759 0.05 2.48-0.03 3.219-0.23 1.826-0.7 3.378-1.5 4.969-0.81 1.597-1.48 2.514-2.76 3.812-2.03 2.077-5.18 4.829-10.78 9.407-3.6 2.944-6.04 5.156-8.12 7.343-4.943 5.179-7.191 9.069-8.564 14.719-0.905 3.72-1.256 7.55-1.156 13.19 0.025 1.4 0.062 2.73 0.062 2.97v0.43h21.598l0.03-2.4c0.03-3.27 0.21-5.37 0.56-7.41 0.57-3.27 1.43-5 3.94-7.81 1.6-1.8 3.7-3.76 6.93-6.47 4.77-3.991 8.11-6.99 11.26-10.125 4.91-4.907 7.46-8.26 9.28-12.187 1.43-3.092 2.22-6.166 2.46-9.532 0.06-0.816 0.07-3.03 0-3.968-0.45-7.043-3.1-13.253-8.15-19.032-0.8-0.909-2.78-2.887-3.72-3.718-4.96-4.394-10.69-7.353-17.56-9.094-4.19-1.062-8.23-1.6-13.35-1.75-0.78-0.023-1.59-0.036-2.37-0.032zm-10.908 103.6v22h21.998v-22h-21.998z" fill="#fff">'),Q=()=>H(),V=e=>e.length==0?e:[e[0].toUpperCase(),...e.slice(1,e.length)].join(""),q=e=>e.length==0?e:[e[0].toLowerCase(),...e.slice(1,e.length)].join(""),J={},K=e=>new Promise((l,n)=>{let t=new FileReader;t.onload=()=>{l(t.result)},t.onerror=n,t.readAsText(e)}),j=async e=>{const l=await K(e),[n,...t]=l.split(`
`),o=n.split(","),f=[];for(const v of t){if(v.length<5)continue;const m=v.split(","),x=J;for(let _=0;_<o.length;_++){const F=o[_].replaceAll(" ","").replaceAll("(months)","").replaceAll("(","").replaceAll(")","").trim(),C=m[_].replaceAll("＇","'");x[q(F)]=C}f.push({...x})}return f},W=a('<input type="range" min="0" class="range range-info" step="1">'),X=a('<div class="w-full flex justify-between text-xs px-2">'),Z=a("<span>"),ee=e=>[(()=>{const l=W();return l.$$input=n=>{const t=n?.target?.value??"0";try{e.onChange(parseInt(t))}catch{}},w(n=>{const t=e.id,o=e.options.length-1;return t!==n._v$&&k(l,"id",n._v$=t),o!==n._v$2&&k(l,"max",n._v$2=o),n},{_v$:void 0,_v$2:void 0}),w(()=>l.value=e.initialPosition??0),l})(),(()=>{const l=X();return i(l,c(A,{get each(){return e.options},children:n=>(()=>{const t=Z();return i(t,n),t})()})),l})()];M(["input"]);const te=a('<img draggable="false">'),ne=a('<p class="supporter-tier pb-0 text-ellipsis truncate overflow-hidden">'),le=a('<div class="supporter-tile noselect p-1"><div class="card rounded-md shadow-xl"><div class="card-body justify-center py-1 px-3"><div class="supporter-content justify-center pl-1"><h3 class="text-xl text-ellipsis truncate overflow-hidden">'),z=e=>(()=>{const l=le(),n=l.firstChild,t=n.firstChild,o=t.firstChild,f=o.firstChild;return i(t,c(P,{get when(){return e.supporter.profilePic!=null},get children(){const v=te();return w(m=>{const x=e.supporter.profilePic,_=e.supporter.title;return x!==m._v$&&k(v,"src",m._v$=x),_!==m._v$2&&k(v,"alt",m._v$2=_),m},{_v$:void 0,_v$2:void 0}),v}}),o),i(f,()=>e.supporter.title),i(o,c(P,{get when(){return e.supporter.tier.length>0},get children(){const v=ne();return i(v,()=>e.supporter.tier),v}}),null),l})(),re=a('<div class="form-control m-2"><label class="label cursor-pointer"><input type="checkbox" class="checkbox"><span class="label-text ml-3">'),se=e=>(()=>{const l=re(),n=l.firstChild,t=n.firstChild,o=t.nextSibling;return t.addEventListener("change",f=>e.onChange(f?.target?.checked??!1)),i(o,()=>e.title),w(()=>t.checked=e.value),l})(),ie=a('<div class="form-control m-2"><label class="label cursor-pointer"><input type="color" class="input h-6 w-6 p-0 border-0 rounded"><span class="label-text ml-3">'),L=e=>(()=>{const l=ie(),n=l.firstChild,t=n.firstChild,o=t.nextSibling;return t.addEventListener("change",f=>e.onChange(f?.target?.value??"")),i(o,()=>e.title),w(()=>t.value=e.value),l})(),oe=a('<div class="dropdown"><label tabindex="0" class="btn m-1">: </label><ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">'),ce=a('<li class="cursor-pointer"><a>'),ae=e=>(()=>{const l=oe(),n=l.firstChild,t=n.firstChild,o=n.nextSibling;return i(n,()=>e.title,t),i(n,()=>e.value,null),i(o,c(A,{get each(){return e.options},children:f=>(()=>{const v=ce(),m=v.firstChild;return v.$$click=()=>e.onChange(f),i(m,()=>V(f)),v})()})),l})();M(["click"]);const de=a('<div class="container mx-auto my-8 text-center"><div class="flex justify-center"><div class="card bg-primary mx-2 text-primary-content shadow-xl"><div class="card-body text-left"><h2 class="card-title">Patreon</h2><div class="flex justify-between w-full"><p>Upload Patreon supporter export (csv)</p></div><div class="card-actions justify-end"><input type="file" class="file-input file-input-bordered w-full max-w-xs"></div></div></div><div class="card bg-primary mx-2 text-primary-content shadow-xl"><div class="card-body text-left"><h2 class="card-title">Youtube Members</h2><p>Upload Youtube Members export (csv)</p><div class="card-actions justify-end"><input type="file" class="file-input file-input-bordered w-full max-w-xs">'),ue=a('<div class="container mx-auto my-16 text-center"><h3 class="text-xl mb-4">Controls</h3><p class="mb-2">Number of supporters per row</p><div class="m-8"></div><div class="inline-flex flex-wrap"><div class="divider divider-horizontal"></div><div class="divider divider-horizontal"></div><div class="divider divider-horizontal">'),ve=a('<div class="divider">'),pe=a('<p class="my-2">Patreon Supporters'),E=a('<div class="inline-flex flex-wrap">'),he=a('<p class="my-2">Youtube Members'),fe=a('<div class="mx-auto mt-8 p-4 text-center"><h3 class="text-xl mb-4">Output'),me=a('<div class="divider mt-80">'),ge=()=>{const[e,l]=y(5),[n,t]=y(!0),[o,f]=y("#00000080"),[v,m]=y("#f0f0f0"),[x,_]=y("left"),[S,F]=y([]),[C,R]=y([]),T=async r=>{const u=(r?.target?.files??[])[0],d=(await j(u)).filter(g=>g.patronStatus==="Active patron").sort((g,b)=>b.lifetimeAmount-g.lifetimeAmount),p=[];for(const g of d){const b={title:g.name,tier:g.tier.length>0?g.tier:"---"};p.push(b)}F(p)},Y=async r=>{const u=(r?.target?.files??[])[0],$=await j(u),h=[];for(const d of $){const p={title:d.member,tier:d.currentlevel??""};h.push(p)}R(h.sort((d,p)=>d.tier.localeCompare(p.tier)||d.title.localeCompare(p.title)))};return c(G,{get children(){return[c(O,{text:"Display Supporters"}),(()=>{const r=de(),s=r.firstChild,u=s.firstChild,$=u.firstChild,h=$.firstChild,d=h.nextSibling;d.firstChild;const p=d.nextSibling,g=p.firstChild,b=u.nextSibling,B=b.firstChild,D=B.firstChild,I=D.nextSibling,N=I.nextSibling,U=N.firstChild;return u.style.setProperty("background-color","#f96854"),i(d,c(Q,{}),null),g.addEventListener("change",T),b.style.setProperty("background-color","#DD0000"),U.addEventListener("change",Y),r})(),(()=>{const r=ue(),s=r.firstChild,u=s.nextSibling,$=u.nextSibling,h=$.nextSibling,d=h.firstChild,p=d.nextSibling,g=p.nextSibling;return i(r,c(ee,{options:["1","2","3","4","5","6","7","8","9","10"],get initialPosition(){return e()},onChange:b=>l(b)}),$),i(h,c(se,{title:"Show tiers",get value(){return n()},onChange:t}),d),i(h,c(L,{title:"Background colour",get value(){return o()},onChange:f}),p),i(h,c(L,{title:"Background colour",get value(){return v()},onChange:m}),g),i(h,c(ae,{title:"Text align",get value(){return x()},options:["left","center","right"],onChange:_}),null),r})(),ve(),(()=>{const r=fe();return r.firstChild,i(r,c(P,{get when(){return S().length>0},get children(){return[pe(),(()=>{const s=E();return i(s,c(A,{get each(){return S()},children:u=>c(z,{supporter:u})})),s})()]}}),null),i(r,c(P,{get when(){return C().length>0},get children(){return[he(),(()=>{const s=E();return i(s,c(A,{get each(){return C()},children:u=>c(z,{supporter:u})})),s})()]}}),null),w(s=>{const u=e()+1,$=x(),h=n()?"unset":"none",d=o(),p=v();return u!==s._v$&&((s._v$=u)!=null?r.style.setProperty("--num-col",u):r.style.removeProperty("--num-col")),$!==s._v$2&&((s._v$2=$)!=null?r.style.setProperty("--content-text-align",$):r.style.removeProperty("--content-text-align")),h!==s._v$3&&((s._v$3=h)!=null?r.style.setProperty("--tier-display",h):r.style.removeProperty("--tier-display")),d!==s._v$4&&((s._v$4=d)!=null?r.style.setProperty("--tier-background",d):r.style.removeProperty("--tier-background")),p!==s._v$5&&((s._v$5=p)!=null?r.style.setProperty("--tier-frontground",p):r.style.removeProperty("--tier-frontground")),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})(),c(P,{get when(){return S().length>0||C().length>0},get children(){return me()}})]}})};export{ge as SupporterPage,ge as default};