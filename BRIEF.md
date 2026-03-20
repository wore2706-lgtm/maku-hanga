# Maku Hanga — Website Relaunch Brief

## Über das Unternehmen
- **Name:** Maku Hanga (Maori: "Wir schaffen es!")
- **Inhaberin:** Elisabeth (Lissy) Reiner-Kovarik
- **Rechtsform:** EPU (Einzelpersonenunternehmen) — NICHT e.U.!
- **Adresse:** Dürrenmoos 11a, 9111 Völkermarkt, Österreich
- **UID:** ATU82604326
- **Tel:** +4369010401004
- **E-Mail:** office@maku-hanga.com
- **WKO-Mitglied:** Ja
- **Gewerbebehörde:** BH Völkermarkt
- **Berufsbezeichnung:** Persönliche Dienstleisterin
- **Unternehmensgegenstand:** Werbung und Marketing

## Geschäftsbereiche (ZWEI Standbeine)

### 1. Maku Hanga Agentur — Promotion, Recruiting & Sponsoring
- Kreative Kampagnen für KMUs
- Recruiting für offene Positionen
- Strategische Partnerschaften/Sponsoring
- NEU: KI-basierte Content-Produktion (Lizzy AI Solutions ist ein Projekt UNTER Maku Hanga)

### 2. Flats Maku Hanga — Studentenwohnungen Klagenfurt
- 16+ Studentenzimmer in Klagenfurt
- WG-Zimmer im "Skandi"-Stil (IKEA-inspiriert)
- All-inclusive Warmmiete (Strom, Heizung, Wasser, Müll)
- Zielgruppe: Studierende der Alpen-Adria-Universität, FH, HTL
- Standort: u.a. Rothauer Hochhaus (energetisch saniert, Südostblick Karawanken)
- Expansion geplant: mehr Wohnungen 2026

## Bestehende URLs
- www.maku-hanga.com (aktuell: einfache One-Pager, SSL-Zertifikat DEFEKT!)
- flats.maku-hanga.com (WordPress, dunkles Theme, schlecht auffindbar)

## Probleme der aktuellen Seiten
1. **SSL kaputt** auf www.maku-hanga.com — Browser warnt, Google straft ab
2. **Kein einheitliches CI** — Hauptseite schwarz/orange, Flats-Seite anderes Theme
3. **Kein SEO** — keine Meta-Tags, keine strukturierten Daten
4. **Kein CTA** — kein Kontaktformular, kein Bewerbungsbutton
5. **Texte zu dünn** (Hauptseite) bzw. zu lang/blog-artig (Flats)
6. **Kein Verweis aufeinander** — die Seiten wissen nichts voneinander
7. **Impressum-Adresse inkonsistent:** "Haimburg" vs. "Völkermarkt" — klären!
8. **Copyright 2025** — muss 2026 sein
9. **"Persönliche Dienstleisterin"** klingt merkwürdig — besser: Unternehmensberatung & Marketing
10. **Flats-Seite:** Zu viel Blog-Text, kein klarer Überblick über verfügbare Zimmer

## Auftrag: Neue Homepage www.maku-hanga.com

### Anforderungen
1. **Statisches HTML** (wie bei Lizzy AI Solutions Landing Page) — kein WordPress, kein React
2. **Responsive** — Mobile first
3. **Einheitliche CI** — Farben, Fonts, Logo-Stil für BEIDE Seiten
4. **Zwei Bereiche auf einer Seite:**
   - Agentur (Promotion, Recruiting, Sponsoring, AI-Content)
   - Flats (Studentenwohnungen — mit Link zu flats.maku-hanga.com)
5. **Professionelles Hero** mit dem bestehenden Maku Hanga Logo (oranges Brush-Circle + weiße Handschrift)
6. **Klare CTAs:** Kontaktformular, E-Mail, Telefon
7. **SEO-optimiert:** Meta-Tags, Open Graph, strukturierte Daten (LocalBusiness)
8. **DSGVO-konform:** Impressum, Datenschutz, Cookie-Hinweis (keine Cookies = kein Banner nötig)
9. **Referenz auf Lizzy AI Solutions** als Showcase/Projekt
10. **Footer** mit allen rechtlichen Infos

### Design-Richtung
- **NICHT** das alte schwarz/orange behalten
- Modern, hell, vertrauenswürdig
- Das Orange aus dem Logo kann als Akzentfarbe bleiben
- Warme, einladende Farben (Agentur = professionell, Flats = gemütlich)
- Das Brush-Logo ist cool — das behalten wir als Basis

### CI-Vorschlag (kann angepasst werden)
- **Primary:** Warmes Dunkelgrau oder Anthrazit (Professionalität)
- **Accent:** Orange vom Logo (Energie, Kreativität)
- **Secondary:** Warm-Weiß oder Creme (Einladend)
- **Text:** Dunkelgrau/Fast-Schwarz (Lesbarkeit)
- **Font:** Modern, Sans-Serif (Inter, Outfit, oder ähnlich)

### Seiten-Struktur (One-Pager mit Sektionen)
1. **Hero** — Logo + Tagline + CTA
2. **Über uns** — Geschichte, Werte, Team
3. **Agentur** — Leistungen (Promotion, Recruiting, Sponsoring, AI-Content)
4. **Flats** — Überblick Studentenwohnungen + Link zu flats.maku-hanga.com
5. **Projekte/Showcase** — Lizzy AI Solutions als Referenz
6. **Kontakt** — Formular + Karte + Infos
7. **Footer** — Impressum, Datenschutz, Social Links

### Technische Anforderungen
- Single HTML file (wie bei der Lizzy Landing Page)
- Inline CSS (kein externes Stylesheet nötig)
- Keine externen JS-Dependencies
- Google Fonts via CDN OK
- Favicon
- Ziel: Deployen auf GitHub Pages oder als statische Datei auf Hosting

### Dateien im Projekt
- `BRIEF.md` — dieses Dokument
- `index.html` — die neue Homepage (OUTPUT)

## Referenz: Bestehendes Logo
Das aktuelle Logo ist ein orangefarbener Brush-Circle mit weißer Handschrift "maku hanga" und dem Untertitel "let's do it". Das Logo ist auf der aktuellen Seite unter http://www.maku-hanga.com sichtbar. Die Seite hat ein schwarzes Design mit orangefarbenen Akzenten.
