# Projektová kancelář - Moderní Web

Moderní, responzivní webová stránka pro projektovou kancelář Cekr CZ s.r.o v Šumperku.

## Funkce

### 🎨 3 Profesionální Témata
- **Profesionální** - Klasické modré téma s gradientem
- **Inženýrské** - Tmavě modré téma pro technické společnosti
- **Moderní** - Černošedé téma s oranžovými akcenty

### 🔐 Admin Systém
- Skrytá admin konzole na `/admin`
- Přihlášení na `/login` s heslem: `admin2024`
- Úprava všech textů a kontaktních údajů v reálném čase
- Automatické ukládání do localStorage

### 📱 Responzivní Design
- Plně responzivní na všech zařízeních
- Moderní CSS Grid a Flexbox
- Smooth scrolling a animace

## Struktura

```
src/
├── components/
│   ├── Header.jsx          # Hlavička s navigací
│   ├── Homepage.jsx        # Hlavní stránka
│   ├── Footer.jsx          # Patička
│   ├── ThemeSwitcher.jsx   # Přepínač témat
│   ├── Login.jsx           # Přihlašovací stránka
│   └── AdminConsole.jsx    # Admin rozhraní
├── contexts/
│   └── AppContext.jsx      # React Context pro stav
├── App.jsx                 # Hlavní komponenta
├── App.css                 # Hlavní styly
└── index.css               # Globální styly
```

## Použití

### Spuštění
```bash
npm run dev     # Vývojový server
npm run build   # Produkční build
npm run preview # Preview buildu
```

### Admin přístup
1. Jdi na `/login`
2. Zadej heslo: `admin2024`
3. Dostaneš se do admin konzole na `/admin`
4. Uprav obsah webu
5. Změny se automaticky ukládají

### Přepínání témat
- Použij dropdown v hlavičce pro přepnutí mezi tématy
- Téma se automaticky ukládá do localStorage

## Obsah webu

### Služby společnosti
- Projektování dopravní infrastruktury (cesty, obchvaty, křižovatky)
- Projektování osvětlení
- Inženýrská činnost v investiční výstavbě
- Realizace staveb
- Ekonomické a organizační poradenství

### Kontaktní údaje
- **Firma:** Cekr CZ s.r.o
- **Adresa:** Mazalova 57/2, 787 01 Šumperk
- **IČ:** 278 21 251
- **Telefon:** 588 517 980
- **Mobil:** 777 550 647
- **Email:** info@cekrcz.eu
- **Web:** www.cekrcz.eu

## Technologie

- **React 19** - UI framework
- **React Router** - Routing
- **CSS Variables** - Dynamická témata
- **localStorage** - Persistence dat
- **Vite** - Build tool

## Bezpečnost

- Admin sekce je chráněná heslem
- Normální uživatelé nemají přístup k admin funkcím
- Všechny změny se ukládají pouze lokálně (localStorage)

## Customizace

Veškerý obsah lze upravit přímo v admin konzoli, nebo programově v `src/contexts/AppContext.jsx`.

Nová témata lze přidat rozšířením objektu `themes` v AppContext.