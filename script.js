// ==========================================
// 1. ROZBUDOWANE DANE (15 LIG)
// ==========================================
const LIGUE_DATA = [
    { name: "PREMIER LEAGUE", teams: ["Man City", "Arsenal", "Liverpool", "Chelsea", "Man Utd", "Tottenham", "Aston Villa", "Newcastle", "West Ham", "Brighton"] },
    { name: "LA LIGA", teams: ["Real Madryt", "Barcelona", "Atletico", "Sevilla", "Villarreal", "Real Sociedad", "Girona", "Athletic Bilbao", "Betis", "Valencia"] },
    { name: "BUNDESLIGA", teams: ["Bayern", "Dortmund", "Leipzig", "Leverkusen", "Frankfurt", "Stuttgart", "Wolfsburg", "M'gladbach", "Freiburg", "Hoffenheim"] },
    { name: "SERIE A", teams: ["Juventus", "Inter", "AC Milan", "Napoli", "Roma", "Lazio", "Atalanta", "Fiorentina", "Bologna", "Torino"] },
    { name: "EKSTRAKLASA", teams: ["Lech Poznań", "Legia Warszawa", "Raków", "Pogoń", "Jagiellonia", "Śląsk Wrocław", "Widzew Łódź", "Górnik Zabrze", "Cracovia", "Zagłębie Lubin"] },
    { name: "LIGUE 1", teams: ["PSG", "Monaco", "Marseille", "Lyon", "Lille", "Lens", "Nice", "Rennes", "Reims", "Strasbourg"] },
    { name: "EREDIVISIE", teams: ["Ajax", "PSV", "Feyenoord", "AZ Alkmaar", "Twente", "Utrecht", "Vitesse", "Sparta Rotterdam"] },
    { name: "PRIMEIRA LIGA", teams: ["Benfica", "FC Porto", "Sporting CP", "Braga", "Vitoria SC", "Boavista", "Gil Vicente"] },
    { name: "SÜPER LIG", teams: ["Galatasaray", "Fenerbahce", "Besiktas", "Trabzonspor", "Basaksehir", "Adana Demirspor", "Antalyaspor"] },
    { name: "MLS", teams: ["Inter Miami", "LA Galaxy", "NY City", "Orlando City", "LAFC", "Seattle Sounders", "Atlanta United", "Columbus Crew"] },
    { name: "SAUDI PRO LEAGUE", teams: ["Al-Nassr", "Al-Hilal", "Al-Ittihad", "Al-Ahli", "Al-Ettifaq", "Al-Shabab", "Al-Taawoun"] },
    { name: "BRAZILEIRAO", teams: ["Flamengo", "Palmeiras", "Sao Paulo", "Gremio", "Atletico Mineiro", "Fluminense", "Botafogo", "Corinthians"] },
    { name: "J1 LEAGUE", teams: ["Vissel Kobe", "Yokohama F. Marinos", "Kawasaki Frontale", "Urawa Reds", "Nagoya Grampus", "Kashima Antlers"] },
    { name: "CHAMPIONSHIP", teams: ["Leeds", "Leicester", "Southampton", "Ipswich", "Norwich", "West Brom", "Sunderland", "Hull City"] },
    { name: "ARGENTINA LPF", teams: ["River Plate", "Boca Juniors", "Racing Club", "Independiente", "San Lorenzo", "Estudiantes"] }
];

let userData = {
    name: "", avatar: "", balance: 0, bets: [], isRegistered: false, loanUsed: false
};

let currentPendingBet = null;

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
        s.currentTime = 0;
        s.play().catch(() => {});
    }
}

