document.addEventListener('DOMContentLoaded', (event) => {
    resetForm();
});

document.getElementById('fileUpload').addEventListener('change', function(event){
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        document.getElementById('exportData').value = text;
    };
    reader.readAsText(event.target.files[0]);
});
document.querySelector('.help-button').addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
});

function generateQRCode() {
    var exportDataText = document.getElementById("exportData").value;
    try {
        var exportData = JSON.parse(exportDataText);

        if (exportData.qrCodeContent) {
            exportData = exportData.qrCodeContent;
        }
        delete exportData['expirationDate'];

        var ssid = document.getElementById("ssid").value;
        var password = document.getElementById("password").value;
        var security = document.getElementById("security").value;
        var hidden = document.getElementById("hidden").value;

        exportData['android.app.extra.PROVISIONING_WIFI_SSID'] = ssid;
        exportData['android.app.extra.PROVISIONING_WIFI_PASSWORD'] = password;
        exportData['android.app.extra.PROVISIONING_WIFI_SECURITY_TYPE'] = security;
        exportData['android.app.extra.PROVISIONING_WIFI_HIDDEN'] = hidden === "true";

        var finalData = JSON.stringify(exportData);
        
        var qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, {
            text: finalData,
            width: 400,
            height: 400,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

        var downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.style.display = "block";
        downloadBtn.onclick = function() {
            var canvas = qrcodeContainer.querySelector('canvas');
            var image = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = "QRCode.png";
            link.href = image;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

    } catch (e) {
        alert("Error reading the JSON file or generating the QR code: " + e);
    }
}

document.getElementById('resetBtn').addEventListener('click', function(){
    resetForm();
});

function resetForm() {
    document.getElementById("exportData").value = "";
    document.getElementById("ssid").value = "";
    document.getElementById("password").value = "";
    document.getElementById("security").selectedIndex = 0;
    document.getElementById("hidden").selectedIndex = 0;
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("downloadBtn").style.display = "none";
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const instructions = `
QR Code Registration Guide

This guide assists you in registering your device using a QR code provided by your organization. Follow these steps to complete the registration process successfully:

1. Initiate QR Code Setup: On the device's Welcome screen, tap any area five times to trigger the QR code setup process.

2. Install QR Code Scanner (if necessary): If your device lacks a pre-installed QR code scanner, the setup will automatically proceed to install one. Please wait for the installation to finish. A progress indicator will be displayed on the setup screens.

3. Scan the QR Code: Once the QR code scanner is ready, you will be prompted to scan the QR code. Use your device to scan the QR code provided in this document.

Follow these steps carefully to ensure a smooth registration of your device. Once the QR code is successfully scanned, you will be redirected to complete the remaining device registration steps.
`;

    let lines = doc.splitTextToSize(instructions, 180); 

    doc.setFontSize(10); 
    doc.text(lines, 10, 10);

    let textHeight = 15 + (lines.length * 6);

    var canvas = document.querySelector('#qrcode canvas');
    var qrImgData = canvas.toDataURL('image/png');

    doc.addImage(qrImgData, 'PNG', 10, textHeight, 100, 100); 

    doc.text(`Timestamp: ${new Date().toLocaleString()}`, 10, textHeight + 110); 

    doc.save('QRCode-Registration-Guide.pdf');
}
