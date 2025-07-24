# WiFi QR-Code Wizard for Android Enterprise & Intune

**[🚀 Start the WiFi QR-Code Wizard online](https://r3itosv87.github.io/Intune-Android-QR-Wizard/)**

A free, open-source web tool for generating Android Enterprise QR codes with fully customized WiFi settings, designed for seamless device enrollment via Microsoft Intune.

---

## Table of Contents

- [Overview](#overview)
- [Why This Project?](#why-this-project)
- [Features](#features)
- [How It Works](#how-it-works)
- [Self-Hosting / Deployment](#self-hosting--deployment)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The **WiFi QR-Code Wizard** empowers IT admins and power users to generate Android Enterprise enrollment QR codes **with WiFi configuration included** – even when Intune’s built-in options are limited.  
Just upload the Intune enrollment JSON, add your WiFi details (SSID, WPA/WPA2/WPA3, etc.), and download a ready-to-use QR code for zero-touch Android setup.

---

## Why This Project?

Microsoft Intune enables QR-based Android enrollment, but often these QR codes **don’t support pre-configured WiFi access**.  
This can disrupt fully automated device provisioning and cause friction for end-users during initial setup.

**The WiFi QR-Code Wizard solves this:**

- Merge WiFi settings into any exported Intune enrollment QR JSON.
- Generate a standards-compliant QR code with all credentials.
- No cloud, no upload – everything runs 100% locally in your browser.

---

## Features

- **Universal QR Generation:**  
  Create Android Enterprise enrollment QR codes with any WiFi configuration (SSID, password, WPA/WPA2/WPA3, open/hidden).
- **Supports Modern Security:**  
  Full support for WPA3 and hidden SSIDs.
- **Local-Only Processing:**  
  All data stays on your device – nothing is uploaded or stored externally.
- **User-Friendly Workflow:**  
  Guided steps, help texts, and clear instructions built in.
- **Comprehensive Help:**  
  Step-by-step guide for exporting the right Intune JSON and deploying QR codes.
- **100% Open Source:**  
  Self-host or run via GitHub Pages.

---

## How It Works

1. **Export the QR code JSON**  
   From Microsoft Intune, export the Android enrollment profile as a JSON file.  
   _See the integrated Help section in the Wizard for detailed steps!_

2. **Open the WiFi QR-Code Wizard**  
   Use [the online tool](https://r3itosv87.github.io/Intune-Android-QR-Wizard/) or open `index.html` locally.

3. **Upload & Configure**  
   - Upload your Intune JSON.
   - Enter your WiFi SSID, password, security type (WPA/WPA2/WPA3, WEP, Open), and specify if the SSID is hidden.
   - Optionally, review or adjust the raw JSON.

4. **Generate & Deploy**  
   - Click "Generate QR Code".
   - Download the QR image or a PDF setup guide.
   - Scan the QR on your Android device during initial setup – WiFi and enrollment just work!

---

## Self-Hosting / Deployment

You can use the WiFi QR-Code Wizard:
- Locally (`index.html` in any browser)
- On GitHub Pages
- On any web server

**To deploy on GitHub Pages:**
1. Fork or clone this repo.
2. Push to your own GitHub account.
3. Enable GitHub Pages (main branch).
4. Share your published URL!

---

## Resources

- [Microsoft Intune: Android Enrollment Guide](https://learn.microsoft.com/en-us/mem/intune/enrollment/connect-intune-android-enterprise)
- [Microsoft Docs: Intune Fundamentals](https://learn.microsoft.com/en-us/mem/intune/fundamentals/)
- [Google: Android Zero-Touch Enrollment](https://support.google.com/work/android/answer/7514513?hl=en)

---

## Contributing

Found a bug or have an idea?  
Open an issue or send a pull request – all contributions welcome!

---

## License

MIT License – see [LICENSE](./LICENSE) for details.
