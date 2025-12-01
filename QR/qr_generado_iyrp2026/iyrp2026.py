import qrcode
import os

# Crear carpeta si no existe
os.makedirs("qr_generado_grafton_exfingidor", exist_ok=True)

base_url = "https://es.grafton.com/es/exfingidor"

# Generar el código QR
img = qrcode.make(base_url)

# Guardar la imagen dentro de la carpeta
img.save("qr_generado_grafton_exfingidor/qr_grafton_exfingidor.png")

print("QR generado correctamente.")
