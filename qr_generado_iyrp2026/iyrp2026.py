import qrcode
import os

# Crear carpeta si no existe
os.makedirs("qr_generado_iyrp_2026_madrid", exist_ok=True)

base_url = "https://albertocaro24.github.io/qr_iyrp2026madrid/"

# Generar el código QR
img = qrcode.make(base_url)

# Guardar la imagen dentro de la carpeta
img.save("qr_generado_iyrp_2026_madrid/qr_iyrp_2026_madrid.png")

print("QR generado correctamente.")
