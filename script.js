// ==========================================
// 1. DANE (15 LIG Z SIŁĄ DRUŻYN)
// ==========================================
const LIGUE_DATA = [
    { name: "PREMIER LEAGUE", teams: [{n: "Man City", p: 96}, {n: "Arsenal", p: 93}, {n: "Liverpool", p: 92}, {n: "Chelsea", p: 85}, {n: "Man Utd", p: 84}, {n: "Tottenham", p: 86}, {n: "Aston Villa", p: 82}, {n: "West Ham", p: 78}, {n: "Everton", p: 72}, {n: "Luton", p: 60}] },
    { name: "LA LIGA", teams: [{n: "Real Madryt", p: 96}, {n: "Barcelona", p: 97}, {n: "Atletico", p: 89}, {n: "Real Sociedad", p: 84}, {n: "Villarreal", p: 81}, {n: "Betis", p: 80}, {n: "Girona", p: 85}, {n: "Sevilla", p: 79}, {n: "Mallorca", p: 70}, {n: "Cadiz", p: 62}] },
    { name: "BUNDESLIGA", teams: [{n: "Bayern", p: 94}, {n: "Dortmund", p: 88}, {n: "Leverkusen", p: 93}, {n: "Leipzig", p: 87}, {n: "Frankfurt", p: 82}, {n: "Stuttgart", p: 84}, {n: "Wolfsburg", p: 77}, {n: "Freiburg", p: 78}, {n: "Mainz", p: 70}, {n: "Darmstadt", p: 58}] },
    { name: "SERIE A", teams: [{n: "Inter", p: 94}, {n: "AC Milan", p: 89}, {n: "Juventus", p: 90}, {n: "Napoli", p: 86}, {n: "Roma", p: 85}, {n: "Lazio", p: 83}, {n: "Atalanta", p: 86}, {n: "Fiorentina", p: 81}, {n: "Monza", p: 74}, {n: "Salernitana", p: 60}] },
    { name: "EKSTRAKLASA", teams: [{n: "Lech Poznań", p: 60}, {n: "Legia Warszawa", p: 69}, {n: "Raków", p: 58}, {n: "Jagiellonia", p: 57}, {n: "Pogoń Szczecin", p: 55}, {n: "Śląsk Wrocław", p: 54}, {n: "Górnik Zabrze", p: 50}, {n: "Widzew Łódź", p: 48}, {n: "Cracovia", p: 46}, {n: "ŁKS Łódź", p: 35}] },
    { name: "LIGUE 1", teams: [{n: "PSG", p: 97}, {n: "Monaco", p: 85}, {n: "Marseille", p: 83}, {n: "Lille", p: 82}, {n: "Lens", p: 80}, {n: "Nice", p: 81}, {n: "Lyon", p: 78}, {n: "Rennes", p: 79}, {n: "Reims", p: 74}, {n: "Clermont", p: 55}] },
    { name: "EREDIVISIE", teams: [{n: "PSV", p: 86}, {n: "Feyenoord", p: 84}, {n: "Ajax", p: 78}, {n: "AZ Alkmaar", p: 77}, {n: "Twente", p: 76}, {n: "Utrecht", p: 70}] },
    { name: "PRIMEIRA LIGA", teams: [{n: "Benfica", p: 87}, {n: "FC Porto", p: 85}, {n: "Sporting CP", p: 88}, {n: "Braga", p: 80}, {n: "Vitoria SC", p: 74}, {n: "Arouca", p: 65}] },
    { name: "MLS", teams: [{n: "Inter Miami", p: 88}, {n: "LAFC", p: 78}, {n: "Columbus Crew", p: 77}, {n: "LA Galaxy", p: 76}, {n: "Seattle Sounders", p: 74}, {n: "NY City", p: 72}] },
    { name: "SAUDI PRO LEAGUE", teams: [{n: "Al-Hilal", p: 88}, {n: "Al-Nassr", p: 85}, {n: "Al-Ittihad", p: 83}, {n: "Al-Ahli", p: 82}, {n: "Al-Ettifaq", p: 76}, {n: "Al-Shabab", p: 74}] },
    { name: "BRAZILEIRAO", teams: [{n: "Flamengo", p: 82}, {n: "Palmeiras", p: 83}, {n: "Botafogo", p: 78}, {n: "Atletico MG", p: 79}, {n: "Gremio", p: 77}, {n: "Bragantino", p: 75}] },
    { name: "CHAMPIONSHIP", teams: [{n: "Leicester", p: 78}, {n: "Leeds", p: 77}, {n: "Southampton", p: 76}, {n: "Ipswich", p: 75}, {n: "West Brom", p: 72}, {n: "Sunderland", p: 70}] },
    { name: "J1 LEAGUE", teams: [{n: "Vissel Kobe", p: 70}, {n: "Yokohama FM", p: 69}, {n: "Kawasaki Front", p: 68}, {n: "Urawa Reds", p: 68}, {n: "Sanfrecce", p: 66}, {n: "Machida Zelvia", p: 64}] },
    { name: "SÜPER LIG", teams: [{n: "Galatasaray", p: 86}, {n: "Fenerbahce", p: 85}, {n: "Besiktas", p: 78}, {n: "Trabzonspor", p: 76}, {n: "Kasimpasa", p: 70}, {n: "Samsunspor", p: 65}] },
    { name: "ARGENTINA LPF", teams: [{n: "River Plate", p: 81}, {n: "Boca Juniors", p: 79}, {n: "Racing Club", p: 77}, {n: "Talleres", p: 76}, {n: "Estudiantes", p: 75}, {n: "Velez", p: 74}] }
];

