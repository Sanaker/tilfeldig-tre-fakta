var quotes = [
    'Trær er vanligvis høyreiste karplanter, ofte med en stamme med greiner, men de kan ha flere stammer',
    'Rota er treets underjordiske del.',
    'Alle treets røtter er kledd inn i soppceller',
    'Størstedelen av det biologiske mangfoldet på jorda er avhengig av skogen og trærne.',
    'Trær som vokser i områder med vekslende årstider med vinter eller tørkeperioder får årringer i veden.',
    'Hudvevet på et tre, den mer eller mindre døde ytterbarken, kalles korkhud (periderm) og blir dannet fra et korkkambium, et vekstlag i ytterbarken.',
    'Kvaerike bartrær som gran og furu har kvaeganger (harpikskanaler) både i vedens lengde- og radiærretning og i barnålene.',
    'Veden består av ca. 40 % cellulose, ca. 25 % hemicellulose og 20–30 % lignin, mens resten er forbindelser som harpiks, garvesyre, fett m.m. I samsvar med denne fordelingen består vedens tørrstoff av 50 % karbon, 43 % oksygen, 6 % hydrogen og 1 % nitrogen og aske.',
    'Ledningsvev som består av vedvev (xylem) som frakter vann og mineralnæring fra jorden opp i treet, og silvev (floem) som frakter fotosynteseprodukter opp og ned i treet.',
    'Grunnvevet består av parenkym som kan utføre fotosyntese eller fungere som lagringsceller.',
    'Trær er de desidert lengstlevende organismene på jorda.',
    'Trær bidrar til å senke lufttemperaturen.',
    'Noen trær kan leve i over 5000 år.',
    'Selv etter at trærne er døde har de stor betydning for det biologiske mangfoldet.',
    'Ett tre kan drikke flere hundre liter vann daglig'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}