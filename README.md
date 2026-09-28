# Marc Fink Consulting – Webauftritt

Statische Website. Kein Baukasten, kein Backend.

## Vor dem Onlinegang ersetzen

In `index.html`, `impressum.html` und `js/main.js`:

- `MAIL-EINSETZEN@example.com`
- Straße, PLZ, Telefon, USt-IdNr. im Impressum
- optional Xing bleibt verlinkt

## Veröffentlichen

Den ganzen Ordner zu einem Hoster hochladen, z. B.:

- IONOS / Strato / All-Inkl: per FTP den Inhalt von `marc-fink-consulting/` ins Webroot
- Netlify / Cloudflare Pages: Ordner verbinden, Publish-Directory = dieser Ordner
- Eigene Domain auf den Ordner zeigen lassen

## Anpassen

Texte und Preise stehen direkt in `index.html`.
Farben und Schrift in `css/styles.css`.
