# frontend voor designers - opdracht 3

Voor de derde opdracht moesten we een complexe functionaliteit met externe data uitwerken en testen.

Voor mijn ontwerp heb ik gebruik gemaakt van een JSON file die alle staten van de VS bevat met extra informatie per staat. Bij mijn applicatie kan je op de knop 'data laden' drukken om de data op te halen. Daarna verschijnen alle staten onder de landkaart. Door op een van de vier knoppen te drukken word de desbetreffende informatie over elke staat onder elke staat weergeven. Je kunt de functionaliteit op nog een manier bedienen: door de eerste letter van het soort informatie op het toetsenbord in te drukken. Bijvoorbeeld: I voor inwoners en H voor Hoofdstad.

Voor mijn eerste versie heb ik alle data uit de JSON opgehaald, knoppen en articles aangemaakt en elke article staat voor een staat waarvan ik de naam en de vlag heb weergeven.

Ik wilde eigelijk een algemene functie schrijven die ik kon koppelen aan alle vier de knoppen. Mar het lukte niet om een string aan letters bijvoorbeeld 'population' als parameter door te geven aan de functie en vervolgens te gebruiken om een bepaalde attribuut uit de JSON aan te spreken: console.log(staten[j].a) gaf a is undifined terug, terwijl je eigelijk alle inwonersaantallen zou moeten krijgen.

Om deze reden heb ik voor alle vier de knoppen een aparte functie moeten schrijven waarbij ik bijvoorbeeld .population en .nickname achter staten[j] zette en hiermee de textcontent van de p kon aanpassen.

Ik heb de functionaliteit getest en hieruit kwamen de volgende punten:

Deze feedback heb ik verwerkt in mijn volledige versie.

Demo voor opdracht 2: https://rianneeh.github.io/Frontend-for-designers/opdracht2/v1/index.html
