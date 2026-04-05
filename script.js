// ==========================================
// 1. DANE (15 LIG + SKŁADY)
// ==========================================
const LIGUE_DATA = [
    { 
        name: "PREMIER LEAGUE", 
        teams: [
            {n: "Man City", p: 96, players: ["Haaland", "De Bruyne", "Foden", "Rodri", "Bernardo Silva", "Alvarez"]},
            {n: "Arsenal", p: 93, players: ["Saka", "Odegaard", "Gabriel Jesus", "Havertz", "Martinelli", "Rice"]},
            {n: "Liverpool", p: 92, players: ["Salah", "Nunez", "Luis Diaz", "Gakpo", "Jota", "Szoboszlai"]},
            {n: "Chelsea", p: 85, players: ["Palmer", "Jackson", "Enzo", "Sterling", "Mudryk", "Nkunku"]},
            {n: "Man Utd", p: 84, players: ["Rashford", "Hojlund", "Bruno Fernandes", "Garnacho", "Antony", "Casemiro"]},
            {n: "Tottenham", p: 86, players: ["Son", "Richarlison", "Kulusevski", "Maddison", "Werner", "Johnson"]},
            {n: "Aston Villa", p: 82, players: ["Watkins", "Bailey", "Diaby", "McGinn", "Douglas Luiz"]},
            {n: "West Ham", p: 78, players: ["Bowen", "Kudus", "Paqueta", "Antonio", "Soucek"]},
            {n: "Everton", p: 72, players: ["Calvert-Lewin", "Beto", "Doucoure", "McNeil", "Harrison"]},
            {n: "Luton", p: 60, players: ["Adebayo", "Morris", "Barkley", "Townsend", "Ogbene"]}
        ] 
    },
    { 
        name: "LA LIGA", 
        teams: [
            {n: "Real Madryt", p: 96, players: ["Mbappe", "Vinicius Jr", "Bellingham", "Rodrygo", "Valverde", "Joselu"]},
            {n: "Barcelona", p: 91, players: ["Lewandowski", "Lamine Yamal", "Raphinha", "Ferran Torres", "Gundogan", "Felix"]},
            {n: "Atletico", p: 89, players: ["Griezmann", "Morata", "Correa", "De Paul", "Llorente", "Lino"]},
            {n: "Girona", p: 85, players: ["Dovbyk", "Savio", "Tsygankov", "Stuani", "Portu"]},
            {n: "Real Sociedad", p: 84, players: ["Oyarzabal", "Take Kubo", "Brais Mendez", "Barrenetxea"]},
            {n: "Villarreal", p: 81, players: ["Gerard Moreno", "Sorloth", "Guedes", "Baena"]},
            {n: "Betis", p: 80, players: ["Willian Jose", "Isco", "Fekir", "Ayoze Perez", "Fornals"]},
            {n: "Sevilla", p: 79, players: ["En-Nesyri", "Isaac Romero", "Ocampos", "Suso", "Ramos"]},
            {n: "Mallorca", p: 70, players: ["Muriqi", "Larin", "Abdon Prats", "Dani Rodriguez"]},
            {n: "Cadiz", p: 62, players: ["Juanmi", "Chris Ramos", "Sobrinho", "Machis"]}
        ] 
    },
    { 
        name: "BUNDESLIGA", 
        teams: [
            {n: "Bayern", p: 94, players: ["Kane", "Musiala", "Sane", "Gnabry", "Muller", "Coman"]},
            {n: "Leverkusen", p: 93, players: ["Wirtz", "Schick", "Boniface", "Grimaldo", "Frimpong", "Tella"]},
            {n: "Dortmund", p: 88, players: ["Fullkrug", "Malen", "Sancho", "Adeyemi", "Reus", "Brandt"]},
            {n: "Leipzig", p: 87, players: ["Openda", "Sesko", "Xavi Simons", "Olmo", "Poulsen"]},
            {n: "Stuttgart", p: 84, players: ["Guirassy", "Undav", "Fuhrich", "Silas", "Millot"]},
            {n: "Frankfurt", p: 82, players: ["Marmoush", "Ekitike", "Knauff", "Gotze"]},
            {n: "Wolfsburg", p: 77, players: ["Wind", "Majer", "Baku", "Behrens"]},
            {n: "Freiburg", p: 78, players: ["Grifo", "Gregoritsch", "Doan", "Sallai"]},
            {n: "Mainz", p: 70, players: ["Burkardt", "Onisiwo", "Lee Jae-sung", "Amiri"]},
            {n: "Darmstadt", p: 58, players: ["Skarke", "Vilhelmsson", "Honsak", "Kempe"]}
        ] 
    },
    { 
        name: "SERIE A", 
        teams: [
            {n: "Inter", p: 94, players: ["Lautaro Martinez", "Thuram", "Calhanoglu", "Barella", "Frattesi", "Mkhitaryan"]},
            {n: "AC Milan", p: 89, players: ["Leao", "Giroud", "Pulisic", "Jovic", "Okafor", "Loftus-Cheek"]},
            {n: "Juventus", p: 90, players: ["Vlahovic", "Chiesa", "Milik", "Yildiz", "Rabiot", "Kean"]},
            {n: "Napoli", p: 86, players: ["Osimhen", "Kvaratskhelia", "Politano", "Simeone", "Zielinski"]},
            {n: "Roma", p: 85, players: ["Dybala", "Lukaku", "Pellegrini", "El Shaarawy", "Abraham"]},
            {n: "Atalanta", p: 86, players: ["Lookman", "Scamacca", "De Ketelaere", "Pasalic", "Koopmeiners"]},
            {n: "Lazio", p: 83, players: ["Immobile", "Castellanos", "Zaccagni", "Felipe Anderson", "Luis Alberto"]},
            {n: "Fiorentina", p: 81, players: ["Belotti", "Nico Gonzalez", "Beltran", "Bonaventura"]},
            {n: "Monza", p: 74, players: ["Djuric", "Colpani", "Mota", "Pessina"]},
            {n: "Salernitana", p: 60, players: ["Simy", "Candreva", "Dia", "Weissman"]}
        ] 
    },
    { 
        name: "EKSTRAKLASA", 
        teams: [
            {n: "Lech Poznań", p: 60, players: ["Ishak", "Velde", "Marchwiński", "Szymczak", "Hotić", "Sousa"]},
            {n: "Legia Warszawa", p: 59, players: ["Gual", "Pekhart", "Josue", "Kramer", "Kapustka", "Wszołek"]},
            {n: "Raków", p: 58, players: ["Crnac", "Yeboah", "Cebula", "Kochergin", "Nowak"]},
            {n: "Jagiellonia", p: 57, players: ["Imaz", "Pululu", "Hansen", "Naranjo", "Marczuk"]},
            {n: "Pogoń Szczecin", p: 55, players: ["Koulouris", "Grosicki", "Bichakhchyan", "Zahović", "Gorgon"]},
            {n: "Śląsk Wrocław", p: 54, players: ["Exposito", "Samiec-Talar", "Klimala", "Nahuel"]},
            {n: "Górnik Zabrze", p: 50, players: ["Kozuki", "Musiolik", "Ennali", "Podolski"]},
            {n: "Widzew Łódź", p: 48, players: ["Rondić", "Sánchez", "Pawłowski", "Álvarez", "Klimenta"]},
            {n: "Cracovia", p: 46, players: ["Kallman", "Makuch", "Knap", "Rakoczy"]},
            {n: "ŁKS Łódź", p: 35, players: ["Tejan", "Ramirez", "Janczukowicz", "Balić"]}
        ] 
    },
    { 
        name: "LIGUE 1", 
        teams: [
            {n: "PSG", p: 93, players: ["Dembele", "Goncalo Ramos", "Kolo Muani", "Barcola", "Vitinha", "Asensio"]},
            {n: "Monaco", p: 85, players: ["Ben Yedder", "Embolo", "Minamino", "Golovin", "Balogun"]},
            {n: "Marseille", p: 83, players: ["Aubameyang", "Moumbagna", "Sarr", "Harit", "Veretout"]},
            {n: "Lille", p: 82, players: ["Jonathan David", "Zhegrova", "Yazici", "Cabella", "Gomes"]},
            {n: "Nice", p: 81, players: ["Moffi", "Guessand", "Boga", "Laborde", "Thuram"]},
            {n: "Lyon", p: 78, players: ["Lacazette", "Orban", "Cherki", "Benrahma", "Fofana"]},
            {n: "Lens", p: 80, players: ["Wahi", "Sotoca", "Said", "Frankowski", "Thomasson"]},
            {n: "Rennes", p: 79, players: ["Kalimuendo", "Terrier", "Gouiri", "Blas", "Bourigeaud"]},
            {n: "Reims", p: 74, players: ["Ito", "Diakite", "Daramy", "Nakamura"]},
            {n: "Clermont", p: 55, players: ["Nicholson", "Cham", "Virginius", "Allevinah"]}
        ] 
    },
    { 
        name: "EREDIVISIE", 
        teams: [
            {n: "PSV", p: 86, players: ["Luuk de Jong", "Lozano", "Bakayoko", "Tillman", "Pepi"]},
            {n: "Feyenoord", p: 84, players: ["Gimenez", "Paixao", "Minteh", "Ueda", "Stengs"]},
            {n: "Ajax", p: 78, players: ["Brobbey", "Bergwijn", "Akpom", "Berghuis", "Taylor"]},
            {n: "AZ Alkmaar", p: 77, players: ["Pavlidis", "Dani de Wit", "Lahdo", "Van Bommel"]},
            {n: "Twente", p: 76, players: ["Van Wolfswinkel", "Steijn", "Rots", "Ugalde"]},
            {n: "Utrecht", p: 70, players: ["Lammers", "Toornstra", "Boussaid", "Jensen"]}
        ] 
    },
    { 
        name: "PRIMEIRA LIGA", 
        teams: [
            {n: "Benfica", p: 87, players: ["Di Maria", "Arthur Cabral", "Rafa Silva", "Neres", "Tengstedt"]},
            {n: "FC Porto", p: 85, players: ["Evanilson", "Taremi", "Galeno", "Pepe", "Conceicao"]},
            {n: "Sporting CP", p: 88, players: ["Gyokeres", "Paulinho", "Trincao", "Edwards", "Goncalves"]},
            {n: "Braga", p: 80, players: ["Banza", "Ricardo Horta", "Abel Ruiz", "Bruma", "Djaló"]},
            {n: "Vitoria SC", p: 74, players: ["Jota Silva", "Andre Silva", "Nuno Santos", "Oliveira"]},
            {n: "Arouca", p: 65, players: ["Mujica", "Jason", "Cristo Gonzalez", "Sylla"]}
        ] 
    },
    { 
        name: "MLS", 
        teams: [
            {n: "Inter Miami", p: 82, players: ["Messi", "Suarez", "Campana", "Taylor", "Gomez"]},
            {n: "LAFC", p: 78, players: ["Bouanga", "Bogusz", "Olivera", "Kamara", "Atuesta"]},
            {n: "Columbus Crew", p: 77, players: ["Cucho Hernandez", "Rossi", "Ramirez", "Matan"]},
            {n: "LA Galaxy", p: 76, players: ["Joveljic", "Paintsil", "Puig", "Fagundez", "Berry"]},
            {n: "Seattle Sounders", p: 74, players: ["Morris", "Ruidiaz", "Rusnak", "Lodeiro"]},
            {n: "NY City", p: 72, players: ["Bakrar", "Rodriguez", "Wolf", "Fernandez"]}
        ] 
    },
    { 
        name: "SAUDI PRO LEAGUE", 
        teams: [
            {n: "Al-Hilal", p: 88, players: ["Mitrovic", "Malcom", "Milinkovic-Savic", "Neymar", "Al-Dawsari", "Neves"]},
            {n: "Al-Nassr", p: 85, players: ["Cristiano Ronaldo", "Mane", "Talisca", "Otavio", "Ghareeb"]},
            {n: "Al-Ittihad", p: 83, players: ["Benzema", "Hamdallah", "Jota", "Romarinho", "Kante"]},
            {n: "Al-Ahli", p: 82, players: ["Mahrez", "Firmino", "Saint-Maximin", "Firas Al-Buraikan", "Veiga"]},
            {n: "Al-Ettifaq", p: 76, players: ["Dembele", "Ekambi", "Gray", "Wijnaldum", "Fofana"]},
            {n: "Al-Shabab", p: 74, players: ["Diallo", "Carrasco", "Rakitic", "Vitinho"]}
        ] 
    },
    { 
        name: "BRAZILEIRAO", 
        teams: [
            {n: "Flamengo", p: 82, players: ["Pedro", "Gabigol", "Everton Cebolinha", "Bruno Henrique", "Arrascaeta"]},
            {n: "Palmeiras", p: 83, players: ["Endrick", "Rony", "Flaco Lopez", "Raphael Veiga", "Dudu"]},
            {n: "Botafogo", p: 78, players: ["Tiquinho Soares", "Junior Santos", "Savarino", "Eduardo"]},
            {n: "Atletico MG", p: 79, players: ["Hulk", "Pauliniho", "Vargas", "Gustavo Scarpa"]},
            {n: "Gremio", p: 77, players: ["Diego Costa", "Pavon", "Soteldo", "JP Galvao"]},
            {n: "Bragantino", p: 75, players: ["Eduardo Sasha", "Borbas", "Helinho", "Vitinho"]}
        ] 
    },
    { 
        name: "CHAMPIONSHIP", 
        teams: [
            {n: "Leicester", p: 78, players: ["Vardy", "Daka", "Mavididi", "Fatawu", "Dewsnury-Hall"]},
            {n: "Leeds", p: 77, players: ["Summerville", "Piroe", "Bamford", "Gnonto", "James"]},
            {n: "Southampton", p: 76, players: ["Adam Armstrong", "Adams", "Fraser", "Brooks", "Aribo"]},
            {n: "Ipswich", p: 75, players: ["Broadhead", "Chaplin", "Hirst", "Sarmiento", "Moore"]},
            {n: "West Brom", p: 72, players: ["Asante", "Wallace", "Swift", "Fellows"]},
            {n: "Sunderland", p: 70, players: ["Bellingham", "Clarke", "Rusyn", "Ba", "Ekwah"]}
        ] 
    },
    { 
        name: "J1 LEAGUE", 
        teams: [
            {n: "Vissel Kobe", p: 70, players: ["Osako", "Muto", "Sasaki", "Palacios", "Yuruki"]},
            {n: "Yokohama FM", p: 69, players: ["Anderson Lopes", "Yan Matheus", "Elber", "Miyaichi"]},
            {n: "Kawasaki Front", p: 68, players: ["Erison", "Gomis", "Marcinho", "Ienaga", "Yamada"]},
            {n: "Urawa Reds", p: 68, players: ["Thiago Santana", "Linssen", "Koroki", "Okubo", "Nakajima"]},
            {n: "Sanfrecce", p: 66, players: ["Ohashi", "Vieira", "Sotiriou", "Mitsuta"]},
            {n: "Machida Zelvia", p: 64, players: ["Oh Se-hun", "Fujio", "Erik", "Hirakawa"]}
        ] 
    },
    { 
        name: "SÜPER LIG", 
        teams: [
            {n: "Galatasaray", p: 86, players: ["Icardi", "Mertens", "Zaha", "Yilmaz", "Ziyech", "Demirbay"]},
            {n: "Fenerbahce", p: 85, players: ["Dzeko", "Tadic", "Batshuayi", "Kahveci", "Cengiz Under", "Fred"]},
            {n: "Besiktas", p: 78, players: ["Aboubakar", "Tosun", "Rashica", "Muci", "Muleka"]},
            {n: "Trabzonspor", p: 76, players: ["Onuachu", "Enis Destan", "Visca", "Pepe", "Trezeguet"]},
            {n: "Kasimpasa", p: 70, players: ["Fall", "Da Costa", "Hajradinovic", "Kara"]},
            {n: "Samsunspor", p: 65, players: ["Marius", "Ercan Kara", "Ntcham", "Holse"]}
        ] 
    },
    { 
        name: "ARGENTINA LPF", 
        teams: [
            {n: "River Plate", p: 81, players: ["Borja", "Colidio", "Solari", "Echeverri", "Mastantuono", "Nacho Fernandez"]},
            {n: "Boca Juniors", p: 79, players: ["Cavani", "Merentiel", "Benedetto", "Zenon", "Langoni", "Advincula"]},
            {n: "Racing Club", p: 77, players: ["Adrian Martinez", "Roger Martinez", "Quintero", "Salas", "Carbonero"]},
            {n: "Talleres", p: 76, players: ["Girotti", "Bustos", "Sosa", "Botta", "Galarza"]},
            {n: "Estudiantes", p: 75, players: ["Correa", "Carrillo", "Cetré", "Piatti", "Enzo Perez"]},
            {n: "Velez", p: 74, players: ["Romero", "Pizzini", "Aquino", "Lobato", "Sarco"]}
        ] 
    }
];

