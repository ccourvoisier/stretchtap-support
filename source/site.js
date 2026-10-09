const SUPPORT_EMAIL = "support.stretchtap@gmail.com";

const languages = {
  en: {
    locale: "en",
    label: "English",
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    eyebrow: "Made for Apple Watch",
    heroTitle: "Stretch. Tap. Repeat.",
    heroBody: "A calm repeating timer that keeps your stretching routine moving — without making you touch the screen between intervals.",
    supportCta: "Get support",
    privacyCta: "Read privacy policy",
    feature1Title: "Start in one tap",
    feature1Body: "Choose 20, 30, 45, or 60 seconds directly on your watch.",
    feature2Title: "Feel every cycle",
    feature2Body: "A wrist alert marks the end of each interval, then the next one begins automatically.",
    feature3Title: "Nothing in the way",
    feature3Body: "No account, no advertising, no tracking, and no internet connection.",
    supportTitle: "How can we help?",
    supportIntro: "StretchTap is designed to be simple. These quick answers cover the most common questions.",
    contactTitle: "Still need help?",
    contactBody: "Send an email and include your Apple Watch model, watchOS version, and a short description of the issue.",
    contactButton: "Email support",
    contactPending: "The public support email will be added before publication.",
    faq: [
      ["How do I start a timer?", "Open StretchTap and tap 20, 30, 45, or 60 seconds. The countdown begins immediately."],
      ["Does the timer repeat automatically?", "Yes. At zero, your watch alerts you and the same interval starts again. It continues until you tap Stop."],
      ["Why did I not feel the alert?", "Make sure your Apple Watch is on your wrist, unlocked, and that haptic alerts are enabled in Settings › Sounds & Haptics."],
      ["Does StretchTap need an iPhone or internet connection?", "No. StretchTap runs directly on Apple Watch and does not require a network connection."],
      ["Can I choose a custom duration?", "The first version includes 20, 30, 45, and 60 seconds. More options may be added in a future update."]
    ],
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: October 1, 2026",
    privacyIntro: "StretchTap was built to work without collecting your personal information.",
    privacySections: [
      ["Data collection", "StretchTap does not collect, store, sell, or transmit personal data."],
      ["Accounts and tracking", "The app does not use accounts, advertising, analytics, tracking technologies, or third-party software development kits."],
      ["On-device operation", "The timer, selected interval, and cycle count are processed only on your Apple Watch while the app is running. StretchTap does not send this information anywhere."],
      ["Network access", "StretchTap does not require an internet connection and does not communicate with external servers."],
      ["Apple services", "Apple may process App Store purchases, downloads, diagnostics, or device information under Apple's own privacy policy. StretchTap does not receive personally identifying information from these services."],
      ["Changes", "If a future version changes how data is handled, this policy will be updated before that version is released."],
      ["Contact", "For privacy questions, contact StretchTap support using the address on the Support page."]
    ],
    backHome: "Back to StretchTap",
    footer: "A simple repeating timer for Apple Watch."
  },
  fr: {
    locale: "fr",
    label: "Français",
    navHome: "Accueil",
    navSupport: "Assistance",
    navPrivacy: "Confidentialité",
    eyebrow: "Conçu pour l’Apple Watch",
    heroTitle: "Étirez. Vibrez. Recommencez.",
    heroBody: "Un minuteur répétitif apaisant qui rythme vos étirements sans toucher l’écran entre les intervalles.",
    supportCta: "Obtenir de l’aide",
    privacyCta: "Lire la politique de confidentialité",
    feature1Title: "Démarrage en un geste",
    feature1Body: "Choisissez 20, 30, 45 ou 60 secondes directement sur votre montre.",
    feature2Title: "Ressentez chaque cycle",
    feature2Body: "Une alerte au poignet marque la fin de l’intervalle, puis le suivant commence automatiquement.",
    feature3Title: "Rien de superflu",
    feature3Body: "Aucun compte, aucune publicité, aucun suivi et aucune connexion internet.",
    supportTitle: "Comment pouvons-nous vous aider ?",
    supportIntro: "StretchTap est conçu pour être simple. Voici les réponses aux questions les plus fréquentes.",
    contactTitle: "Besoin d’aide ?",
    contactBody: "Envoyez un e-mail en indiquant votre modèle d’Apple Watch, votre version de watchOS et une courte description du problème.",
    contactButton: "Contacter l’assistance",
    contactPending: "L’adresse publique d’assistance sera ajoutée avant la publication.",
    faq: [
      ["Comment lancer un minuteur ?", "Ouvrez StretchTap et touchez 20, 30, 45 ou 60 secondes. Le compte à rebours démarre immédiatement."],
      ["Le minuteur recommence-t-il automatiquement ?", "Oui. À zéro, la montre vous avertit et le même intervalle repart. Il continue jusqu’à ce que vous touchiez Arrêter."],
      ["Pourquoi n’ai-je pas ressenti l’alerte ?", "Vérifiez que l’Apple Watch est à votre poignet, déverrouillée, et que les alertes haptiques sont activées dans Réglages › Sons et vibrations."],
      ["StretchTap nécessite-t-il un iPhone ou internet ?", "Non. StretchTap fonctionne directement sur l’Apple Watch et ne nécessite aucune connexion réseau."],
      ["Puis-je choisir une durée personnalisée ?", "La première version propose 20, 30, 45 et 60 secondes. D’autres choix pourront être ajoutés dans une prochaine mise à jour."]
    ],
    privacyTitle: "Politique de confidentialité",
    privacyUpdated: "Dernière mise à jour : 1er octobre 2026",
    privacyIntro: "StretchTap a été conçu pour fonctionner sans collecter vos informations personnelles.",
    privacySections: [
      ["Collecte des données", "StretchTap ne collecte, ne stocke, ne vend et ne transmet aucune donnée personnelle."],
      ["Comptes et suivi", "L’application n’utilise ni compte, ni publicité, ni outil d’analyse, ni technologie de suivi, ni kit de développement tiers."],
      ["Fonctionnement sur la montre", "Le minuteur, l’intervalle choisi et le nombre de cycles sont traités uniquement sur votre Apple Watch pendant l’utilisation. StretchTap n’envoie ces informations nulle part."],
      ["Accès au réseau", "StretchTap ne nécessite aucune connexion internet et ne communique avec aucun serveur externe."],
      ["Services Apple", "Apple peut traiter les achats, téléchargements, diagnostics ou informations sur l’appareil conformément à sa propre politique de confidentialité. StretchTap ne reçoit aucune information permettant de vous identifier par ces services."],
      ["Évolutions", "Si une future version modifie le traitement des données, cette politique sera mise à jour avant sa publication."],
      ["Contact", "Pour toute question relative à la confidentialité, contactez l’assistance StretchTap à l’adresse indiquée sur la page Assistance."]
    ],
    backHome: "Retour à StretchTap",
    footer: "Un minuteur répétitif simple pour Apple Watch."
  },
  es: {
    locale: "es",
    label: "Español",
    navHome: "Inicio",
    navSupport: "Soporte",
    navPrivacy: "Privacidad",
    eyebrow: "Creado para Apple Watch",
    heroTitle: "Estira. Siente. Repite.",
    heroBody: "Un temporizador repetitivo y tranquilo que mantiene tus estiramientos en marcha sin tocar la pantalla entre intervalos.",
    supportCta: "Obtener ayuda",
    privacyCta: "Leer la política de privacidad",
    feature1Title: "Empieza con un toque",
    feature1Body: "Elige 20, 30, 45 o 60 segundos directamente en el reloj.",
    feature2Title: "Siente cada ciclo",
    feature2Body: "Un aviso en la muñeca marca el final del intervalo y el siguiente comienza automáticamente.",
    feature3Title: "Sin distracciones",
    feature3Body: "Sin cuenta, publicidad, seguimiento ni conexión a internet.",
    supportTitle: "¿Cómo podemos ayudarte?",
    supportIntro: "StretchTap está diseñado para ser sencillo. Estas respuestas cubren las dudas más frecuentes.",
    contactTitle: "¿Necesitas más ayuda?",
    contactBody: "Envía un correo e incluye el modelo de Apple Watch, la versión de watchOS y una breve descripción del problema.",
    contactButton: "Enviar correo al soporte",
    contactPending: "El correo público de soporte se añadirá antes de la publicación.",
    faq: [
      ["¿Cómo inicio un temporizador?", "Abre StretchTap y toca 20, 30, 45 o 60 segundos. La cuenta atrás comienza inmediatamente."],
      ["¿El temporizador se repite automáticamente?", "Sí. Al llegar a cero, el reloj te avisa y el mismo intervalo comienza de nuevo. Continúa hasta que toques Detener."],
      ["¿Por qué no noté el aviso?", "Comprueba que el Apple Watch está en tu muñeca, desbloqueado, y que los avisos hápticos están activados en Ajustes › Sonidos y vibraciones."],
      ["¿StretchTap necesita un iPhone o internet?", "No. StretchTap funciona directamente en el Apple Watch y no necesita conexión de red."],
      ["¿Puedo elegir una duración personalizada?", "La primera versión incluye 20, 30, 45 y 60 segundos. Es posible que se añadan más opciones en una futura actualización."]
    ],
    privacyTitle: "Política de privacidad",
    privacyUpdated: "Última actualización: 1 de octubre de 2026",
    privacyIntro: "StretchTap está diseñado para funcionar sin recopilar tu información personal.",
    privacySections: [
      ["Recopilación de datos", "StretchTap no recopila, almacena, vende ni transmite datos personales."],
      ["Cuentas y seguimiento", "La app no utiliza cuentas, publicidad, análisis, tecnologías de seguimiento ni kits de desarrollo de terceros."],
      ["Funcionamiento en el dispositivo", "El temporizador, el intervalo elegido y el número de ciclos se procesan únicamente en tu Apple Watch mientras la app está abierta. StretchTap no envía esta información a ningún lugar."],
      ["Acceso a la red", "StretchTap no necesita conexión a internet ni se comunica con servidores externos."],
      ["Servicios de Apple", "Apple puede procesar compras, descargas, diagnósticos o información del dispositivo según su propia política de privacidad. StretchTap no recibe información que permita identificarte de estos servicios."],
      ["Cambios", "Si una futura versión cambia el tratamiento de los datos, esta política se actualizará antes de publicar esa versión."],
      ["Contacto", "Para preguntas sobre privacidad, contacta con el soporte de StretchTap mediante la dirección de la página Soporte."]
    ],
    backHome: "Volver a StretchTap",
    footer: "Un temporizador repetitivo sencillo para Apple Watch."
  },
  de: {
    locale: "de",
    label: "Deutsch",
    navHome: "Start",
    navSupport: "Support",
    navPrivacy: "Datenschutz",
    eyebrow: "Für die Apple Watch entwickelt",
    heroTitle: "Dehnen. Spüren. Wiederholen.",
    heroBody: "Ein ruhiger, sich wiederholender Timer, der deine Dehnroutine am Laufen hält – ohne den Bildschirm zwischen den Intervallen zu berühren.",
    supportCta: "Hilfe erhalten",
    privacyCta: "Datenschutz lesen",
    feature1Title: "Mit einem Tipp starten",
    feature1Body: "Wähle direkt auf deiner Uhr 20, 30, 45 oder 60 Sekunden.",
    feature2Title: "Jede Runde spüren",
    feature2Body: "Ein Hinweis am Handgelenk markiert das Ende jedes Intervalls, danach beginnt automatisch das nächste.",
    feature3Title: "Nichts Überflüssiges",
    feature3Body: "Kein Konto, keine Werbung, kein Tracking und keine Internetverbindung.",
    supportTitle: "Wie können wir helfen?",
    supportIntro: "StretchTap ist bewusst einfach. Hier findest du Antworten auf die häufigsten Fragen.",
    contactTitle: "Noch Hilfe nötig?",
    contactBody: "Sende eine E-Mail mit deinem Apple-Watch-Modell, deiner watchOS-Version und einer kurzen Beschreibung des Problems.",
    contactButton: "Support kontaktieren",
    contactPending: "Die öffentliche Support-E-Mail wird vor der Veröffentlichung ergänzt.",
    faq: [
      ["Wie starte ich einen Timer?", "Öffne StretchTap und tippe auf 20, 30, 45 oder 60 Sekunden. Der Countdown startet sofort."],
      ["Wiederholt sich der Timer automatisch?", "Ja. Bei null informiert dich die Uhr und dasselbe Intervall beginnt erneut. Das läuft weiter, bis du auf Stopp tippst."],
      ["Warum habe ich den Hinweis nicht gespürt?", "Prüfe, ob deine Apple Watch am Handgelenk und entsperrt ist und ob haptische Hinweise unter Einstellungen › Töne & Haptik aktiviert sind."],
      ["Benötigt StretchTap ein iPhone oder Internet?", "Nein. StretchTap läuft direkt auf der Apple Watch und benötigt keine Netzwerkverbindung."],
      ["Kann ich eine eigene Dauer wählen?", "Die erste Version enthält 20, 30, 45 und 60 Sekunden. Weitere Optionen können in einem späteren Update folgen."]
    ],
    privacyTitle: "Datenschutzerklärung",
    privacyUpdated: "Zuletzt aktualisiert: 1. Oktober 2026",
    privacyIntro: "StretchTap wurde so entwickelt, dass es ohne die Erfassung persönlicher Informationen funktioniert.",
    privacySections: [
      ["Datenerfassung", "StretchTap erfasst, speichert, verkauft oder überträgt keine personenbezogenen Daten."],
      ["Konten und Tracking", "Die App verwendet keine Konten, Werbung, Analysen, Tracking-Technologien oder Software Development Kits von Drittanbietern."],
      ["Verarbeitung auf dem Gerät", "Timer, ausgewähltes Intervall und Rundenzahl werden nur während der Nutzung auf deiner Apple Watch verarbeitet. StretchTap sendet diese Informationen nirgendwohin."],
      ["Netzwerkzugriff", "StretchTap benötigt keine Internetverbindung und kommuniziert nicht mit externen Servern."],
      ["Apple-Dienste", "Apple kann App-Store-Käufe, Downloads, Diagnosen oder Geräteinformationen gemäß der eigenen Datenschutzrichtlinie verarbeiten. StretchTap erhält daraus keine persönlich identifizierenden Informationen."],
      ["Änderungen", "Falls eine zukünftige Version den Umgang mit Daten ändert, wird diese Erklärung vor der Veröffentlichung aktualisiert."],
      ["Kontakt", "Bei Datenschutzfragen kontaktiere den StretchTap-Support über die Adresse auf der Support-Seite."]
    ],
    backHome: "Zurück zu StretchTap",
    footer: "Ein einfacher, sich wiederholender Timer für die Apple Watch."
  },
  it: {
    locale: "it",
    label: "Italiano",
    navHome: "Home",
    navSupport: "Assistenza",
    navPrivacy: "Privacy",
    eyebrow: "Creato per Apple Watch",
    heroTitle: "Allunga. Senti. Ripeti.",
    heroBody: "Un timer ripetitivo e rilassante che accompagna lo stretching senza toccare lo schermo tra un intervallo e l’altro.",
    supportCta: "Ricevi assistenza",
    privacyCta: "Leggi la privacy",
    feature1Title: "Avvia con un tocco",
    feature1Body: "Scegli 20, 30, 45 o 60 secondi direttamente sull’orologio.",
    feature2Title: "Senti ogni ciclo",
    feature2Body: "Un avviso al polso segna la fine di ogni intervallo, poi il successivo inizia automaticamente.",
    feature3Title: "Nessuna distrazione",
    feature3Body: "Nessun account, pubblicità, tracciamento o connessione internet.",
    supportTitle: "Come possiamo aiutarti?",
    supportIntro: "StretchTap è progettato per essere semplice. Qui trovi le risposte alle domande più comuni.",
    contactTitle: "Serve ancora aiuto?",
    contactBody: "Invia un’e-mail indicando il modello di Apple Watch, la versione di watchOS e una breve descrizione del problema.",
    contactButton: "Contatta l’assistenza",
    contactPending: "L’indirizzo pubblico di assistenza sarà aggiunto prima della pubblicazione.",
    faq: [
      ["Come avvio un timer?", "Apri StretchTap e tocca 20, 30, 45 o 60 secondi. Il conto alla rovescia inizia subito."],
      ["Il timer si ripete automaticamente?", "Sì. A zero, l’orologio ti avvisa e lo stesso intervallo ricomincia. Continua finché non tocchi Stop."],
      ["Perché non ho sentito l’avviso?", "Verifica che l’Apple Watch sia al polso, sbloccato, e che gli avvisi aptici siano attivi in Impostazioni › Suoni e feedback aptico."],
      ["StretchTap richiede un iPhone o internet?", "No. StretchTap funziona direttamente su Apple Watch e non richiede una connessione di rete."],
      ["Posso scegliere una durata personalizzata?", "La prima versione include 20, 30, 45 e 60 secondi. Altre opzioni potranno essere aggiunte in un aggiornamento futuro."]
    ],
    privacyTitle: "Informativa sulla privacy",
    privacyUpdated: "Ultimo aggiornamento: 1 ottobre 2026",
    privacyIntro: "StretchTap è stato creato per funzionare senza raccogliere le tue informazioni personali.",
    privacySections: [
      ["Raccolta dei dati", "StretchTap non raccoglie, conserva, vende o trasmette dati personali."],
      ["Account e tracciamento", "L’app non utilizza account, pubblicità, strumenti di analisi, tecnologie di tracciamento o kit di sviluppo di terze parti."],
      ["Funzionamento sul dispositivo", "Il timer, l’intervallo selezionato e il numero di cicli vengono elaborati solo su Apple Watch mentre l’app è in uso. StretchTap non invia queste informazioni altrove."],
      ["Accesso alla rete", "StretchTap non richiede una connessione internet e non comunica con server esterni."],
      ["Servizi Apple", "Apple può elaborare acquisti, download, dati diagnostici o informazioni sul dispositivo secondo la propria informativa sulla privacy. StretchTap non riceve informazioni personali identificabili da questi servizi."],
      ["Modifiche", "Se una versione futura cambierà il trattamento dei dati, questa informativa sarà aggiornata prima della pubblicazione."],
      ["Contatti", "Per domande sulla privacy, contatta l’assistenza StretchTap tramite l’indirizzo nella pagina Assistenza."]
    ],
    backHome: "Torna a StretchTap",
    footer: "Un timer ripetitivo semplice per Apple Watch."
  }
};

