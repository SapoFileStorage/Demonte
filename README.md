# Sopralluogo — Variante di Demonte (TO 13/26)

App mobile per il sopralluogo: mappa con i punti di progetto, planimetrie
sovrapposte, GPS, e salvataggio di rilievi con foto e descrizione.

## Pubblicazione su GitHub Pages (una volta sola)
1. Crea un repository nuovo (es. `sopralluogo-demonte`), anche privato-poi-pubblico.
2. Carica **tutti** questi file nella radice del repo:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`.
3. Repo → **Settings › Pages** → *Source*: `Deploy from a branch` →
   Branch: `main` / cartella `/root` → **Save**.
4. Dopo ~1 minuto avrai l'indirizzo:
   `https://<tuo-utente>.github.io/sopralluogo-demonte/`

## Sul telefono (la sera prima)
1. Apri il link nel browser del telefono (Chrome o Safari).
2. Concedi il permesso di **posizione** quando richiesto (tocca ◎ GPS).
3. **Aggiungi a Home** (menu del browser) per usarla come app a schermo intero.
4. Apri **⋯ Altro › Scarica mappa offline (zona tracciato)**: con rete attiva,
   salva le tessere della zona per lavorare domani anche senza campo.
   (Le planimetrie di progetto sono già incluse e funzionano offline.)

## In cantiere
- **◎ GPS**: posizione e inseguimento. **☰ Layer**: punti e planimetrie (con opacità).
- Tocca un punto → **🎯 Obiettivo**: distanza e direzione aggiornate mentre cammini.
- **＋ Salva punto**: rilievo GPS con categoria, descrizione e foto.
- **⋯ Altro › Esporta**: GeoJSON (per QGIS) o report con foto.

I rilievi restano nel telefono; esportali a fine giornata.