// ==========================================
// 2. GENERATOR MECZÓW (PO 2 MECZE NA LIGĘ)
// ==========================================
function generateDailyMatches() {
    const container = document.getElementById('matches-list');
    if (!container) return;
    container.innerHTML = "";

    LIGUE_DATA.forEach(liga => {
        // Robimy pętlę 2 razy, aby stworzyć dwa mecze na każdą ligę
        for (let i = 0; i < 2; i++) {
            // Klonujemy listę zespołów, żeby nie wylosować tych samych w jednym meczu
            let availableTeams = [...liga.teams];
            
            let t1Index = Math.floor(Math.random() * availableTeams.length);
            let t1 = availableTeams.splice(t1Index, 1)[0];
            
            let t2Index = Math.floor(Math.random() * availableTeams.length);
            let t2 = availableTeams.splice(t2Index, 1)[0];

            // Losowe kursy
            const o1 = (1.2 + Math.random() * 2.5).toFixed(2);
            const oX = (3.1 + Math.random() * 1.5).toFixed(2);
            const o2 = (1.5 + Math.random() * 3.5).toFixed(2);

            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div style="font-size:0.7rem; color:#00c853; font-weight:bold;">● ${liga.name} - MECZ ${i+1}</div>
                <p><strong>${t1}</strong> vs <strong>${t2}</strong></p>
                <div class="odds-buttons">
                    <button onclick="startSimulation('${t1}', '${t2}', '${t1}', ${o1})">1 (${o1})</button>
                    <button onclick="startSimulation('${t1}', '${t2}', 'Remis', ${oX})">X (${oX})</button>
                    <button onclick="startSimulation('${t1}', '${t2}', '${t2}', ${o2})">2 (${o2})</button>
                </div>`;
            container.appendChild(card);
        }
    });
}

// ==========================================
// 3. SYMULACJA I LOGIKA (BEZ ZMIAN)
// ==========================================
function startSimulation(h, a, pick, odd) {
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
    
    currentPendingBet = { h, a, pick, odd };

    document.getElementById('modal-confirm').onclick = () => {
        const stake = parseFloat(modalInput.value);
        if (stake > 0 && stake <= userData.balance) {
            modal.style.display = "none";
            executeBet(currentPendingBet, stake);
        } else {
            alert("Nie masz tyle kasy lub kwota błędna!");
        }
    };
    
    document.getElementById('modal-cancel').onclick = () => {
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
        minute += Math.floor(Math.random() * 12) + 4;
        if (minute > 90) minute = 90;
        document.getElementById('sim-timer').innerText = minute + "'";
        if (Math.random() > 0.75) {
            if (Math.random() > 0.5) scoreH++; else scoreA++;
            document.getElementById('sim-score').innerText = `${bet.h} ${scoreH} - ${scoreA} ${bet.a}`;
        }
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
    
    userData.bets.unshift({
        h: bet.h, a: bet.a, pick: bet.pick, odd: bet.odd, stake: stake, 
        isWin: isWin, winAmount: winAmount,
        diff: isWin ? (winAmount - stake).toFixed(2) : stake.toFixed(2)
    });
    saveData();
    updateProfileUI();
}

function closeSim() {
    document.getElementById('sim-overlay').remove();
    updateKuponyUI();
    updateHistoryUI();
    checkBankruptcy();
}

function checkBankruptcy() {
    if (userData.balance < 1) {
        const modal = document.getElementById('custom-modal');
        const modalInput = document.getElementById('modal-input');
        const modalTitle = document.getElementById('modal-title');
        const modalMsg = document.getElementById('modal-msg');
        
        modalInput.style.display = "none";
        modalTitle.innerText = "BANKRUT!";
        
        if (!userData.loanUsed) {
            modalMsg.innerText = "Konto puste! Bierzesz pożyczkę 50 zł na start?";
            document.getElementById('modal-confirm').innerText = "BIORĘ";
            document.getElementById('modal-confirm').onclick = () => {
                userData.balance = 50;
                userData.loanUsed = true;
                modal.style.display = "none";
                saveData();
                updateProfileUI();
            };
        } else {
            modalMsg.innerText = "Przegrałeś wszystko. Reset gry.";
            document.getElementById('modal-confirm').innerText = "RESET";
            document.getElementById('modal-confirm').onclick = () => resetData();
        }
        modal.style.display = "flex";
    }
}

function showTab(tabId) {
    playSnd('snd-click');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'tab-bets') updateKuponyUI();
    if (tabId === 'tab-history') updateHistoryUI();
}

function updateKuponyUI() {
    const list = document.getElementById('active-bets-list');
    if (!list) return;
    list.innerHTML = userData.bets.map(b => `
        <div style="background:#1a1a1a; margin:10px 0; padding:15px; border-radius:12px; border: 2px solid ${b.isWin ? '#00c853' : '#ff5252'}; text-align:left;">
            <div style="font-size:0.8rem; color:#888;">${b.h} vs ${b.a}</div>
            <div style="font-weight:bold;">Typ: ${b.pick}</div>
            <div style="font-size:0.9rem;">Wygrana: ${b.winAmount} zł</div>
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

function updateProfileUI() {
    const trigger = document.getElementById('profile-trigger');
    if (trigger) trigger.style.backgroundImage = `url('${userData.avatar}')`;
    const info = document.getElementById('user-info-full');
    if (info) info.innerHTML = `<h3>${userData.name}</h3><p style="color:#00c853; font-size:1.5rem; font-weight:bold;">${userData.balance.toFixed(2)} zł</p>`;
}

function showMainApp() {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('main-app').classList.add('active');
    updateProfileUI();
    generateDailyMatches();
}

function nextStep(n) {
    playSnd('snd-click');
    if (n === 2) userData.name = document.getElementById('username').value || "Gracz";
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

function selectAvatar(el) {
    playSnd('snd-click');
    document.querySelectorAll('.avatar').forEach(a => a.classList.remove('selected'));
    el.classList.add('selected'); userData.avatar = el.src;
}

function setBudget(amount) {
    playSnd('snd-click');
    userData.balance = amount; userData.isRegistered = true;
    saveData(); showMainApp();
}

function saveData() { localStorage.setItem('betSimUser', JSON.stringify(userData)); }
function resetData() { localStorage.removeItem('betSimUser'); location.reload(); }