// DALSZA CZĘŚĆ TWOJEGO KODU JS...
// ==========================================
// 1. STAN GRY I INICJALIZACJA
// ==========================================
let currentSlip = []; 
let userData = { 
    name: "", 
    avatar: "", 
    balance: 0, 
    bets: [], 
    isRegistered: false 
};

window.onload = () => {
    const savedData = localStorage.getItem('betSimUser');
    if (savedData) {
        userData = JSON.parse(savedData);
        if (userData.isRegistered) {
            showMainApp();
        }
    }
};

function saveData() { 
    localStorage.setItem('betSimUser', JSON.stringify(userData)); 
}

// ==========================================
// 2. NAWIGACJA (FIX PRZYCISKU DALEJ)
// ==========================================
function nextStep(n) { 
    playSnd('snd-click'); 
    
    // Zapis imienia na kroku 1
    if(n === 2) {
        const input = document.getElementById('username');
        userData.name = (input && input.value) ? input.value : "Gracz";
    }

    // Ukrywamy wszystkie sekcje
    document.querySelectorAll('.step').forEach(s => { 
        s.style.display = "none"; 
        s.classList.remove('active');
    });

    // Pokazujemy konkretny krok
    const next = document.getElementById('step-' + n);
    if (next) { 
        // Używamy flex dla kroków powitalnych, by centrowanie działało
        next.style.display = "flex"; 
        next.classList.add('active'); 
    }
}

