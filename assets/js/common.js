// Shared application state, navigation, dialogs and persistence.
// Each HTML page declares data-page and data-root on <body>.
const APP_ROOT=document.body.dataset.root || './';
const PAGE=document.body.dataset.page || 'home';
const ROUTES={home:'index.html',courses:'pages/courses/index.html',planner:'pages/courses/planner.html',faculty:'pages/faculty/index.html',news:'pages/news/index.html'};
function go(page){window.location.href=APP_ROOT+ROUTES[page]}
const state={view:PAGE,department:'CS',track:'Core',selected:'CSE214',facultyId:1,facultyQuery:'',newsQuery:'',plannerTerm:'Spring 2027',planned:readPlans(),completed:new Set(['CSE101','CSE114'])};
const main=document.getElementById('main-content');
function readPlans(){try{let saved=JSON.parse(localStorage.getItem('coursecompass-plans')||'[]');return Array.isArray(saved)?saved.filter(x=>courses[x.code] && typeof x.term==='string'):[]}catch{return []}}
function save(){localStorage.setItem('coursecompass-plans',JSON.stringify(state.planned));document.querySelectorAll('[data-plan-count]').forEach(el=>el.textContent=state.planned.length)}
function safe(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
function header(eyebrow,title,subtitle,action=''){return `<div class="intro-row"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="subtitle">${subtitle}</p></div>${action}</div>`}
function openModal(content){document.getElementById('modal-root').innerHTML=`<div class="modal-backdrop" id="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="Details"><div style="display:flex;justify-content:flex-end"><button class="btn small" id="close-modal" aria-label="Close dialog">✕</button></div>${content}</div></div>`;document.getElementById('close-modal').focus()}
function closeModal(){document.getElementById('modal-root').innerHTML=''}
function showNews(id){const n=news.find(x=>x.id===id);if(n)openModal(`<span class="tag">${n.tag}</span><h2 style="margin-top:14px">${n.title}</h2><div class="helper">${n.date}</div><p style="margin-top:19px">${n.body}</p><div class="modal-actions"><button class="btn primary" id="dismiss-modal">Done</button></div>`)}
function showMeeting(id){const f=faculty.find(x=>x.id===id);if(!f)return;openModal(`<div class="eyebrow">ACADEMIC ADVISING</div><h2>Request a meeting</h2><p>Send a demonstration request to ${f.name}. This form does not email anyone.</p><form id="meeting-form"><input type="hidden" name="faculty" value="${f.id}"/><div class="form-block"><label for="your-name">Your name</label><input id="your-name" name="name" placeholder="Student name" required maxlength="80"/></div><div class="form-block"><label for="meeting-topic">Meeting topic</label><select id="meeting-topic" name="topic"><option>Course planning</option><option>Prerequisites</option><option>Degree requirements</option><option>Other question</option></select></div><div class="form-block"><label for="meeting-method">Preferred meeting format</label><select id="meeting-method" name="method"><option>In person</option><option>Zoom</option><option>Email follow-up</option></select></div><div class="modal-actions"><button type="button" class="btn" id="dismiss-modal">Cancel</button><button type="submit" class="btn primary">Submit demo request</button></div></form>`)}
function syncNav(){
 document.querySelectorAll('[data-nav]').forEach(a=>{
   a.classList.toggle('active',a.dataset.nav===PAGE);
   if(a.dataset.nav===PAGE)a.setAttribute('aria-current','page');
 });
 document.querySelectorAll('[data-plan-count]').forEach(el=>el.textContent=state.planned.length);
}
function render(){
 const renderPage = ({ courses: () => renderCourses(), planner: () => renderPlanner(), faculty: () => renderFaculty(), news: () => renderNews() })[PAGE];
 if (main && renderPage) main.innerHTML = renderPage();
 save();
}
