# frontend voor designers - opdracht 1

Voor de eerste opdracht heb ik gekozen voor use case 4: Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.

Ik heb mijn ontwerp gemaakt zodat hij te gebruiken is op zowel laptop als mobiel. Ik heb gebruik gemaakt van checkboxes die ik gestijlt heb als buttons. Deze verschillende buttons weergeven de kleuren waarop de gebruiker kan 'filteren'. Standaard staat de knop met 'alles' aangeklikt. Als de knop word aangeklikt word de knop groter, krijgt een kruis en word hij grijs. Dit heb ik gedaan doormiddel van css: .zwart:checked ~ section img.zwart {display: show}, als de knop 'zwart' wordt aangeklikt worden van alle images die de class zwart hebben weergeven. 

In de tweede les heb ik samen met Vera mijn eerste demo getest (deze heb ik helaas niet apart gehouden...), hierbij had ze voor mij de volgende feedback:
 + Leuk dat de knopjes echt groter en kleiner worden als je erop klikt.
 + Doordat zowel de knoppen als de afbeeldingen een borderradius hebben vormt het een geheel.
 - De interactie van de knoppen zou iets sneller mogen.
 - Maak ook een hoverkleur voor als je de button weer weg wilt klikken.
 - De interactie moet nog kloppend gemaakt worden(eerst met js gemaakt en dat ging niet goed).
 - Hoe werkt het op een ander device(responsive maken)?
 
 Deze feedback heb ik verwerkt in mijn eerste volledige versie.
 
[Demo 1 voor opdracht 1](https://rianneeh.github.io/frontendvoordesigners/opdracht1/v1/index.html)