let userData = { name: "", avatar: "", balance: 0, bets: [], isRegistered: false, loanUsed: false };
let currentPendingBet = null;

// ==========================================
// 2. FUNKCJE STARTOWE I AUDIO (BEZ LAGÓW)
// ==========================================
window.onload = () => {
    const savedData = localStorage.getItem('betSimUser');
    if (savedData) {
        userData = JSON.parse(savedData);
        if (userData.isRegistered) showMainApp();
    }
};

function playSnd(id) {
    const s = document.getElementById(id);
    if (s) {
        s.pause();
        s.currentTime = 0;
        s.play().catch(() => {});
    }
}

// ==========================================
// 3. GENERATOR MECZÓW (REALISTYCZNE KURSY)
// ==========================================
function generateDailyMatches() {
    const container = document.getElementById('matches-list');
    if (!container) return;
    container.innerHTML = "";

    LIGUE_DATA.forEach(liga => {
        for (let i = 0; i < 2; i++) {
            let available = [...liga.teams];
            let t1 = available.splice(Math.floor(Math.random() * available.length), 1)[0];
            let t2 = available.splice(Math.floor(Math.random() * available.length), 1)[0];

            let diff = t1.p - t2.p;
            let o1 = Math.max(1.10, (2.1 - (diff / 35))).toFixed(2);
            let o2 = Math.max(1.10, (2.1 + (diff / 35))).toFixed(2);
            let oX = (2.9 + (Math.abs(diff) / 45)).toFixed(2);

            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div style="font-size:0.7rem; color:#00c853; font-weight:bold;">● ${liga.name}</div>
                <p><strong>${t1.n}</strong> vs <strong>${t2.n}</strong></p>
                <div class="odds-buttons">
                    <button onclick="startSimulation('${t1.n}', '${t2.n}', '${t1.n}', ${o1}, ${t1.p}, ${t2.p})">1 (${o1})</button>
                    <button onclick="startSimulation('${t1.n}', '${t2.n}', 'Remis', ${oX}, ${t1.p}, ${t2.p})">X (${oX})</button>
                    <button onclick="startSimulation('${t1.n}', '${t2.n}', '${t2.n}', ${o2}, ${t1.p}, ${t2.p})">2 (${o2})</button>
                </div>`;
            container.appendChild(card);
        }
    });
}

// ==========================================
// 4. SYMULACJA MECZU
// ==========================================
function startSimulation(h, a, pick, odd, p1, p2) {
    playSnd('snd-click');
    const modal = document.getElementById('custom-modal');
    const modalInput = document.getElementById('modal-input');
    const modalMsg = document.getElementById('modal-msg');
    const modalTitle = document.getElementById('modal-title');

    modalTitle.innerText = "Postaw zakład";
    modalInput.style.display = "block";
    modalMsg.innerText = `${h} vs ${a} | Typ: ${pick} (${odd})`;
    modalInput.value = "50";
    modal.style.display = "flex";
    
    currentPendingBet = { h, a, pick, odd, p1, p2 };

    document.getElementById('modal-confirm').onclick = () => {
        const stake = parseFloat(modalInput.value);
        if (stake > 0 && stake <= userData.balance) {
            playSnd('snd-spin');
            modal.style.display = "none";
            executeBet(currentPendingBet, stake);
        } else {
            alert("Błędna kwota lub brak kasy!");
        }
    };
    
    document.getElementById('modal-cancel').onclick = () => {
        playSnd('snd-click');
        modal.style.display = "none";
    };
}

function executeBet(bet, amount) {
    userData.balance -= amount;
    updateProfileUI();

    const simOverlay = document.createElement('div');
    simOverlay.id = "sim-overlay";
    simOverlay.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.98); z-index:9999; display:flex; align-items:center; justify-content:center; color:white; text-align:center;";
    simOverlay.innerHTML = `
        <div style="background:#111; padding:40px; border-radius:20px; border:2px solid #00c853; width:85%; max-width:400px;" id="sim-card">
            <h2 id="sim-score">${bet.h} 0 - 0 ${bet.a}</h2>
            <div id="sim-timer" style="font-size:3.5rem; color:#00c853; margin:15px 0; font-weight:bold;">1'</div>
            <div id="sim-log" style="color:#777;">Mecz trwa...</div>
            <div id="sim-final"></div>
        </div>
    `;
    document.body.appendChild(simOverlay);

    let minute = 1; let scoreH = 0; let scoreA = 0;
    const matchInterval = setInterval(() => {
        minute += Math.floor(Math.random() * 10) + 3;
        if (minute > 90) minute = 90;
        document.getElementById('sim-timer').innerText = minute + "'";

        // SZANSA NA GOLA zależna od siły (p)
        let chanceH = 0.08 + (bet.p1 - bet.p2) / 800;
        let chanceA = 0.08 + (bet.p2 - bet.p1) / 800;

        if (Math.random() < chanceH) scoreH++;
        if (Math.random() < chanceA) scoreA++;

        document.getElementById('sim-score').innerText = `${bet.h} ${scoreH} - ${scoreA} ${bet.a}`;

        if (minute >= 90) {
            clearInterval(matchInterval);
            finishMatch(scoreH, scoreA, bet, amount);
        }
    }, 400);
}

function finishMatch(sh, sa, bet, stake) {
    let result = (sh > sa) ? bet.h : (sa > sh ? bet.a : "Remis");
    const isWin = (result === bet.pick);
    const winAmount = (stake * bet.odd).toFixed(2);
    const finalDiv = document.getElementById('sim-final');
    const simCard = document.getElementById('sim-card');

    if (isWin) {
        playSnd('snd-win');
        userData.balance += parseFloat(winAmount);
        finalDiv.innerHTML = `<h2 style="color:#00c853;" class="win-effect">WYGRANA! +${winAmount}zł</h2>`;
    } else {
        playSnd('snd-lose');
        simCard.classList.add('shake-effect');
        finalDiv.innerHTML = `<h2 style="color:#ff5252;">PRZEGRANA...</h2><p>Wynik: ${result}</p>`;
    }
    
    finalDiv.innerHTML += `<button onclick="closeSim()" style="margin-top:20px;">ZAMKNIJ</button>`;
    
    userData.bets.unshift({ h: bet.h, a: bet.a, pick: bet.pick, odd: bet.odd, stake: stake, isWin: isWin, winAmount: winAmount, diff: isWin ? (winAmount - stake).toFixed(2) : stake.toFixed(2) });
    saveData();
    updateProfileUI();
}

function closeSim() {
    document.getElementById('sim-overlay').remove();
    updateKuponyUI();
    updateHistoryUI();
    checkBankruptcy();
}

// ==========================================
// 5. INTERFEJS (NAWIGACJA I PROFIL)
// ==========================================
function showTab(tabId) {
    playSnd('snd-click');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'tab-bets') updateKuponyUI();
    if (tabId === 'tab-history') updateHistoryUI();
}

function updateProfileUI() {
    const trigger = document.getElementById('profile-trigger');
    if (trigger) trigger.style.backgroundImage = `url('${userData.avatar}')`;
    const info = document.getElementById('user-info-full');
    if (info) info.innerHTML = `<h3>${userData.name}</h3><p style="color:#00c853; font-size:1.5rem; font-weight:bold;">${userData.balance.toFixed(2)} zł</p>`;
}

function updateKuponyUI() {
    const list = document.getElementById('active-bets-list');
    if (!list) return;
    list.innerHTML = userData.bets.map(b => `
        <div style="background:#1a1a1a; margin:10px 0; padding:15px; border-radius:12px; border: 2px solid ${b.isWin ? '#00c853' : '#ff5252'};">
            <div style="font-size:0.8rem; color:#888;">${b.h} vs ${b.a}</div>
            <div style="font-weight:bold;">Typ: ${b.pick} (${b.odd})</div>
            <div style="font-size:0.9rem;">${b.isWin ? 'Wygrana' : 'Stawka'}: ${b.isWin ? b.winAmount : b.stake} zł</div>
        </div>
    `).join('');
}

function updateHistoryUI() {
    const list = document.getElementById('history-list');
    if (!list) return;
    list.innerHTML = userData.bets.map(b => `
        <div style="font-size: 2.2rem; font-weight: 900; text-align: center; margin: 15px 0; color: ${b.isWin ? '#00c853' : '#ff5252'};">
            ${b.isWin ? '+' : '-'}${b.diff}
        </div>
    `).join('');
}

function checkBankruptcy() {
    if (userData.balance < 1) {
        const modal = document.getElementById('custom-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMsg = document.getElementById('modal-msg');
        const modalInput = document.getElementById('modal-input');
        
        modalInput.style.display = "none";
        modalTitle.innerText = "BANKRUT!";
        if (!userData.loanUsed) {
            modalMsg.innerText = "Konto puste! Bierzesz pożyczkę 50 zł?";
            document.getElementById('modal-confirm').innerText = "BIORĘ";
            document.getElementById('modal-confirm').onclick = () => {
                userData.balance = 50; userData.loanUsed = true;
                modal.style.display = "none"; saveData(); updateProfileUI();
            };
        } else {
            modalMsg.innerText = "Przegrałeś wszystko. Reset gry.";
            document.getElementById('modal-confirm').innerText = "RESET";
            document.getElementById('modal-confirm').onclick = () => resetData();
        }
        modal.style.display = "flex";
    }
}

// ==========================================
// 6. REJESTRACJA
// ==========================================
function nextStep(n) {
    playSnd('snd-click');
    if (n === 2) userData.name = document.getElementById('username').value || "Gracz";
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

function selectAvatar(el) {
    playSnd('snd-click');
    document.querySelectorAll('.avatar').forEach(a => a.classList.remove('selected'));
    el.classList.add('selected'); 
    userData.avatar = el.src;
}

function setBudget(amount) {
    playSnd('snd-click');
    userData.balance = amount; 
    userData.isRegistered = true;
    saveData(); 
    showMainApp();
}

function showMainApp() {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('main-app').classList.add('active');
    updateProfileUI();
    generateDailyMatches();
}

function saveData() { localStorage.setItem('betSimUser', JSON.stringify(userData)); }
function resetData() { localStorage.removeItem('betSimUser'); location.reload(); }
