# Vape Mixer

A cozy, lo-fi PWA for calculating vape juice mixes, tracking inventory, and monitoring steep times. No nicotine support - just flavors, PG/VG, and good vibes.

## Features

- 🧮 **Mix Calculator**: Enter flavor %, VG %, and total volume - get exact measurements in ml and grams
- 📊 **Visual Bottle**: See your mix as colored layers in a bottle visualization
- 📦 **Inventory**: Track your flavor concentrates and base liquids
- ⏰ **Steeping Tracker**: Set steep reminders with visual "ready to vape" indicators
- 💾 **Backup**: Export/import all data as CSV for safe keeping
- 📱 **PWA**: Works offline, can be "installed" on your home screen

## The Aesthetic

80s colors, but faded and cozy:
- Deep purple backgrounds
- Soft pinks, cyans, and yellows
- Glass-morphism cards with subtle shadows
- Smooth animations and gradients

## How to Deploy to GitHub Pages

### Option 1: The Easy Way (Web Interface)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it `vape-mixer` (or whatever you want)
   - Make it public
   - Click "Create repository"

2. **Upload files**
   - In your new repo, click "uploading an existing file"
   - Drag and drop all these files:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icon-192.png`
     - `icon-512.png`
   - Add a commit message like "Initial commit"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to Settings → Pages (in the left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"
   - Wait 1-2 minutes, then you'll see a green box with your URL

4. **Access your app**
   - The URL will be: `https://YOUR_USERNAME.github.io/vape-mixer/`
   - Open it on your phone, tap "Add to Home Screen" to install

### Option 2: Using Git (If You Know Git)

```bash
# Initialize git repo
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vape-mixer.git

# Push to GitHub
git push -u origin main
```

Then follow step 3 above to enable Pages.

## How to Use

### Mixing
1. Enter your flavor name (optional, for reference)
2. Enter flavor percentage (e.g., 5 for 5%)
3. Enter VG percentage (e.g., 70 for 70/30 VG/PG)
4. Enter total bottle size in ml (e.g., 60)
5. Click "Calculate Mix"
6. See exact measurements and a visual bottle representation

### Adding to Steeping
After calculating, choose steep duration and click "Add to Steeping". Check the Steeping tab to see when it's ready.

### Inventory
Track your flavor concentrates and base liquids. The -10 button helps you subtract when you use it in a mix.

### Backup
Export your data as CSV anytime. Keep the file safe. If you get a new phone or clear your browser data, you can import it back.

## How It Calculates

- **Flavor**: Simple percentage of total
- **VG**: Your specified percentage
- **PG**: The remainder (100 - flavor% - VG%)
- **Conversions**:
  - Flavor: 1ml ≈ 1.05g (slightly denser than water)
  - VG: 1ml ≈ 1.26g
  - PG: 1ml ≈ 1.04g

## Files

- `index.html` - The main app
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline functionality
- `icon-192.png` & `icon-512.png` - App icons

## Browser Support

Works on:
- iOS Safari (11+)
- Chrome Android
- Firefox
- Edge
- Chrome Desktop

## Tips

- **On iOS**: Add to Home Screen → it works like a real app
- **Offline**: Once loaded, works without internet
- **Privacy**: All data stays in your browser's localStorage
- **Backup**: Regularly export your data - clearing browser cache will wipe it!

## License

MIT - Do whatever you want with it.