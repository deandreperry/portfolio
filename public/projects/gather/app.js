'use strict';
const steps = [
 {label:'HOME',title:'The next step is already waiting.',image:'assets/Home-Light.png',alt:'Gather Home with an active Friday Night plan and Continue Voting action',description:'An active Gather leads the page. Its status and Continue Voting action make it clear where to pick up, without turning social plans into a dashboard.',intent:'Establish hierarchy through content and type before adding decoration.'},
 {label:'GATHER LOBBY',title:'Progress without the pressure.',image:'assets/Portfolio-Lobby.png',alt:'Friday Night lobby with private voting progress and Start Voting',description:'The lobby brings the time, group, and decision into one place. People can see how many ballots are complete, while individual choices remain private.',intent:'Communicate momentum without exposing who chose what.'},
 {label:'PRIVATE VOTING',title:'A little room to be honest.',image:'assets/Portfolio-Voting.png',alt:'Match Vote screen with Pass, Good, and Love controls',description:'One idea at a time, with three clear responses. Visible buttons keep the interaction usable without swiping, and a review step lets people check their choices before submitting.',intent:'Express degrees of interest without making the interaction feel like a survey.'},
 {label:'CONSENSUS',title:'A result with a reason.',image:'assets/Portfolio-Consensus.png',alt:'Consensus screen with the winning activity, match reasons, and Confirm Plan',description:'Once everyone finishes, the group sees aggregate results and a clear confirmation action. Match reasons explain why an idea fits. A tie asks the organizer to choose; an all-pass round calls for new ideas.',intent:'Make the result understandable and preserve a useful way forward when agreement is incomplete.'},
 {label:'FINAL PLAN',title:'The decision becomes a plan.',image:'assets/Portfolio-Final.png',alt:'Confirmed plan with time, participants, directions, and calendar actions',description:'Confirmation shifts the page from deciding to doing. The destination, time, participants, notes, directions, and calendar action become the focus.',intent:'Change the hierarchy when the user’s task changes.'}
];
let current=0;
const image=document.getElementById('journey-image');
const stepButtons=[...document.querySelectorAll('[data-step]')];
function showStep(index){
 current=Math.max(0,Math.min(steps.length-1,index));const step=steps[current];
 image.src=step.image;image.alt=step.alt;
 document.getElementById('journey-number').textContent=`0${current+1} / ${step.label}`;
 document.getElementById('journey-title').textContent=step.title;
 document.getElementById('journey-description').textContent=step.description;
 document.getElementById('journey-intent').textContent=step.intent;
 document.getElementById('journey-counter').textContent=`${current+1} / ${steps.length}`;
 document.getElementById('previous-step').disabled=current===0;
 document.getElementById('next-step').disabled=current===steps.length-1;
 stepButtons.forEach((button,i)=>{button.classList.toggle('active',i===current);button.setAttribute('aria-pressed',String(i===current));});
}
stepButtons.forEach(button=>button.addEventListener('click',()=>showStep(Number(button.dataset.step))));
document.getElementById('previous-step').addEventListener('click',()=>showStep(current-1));
document.getElementById('next-step').addEventListener('click',()=>showStep(current+1));
const appearances={light:{src:'assets/Home-Light.png',alt:'Gather Home in light appearance',caption:'Light appearance · iPhone 18 Pro'},dark:{src:'assets/Home-Dark-Contrast.png',alt:'Gather Home in dark appearance with Increase Contrast enabled',caption:'Dark appearance + Increase Contrast · iPhone 18 Pro'},type:{src:'assets/Accessible-Plan-iPhone17e.png',alt:'Confirmed Gather plan at the largest accessibility text size on iPhone 17e',caption:'Accessibility XXXL · iPhone 17e · Scrollable content'}};
let appearance='light';
document.querySelectorAll('[data-appearance]').forEach(button=>button.addEventListener('click',()=>{appearance=button.dataset.appearance;const item=appearances[appearance];const target=document.getElementById('appearance-image');target.src=item.src;target.alt=item.alt;document.getElementById('appearance-caption').textContent=item.caption;document.querySelector('.appearance-stage').classList.toggle('dark',appearance==='dark');document.querySelectorAll('[data-appearance]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});}));
const dialog=document.getElementById('screen-dialog');let returnFocus;
function enlarge(src,caption,trigger){returnFocus=trigger;const target=document.getElementById('dialog-image');target.src=src;target.alt=caption;document.getElementById('dialog-caption').textContent=caption;dialog.showModal();document.getElementById('close-dialog').focus();}
document.querySelector('.screen-expand').addEventListener('click',function(){enlarge(steps[current].image,`${steps[current].label} · Actual Gather app screen`,this);});
document.querySelector('.appearance-expand').addEventListener('click',function(){enlarge(appearances[appearance].src,appearances[appearance].caption,this);});
document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>enlarge(button.dataset.image,button.dataset.caption,button)));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
dialog.addEventListener('close',()=>returnFocus?.focus());
// Deep links make the project contribution visible without hiding it in a disclosure.
function revealContribution(){if(location.hash==='#contribution')document.querySelector('#contribution details').open=true;}
window.addEventListener('hashchange',revealContribution);revealContribution();
const duoCanvas=document.querySelector('.duo-canvas');
const duoModes={compact:{label:'01 / COMPACT',copy:'One focused pane keeps the selected plan and its next step in view. Use All plans to choose another plan; your selection carries into the expanded layouts.'},expanded:{label:'02 / EXPANDED',copy:'The plan list and selected plan sit together when space allows. On narrow previews, they stack. More context becomes visible without adding tasks or exposing individual votes.'},folded:{label:'03 / FOLD-AWARE',copy:'A schematic reserved region separates the two content areas. The proposal adapts their arrangement to available space while keeping the selected plan unchanged; actual Duo folding behavior requires native validation.'}};
let duoSelected='friday';
function setDuoMode(mode){duoCanvas.dataset.mode=mode;duoCanvas.dataset.list='false';document.querySelectorAll('[data-duo-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.duoMode===mode)));document.getElementById('duo-mode-label').textContent=duoModes[mode].label;document.getElementById('duo-mode-copy').textContent=duoModes[mode].copy;}
document.querySelectorAll('[data-duo-mode]').forEach(b=>b.addEventListener('click',()=>setDuoMode(b.dataset.duoMode)));
function setDuoPlan(plan){duoSelected=plan;const friday=plan==='friday';const content={'duo-state':friday?'VOTING IN PROGRESS':'PLAN CONFIRMED','duo-title':friday?'Friday Night':'The Sunday Table','duo-lead':friday?'The night is coming together.':'A slow morning. Good company.','duo-when':friday?'Fri, Sep 18 · 7:00 PM':'Sun, Sep 20 · 11:00 AM','duo-people':friday?'6 people':'4 people','duo-progress-title':friday?'5 of 6 have voted':'The plan is set','duo-progress-caption':friday?'One more voice to hear.':'See you at the table.','duo-next-title':friday?'Pick up your vote.':'Make room for brunch.','duo-next-copy':friday?'Your place stays with you as the layout changes.':'Time, people, and the next step stay together.'};Object.entries(content).forEach(([id,value])=>document.getElementById(id).textContent=value);document.querySelector('.duo-track>span').style.width=friday?'83.333%':'100%';document.querySelectorAll('[data-duo-plan]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.duoPlan===plan)));const link=document.getElementById('duo-action');link.firstChild.textContent=friday?'Explore the voting flow ':'Explore the final-plan flow ';duoCanvas.dataset.list='false';if(duoCanvas.dataset.mode==='compact'){document.querySelector('.duo-back').focus();}document.getElementById('duo-mode-copy').textContent=duoModes[duoCanvas.dataset.mode].copy+' Selected plan: '+content['duo-title']+'.';}
document.querySelectorAll('[data-duo-plan]').forEach(b=>b.addEventListener('click',()=>setDuoPlan(b.dataset.duoPlan)));
document.querySelector('.duo-back').addEventListener('click',()=>{duoCanvas.dataset.list='true';document.querySelector(`[data-duo-plan="${duoSelected}"]`).focus();});
document.getElementById('duo-action').addEventListener('click',()=>showStep(duoSelected==='friday'?2:4));
