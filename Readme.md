# Android Enterprise with Intune - Wi-Fi QR Wizard

**[Access the Wi-Fi QR Wizard tool here](https://sample.gitpages.com)**

This project provides a web-based tool to generate QR codes for configuring Wi-Fi settings on Android devices enrolled in Microsoft Intune.

## Table of Contents

- [Introduction](#introduction)
- [Background](#background)
- [Features](#features)
- [How to Use](#how-to-use)
- [Deployment](#deployment)
- [Helpful Resources](#helpful-resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Android Enterprise with Intune - Wi-Fi QR Wizard is designed to address the issue of limited Wi-Fi configuration options available when creating enrollment keys (QR codes) in Microsoft Intune. Some QR codes generated in Intune lack the ability to configure Wi-Fi settings during the initial setup of Android devices. This project aims to provide a solution by allowing administrators to upload JSON files exported from Intune and generate QR codes with customizable Wi-Fi configurations.

## Background

The idea for this project originated from the frustration faced by IT administrators when setting up Android devices for enrollment via Intune. While Intune provides a convenient way to create enrollment keys (QR codes), some keys do not offer the option to configure Wi-Fi settings during the initial device setup. This limitation can be problematic, especially in enterprise environments where specific Wi-Fi configurations are required for device provisioning.

To address this issue, the Android Enterprise with Intune - Wi-Fi QR Wizard was developed. By leveraging JSON files exported from Intune, this web-based tool enables administrators to customize Wi-Fi settings and generate QR codes that include the necessary configurations. This simplifies the enrollment process for both administrators and end users, ensuring seamless device provisioning with the correct Wi-Fi settings pre-configured.

## Features

- **QR Code Generation**: Easily generate QR codes for Wi-Fi configuration based on JSON files exported from Microsoft Intune.
- **Customizable Wi-Fi Settings**: Configure SSID, password, security type, and hidden network options to meet specific requirements.
- **Intuitive Interface**: User-friendly interface for uploading JSON files, entering Wi-Fi details, and generating QR codes.
- **Help Section**: Detailed instructions on exporting QR codes from Intune and additional help resources.

## How to Use

To use the Android Enterprise with Intune - Wi-Fi QR Wizard:

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Follow the on-screen instructions to upload your JSON file, enter Wi-Fi details, and generate the QR code.
4. Optionally, download the generated QR code for deployment.

For more detailed instructions, refer to the [Help Section](#help-section) within the application.

## Deployment

You can deploy this project using GitHub Pages or any web hosting service of your choice. To deploy on GitHub Pages:

1. Fork this repository to your GitHub account.
2. Enable GitHub Pages in the repository settings and choose the `main` branch as the source.
3. Access the deployed application using the provided GitHub Pages URL.

## Helpful Resources

- [Microsoft Intune Deployment Guide: Enrollment for Android Devices](https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-guide-enrollment-android)
- [Microsoft Intune Enrollment Documentation](https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-guide-enrollment-android)

These resources provide additional information on enrollment for Android devices in Microsoft Intune.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the content and structure of the README.md file further to better suit your project's needs.