const languageCodes = Object.keys(languages);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pathFor(lang, page = "home") {
  const base = lang === "en" ? "" : `/${lang}`;
  return page === "home" ? `${base || "/"}` : `${base}/${page}`;
}

function route(pathname) {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  let lang = "en";
  if (parts[0] && languageCodes.includes(parts[0])) lang = parts.shift();
  const page = parts[0] || "home";
  if (!languageCodes.includes(lang) || !["home", "support", "privacy"].includes(page) || parts.length > 1) {
    return null;
  }
  return { lang, page };
}

function languageLinks(page, currentLang) {
  return languageCodes.map((code) => {
    const active = code === currentLang ? " active" : "";
    return `<a class="language${active}" href="${pathFor(code, page)}" hreflang="${code}">${languages[code].label}</a>`;
  }).join("");
}

function shell(lang, page, title, body) {
  const t = languages[lang];
  const canonicalPage = page === "home" ? "" : page;
  const description = page === "privacy" ? t.privacyIntro : page === "support" ? t.supportIntro : t.heroBody;
  return `<!doctype html>
<html lang="${t.locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#090d12">
  <link rel="icon" type="image/png" href="/assets/stretchtap-icon-build3.png">
  <title>${escapeHtml(title)} · StretchTap</title>
  ${languageCodes.map((code) => `<link rel="alternate" hreflang="${code}" href="${pathFor(code, canonicalPage || "home")}">`).join("\n  ")}
  <style>${styles}</style>
</head>
<body>
  <div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>
  <header class="site-header">
    <a class="brand" href="${pathFor(lang)}" aria-label="StretchTap">
      <img class="brand-mark" src="/stretchtap-support/assets/stretchtap-icon-build3.png" alt="" width="36" height="36">
      <span>StretchTap</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="${pathFor(lang)}">${t.navHome}</a>
      <a href="${pathFor(lang, "support")}">${t.navSupport}</a>
      <a href="${pathFor(lang, "privacy")}">${t.navPrivacy}</a>
    </nav>
    <details class="language-menu">
      <summary>${t.label}</summary>
      <div class="language-list">${languageLinks(page, lang)}</div>
    </details>
  </header>
  <main>${body}</main>
  <footer>
    <div><strong>StretchTap</strong><span>${t.footer}</span></div>
    <div class="footer-links"><a href="${pathFor(lang, "support")}">${t.navSupport}</a><a href="${pathFor(lang, "privacy")}">${t.navPrivacy}</a></div>
    <p>© 2026 StretchTap</p>
  </footer>
</body>
</html>`;
}

