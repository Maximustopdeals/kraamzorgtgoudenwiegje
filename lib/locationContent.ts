export type LocationContent = {
  name: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sectionTitle: string;
  sectionText: string[];
  quote?: string;
  focusTitle: string;
  focusText: string;
  focusItems: { title: string; text: string }[];
  neighborhoods: string[];
  neighborhoodText: string;
  faqs: { question: string; answer: string }[];
};

export const locationContent: Record<string, LocationContent> = {
  schiedam: {
    name: "Schiedam",
    path: "/kraamzorg-schiedam",
    seoTitle: "Kraamzorg Schiedam | Eén vaste kraamverzorgende",
    seoDescription: "Persoonlijke kraamzorg in Schiedam door Vania. Eén vertrouwd gezicht, zorg voor moeder en baby en begeleiding die past bij jullie gezin.",
    intro: "Woon je in Schiedam en verwacht je een baby? Vanuit mijn thuisbasis in Schiedam begeleid ik jou en je gezin tijdens de eerste dagen na de geboorte. Met warme zorg, duidelijke uitleg en tijd voor jullie vragen.",
    sectionTitle: "Persoonlijke kraamzorg, dichtbij en vertrouwd",
    sectionText: [
      "De kraamweek brengt veel nieuwe indrukken met zich mee. Je leert je baby kennen, je lichaam herstelt en je gezin zoekt een nieuw ritme. Ik help jullie om die dagen niet in één keer te hoeven overzien, maar stap voor stap te beleven.",
      "Omdat ik zelf in Schiedam woon en werk, ken ik de stad en de verschillende woonomgevingen. Of je nu je eerste kindje krijgt of al ervaring hebt als ouder, ik sluit aan bij wat jullie nodig hebben.",
    ],
    quote: "Bij Kraamzorg ’t Gouden Wiegje sta jij centraal. Geen standaardzorg, maar begeleiding die echt bij jullie past.",
    focusTitle: "Begeleiding die aansluit bij jouw kraamweek",
    focusText: "Van de eerste controle tot het oefenen met voeding en verzorging. Je krijgt hulp waar dat nodig is en ruimte om het samen als gezin te ontdekken.",
    focusItems: [
      { title: "Herstel en toezicht", text: "Ik let op het herstel van de moeder en volg de gezondheid van de baby met zorgvuldige dagelijkse controles." },
      { title: "Voeding en verzorging", text: "Bij borstvoeding of flesvoeding krijg je praktische begeleiding. Ook oefenen we met verschonen, badderen en verzorgen." },
      { title: "Het hele gezin", text: "Er is aandacht voor je partner en eventuele andere kinderen, zodat iedereen rustig kan wennen aan de nieuwe situatie." },
    ],
    neighborhoods: ["Centrum", "Kerkwijk", "Spaland", "De Naald", "Woudhoek", "Nieuwland"],
    neighborhoodText: "De bestaande werkgebiedinformatie vermeldt dat ik in alle wijken van Schiedam actief ben, waaronder deze gebieden. Twijfel je over jouw adres? Stuur je postcode en woonplaats mee met je vraag.",
    faqs: [
      { question: "Kom je in alle wijken van Schiedam?", answer: "De huidige werkgebiedinformatie vermeldt alle wijken van Schiedam, waaronder Centrum, Kerkwijk, Spaland, De Naald, Woudhoek en Nieuwland. Neem contact op om jouw adres en de beschikbaarheid te bespreken." },
      { question: "Kunnen we vooraf kennismaken in Schiedam?", answer: "Ja. Tijdens een kennismaking bespreken we jullie wensen, de zwangerschap en hoe ik jullie na de bevalling kan begeleiden. Zo weet je wie er tijdens de kraamweek bij je komt." },
      { question: "Wanneer kan ik mijn aanvraag het beste doen?", answer: "Vroeg in de zwangerschap aanvragen geeft de meeste ruimte om alles goed te bespreken. Ook als je al verder bent, kun je contact opnemen om te vragen wat er rond jouw datum mogelijk is." },
    ],
  },
  rotterdam: {
    name: "Rotterdam",
    path: "/kraamzorg-rotterdam",
    seoTitle: "Kraamzorg Rotterdam | Rust en persoonlijke aandacht",
    seoDescription: "Kraamzorg in Rotterdam door Vania. Persoonlijke begeleiding thuis, aandacht voor herstel en voeding en één vaste kraamverzorgende voor jullie gezin.",
    intro: "Rotterdam bruist, maar na de geboorte mag het binnen jullie huis juist rustig zijn. Ik begeleid je bij herstel, voeding en babyverzorging, met één vast gezicht dat jullie gezin leert kennen.",
    sectionTitle: "Een rustige kraamweek midden in de stad",
    sectionText: [
      "De eerste week na de geboorte zit vol nieuwe prikkels. Bezoek, berichten en je eigen vragen kunnen veel energie vragen. Daarom kijken we samen naar wat jullie nodig hebben om voldoende te rusten en je baby goed te leren kennen.",
      "Mijn begeleiding is geen vast schema dat over elk gezin wordt gelegd. We stemmen af op jullie woning, gezinssamenstelling en dagelijkse leven. Zo blijft de zorg praktisch en persoonlijk, ook als er al kinderen zijn of als je partner een andere rol wil leren.",
    ],
    quote: "In Rotterdam sta jij centraal. Geen standaardzorg, maar persoonlijke begeleiding die bij jullie past.",
    focusTitle: "Rust voor jou, vertrouwen voor het hele gezin",
    focusText: "Ik combineer zorgvuldige controles met concrete begeleiding. Niet alleen de baby krijgt aandacht, ook jouw herstel en de manier waarop jullie als gezin willen samenwerken.",
    focusItems: [
      { title: "Rust na de bevalling", text: "We bespreken wat je nodig hebt om te herstellen, prikkels te beperken en voldoende momenten voor jezelf te houden." },
      { title: "Partner en broers of zussen", text: "Ik betrek het gezin bij de zorg en geef uitleg op een manier waarop iedereen rustig kan meedoen." },
      { title: "Jullie eigen voedingskeuze", text: "Je krijgt ondersteuning bij borstvoeding of flesvoeding, met informatie en hulp die passen bij jullie situatie." },
    ],
    neighborhoods: ["Centrum", "Kralingen", "Hillegersberg", "Overschie", "Noord", "Prins Alexander"],
    neighborhoodText: "Op de bestaande website worden deze Rotterdamse gebieden als werkgebied genoemd. Woon je ergens anders in Rotterdam? Vraag gerust wat er voor jouw adres mogelijk is.",
    faqs: [
      { question: "Hoe houden we rust in een drukke week?", answer: "We bespreken vooraf wat jullie belangrijk vinden en tijdens de kraamweek houden we samen in de gaten hoe het gaat. Praktische hulp, duidelijke informatie en ruimte voor herstel helpen om de week overzichtelijk te houden." },
      { question: "Worden partner en andere kinderen ook betrokken?", answer: "Ja. De komst van een baby verandert iets voor het hele gezin. Ik geef uitleg en praktische tips waarmee je partner en eventuele andere kinderen op een fijne manier kunnen meedoen." },
      { question: "Kom je ook in mijn Rotterdamse wijk?", answer: "Centrum, Kralingen, Hillegersberg, Overschie, Noord en Prins Alexander worden in het huidige werkgebied genoemd. Bij een andere wijk kun je je postcode en woonplaats doorgeven, dan bespreken we de mogelijkheden." },
    ],
  },
  vlaardingen: {
    name: "Vlaardingen",
    path: "/kraamzorg-vlaardingen",
    seoTitle: "Kraamzorg Vlaardingen | Vakkundige zorg bij je thuis",
    seoDescription: "Kraamzorg in Vlaardingen met één vaste kraamverzorgende. Vania begeleidt herstel, controles, voeding en babyverzorging met warme persoonlijke aandacht.",
    intro: "In de eerste dagen na de geboorte wil je je veilig en gesteund voelen. Ik kom bij jullie thuis in Vlaardingen met zorgvuldige controles, warme begeleiding en praktische hulp voor het hele gezin.",
    sectionTitle: "Veiligheid en vertrouwen gaan samen",
    sectionText: [
      "Tijdens de kraamweek leer je je baby kennen terwijl je zelf herstelt van de bevalling. Kleine veranderingen kunnen dan groot voelen. Ik observeer zorgvuldig, leg uit wat ik zie en bespreek wat we doen als extra afstemming nodig is.",
      "De zorg vindt plaats in overleg met je verloskundige. Zo sluiten de bevalling, de overgang naar huis en de begeleiding daarna goed op elkaar aan. Je krijgt één vertrouwd gezicht dat weet wat er vooraf is besproken.",
    ],
    quote: "In Vlaardingen kies ik voor kleinschaligheid. Geen wisselende gezichten, maar één vertrouwd iemand die jou en je baby leert kennen.",
    focusTitle: "Deskundig toezicht met een persoonlijke aanpak",
    focusText: "Medische alertheid hoeft niet kil of afstandelijk te voelen. Je krijgt duidelijke informatie in begrijpelijke taal en alle ruimte om vragen te stellen.",
    focusItems: [
      { title: "Controles met uitleg", text: "Ik volg temperatuur, gewicht, navel, voeding en herstel. Je hoort niet alleen wat ik controleer, maar ook waarom." },
      { title: "Huid, navel en verzorging", text: "We verzorgen je baby samen. Door rustig te oefenen word je steeds zekerder in de dagelijkse zorg." },
      { title: "Afstemming met je verloskundige", text: "Waar nodig stem ik met je verloskundige af, zodat de zorg voor jou en je baby goed op elkaar aansluit." },
    ],
    neighborhoods: ["Centrum", "Holy", "Ambacht", "Westwijk", "Oostwijk", "Babberspolder"],
    neighborhoodText: "Deze Vlaardingse gebieden staan in de bestaande werkgebiedinformatie. Voor een ander adres kun je persoonlijk naar de mogelijkheden vragen.",
    faqs: [
      { question: "Waarop let je tijdens de dagelijkse controles?", answer: "Ik volg onder andere het herstel van de moeder en de temperatuur, het gewicht, de navel en de voeding van de baby. Ik bespreek mijn observaties met jullie en stem waar nodig af met de verloskundige." },
      { question: "Krijg ik ook hulp als ik onzeker ben over de verzorging?", answer: "Ja. We oefenen samen met verschonen, badderen en andere verzorging. Je hoeft niets meteen zelf te kunnen. Ik blijf uitleggen en helpen totdat jij je er zekerder bij voelt." },
      { question: "Wat als ik in een andere wijk van Vlaardingen woon?", answer: "Neem contact op met je postcode en woonplaats. Dan kijken we persoonlijk of jouw adres binnen de mogelijkheden valt en bespreken we de beschikbaarheid." },
    ],
  },
  spijkenisse: {
    name: "Spijkenisse",
    path: "/kraamzorg-spijkenisse",
    seoTitle: "Kraamzorg Spijkenisse | Warmte, rust en structuur",
    seoDescription: "Persoonlijke kraamzorg in Spijkenisse door Vania. Rustige begeleiding bij herstel, voeding en verzorging, afgestemd op het ritme van jullie gezin.",
    intro: "Een nieuwe baby vraagt om een nieuw ritme. Tijdens jullie kraamweek in Spijkenisse help ik om rust en overzicht te vinden, zodat jij kunt herstellen en jullie samen kunnen genieten van de eerste momenten.",
    sectionTitle: "Een stevig fundament voor jullie gezinsritme",
    sectionText: [
      "In de eerste week wisselen voeding, slapen, verzorging en herstel elkaar snel af. Dat kan rommelig voelen. Ik help jullie om signalen van je baby te leren herkennen en ontdekken welke aanpak bij jullie past.",
      "Er bestaat geen ideaalritme dat voor ieder gezin werkt. We kijken naar jullie baby, jullie herstel en de praktische situatie thuis. Met duidelijke uitleg en herhaalbare handelingen ontstaat steeds meer vertrouwen.",
    ],
    quote: "In Spijkenisse kies ik voor structuur en geborgenheid. Zo krijgt jullie gezin een stevig fundament voor de eerste weken thuis.",
    focusTitle: "Van praktische structuur naar eigen vertrouwen",
    focusText: "Mijn zorg is erop gericht dat jullie na de kraamweek zelfstandig verder kunnen. Niet met een strikt schema, maar met kennis en handvatten die bij jullie passen.",
    focusItems: [
      { title: "Voeding volgen", text: "We kijken samen naar het verloop van de voedingen en naar wat je baby laat zien, of je nu borstvoeding of flesvoeding geeft." },
      { title: "Slapen en rust", text: "Je krijgt praktische informatie over veilig slapen, rustmomenten en het vinden van een haalbaar ritme." },
      { title: "Zelfstandig verder", text: "Door samen te oefenen en vragen te bespreken, gaan jullie met meer vertrouwen de periode na de kraamweek in." },
    ],
    neighborhoods: ["Centrum", "Maaswijk", "Vogelenzang", "Groenewoud", "Waterland", "Sterrenkwartier"],
    neighborhoodText: "Deze wijken in Spijkenisse en Nissewaard worden in de bestaande werkgebiedinformatie genoemd. Twijfel je over jouw adres? Vraag het gerust.",
    faqs: [
      { question: "Help je bij het vinden van een ritme?", answer: "Ja. We kijken naar voeding, slaap, verzorging en jouw herstel. Je krijgt praktische handvatten, maar geen strikt schema dat niet bij jullie baby of gezin past." },
      { question: "Kan ik zelf kiezen tussen borstvoeding en flesvoeding?", answer: "Ja. Ik ondersteun jullie bij de voedingskeuze die jullie maken. Je krijgt praktische hulp en informatie, zonder oordeel en met aandacht voor hoe het gaat." },
      { question: "Hoe vraag ik kraamzorg in Spijkenisse aan?", answer: "Gebruik het contactformulier en vul je uitgerekende datum, postcode en woonplaats in. Je kunt ook bellen of een WhatsApp-bericht sturen om eerst je vragen te bespreken." },
    ],
  },
  "hoek-van-holland": {
    name: "Hoek van Holland",
    path: "/kraamzorg-hoek-van-holland",
    seoTitle: "Kraamzorg Hoek van Holland | Persoonlijk door Vania",
    seoDescription: "Warme en deskundige kraamzorg in Hoek van Holland. Vania helpt bij controles, babyverzorging, borstvoeding, flesvoeding en praktische ondersteuning thuis.",
    intro: "Woon je in Hoek van Holland en ben je zwanger? Ik begeleid jullie graag tijdens de kraamweek met warme en deskundige zorg bij jullie thuis, afgestemd op wat je gezin nodig heeft.",
    sectionTitle: "De eerste dagen samen met vertrouwen beleven",
    sectionText: [
      "De geboorte van je baby is het begin van een periode waarin jullie elkaar als gezin leren kennen. Er komt veel op je af en dat hoeft niet alleen. Ik ben er om te controleren, uit te leggen en te helpen waar jullie dat fijn vinden.",
      "Mijn doel is dat ouders zich steeds zekerder voelen in de verzorging van hun baby. Daarom doen we de zorg stap voor stap samen. Van voeding en verzorging tot rust en praktische ondersteuning in huis.",
    ],
    focusTitle: "Praktische zorg, met tijd voor jullie vragen",
    focusText: "Je hoeft vooraf niet alles te weten. Tijdens de kraamweek krijg je begeleiding bij de zorgmomenten die zich voordoen, met ruimte voor jullie eigen manier van zorgen.",
    focusItems: [
      { title: "Babyverzorging", text: "Ik begeleid je bij de dagelijkse verzorging van je baby, met geduld en duidelijke uitleg." },
      { title: "Controles en advies", text: "Dagelijkse controles van moeder en baby geven inzicht. Ook bespreken we voeding, slaap en ritme." },
      { title: "Praktische ontlasting", text: "Waar het past binnen de kraamzorg help ik in huis, zodat jij meer ruimte hebt voor rust en je baby." },
    ],
    neighborhoods: ["Hoek van Holland"],
    neighborhoodText: "Hoek van Holland valt binnen het vermelde werkgebied. Geef bij je aanvraag je postcode en woonadres door, zodat we jouw situatie en de beschikbaarheid persoonlijk kunnen bespreken.",
    faqs: [
      { question: "Kan ik vooraf mijn wensen bespreken?", answer: "Ja. Neem contact op voor een kennismaking. We bespreken wat je van de kraamweek verwacht, welke ondersteuning je zoekt en welke informatie je nog nodig hebt." },
      { question: "Krijg ik hulp bij de verzorging van mijn baby?", answer: "Ja. Ik help bij voeding, verschonen, badderen en andere dagelijkse verzorging. We doen het samen, zodat je het geleidelijk zelfverzekerd zelf kunt." },
      { question: "Hoe vraag ik kraamzorg in Hoek van Holland aan?", answer: "Vul het contactformulier in met je uitgerekende datum, postcode en woonplaats. Ik neem daarna persoonlijk contact met je op om je aanvraag en de mogelijkheden te bespreken." },
    ],
  },
};
