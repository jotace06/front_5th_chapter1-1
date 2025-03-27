var h=Object.defineProperty;var m=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>m(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();const i={main:"/",profile:"/profile",login:"/login",logout:"/logout",error:"*"};class y{constructor(){o(this,"addRoute",(t,e,r=[])=>{this.routes.push({path:t,handler:e,guards:r})});o(this,"init",()=>{this.handleRouteChange()});o(this,"navigate",()=>{throw new Error("navigate must be implemented")});o(this,"handleRouteChange",()=>{throw new Error("handleRouteChange must be implemented")});this.lastPath=null,this.lastHash=null,this.routes=[]}}const d={basePath:"/front_5th_chapter1-1"},b=s=>`${d.basePath}${s}`,p=s=>s.replace(d.basePath,"")||"/",w=(s,t)=>()=>{var e;return(e=s.userInfo)!=null&&e.username?!0:(t.navigate(i.login),!1)},$=(s,t)=>()=>{var e;return(e=s.userInfo)!=null&&e.username?(t.navigate(i.main),!1):!0};class L{constructor(t){this.storageKey=t}load(){return JSON.parse(localStorage.getItem(this.storageKey))}save(t){localStorage.setItem(this.storageKey,JSON.stringify(t))}clear(){localStorage.removeItem(this.storageKey)}}let E=class{constructor(){o(this,"$loginForm",()=>this.$root.querySelector("#login-form"));o(this,"$loginButton",()=>this.$root.querySelector("button[type='submit']"));o(this,"setupEventListeners",(t,e)=>{var r;switch(t){case"login":(r=this.$loginForm())==null||r.addEventListener("submit",e);break}});this.$root=document.getElementById("root")}$username(){return this.$root.querySelector("input[type='text']")}template(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `}render(){this.$root.innerHTML=this.template()}};class c{static getNavigationLinks(t,e){const r=!!t.username,a=g(r),n=p(e);return a.filter(l=>l.visible).map(l=>{const u=n===l.path?"text-blue-600 font-bold":"text-gray-600";return`
          <li>
            <a href="${b(l.path)}" id="${l.id}" class="${u}">
              ${l.text}
            </a>
          </li>
        `}).join("")}static header(t){const e=location.hash?location.hash.slice(1):location.pathname;return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${this.getNavigationLinks(t,e)}
        </ul>
      </nav>
    `}static footer(){return`
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
    `}static render(t,e){return`
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${this.header(t)}
          <main class="p-4">
            ${e}
          </main>
          ${this.footer()}
        </div>
      </div>
    `}}const g=s=>[{path:i.main,id:"home",text:"홈",visible:!0},{path:i.profile,id:"profile",text:"프로필",visible:s},{path:i.logout,id:"logout",text:"로그아웃",visible:s},{path:i.login,id:"login-link",text:"로그인",visible:!s}];let P=class{constructor(){o(this,"$nav",()=>this.$root.querySelector("nav ul"));o(this,"setupEventListeners",(t,e)=>{var r;switch(t){case"navigate":(r=this.$nav())==null||r.addEventListener("click",e);break}});o(this,"contents",()=>`
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>

      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">홍길동</p>
              <p class="text-sm text-gray-500">5분 전</p>
            </div>
          </div>
          <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">김철수</p>
              <p class="text-sm text-gray-500">15분 전</p>
            </div>
          </div>
          <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">이영희</p>
              <p class="text-sm text-gray-500">30분 전</p>
            </div>
          </div>
          <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">박민수</p>
              <p class="text-sm text-gray-500">1시간 전</p>
            </div>
          </div>
          <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">정수연</p>
              <p class="text-sm text-gray-500">2시간 전</p>
            </div>
          </div>
          <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
      </div>
    `);this.$root=document.getElementById("root")}render(t){this.$root.innerHTML=c.render(t,this.contents())}},S=class{constructor(){o(this,"$nav",()=>this.$root.querySelector("nav ul"));o(this,"$profileForm",()=>this.$root.querySelector("#profile-form"));o(this,"setupEventListeners",(t,e)=>{var r,a;switch(t){case"navigate":(r=this.$nav())==null||r.addEventListener("click",e);break;case"update":(a=this.$profileForm())==null||a.addEventListener("submit",e);break}});o(this,"contents",t=>`
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value="${t.username}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${t.email}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${t.bio}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    `);this.$root=document.getElementById("root")}render(t){this.$root.innerHTML=c.render(t,this.contents(t))}},M=class{constructor(){this.$root=document.getElementById("root")}template(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}render(){this.$root.innerHTML=this.template()}};class q{constructor(t){this.store=t}get userInfo(){const t=this.store.load();return{username:(t==null?void 0:t.username)??"",email:(t==null?void 0:t.email)??"",bio:(t==null?void 0:t.bio)??""}}login(t){if(!t||t.trim().length===0)return{status:"error",error:"이름을 입력해주세요."};const e={username:t.trim(),email:"",bio:""};return this.store.save(e),{status:"success",data:e}}logout(){return this.store.clear(),{status:"success",data:null}}update(t){return this.store.save(t),{status:"success",data:t}}}class B{constructor(t,e,r){o(this,"handleLogin",t=>{t.preventDefault();const e=this.view.$username().value;if(!e.trim()){alert("사용자 이름을 입력해주세요.");return}const r=this.model.login(e);if(r.status==="error"){alert(r.error);return}this.router.navigate(i.profile)});o(this,"render",()=>{this.view.render(),this.view.setupEventListeners("login",this.handleLogin)});this.view=t,this.model=e,this.router=r}}class D{constructor(t,e,r){o(this,"handleNavigation",t=>{t.preventDefault();const e=t.target.closest("a");if(!e)return;switch(e.id){case"home":this.router.navigate(i.main);break;case"profile":this.router.navigate(i.profile);break;case"login-link":this.router.navigate(i.login);break;case"logout":this.model.logout(),this.router.navigate(i.login);break}});o(this,"render",()=>{this.view.render(this.model.userInfo),this.view.setupEventListeners("navigate",this.handleNavigation)});this.view=t,this.model=e,this.router=r}}class I{constructor(t,e,r){o(this,"handleNavigation",t=>{t.preventDefault();const e=t.target.closest("a");if(!e)return;switch(e.id){case"home":this.router.navigate(i.main);break;case"profile":this.router.navigate(i.profile);break;case"logout":this.model.logout(),this.router.navigate(i.login);break}});o(this,"handleUpdate",t=>{t.preventDefault();const e=new FormData(t.target),r={username:e.get("username"),email:e.get("email"),bio:e.get("bio")};this.model.update(r)});o(this,"render",()=>{this.view.render(this.model.userInfo),this.view.setupEventListeners("navigate",this.handleNavigation),this.view.setupEventListeners("update",this.handleUpdate)});this.view=t,this.model=e,this.router=r}}let R=class{constructor(t,e){o(this,"render",()=>{this.view.render()});this.view=t,this.model=e}};export{y as B,M as E,E as L,P as M,S as P,i as R,L as S,q as U,D as a,I as b,b as c,w as d,B as e,$ as f,R as g,p as n};