function timerPreview(lang) {
  const cycleLabel = { en: "Cycle 4", fr: "Cycle 4", es: "Ciclo 4", de: "Runde 4", it: "Ciclo 4" }[lang];
  return `<div class="timer-preview" aria-hidden="true">
    <div class="timer-orbit"><div class="timer-value">30<span>s</span></div></div>
    <div class="timer-meta"><span>${cycleLabel}</span><i></i><span>20 · 30 · 45 · 60</span></div>
  </div>`;
}

function home(lang) {
  const t = languages[lang];
  const body = `<section class="hero">
    <div class="hero-copy">
      <p class="eyebrow"><span></span>${t.eyebrow}</p>
      <h1>${t.heroTitle}</h1>
      <p class="lede">${t.heroBody}</p>
      <div class="actions"><a class="button primary" href="${pathFor(lang, "support")}">${t.supportCta}</a><a class="button secondary" href="${pathFor(lang, "privacy")}">${t.privacyCta}</a></div>
    </div>
    ${timerPreview(lang)}
  </section>
  <section class="feature-grid" aria-label="Features">
    <article><span class="icon">01</span><h2>${t.feature1Title}</h2><p>${t.feature1Body}</p></article>
    <article><span class="icon pulse">02</span><h2>${t.feature2Title}</h2><p>${t.feature2Body}</p></article>
    <article><span class="icon">03</span><h2>${t.feature3Title}</h2><p>${t.feature3Body}</p></article>
  </section>`;
  return shell(lang, "home", "Stretch. Tap. Repeat.", body);
}

