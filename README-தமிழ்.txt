தமிழ் செஸ் — Android Installable PWA

இந்த ZIP-ஐ unzip செய்து, உள்ள கோப்புகளை ஒரே website folder-ல் upload செய்ய வேண்டும். PWA install செய்ய HTTPS hosting தேவை.

கோப்புகள்:
- index.html : கேம்
- manifest.json : app metadata
- service-worker.js : cache/offline support
- icons/chess-icon.svg : app icon

எளிய publish வழி:
1. GitHub-ல் ஒரு repository உருவாக்கவும்.
2. இந்த ZIP-ஐ unzip செய்து எல்லா கோப்புகளையும் repository-க்கு upload செய்யவும்.
3. Repository Settings > Pages > Deploy from branch > main/root தேர்வு செய்து Save.
4. GitHub Pages link-ஐ Android Chrome-ல் திறக்கவும்.
5. Chrome menu (⋮) > Install app / Add to Home screen.

குறிப்பு: Service worker-க்கு HTTPS hosting தேவை. CDN chess.js-ஐ முதல் முறை load செய்ய internet தேவைப்படலாம்.