function selectAvatar(el) { 
    playSnd('snd-click');
    document.querySelectorAll('.avatar').forEach(a => a.style.border = "none");
    el.style.border = "4px solid #00c853";
    userData.avatar = el.src; 
}

function setBudget(a) { 
    playSnd('snd-click');
    userData.balance = a; 
    userData.isRegistered = true; 
    saveData(); 
    showMainApp(); 
}

function showMainApp() {
    document.querySelectorAll('.step').forEach(s => { 
        s.style.display = "none"; 
        s.classList.remove('active');
    });
    
    const main = document.getElementById('main-app');
    if(main) {
        main.style.display = "block";
        main.classList.add('active');
    }
    
    updateProfileUI(); 
    generateDailyMatches();
    updateKuponyUI(); // Odśwież historię na starcie
}

// ==========================================
// 3. MECZE (WYŚRODKOWANE KURSY)
// ==========================================
function generateDailyMatches() {
    const container = document.getElementById('matches-list');
    if (!container) return;
    container.innerHTML = "";

    LIGUE_DATA.forEach(liga => {
        let teams = [...liga.teams].sort(() => Math.random() - 0.5);
        for (let i = 0; i < teams.length - 1; i += 2) {
            let t1 = teams[i]; let t2 = teams[i+1];
            let diff = t1.p - t2.p;
            let o1 = Math.max(1.15, (2.1 - (diff / 40))).toFixed(2);
            let o2 = Math.max(1.15, (2.1 + (diff / 40))).toFixed(2);
            let oX = (3.1 + (Math.abs(diff) / 50)).toFixed(2);

            const card = document.createElement('div');
            card.className = 'match-card';
            card.style = "text-align:center; padding:15px; background:#1a1a1a; border-radius:15px; margin-bottom:15px; display:flex; flex-direction:column; align-items:center;";
            
            card.innerHTML = `
                <div style="font-size:0.7rem; color:#00c853; font-weight:900; margin-bottom:5px;">${liga.name.toUpperCase()}</div>
                <div style="font-weight:700; margin-bottom:10px;">${t1.n} vs ${t2.n}</div>
                <div style="display:flex; justify-content:center; gap:8px; width:100%;">
                    <button style="flex:1; padding:8px; background:#252525; border:1px solid #333; color:white; border-radius:8px;" onclick="addToSlip('${t1.n}', '${t2.n}', '${t1.n}', ${o1})">1<br><span style="color:#00c853">${o1}</span></button>
                    <button style="flex:1; padding:8px; background:#252525; border:1px solid #333; color:white; border-radius:8px;" onclick="addToSlip('${t1.n}', '${t2.n}', 'Remis', ${oX})">X<br><span style="color:#00c853">${oX}</span></button>
                    <button style="flex:1; padding:8px; background:#252525; border:1px solid #333; color:white; border-radius:8px;" onclick="addToSlip('${t1.n}', '${t2.n}', '${t2.n}', ${o2})">2<br><span style="color:#00c853">${o2}</span></button>
                </div>`;
            container.appendChild(card);
        }
    });
}