function support(lang) {
  const t = languages[lang];
  const emailReady = SUPPORT_EMAIL !== "CONTACT_EMAIL_REQUIRED";
  const contact = emailReady
    ? `<a class="button primary" href="mailto:${escapeHtml(SUPPORT_EMAIL)}">${t.contactButton}</a><p class="email">${escapeHtml(SUPPORT_EMAIL)}</p>`
    : `<span class="button disabled" aria-disabled="true">${t.contactButton}</span><p class="pending">${t.contactPending}</p>`;
  const body = `<section class="page-heading"><p class="eyebrow"><span></span>StretchTap</p><h1>${t.supportTitle}</h1><p class="lede">${t.supportIntro}</p></section>
  <section class="faq-list">${t.faq.map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary>${question}<span>+</span></summary><p>${answer}</p></details>`).join("")}</section>
  <section class="contact-card"><div><p class="mini-label">StretchTap Support</p><h2>${t.contactTitle}</h2><p>${t.contactBody}</p></div><div class="contact-action">${contact}</div></section>
  <a class="back-link" href="${pathFor(lang)}">← ${t.backHome}</a>`;
  return shell(lang, "support", t.navSupport, body);
}

function privacy(lang) {
  const t = languages[lang];
  const body = `<section class="page-heading privacy-heading"><p class="eyebrow"><span></span>StretchTap</p><h1>${t.privacyTitle}</h1><p class="updated">${t.privacyUpdated}</p><p class="lede">${t.privacyIntro}</p></section>
  <section class="policy-card">${t.privacySections.map(([heading, copy], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${heading}</h2><p>${copy}</p></div></article>`).join("")}</section>
  <a class="back-link" href="${pathFor(lang)}">← ${t.backHome}</a>`;
  return shell(lang, "privacy", t.privacyTitle, body);
}

const styles = `
:root{color-scheme:dark;--bg:#090d12;--panel:#111821;--line:#23303d;--text:#f6f8fa;--muted:#9ca9b6;--accent:#b8f527;--accent-dark:#8bc20f;--max:1120px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",sans-serif;font-size:16px}
*{box-sizing:border-box}html{background:var(--bg);scroll-behavior:smooth}body{margin:0;min-height:100vh;color:var(--text);background:radial-gradient(circle at 50% -20%,#1a2b35 0,transparent 40%),var(--bg);line-height:1.55;overflow-x:hidden}a{color:inherit;text-decoration:none}.ambient{position:fixed;border-radius:50%;filter:blur(100px);opacity:.11;pointer-events:none}.ambient-one{width:340px;height:340px;background:var(--accent);right:-180px;top:220px}.ambient-two{width:260px;height:260px;background:#37b7ff;left:-180px;bottom:120px}.site-header{width:min(calc(100% - 40px),var(--max));height:84px;margin:auto;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;border-bottom:1px solid rgba(255,255,255,.08);position:relative;z-index:5}.brand{display:flex;align-items:center;gap:11px;font-weight:730;letter-spacing:-.02em;font-size:19px}.brand-mark{width:36px;height:36px;border-radius:50%;display:block;flex-shrink:0}nav{display:flex;gap:32px;color:var(--muted);font-size:14px}nav a:hover,.footer-links a:hover{color:var(--text)}.language-menu{justify-self:end;position:relative;font-size:14px}.language-menu summary{cursor:pointer;list-style:none;border:1px solid var(--line);border-radius:999px;padding:8px 13px;color:#d4dbe2}.language-menu summary::-webkit-details-marker{display:none}.language-list{position:absolute;right:0;top:44px;min-width:150px;background:#121a23;border:1px solid var(--line);border-radius:14px;padding:7px;box-shadow:0 20px 50px rgba(0,0,0,.45)}.language{display:block;padding:8px 10px;border-radius:8px;color:var(--muted)}.language:hover,.language.active{color:var(--text);background:#1b2631}main{width:min(calc(100% - 40px),var(--max));margin:auto}.hero{min-height:620px;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:70px;padding:80px 0 100px}.eyebrow{display:flex;align-items:center;gap:9px;color:#d8e3eb;text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:700;margin:0 0 20px}.eyebrow span{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(184,245,39,.09)}h1{font-size:clamp(54px,7.2vw,94px);line-height:.96;letter-spacing:-.065em;margin:0 0 28px;max-width:780px}p.lede{color:var(--muted);font-size:clamp(17px,2vw,21px);line-height:1.55;max-width:630px;margin:0}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.button{display:inline-flex;justify-content:center;align-items:center;min-height:48px;padding:0 20px;border-radius:13px;font-weight:700;font-size:14px}.button.primary{color:#0a0f12;background:var(--accent);box-shadow:0 10px 35px rgba(184,245,39,.13)}.button.primary:hover{background:#c8ff43;transform:translateY(-1px)}.button.secondary{border:1px solid var(--line);background:rgba(255,255,255,.025);color:#e1e6eb}.timer-preview{justify-self:center;width:min(100%,390px);padding:50px 30px 26px;border:1px solid var(--line);border-radius:32px;background:radial-gradient(circle at 50% 30%,rgba(184,245,39,.09),transparent 55%),rgba(17,24,33,.7);box-shadow:0 38px 90px rgba(0,0,0,.34)}.timer-orbit{width:230px;height:230px;margin:auto;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--accent) 0 76%,#27323b 76% 100%);position:relative;box-shadow:0 0 60px rgba(184,245,39,.08)}.timer-orbit:before{content:"";position:absolute;inset:11px;border-radius:50%;background:#0b1016}.timer-value{position:relative;font-size:76px;font-weight:680;letter-spacing:-.06em}.timer-value span{font-size:24px;color:var(--muted);margin-left:4px}.timer-meta{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:27px;color:var(--muted);font-size:14px}.timer-meta i{width:4px;height:4px;border-radius:50%;background:var(--accent)}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:110px}.feature-grid article{padding:38px 36px 42px;border-right:1px solid var(--line)}.feature-grid article:first-child{padding-left:0}.feature-grid article:last-child{border:0;padding-right:0}.feature-grid .icon{font-size:12px;font-weight:800;color:var(--accent);letter-spacing:.14em}.feature-grid h2{font-size:21px;margin:18px 0 9px;letter-spacing:-.03em}.feature-grid p{margin:0;color:var(--muted);font-size:16px}.page-heading{padding:100px 0 64px;border-bottom:1px solid var(--line)}.page-heading h1{font-size:clamp(48px,7vw,80px);margin-bottom:22px}.page-heading .updated{color:var(--accent);font-size:13px;font-weight:700;margin:-8px 0 24px}.faq-list{padding:38px 0 76px;max-width:860px}.faq-list details{border-bottom:1px solid var(--line);padding:0}.faq-list summary{list-style:none;cursor:pointer;padding:24px 2px;font-size:18px;font-weight:650;display:flex;justify-content:space-between;gap:20px}.faq-list summary::-webkit-details-marker{display:none}.faq-list summary span{font-size:22px;color:var(--accent);font-weight:400;transition:transform .2s}.faq-list details[open] summary span{transform:rotate(45deg)}.faq-list p{color:var(--muted);margin:-8px 0 24px;max-width:720px}.contact-card{border:1px solid #334313;background:linear-gradient(135deg,rgba(184,245,39,.09),rgba(184,245,39,.025));border-radius:22px;padding:38px;display:flex;justify-content:space-between;align-items:center;gap:50px;margin-bottom:50px}.contact-card h2{font-size:30px;letter-spacing:-.035em;margin:4px 0 8px}.contact-card p{color:var(--muted);max-width:610px;margin:0}.mini-label{text-transform:uppercase;letter-spacing:.13em;font-size:12px!important;color:var(--accent)!important;font-weight:800}.contact-action{flex:0 0 230px;text-align:center}.button.disabled{background:#2b343b;color:#84909a;cursor:not-allowed}.contact-action .pending{font-size:12px;margin-top:10px}.contact-action .email{font-size:14px;margin-top:8px;color:#dfe5ea}.policy-card{margin:44px 0 50px;border:1px solid var(--line);border-radius:22px;background:rgba(17,24,33,.55);overflow:hidden}.policy-card article{display:grid;grid-template-columns:50px 1fr;gap:20px;padding:30px;border-bottom:1px solid var(--line)}.policy-card article:last-child{border:0}.policy-card article>span{font-size:12px;color:var(--accent);font-weight:800;letter-spacing:.12em;padding-top:5px}.policy-card h2{font-size:20px;margin:0 0 8px;letter-spacing:-.025em}.policy-card p{color:var(--muted);margin:0;max-width:760px}.back-link{display:inline-block;color:var(--muted);font-size:14px;margin-bottom:90px}.back-link:hover{color:var(--text)}footer{width:min(calc(100% - 40px),var(--max));margin:auto;padding:30px 0 44px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr auto;gap:14px;color:var(--muted);font-size:13px}footer>div:first-child{display:flex;flex-direction:column;gap:3px}footer strong{color:var(--text);font-size:15px}.footer-links{display:flex;gap:22px}footer>p{grid-column:1/-1;margin:8px 0 0;font-size:12px;color:#65717c}
@media(max-width:760px){.site-header{grid-template-columns:1fr auto;height:72px}.site-header nav{display:none}.language-menu{grid-column:2}.hero{grid-template-columns:1fr;gap:34px;padding:70px 0 80px}.timer-preview{grid-row:1;padding:34px 18px 20px}.timer-orbit{width:185px;height:185px}.timer-value{font-size:62px}.hero-copy{text-align:center}.eyebrow{justify-content:center}.actions{justify-content:center}.feature-grid{grid-template-columns:1fr}.feature-grid article,.feature-grid article:first-child,.feature-grid article:last-child{padding:30px 0;border-right:0;border-bottom:1px solid var(--line)}.feature-grid article:last-child{border-bottom:0}.contact-card{align-items:flex-start;flex-direction:column;gap:26px;padding:28px}.contact-action{flex:auto;width:100%;text-align:left}.page-heading{padding:72px 0 46px}.page-heading .eyebrow{justify-content:flex-start}.policy-card article{grid-template-columns:34px 1fr;padding:24px 20px;gap:8px}footer{grid-template-columns:1fr}.footer-links{margin-top:8px}}
@media(prefers-reduced-motion:no-preference){.timer-preview{animation:float 5s ease-in-out infinite}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}}
`;

export function render(pathname) {
  const match = route(pathname);
  if (!match) return null;
  if (match.page === "support") return support(match.lang);
  if (match.page === "privacy") return privacy(match.lang);
  return home(match.lang);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const html = render(url.pathname);
    if (!html) {
      return new Response("Not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; img-src data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
        "referrer-policy": "no-referrer",
        "x-content-type-options": "nosniff"
      }
    });
  }
};
