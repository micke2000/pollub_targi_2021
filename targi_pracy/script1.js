const sponsorzy = [{
        img: 'url("img/asseco.jpg")',
        desc: "Asseco Business Solutions S.A. jest wiodącym polskim producentem rozwiązań informatycznych dla przedsiębiorstw. Rozwój Asseco BS opiera się na nowoczesnych technologiach oraz wiedzy wybitnych specjalistów. Naszymi klientami są czołowe firmy z różnych branż w ponad 40 krajach.",
        a: 'https://kariera.assecobs.pl/oferty-pracy/'
    }, {
        img: 'url("img/bakaland.jpg")',
        desc: "Setki tysięcy zadowolonych klientów, miliony sprzedanych produktów, najwyższej jakości rozwiązania wdrażane przez firmę każdego roku, najlepsi eksperci i wyspecjalizowani pracownicy – to właśnie Bakalland S.A.!.",
        a: 'https://bakalland.pl/poznaj-bakalland-2/kariera/?cn-reloaded=1'
    },
    {
        img: 'url("img/comarch.jpg")',
        desc: "Specjalizujemy się w systemach zarządzania przedsiębiorstwem ERP, bezpieczeństwem informatycznym, systemach CRM i wsparcia sprzedaży, komunikacji elektronicznej oraz Internecie Rzeczy. Od ponad 25 lat tworzymy rozwiązania łatwe w konfiguracji, rozwijające się wraz z biznesem klientów i odpowiadające na ich potrzeby.",
        a: 'https://kariera.comarch.pl/kontakt/lublin/'
    },
    {
        img: 'url("img/cementozarow.jpg")',
        desc: "Cement Ożarów S.A. od ponad 40 lat wyznacza kierunki rozwoju polskiego rynku materiałów budowlanych. Od 1995 roku należymy do międzynarodowego koncernu CRH z siedzibą w Irlandii, znajdującego się w gronie największych producentów materiałów budowlanych na świecie.",
        a: 'https://ozarow.com.pl/a-kariera'
    },
    {
        img: 'url("img/dataart.png")',
        desc: "DataArt zajmuje się inżynierią oprogramowania na skalę globalną. Od ponad 20 lat zespoły składające się z wysoko wykwalifikowanych specjalistów tworzą rozwiązania technologiczne, które pomagają klientom osiągać cele biznesowe i zdobywać nowe rynki.",
        a: 'https://www.dataart.com.pl/career/'
    },
    {
        img: 'url("img/e80.jpg")',
        desc: "Elettric80 światowy lider w dziedzinie inteligentnych w pełni automatycznych systemów logistycznych, specjalizuje się w realizacji projektów opartych na bezobsługowych wózkach widłowych sterowanych laserowo LGV, zrobotyzowanych wyspach paletyzujących oraz inteligentnych systemach zarządzania magazynem WMS.",
        a: 'https://elettric80.intervieweb.it/us/career'
    },
    {
        img: 'url("img/man.jpg")',
        desc: "W Starachowicach znajduje się centrum kompetencyjne produkcji autobusów miejskich. Powstają tutaj niskopodłogowe autobusy miejskie marki MAN z napędem konwencjonalnym, hybrydowym, na gaz ziemny a także autobusy elektryczne. Rocznie zakład w Starachowicach opuszcza średnio 1900 gotowych pojazdów. W zakładzie zatrudnionych jest ponad 3000 wykwalifikowanych pracowników",
        a: 'https://www.mantruckandbus.com/en/company/careers.html'
    },
    {
        img: 'url("img/elpro.jpg")',
        desc: "Ośrodek Kształcenia Zawodowego ELPRO Sp. z o o. jest firmą szkoleniową działającą na polskim rynku od 2003 roku, głównie w branży energetycznej i budowlanej. Podstawowym profilem działalności ELPRO Sp. z o.o. są specjalistyczne szkolenia z zakresu komputerowego wspomagania projektowania - pakiet szkoleń Autodesk, w tym projektowanie uniwersalne oraz BIM – Modelowanie informacji o budynku.",
        a: 'https://elpro.lublin.pl/?page=autocad---i-i-ii-stopien'
    },
    {
        img: 'url("img/nestle.png")',
        desc: "NESTLE POLSKA S.A., ODDZIAŁ NESTLE WATERS w Nałęczowie -producent wody butelkowanej posiadający w swoim portfolio marki Nałęczowianka, Nestle Pure Life, San Pellegrino, Acqua Panna i Perrier. Nestle Waters jest częścią międzynarodowej Grupy Nestle, największego na świecie producenta żywności. ",
        a: 'https://www.nestle.pl/jobs/company/nestle-waters'
    },
    {
        img: 'url("img/pronar.jpg")',
        desc: "Zajmujemy się produkcją i sprzedażą maszyn oraz urządzeń dla rolnictwa, usług komunalnych, transportowych i recyklingu. Jesteśmy liczącym się na świecie producentem elementów pneumatyki i hydrauliki siłowej, osi do przyczep, kół tarczowych, a także profili stalowych i elementów z tworzyw sztucznych. ",
        a: 'https://pronar.pl/https://sollers.eu/career//aktualne-oferty-pracy/'
    },
    {
        img: 'url("img/sollers.jpg")',
        desc: "Sollers Consulting is an European company specializing in consulting and implementation services for the financial industry. What sets up apart is the ability to effectively combine business knowledge with expertise in leading technologies. We employ highly qualified consultants and developers in Warsaw, Lublin, Poznan, Gdansk, Wroclaw, Cologne, Tokyo, Paris, and Barcelona. ",
        a: 'https://sollers.eu/career/'
    },
    {
        img: 'url("img/ttms.png")',
        desc: "Transition Technologies MS S.A.('TTMS') to szybko rosnący dostawca nowoczesnego outsourcingu IT w Polsce i na rynkach zagranicznych. TTMS należy do Grupy Transition Technologies, jednego z największych podmiotów branży IT w Polsce. Firma zatrudnia ponad 600 specjalistów i obsługuje najbardziej wymagające globalne organizacje. Rozwiązania IT i kultura pracy, które tworzy są przyjazne naszej planecie.",
        a: 'https://ttms.pl/'
    },
    {
        img: '',
        desc: "",
        a: ''
    },
    {
        img: 'url("img/pzl.jpg")',
        desc: "",
        a: 'https://www.pzlswidnik.pl/pl/kariera'
    }
]
const divSpnrz = document.querySelector("section.main section.footer div.sponsorzy");
sponsorzy.forEach(function(spnsr){
    let addedEl;
    addedEl = divSpnrz.children[1].cloneNode(true);
    addedEl.style.backgroundImage = spnsr.img;
    addedEl.href = spnsr.a;
    addedEl.children[0].children[0].textContent = spnsr.desc;
    divSpnrz.appendChild(addedEl);
})
const bloki = document.querySelectorAll("section.main section.footer div.sponsorzy a");
const text = document.querySelector("section.main section.footer p.desc");
bloki.forEach(function(blok){
    blok.addEventListener("mouseenter",function(){
        text.textContent = blok.children[0].children[0].textContent;
        text.classList.add("on");
    });
    blok.addEventListener("mouseleave",function(){
        text.classList.remove("on");
    });
})