// ==========================================
// 4. KUPON I SYMULACJA
// ==========================================
function addToSlip(h, a, pick, odd) {
    playSnd('snd-click');
    if(currentSlip.some(m => m.h === h && m.a === a)) return;
    currentSlip.push({ h, a, pick, odd: parseFloat(odd) });
    updateSlipUI();
}

function updateSlipUI() {
    const btn = document.getElementById('floating-slip-btn');
    if(btn) btn.style.display = currentSlip.length > 0 ? "flex" : "none";
    document.getElementById('slip-count').innerText = currentSlip.length;
    let totalOdd = currentSlip.reduce((acc, m) => acc * m.odd, 1);
    document.getElementById('total-odd-display').innerText = totalOdd.toFixed(2);

    document.getElementById('slip-matches-list').innerHTML = currentSlip.map((m, i) => `
        <div style="background:#252525; padding:10px; border-radius:10px; margin-bottom:5px; display:flex; justify-content:space-between; font-size:0.8rem;">
            <div><b>${m.h}-${m.a}</b><br>Typ: ${m.pick}</div>
            <div style="color:#ff5252; cursor:pointer;" onclick="removeFromSlip(${i})">✕</div>
        </div>
    `).join('');
}

function removeFromSlip(i) { currentSlip.splice(i, 1); updateSlipUI(); }
function toggleSlip(show) { document.getElementById('slip-overlay').style.display = show ? 'flex' : 'none'; }

