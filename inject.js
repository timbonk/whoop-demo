(function(){
if(document.getElementById('whoop-panel'))return;

// Fonts
var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap';document.head.appendChild(l);

// Styles — no controls panel, full-height phone
var s=document.createElement('style');
s.textContent=`
#whoop-panel{position:fixed;top:0;left:0;width:440px;height:100vh;z-index:99999;display:flex;align-items:center;justify-content:center;background:#07080c;padding:16px 12px;box-shadow:4px 0 32px rgba(0,0,0,.7);font-family:'Barlow',sans-serif}
#whoop-panel *{box-sizing:border-box}
#whoop-panel .phone{width:380px;height:800px;background:#0e1118;border-radius:44px;border:2px solid rgba(255,255,255,.10);box-shadow:0 0 0 6px rgba(0,0,0,.5),0 20px 60px rgba(0,0,0,.8);display:flex;flex-direction:column;overflow:hidden;position:relative}
#whoop-panel .notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:126px;height:26px;background:#0e1118;border-radius:0 0 14px 14px;z-index:10;display:flex;align-items:center;justify-content:center;gap:6px}
#whoop-panel .nc{width:8px;height:8px;background:#1a2030;border-radius:50%}
#whoop-panel .sbar{height:42px;padding:0 16px 6px;display:flex;align-items:flex-end;justify-content:space-between;flex-shrink:0;font-size:12px;font-weight:600;color:rgba(255,255,255,.55)}
#whoop-panel .app{flex:1;overflow-y:auto;scrollbar-width:none;padding-bottom:16px}
#whoop-panel .app::-webkit-scrollbar{display:none}
#whoop-panel .app-hdr{padding:6px 15px 10px;display:flex;align-items:center;justify-content:space-between}
#whoop-panel .app-logo{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:900;letter-spacing:2px;color:#fff}
#whoop-panel .app-av{width:28px;height:28px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff}
#whoop-panel .cs{margin:0 10px 10px;background:linear-gradient(135deg,rgba(0,212,160,.07),rgba(59,130,246,.05));border:1px solid rgba(0,212,160,.17);border-radius:11px;padding:9px 12px;display:flex;gap:8px;transition:all .4s}
#whoop-panel .cs-ico{width:26px;height:26px;border-radius:6px;background:linear-gradient(135deg,#00d4a0,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
#whoop-panel .cs-body{font-size:12px;line-height:1.45;color:rgba(255,255,255,.7)}
#whoop-panel .cs-body strong{color:#fff}
#whoop-panel .ld{width:5px;height:5px;border-radius:50%;background:#00d4a0;animation:wpl 1.4s infinite;display:inline-block;margin-right:3px}
@keyframes wpl{0%,100%{opacity:1}50%{opacity:.3}}
#whoop-panel .rsec{padding:0 12px 10px;display:flex;flex-direction:column;align-items:center}
#whoop-panel .rwrap{position:relative;width:150px;height:150px;margin-bottom:8px}
#whoop-panel .rsvg{transform:rotate(-90deg)}
#whoop-panel .rctr{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
#whoop-panel .rscore{font-family:'Barlow Condensed',sans-serif;font-size:46px;font-weight:900;line-height:1;transition:color .5s}
#whoop-panel .rlbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#5a6478;margin-top:2px}
#whoop-panel .rstatus{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.8px}
#whoop-panel .mg{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:0 10px 10px}
#whoop-panel .mc{background:#161b24;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:9px 10px;transition:all .4s}
#whoop-panel .mc.hl{border-color:rgba(0,212,160,.3);box-shadow:0 0 14px rgba(0,212,160,.09)}
#whoop-panel .mc-ico{font-size:13px;margin-bottom:4px}
#whoop-panel .mc-lbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#5a6478;margin-bottom:2px}
#whoop-panel .mc-val{font-family:'Barlow Condensed',sans-serif;font-size:21px;font-weight:800;line-height:1;color:#e4e8f0}
#whoop-panel .mc-sub{font-size:9.5px;color:#5a6478;margin-top:2px}
#whoop-panel .badge{display:inline-flex;font-size:9px;font-weight:700;padding:2px 6px;border-radius:13px;margin-top:3px}
#whoop-panel .br{background:rgba(255,77,106,.1);color:#ff4d6a}
#whoop-panel .by{background:rgba(245,200,66,.1);color:#f5c842}
#whoop-panel .slc{margin:0 10px 8px;background:#161b24;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:9px 11px}
#whoop-panel .slh{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
#whoop-panel .slt{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#5a6478}
#whoop-panel .slv{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:800;color:#8b5cf6}
#whoop-panel .sltr{height:5px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden;margin-bottom:4px}
#whoop-panel .slfi{height:100%;border-radius:2px;background:linear-gradient(90deg,#3b82f6,#8b5cf6);width:71%;transition:width 1s}
#whoop-panel .slm{display:flex;justify-content:space-between;font-size:9px;color:#5a6478}
#whoop-panel .slbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#5a6478;padding:0 14px 5px}
#whoop-panel .woc{margin:0 10px 8px;background:#161b24;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:10px;transition:all .5s}
#whoop-panel .woc.upd{border-color:rgba(0,212,160,.4);box-shadow:0 0 16px rgba(0,212,160,.09)}
#whoop-panel .woh{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
#whoop-panel .wot{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:800;text-transform:uppercase;color:#e4e8f0}
#whoop-panel .wob{font-size:8.5px;font-weight:700;text-transform:uppercase;padding:2px 6px;border-radius:13px;transition:all .5s}
#whoop-panel .wob.orig{background:rgba(255,77,106,.1);color:#ff4d6a}
#whoop-panel .wob.adj{background:rgba(59,130,246,.1);color:#3b82f6}
#whoop-panel .wor{display:flex;align-items:center;gap:7px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}
#whoop-panel .wor:last-child{border-bottom:none}
#whoop-panel .wd{width:7px;height:7px;border-radius:50%;flex-shrink:0;transition:background .5s}
#whoop-panel .wn{font-size:12px;font-weight:500;flex:1;color:#e4e8f0;transition:all .4s}
#whoop-panel .wn.sk{text-decoration:line-through;opacity:.33}
#whoop-panel .wdu{font-size:10px;font-weight:600;color:#5a6478}
#whoop-panel .rems{margin:0 10px 9px;display:flex;gap:5px;flex-wrap:wrap}
#whoop-panel .rc{background:#161b24;border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:4px 9px;font-size:10.5px;font-weight:600;display:flex;align-items:center;gap:4px;color:#e4e8f0;transition:all .4s}
#whoop-panel .rc.on{border-color:rgba(245,200,66,.3);background:rgba(245,200,66,.1);color:#f5c842}
#whoop-panel .cdot{width:5px;height:5px;border-radius:50%;background:currentColor}
#whoop-panel .note{display:none;margin:0 10px 8px;background:rgba(0,212,160,.06);border:1px solid rgba(0,212,160,.2);border-radius:9px;padding:8px 11px}
#whoop-panel .note-hdr{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#00d4a0;margin-bottom:4px}
#whoop-panel .note-body{font-size:11.5px;color:rgba(255,255,255,.65);line-height:1.5}
#whoop-toast{position:fixed;bottom:16px;left:220px;transform:translateX(-50%) translateY(10px);background:#1c2230;border:1px solid rgba(0,212,160,.2);border-radius:7px;padding:8px 14px;display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#e4e8f0;box-shadow:0 6px 22px rgba(0,0,0,.5);opacity:0;transition:all .28s;pointer-events:none;z-index:999999;white-space:nowrap;font-family:'Barlow',sans-serif}
#whoop-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
@keyframes wpfl{0%{box-shadow:0 0 0 0 rgba(0,212,160,.5)}60%{box-shadow:0 0 14px 3px rgba(0,212,160,.12)}100%{box-shadow:0 0 0 0 rgba(0,212,160,0)}}
#whoop-panel .flash{animation:wpfl .75s ease 1}
body{margin-left:440px!important}
`;
document.head.appendChild(s);

// Panel HTML — clean app UI, no visible controls
var p=document.createElement('div');
p.id='whoop-panel';
p.innerHTML=`
<div class="phone">
  <div class="notch"><div class="nc"></div><div style="width:30px;height:3px;background:#1a2030;border-radius:2px"></div><div class="nc"></div></div>
  <div class="sbar">
    <span style="font-size:11px;font-weight:700">9:41</span>
    <div style="display:flex;gap:3px;align-items:center">
      <svg width="11" height="9" viewBox="0 0 12 9" fill="rgba(255,255,255,.55)"><rect x="0" y="4" width="2" height="5" rx="1" opacity=".4"/><rect x="3" y="2.5" width="2" height="6.5" rx="1" opacity=".65"/><rect x="6" y="1" width="2" height="8" rx="1" opacity=".85"/><rect x="9" y="0" width="2" height="9" rx="1"/></svg>
      <svg width="18" height="9" viewBox="0 0 20 9" fill="none"><rect x=".5" y=".5" width="16" height="8" rx="2.5" stroke="rgba(255,255,255,.3)"/><rect x="1.5" y="1.5" width="11" height="6" rx="1.5" fill="rgba(255,255,255,.55)"/><path d="M17.5 3v3" stroke="rgba(255,255,255,.35)" stroke-width="1.3" stroke-linecap="round"/></svg>
    </div>
  </div>
  <div class="app">
    <div class="app-hdr"><div class="app-logo">WHOOP</div><div class="app-av">AJ</div></div>
    <div class="cs"><div class="cs-ico">🤖</div><div><div class="cs-body" id="wCsTxt"><strong>WHOOP Coach</strong> is active →</div></div></div>
    <div class="rsec">
      <div class="rwrap">
        <svg class="rsvg" width="150" height="150" viewBox="0 0 150 150">
          <circle fill="none" stroke="rgba(255,255,255,.05)" stroke-width="10" cx="75" cy="75" r="58"/>
          <circle id="wRfill" fill="none" stroke-width="10" stroke-linecap="round" stroke="#f5c842"
            stroke-dasharray="364" stroke-dashoffset="156" cx="75" cy="75" r="58"
            style="transition:stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1),stroke .5s"/>
        </svg>
        <div class="rctr"><div class="rscore" id="wRscore" style="color:#f5c842">58</div><div class="rlbl">Recovery</div></div>
      </div>
      <div class="rstatus" style="color:#f5c842">Moderate Recovery</div>
    </div>
    <div class="mg">
      <div class="mc" id="wMcHRV"><div class="mc-ico">💓</div><div class="mc-lbl">HRV</div><div class="mc-val">42<span style="font-size:9px;color:#5a6478"> ms</span></div><div class="badge br">↓ Below baseline</div></div>
      <div class="mc" id="wMcRHR"><div class="mc-ico">❤️</div><div class="mc-lbl">Resting HR</div><div class="mc-val">58<span style="font-size:9px;color:#5a6478"> bpm</span></div><div class="badge br">↑ Elevated</div></div>
      <div class="mc" id="wMcStr"><div class="mc-ico">⚡</div><div class="mc-lbl">Yesterday Strain</div><div class="mc-val">16.8</div><div class="badge by">Challenging</div></div>
      <div class="mc" id="wMcSlp"><div class="mc-ico">🌙</div><div class="mc-lbl">Sleep</div><div class="mc-val">6h 12m</div><div class="mc-sub" style="color:#ff4d6a;font-weight:600">−48m short</div><div class="badge br">Sleep debt</div></div>
    </div>
    <div class="slc">
      <div class="slh"><span class="slt">Sleep Performance</span><span class="slv">71%</span></div>
      <div class="sltr"><div class="slfi"></div></div>
      <div class="slm"><span>6h 12m actual</span><span>7h 00m needed</span></div>
    </div>
    <div class="slbl">TODAY'S PLAN</div>
    <div class="woc" id="wWoc">
      <div class="woh"><div class="wot" id="wWotitle">HIIT Training</div><div class="wob orig" id="wWobadge">Original</div></div>
      <div class="wor"><div class="wd" id="wWd1" style="background:#ff4d6a"></div><div class="wn" id="wWn1">HIIT Intervals × 6</div><div class="wdu">45 min</div></div>
      <div class="wor"><div class="wd" id="wWd2" style="background:#f5c842"></div><div class="wn" id="wWn2">Core Circuit</div><div class="wdu">20 min</div></div>
      <div class="wor" id="wWr3" style="display:none"><div class="wd" style="background:#00d4a0"></div><div class="wn">Zone 2 Cardio</div><div class="wdu">30 min</div></div>
    </div>
    <div class="slbl">REMINDERS</div>
    <div class="rems">
      <div class="rc"><div class="cdot"></div>💧 Hydrate early</div>
      <div class="rc" id="wRc2"><div class="cdot"></div>🌙 Wind-down</div>
      <div class="rc" id="wRc3" style="display:none"><div class="cdot"></div>🛏 Earlier bedtime</div>
    </div>
    <div class="note" id="wNote">
      <div class="note-hdr">📋 Coach Note</div>
      <div class="note-body">Recovery 58 after strain 16.8 and 48-min sleep debt — swapped HIIT to Zone 2. Watch HRV trend over the next 24 hours.</div>
    </div>
    <!-- Talk to Coach button — shown when controller triggers connect -->
    <div id="wCoachBtn" style="display:none;margin:8px 8px 0;padding:0 0 4px">
      <button id="wCoachBtnEl" onclick="wDoConnect()" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#00d4a0,#0ea5e9);font-family:'Barlow',sans-serif;font-size:14px;font-weight:800;color:#fff;cursor:pointer;letter-spacing:.3px;box-shadow:0 0 0 0 rgba(0,212,160,.5);animation:wCoachPulse 1.8s ease-in-out infinite">
        🎙 Talk to Coach
      </button>
      <style>@keyframes wCoachPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,212,160,.5)}50%{box-shadow:0 0 0 10px rgba(0,212,160,0)}}</style>
    </div>
  </div>
</div>
<div id="whoop-toast"><span id="wTico"></span><span id="wTtxt"></span></div>
`;
document.body.appendChild(p);

// ── HELPERS ──────────────────────────────────────────────────────
var w$=function(id){return document.getElementById(id);};
function wToast(i,t){
  w$('wTico').textContent=i; w$('wTtxt').textContent=t;
  var el=w$('whoop-toast'); el.classList.add('show');
  setTimeout(function(){el.classList.remove('show');},2600);
}
function wHl(id){
  var el=w$(id); if(!el) return;
  el.classList.add('hl','flash');
  setTimeout(function(){el.classList.remove('flash');},850);
}

// ── UI ACTIONS ───────────────────────────────────────────────────
window.wUI={
  all: function(){
    ['wMcHRV','wMcRHR','wMcStr','wMcSlp'].forEach(function(id,i){
      setTimeout(function(){wHl(id);},i*140);
    });
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>All metrics</strong> — recovery 58, HRV 42ms, sleep −48m, strain 16.8';
  },
  hrv: function(){
    wHl('wMcHRV'); setTimeout(function(){wHl('wMcRHR');},150);
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>HRV 42ms</strong> — 26% below 56ms baseline. RHR elevated.';
  },
  slp: function(){
    wHl('wMcSlp');
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>Sleep 6h 12m</strong> — 48 minutes short of 7h need.';
  },
  str: function(){
    wHl('wMcStr');
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>Strain 16.8</strong> — Challenging. Compounding recovery debt.';
  },
  swap: function(){
    var woc=w$('wWoc'); if(!woc||woc.classList.contains('upd')) return;
    woc.classList.add('upd');
    w$('wWotitle').textContent='Zone 2 Cardio';
    var wb=w$('wWobadge'); wb.className='wob adj'; wb.textContent='AI Adjusted';
    w$('wWn1').classList.add('sk'); w$('wWd1').style.background='#3a3a4a';
    w$('wWn2').classList.add('sk'); w$('wWd2').style.background='#3a3a4a';
    w$('wWr3').style.display='flex';
    // Coach note fades in
    var n=w$('wNote');
    if(n){n.style.display='block';n.style.opacity='0';setTimeout(function(){n.style.transition='opacity .5s';n.style.opacity='1';},50);}
    wToast('✅','Workout → Zone 2 Cardio (30 min)');
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>Plan updated.</strong> Zone 2 today, intervals tomorrow.';
  },
  rem: function(){
    var r2=w$('wRc2'),r3=w$('wRc3');
    if(r2&&r2.classList.contains('on')) return;
    if(r2) r2.classList.add('on');
    if(r3){r3.style.display='flex'; r3.classList.add('on');}
    wToast('🔔','Wind-down 9:30 PM — lights out 10 PM');
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>Reminder set.</strong> Wind-down 9:30 PM, lights out 10 PM.';
  },
  reset: function(){
    var woc=w$('wWoc'); woc.classList.remove('upd');
    w$('wWotitle').textContent='HIIT Training';
    var wb=w$('wWobadge'); wb.className='wob orig'; wb.textContent='Original';
    w$('wWn1').classList.remove('sk'); w$('wWd1').style.background='#ff4d6a';
    w$('wWn2').classList.remove('sk'); w$('wWd2').style.background='#f5c842';
    w$('wWr3').style.display='none';
    var r2=w$('wRc2'),r3=w$('wRc3');
    if(r2) r2.classList.remove('on');
    if(r3){r3.style.display='none'; r3.classList.remove('on');}
    ['wMcHRV','wMcRHR','wMcStr','wMcSlp'].forEach(function(id){var el=w$(id);if(el)el.classList.remove('hl');});
    var n=w$('wNote'); if(n){n.style.display='none'; n.style.opacity='0';}
    w$('wCsTxt').innerHTML='<strong>WHOOP Coach</strong> is active →';
    wToast('↺','Dashboard reset');
  }
};

// ── CONNECT / DISCONNECT ──────────────────────────────────────────
var wConnected=false;

window.wShowConnect=function(){
  w$('wCoachBtn').style.display='block';
  w$('wCsTxt').innerHTML='<strong>Tap below</strong> to start your coaching session →';
};

window.wHideConnect=function(){
  w$('wCoachBtn').style.display='none';
};

window.wDoConnect=function(){
  var gigaBtn=Array.from(document.querySelectorAll('button')).find(function(b){
    return b.textContent.trim()==='Connect to agent';
  });
  if(gigaBtn){
    gigaBtn.click();
    w$('wCoachBtn').style.display='none';
    wConnected=true;
    w$('wCsTxt').innerHTML='<span class="ld"></span><strong>WHOOP Coach</strong> connected. Speak now.';
    setTimeout(hideGigaUI,800);
    setTimeout(hideGigaUI,2500);
    if(wpBC) wpBC.postMessage({type:'status',value:'connected'});
  }
};

window.wDoDisconnect=function(){
  var gigaBtn=Array.from(document.querySelectorAll('button')).find(function(b){
    return b.textContent.trim()==='Disconnect';
  });
  if(gigaBtn) gigaBtn.click();
  wConnected=false;
  w$('wCoachBtn').style.display='none';
  w$('wCsTxt').innerHTML='<strong>WHOOP Coach</strong> is active →';
  if(wpBC) wpBC.postMessage({type:'status',value:'disconnected'});
};

// ── BROADCASTCHANNEL — controller pairs here invisibly ────────────
var wpBC=null;
function wpConnect(ch){
  if(!ch) ch='whoop-demo-1';
  if(wpBC) wpBC.close();
  wpBC=new BroadcastChannel('whoop-ctrl-'+ch);
  wpBC.onmessage=function(e){
    var d=e.data;
    if(d.type==='ping') wpBC.postMessage({type:'ack'});
    if(d.type==='action'){
      var a=d.action;
      if(a==='all')        wUI.all();
      else if(a==='hrv')   wUI.hrv();
      else if(a==='slp')   wUI.slp();
      else if(a==='str')   wUI.str();
      else if(a==='swap')  wUI.swap();
      else if(a==='rem')   wUI.rem();
      else if(a==='reset') wUI.reset();
      else if(a==='show_connect')  wShowConnect();
      else if(a==='hide_connect')  wHideConnect();
      else if(a==='disconnect')    wDoDisconnect();
    }
  };
  wpBC.postMessage({type:'ack'});
}
// Auto-connect on default channel after a short delay
setTimeout(function(){wpConnect('whoop-demo-1');},800);

// ── HIDE GIGA FORM PANEL ONLY ────────────────────────────────────
// Hides only the left-side form/controls panel.
// Keeps the orb, transcript, and tool call display fully visible.
function hideGigaUI(){
  // Target the specific absolute-positioned left panel (form + connect/disconnect)
  var panel = document.querySelector('.absolute.lg\\:left-0.top-0.flex.justify-center');
  if(panel) panel.style.cssText='display:none!important';

  // Fallback: find by containing inputs
  if(!panel){
    document.querySelectorAll('input').forEach(function(inp){
      var el=inp;
      for(var i=0;i<10;i++){
        el=el.parentElement;
        if(!el||el===document.body) break;
        if(el.querySelectorAll('input').length>=3){
          el.style.cssText='display:none!important';
          break;
        }
      }
    });
  }
}
setTimeout(hideGigaUI,200);
setTimeout(hideGigaUI,600);
setTimeout(hideGigaUI,1500);
setTimeout(hideGigaUI,3000);
// Watch for re-renders after connect/disconnect state changes
var _hideObs=new MutationObserver(function(){ hideGigaUI(); });
_hideObs.observe(document.body,{childList:true,subtree:false});

    inp.dispatchEvent(new Event('change',{bubbles:true}));
  }
});
// ── AUTO-FILL GIGA FORM (but don't connect yet) ───────────────────
var INIT=['Alex Johnson','6','56','42','-25','HIIT Intervals x6 (45 min) + Core Circuit (20 min)','Half Marathon','yellow','58','58','slightly elevated','6h 12m','48','7h 00m','71','performance training','16.8','Challenging'];
var inputs=Array.from(document.querySelectorAll('input'));
var setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
inputs.forEach(function(inp,i){
  if(INIT[i]!==undefined){
    setter.call(inp,INIT[i]);
    inp.dispatchEvent(new Event('input',{bubbles:true}));
    inp.dispatchEvent(new Event('change',{bubbles:true}));
  }
});
// Hide the Giga form — we control connection via the Talk to Coach button
hideGigaUI();

})();
