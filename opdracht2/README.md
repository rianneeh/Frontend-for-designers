# frontend voor designers - opdracht 2

Voor de tweede opdracht moesten we een functionaliteit uitwerken die je kan bedienen met 'click' en nog een andere user interactie.

Voor mijn ontwerp heb ik een caroussel gemaakt die te bedienen is door op de pijlen verder en terug te klikken, maar ook met de 'verder' en 'terug' pijlen op je toetsenbord.

Voor mijn eerste versie heb ik alle img samen met de knoppen in een section gedaan. Doormiddel van te tellen met variabele huidigImg ben ik mijn Javascript gaan uitwerken. Als er op volgende werd geklikt werd er 1 bij opgeteld, en bij vorige 1 afgehaald. Daarna werden voor alle andere img de class show verwijdert en voor de juiste img de class show toegevoegd.

In de tweede les heb ik van mijn docent Vasilis feedback gekregen:

Vergeet geen comments te zetten in de code, dan is het makkelijker te lezen.
Argumenten gebruiken was op bepaalde plekken in de code niet nodig (sel was altijd 1).
Is de loop echt nodig? want je wilt eigelijk maar van een foto de class show verwijderen.

Deze feedback heb ik verwerkt in mijn volledige versie.

Uiteindelijk liep ik tegen het probleem aan dat ik de loop er niet uit kon halen, dan kreeg ik geen enkel img meer in beeld. zelfs als ik document.queryselector('.show').classList.remove('show'); gebruikte. De loop heb ik er om deze reden in laten staan.

Demo voor opdracht 2: https://rianneeh.github.io/Frontend-for-designers/opdracht2/v1/index.html
