var b=Object.defineProperty;var m=(s,t,e)=>t in s?b(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>m(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const n={main:"/",profile:"/profile",login:"/login",error:"*"};class y{constructor(){o(this,"addRoute",(t,e,i=[])=>{this.routes.push({path:t,handler:e,guards:i})});o(this,"init",(t=location.pathname)=>{this.handleRouteChange(t)});o(this,"navigate",()=>{throw new Error("navigate must be implemented")});o(this,"handleRouteChange",()=>{throw new Error("handleRouteChange must be implemented")});this.lastPath=null,this.lastHash=null,this.routes=[]}}const c={basePath:"/front_5th_chapter1-1"},d={HOME:"/",LOGIN:"/login",PROFILE:"/profile",LOGOUT:"/logout"},p=s=>`${c.basePath}${s}`,g=s=>s.replace(c.basePath,"")||"/";class ${constructor(t){this.storageKey=t}load(){return JSON.parse(localStorage.getItem(this.storageKey))}save(t){localStorage.setItem(this.storageKey,JSON.stringify(t))}clear(){localStorage.removeItem(this.storageKey)}}let k=class{constructor(){o(this,"$loginForm",()=>this.$root.querySelector("#login-form"));o(this,"$loginButton",()=>this.$root.querySelector("button[type='submit']"));o(this,"bindCallback",(t,e)=>{var i;switch(t){case"login":(i=this.$loginForm())==null||i.addEventListener("submit",r=>{r.preventDefault(),e(this.$username().value)});break}});this.$root=document.getElementById("root")}$username(){return this.$root.querySelector("input[type='text']")}template(){return`
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
  `}render(){this.$root.innerHTML=this.template()}};class u{static getNavItems(t,e){const i=!!t.username,r=v(i),a=g(e);return r.filter(l=>l.show).map(l=>{const h=a===l.path?"text-blue-600 font-bold":"text-gray-600";return`
          <li>
            <a href="${p(l.path)}" id="${l.id}" class="${h}">
              ${l.text}
            </a>
          </li>
        `}).join("")}static header(t){const e=location.hash?location.hash.slice(1):location.pathname;return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${this.getNavItems(t,e)}
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
    `}}const v=s=>[{path:d.HOME,id:"home",text:"홈",show:!0},{path:d.PROFILE,id:"profile",text:"프로필",show:s},{path:d.LOGOUT,id:"logout",text:"로그아웃",show:s},{path:d.LOGIN,id:"login-link",text:"로그인",show:!s}];let E=class{constructor(){o(this,"$nav",()=>this.$root.querySelector("nav ul"));o(this,"bindCallback",(t,e)=>{var i;switch(t){case"navigate":(i=this.$nav())==null||i.addEventListener("click",r=>{r.preventDefault();const a=r.target.closest("a");a&&e(a.id)});break}});o(this,"contents",()=>`
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
    `);this.$root=document.getElementById("root")}render(t){this.$root.innerHTML=u.render(t,this.contents())}},O=class{constructor(){o(this,"$nav",()=>this.$root.querySelector("nav ul"));o(this,"$profileForm",()=>this.$root.querySelector("#profile-form"));o(this,"bindCallback",(t,e)=>{var i,r;switch(t){case"navigate":(i=this.$nav())==null||i.addEventListener("click",a=>{a.preventDefault();const l=a.target.closest("a");l&&e(l.id)});break;case"update":(r=this.$profileForm())==null||r.addEventListener("submit",a=>{a.preventDefault();const l=new FormData(a.target);e({username:l.get("username"),email:l.get("email"),bio:l.get("bio")})});break}});o(this,"contents",t=>`
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
    `);this.$root=document.getElementById("root")}render(t){this.$root.innerHTML=u.render(t,this.contents(t))}},S=class{constructor(){this.$root=document.getElementById("root")}template(){return`
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
  `}render(){this.$root.innerHTML=this.template()}};class M{constructor(t){this.store=t}get userInfo(){const t=this.store.load();return{username:(t==null?void 0:t.username)??"",email:(t==null?void 0:t.email)??"",bio:(t==null?void 0:t.bio)??""}}login(t){if(!t||t.trim().length===0)return{status:"error",error:"이름을 입력해주세요."};const e={username:t.trim(),email:"",bio:""};return this.store.save(e),{status:"success",data:e}}logout(){this.store.clear()}update(t){this.store.save(t)}}class j{constructor(t,e,i){o(this,"login",t=>{const e=this.model.login(t);if(e.status==="error"){alert(e.error);return}this.router.navigate(n.profile)});o(this,"render",()=>{this.view.render(),this.view.bindCallback("login",this.login)});this.view=t,this.model=e,this.router=i}}class C{constructor(t,e,i){o(this,"handleNavigation",t=>{switch(t){case"home":this.router.navigate(n.main);break;case"profile":this.router.navigate(n.profile);break;case"login-link":this.router.navigate(n.login);break;case"logout":this.model.logout(),this.router.navigate(n.login);break}});o(this,"render",()=>{this.view.render(this.model.userInfo),this.view.bindCallback("navigate",this.handleNavigation)});this.view=t,this.model=e,this.router=i}}class R{constructor(t,e,i){o(this,"handleNavigation",t=>{switch(t){case"home":this.router.navigate(n.main);break;case"profile":this.router.navigate(n.profile);break;case"logout":this.model.logout(),this.router.navigate(n.login);break}});o(this,"update",t=>{this.model.update(t)});o(this,"render",()=>{this.view.render(this.model.userInfo),this.view.bindCallback("navigate",this.handleNavigation),this.view.bindCallback("update",this.update)});this.view=t,this.model=e,this.router=i}}let F=class{constructor(t,e){o(this,"render",()=>{this.view.render()});this.view=t,this.model=e}};export{y as B,S as E,k as L,E as M,O as P,n as R,$ as S,M as U,C as a,R as b,p as c,j as d,F as e,g as n};