function placeBet() {
    const stake = parseFloat(document.getElementById('slip-stake').value);
    if (isNaN(stake) || stake <= 0 || stake > userData.balance) return alert("Błąd stawki!");

    const finalMatches = [...currentSlip];
    const finalOdd = finalMatches.reduce((acc, m) => acc * m.odd, 1);
    userData.balance -= stake;
    currentSlip = [];
    updateSlipUI();
    toggleSlip(false);

    // Symulacja wyników
    let allWin = true;
    let results = finalMatches.map(m => {
        let sH = Math.floor(Math.random() * 5);
        let sA = Math.floor(Math.random() * 5);
        let res = (sH > sA) ? m.h : (sA > sH ? m.a : "Remis");
        let win = (m.pick === res);
        if(!win) allWin = false;
        return {...m, sH, sA, isWin: win};
    });

    const winAmt = allWin ? (stake * finalOdd).toFixed(2) : 0;
    if(allWin) { userData.balance += parseFloat(winAmt); playSnd('snd-win'); } else { playSnd('snd-lose'); }
    
    userData.bets.unshift({
        details: results, totalOdd: finalOdd.toFixed(2),
        stake: stake, winAmount: winAmt, isWin: allWin,
        date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });

    saveData();
    updateProfileUI();
    updateKuponyUI(); // WAŻNE: Odśwież historię zaraz po zakładzie
    showResultNotification(allWin, winAmt, results);
}

