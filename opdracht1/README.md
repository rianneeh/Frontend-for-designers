# frontend voor designers - opdracht 1

Voor de eerste opdracht heb ik gekozen voor use case 4: Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen. Ik heb vanuit deze opdracht een kleurfilterapplicatie gemaakt.

Ik heb mijn ontwerp gemaakt zodat hij te gebruiken is op zowel laptop als mobiel (responsive). De bedoeling was dat je meerdere kleur buttons kunt 'aan' en 'uit' klikken zodat je zelf de controle hebt van welke kleuren of combinaties van kleuren je wilt zien.

Voor mijn eerste versie heb ik gebruik gemaakt van buttons met verschillende classes en elke image heb ik een class gegeven van de kleur waar hij toe behoorde. Doormiddel van javascript regelde ik dat als er op een button geklikt werd, de class hide van images werd verwijderd(display: none) en de class(display: show) show werd toegevoegd. Maar op deze manier kon je niet meerdere kleuren tegelijk weergeven, omdat als je op een andere button klikte alle andere kleuren weer op display:none gingen.
 - Dit was een probleem waar ik tegen aan liep, hier moest ik een andere oplossing voor bedenken.

In de tweede les heb ik samen met Vera mijn eerste versie getest, hierbij had ze voor mij de volgende feedback:
 + Leuk dat de knopjes echt groter en kleiner worden als je erop klikt.
 + Doordat zowel de knoppen als de afbeeldingen een borderradius hebben vormt het een geheel.
 - De interactie van de knoppen zou iets sneller mogen.
 - Maak ook een hoverkleur voor als je de button weer weg wilt klikken.
 - De interactie moet nog kloppend gemaakt worden (eerst met js gemaakt en dat ging niet goed), je kunt nu niet meerdere kleuren selecteren en weergeven.
 - Hoe werkt het op een ander device (responsive maken)?

Deze feedback heb ik verwerkt in mijn volledige versie.
 
Uiteindelijk heb ik heb gebruik gemaakt van checkboxes die ik gestijld heb als buttons. Deze verschillende buttons weergeven de kleuren waarop de gebruiker kan 'filteren'. Standaard staat de knop met 'alles' aangeklikt. Als de knop wordt aangeklikt wordt de knop groter, krijgt hij een kruis en kleurt hij grijs. Dit heb ik gedaan doormiddel van css: .zwart:checked ~ section img.zwart {display: show}, als de knop 'zwart' wordt aangeklikt worden van alle images die de class zwart hebben weergeven. 
 
[Demo 1 voor opdracht 1](https://rianneeh.github.io/Frontend-for-designers/opdracht1/v1/index.html)
