const { PeerServer } = require('peer');

// PeerJS Server-Konfiguration:
// Port wird von Render automatisch über die Umgebungsvariable gesetzt.
const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/', // Der Pfad, den du im Client-Code verwenden wirst
  // Optional: Setze hier ein Key-Passwort, wenn du den Server absichern willst (nicht zwingend notwendig für den Prototyp)
});

// Bestätigung in der Render-Konsole
peerServer.on('open', () => {
  console.log(`PeerJS Server läuft auf Port ${port}.`);
});

// Behandle Fehler
peerServer.on('error', (err) => {
  console.error('PeerJS Server Fehler:', err);
});