function showResultNotification(win, amt, details) {
    const ov = document.createElement('div');
    ov.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:20000; display:flex; align-items:center; justify-content:center; padding:20px;";
    let failed = details.filter(m => !m.isWin);
    
    ov.innerHTML = `
        <div style="background:#1a1a1a; padding:25px; border-radius:20px; width:100%; max-width:320px; text-align:center; border-top:5px solid ${win?'#00c853':'#ff5252'}; color:white;">
            <h2>${win ? 'WYGRANA!' : 'PRZEGRANA'}</h2>
            <p style="font-size:1.5rem; font-weight:900;">${win ? amt + ' zł' : 'Kupon przegrany'}</p>
            ${failed.length > 0 ? `<div style="text-align:left; font-size:0.8rem; background:#000; padding:10px; border-radius:10px; color:#ff5252;"><b>CO NIE WPADŁO:</b><br>${failed.map(m=>`❌ ${m.h}-${m.a} (${m.sH}:${m.sA})`).join('<br>')}</div>` : ''}
            <button onclick="this.parentElement.parentElement.remove()" style="width:100%; margin-top:20px; padding:12px; background:#00c853; border:none; border-radius:10px; font-weight:bold; cursor:pointer;">OK</button>
        </div>`;
    document.body.appendChild(ov);
}

