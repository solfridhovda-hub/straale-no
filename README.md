# Straale nettsidemal

Dette er grunnmuren: fem sider, ferdig kode, og ett sted (`css/styles.css`,
helt øverst) hvor du bytter farger og fonter for en ny kunde.

## Kom i gang, steg for steg

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
- Trykk "Deploy", og siden er live på en netlify.app-adresse i løpet av ett minutt

### 4. Koble på straale.no
- I Netlify: Site settings → Domain management → Add custom domain
- Skriv inn straale.no
- Netlify viser deg hvilke DNS-innstillinger som må legges inn hos
  domeneleverandøren (f.eks. Domeneshop). Følg veiledningen der

### 5. Test den automatiske oppdateringen
Gjør en liten endring i en fil (f.eks. bytt en farge i `styles.css`),
last den opp til GitHub igjen. Netlify oppdager endringen automatisk
og publiserer den nye versjonen, uten manuell "publiser"-knapp nødvendig.

## Kontaktskjema (kontakt.html)
Skjemaet bruker Netlify Forms (`data-netlify="true"`). Innsendingene ligger i
Netlify under Forms, og Netlify sender e-postvarsel ved hver innsending.
Endrer du hvor innsendingene går (for eksempel videre til et regneark),
må personvern.html oppdateres i samme commit.

## Slik gjenbruker du malen for en ny kunde

1. Kopiér hele mappen til en ny mappe/nytt repo
2. Åpne `css/styles.css` og bytt ut de fire fargene og de to fontene i
   feltet merket "TILPASNING FOR NY KUNDE" øverst i filen
   (fontene ligger lokalt i `css/fonter/`, bytt filene og `@font-face`-blokken øverst)
3. Bruk søk-og-erstatt i alle HTML-filer for å bytte ut:
   - "Straale" → kundens navn
   - "Østfold" / "Moss" → kundens område
   - Priser, tjenester og profiltekst i `index.html` og `straalende-folk.html`
4. Bytt logo i `bilder/logo/`, favicon-filene i roten, og navn, telefon og
   e-post i footer, JSON-LD, `llms.txt` og `llms-full.txt`

Alt annet, som layout, struktur og responsivitet, er allerede på plass og
trenger normalt ikke endres.

## Filoversikt
```
straale-no/
├── index.html               Forside og priser
├── slik-fungerer-det.html   Prosess og spørsmål og svar
├── straalende-folk.html     Om Solfrid og Straale
├── kontakt.html             Kontaktskjema (Netlify Forms)
├── personvern.html          Personvernerklæring
├── robots.txt               Regler for søkemotorer og AI-crawlere
├── sitemap.xml              Liste over sidene for søkemotorer
├── llms.txt                 Kort oversikt for språkmodeller
├── llms-full.txt            All tekst fra sidene i én fil
├── site.webmanifest         Navn og ikoner for mobil
├── favicon.ico / .svg       Faneikon
├── apple-touch-icon.png     Ikon på iPhone-hjemskjerm
├── _redirects               Videresending fra gamle adresser
├── _headers                 Cache for fonter og bilder
├── css/styles.css           All styling, FARGER OG FONTER ENDRES ØVERST
├── css/fonter/              Fraunces og Schibsted Grotesk (woff2, OFL-lisens)
├── bilder/                  WebP-bilder og delingsbilde (og-straale.jpg)
├── bilder/logo/             Ordmerke (SVG) og app-ikoner
└── js/nav.js                Mobilmeny
```

Husk: endrer du tekst på sidene, oppdater `llms-full.txt` og `lastmod` i `sitemap.xml`.
