# Stråle – nettsidemal

Dette er grunnmuren: fem sider, ferdig kode, og ett sted (`css/styles.css`,
helt øverst) hvor du bytter farger og fonter for en ny kunde.

## Kom i gang – steg for steg

### 1. Opprett GitHub-konto
Gå til [github.com](https://github.com) → "Sign up". Gratis, tar to minutter.

### 2. Legg denne mappen i et nytt repo
- På GitHub: trykk "+" øverst til høyre → "New repository"
- Gi det et navn, f.eks. `straale-no`
- Ikke kryss av for README/licens (vi har allerede filer)
- Følg instruksjonene GitHub gir deg for å laste opp en eksisterende mappe
  (eller be Claude om hjelp med kommandoene når kontoen er opprettet)

### 3. Koble til Netlify (gratis hosting + automatisk publisering)
- Gå til [netlify.com](https://netlify.com) → registrer deg med GitHub-kontoen din
- "Add new site" → "Import an existing project" → velg repoet ditt
- Netlify finner filene automatisk (ingen build-innstillinger nødvendig,
  dette er ren HTML/CSS/JS)
- Trykk "Deploy" – siden er live på en netlify.app-adresse i løpet av ett minutt

### 4. Koble på straale.no
- I Netlify: Site settings → Domain management → Add custom domain
- Skriv inn straale.no
- Netlify viser deg hvilke DNS-innstillinger som må legges inn hos
  domeneleverandøren (f.eks. Domeneshop) – følg veiledningen der

### 5. Test den automatiske oppdateringen
Gjør en liten endring i en fil (f.eks. bytt en farge i `styles.css`),
last den opp til GitHub igjen. Netlify oppdager endringen automatisk
og publiserer den nye versjonen – ingen manuell "publiser"-knapp nødvendig.

## Kontaktskjema (kontakt.html)
Skjemaet er koblet til [Formspree](https://formspree.io) (gratis for
inntil 50 innsendinger/mnd). Opprett konto der, lag et skjema, og bytt
ut `DITT-SKJEMA-ID` i `kontakt.html` med din egen ID. Uten dette steget
vil ikke skjemaet sende noe til deg.

## Slik gjenbruker du malen for en ny kunde

1. Kopiér hele mappen til en ny mappe/nytt repo
2. Åpne `css/styles.css` – bytt ut de fire fargene og de to fontene i
   feltet merket "TILPASNING FOR NY KUNDE" øverst i filen
   (husk å også bytte fontnavn i `@import`-linjen rett over)
3. Bruk søk-og-erstatt i alle HTML-filer for å bytte ut:
   - "Stråle" → kundens navn
   - "Østfold" / "Moss" → kundens område
   - Priser, tjenester og profiltekst i `om-oss.html`
4. Bytt Formspree-ID i `kontakt.html` til kundens egen

Alt annet – layout, struktur, responsivitet – er allerede på plass og
trenger normalt ikke endres.

## Filoversikt
```
straale-mal/
├── index.html              Forside
├── tjenester.html           Tjenester og priser
├── slik-fungerer-det.html   Prosess og FAQ
├── om-oss.html              Om Stråle / profil
├── kontakt.html              Skjema for gratis gjennomgang
├── css/styles.css            All styling – FARGER OG FONTER ENDRES HER
└── js/nav.js                 Mobilmeny og aktiv lenke
```