// ==========================================
// 5. PROFIL I HISTORIA (FIX WIDOCZNOŚCI)
// ==========================================
function updateProfileUI() {
    const trigger = document.getElementById('profile-trigger');
    if (trigger && userData.avatar) {
        trigger.style.backgroundImage = `url('${userData.avatar}')`;
        trigger.style.backgroundSize = "cover";
    }
    document.getElementById('balance-display').innerText = userData.balance.toFixed(2) + " zł";
    
    const info = document.getElementById('user-info-full');
    if (info) {
        info.innerHTML = `
            <img src="${userData.avatar}" style="width:80px; height:80px; border-radius:50%; border:3px solid #00c853; margin-bottom:10px;">
            <h2 style="margin:5px 0;">${userData.name}</h2>
            <h3 style="color:#00c853; margin:0;">${userData.balance.toFixed(2)} zł</h3>
        `;
    }
}

function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
    
    if(id === 'tab-bets') {
        updateKuponyUI();
    }
}

function updateKuponyUI() {
    const cont = document.getElementById('active-bets-list');
    if(!cont) return;

    if(userData.bets.length === 0) {
        cont.innerHTML = "<p style='text-align:center; color:#555; margin-top:50px;'>Brak kuponów w historii.</p>";
        return;
    }

    cont.innerHTML = userData.bets.map(b => `
        <div style="background:#1a1a1a; margin-bottom:12px; border-radius:12px; border-left:5px solid ${b.isWin?'#00c853':'#ff5252'}; padding:12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:#888; margin-bottom:8px;">
                <span>${b.date}</span>
                <span style="color:#00c853">Kurs: ${b.totalOdd}</span>
            </div>
            ${b.details.map(m => `
                <div style="font-size:0.85rem; border-bottom:1px solid #222; padding:4px 0;">
                    ${m.isWin ? '✅' : '❌'} ${m.h} ${m.sH}:${m.sA} ${m.a} <span style="float:right; font-size:0.7rem;">(${m.pick})</span>
                </div>
            `).join('')}
            <div style="text-align:right; margin-top:8px; font-weight:900; color:${b.isWin?'#00c853':'#fff'}">
                ${b.isWin ? 'WYGRANA: '+b.winAmount+' zł' : 'STRATA: '+b.stake+' zł'}
            </div>
        </div>
    `).join('');
}

function playSnd(id) { 
    const s = document.getElementById(id); 
    if (s) { s.currentTime = 0; s.play().catch(()=>{}); } 
}

function resetData() { 
    if(confirm("Zresetować postępy?")) { localStorage.clear(); location.reload(); } 
}
