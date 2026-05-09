# WhatsApp Bot (BuilderBot + Meta Cloud API)

Este proyecto es un bot de WhatsApp construido con BuilderBot + TypeScript + Meta WhatsApp Cloud API.

---

## 🚀 Requisitos

Antes de empezar asegúrate de tener:

- Node.js 18 o 20 (LTS recomendado)
- npm o yarn
- Cuenta en Meta Developers
- App creada con WhatsApp Cloud API
- Número de WhatsApp Business configurado

---

## 📦 Instalación

Clonar el proyecto:

git clone <TU_REPO>  
cd whatsapp-bot-test  

Instalar dependencias:

npm install  

---

## ⚙️ Configuración del entorno

El proyecto incluye un archivo de ejemplo:

.env.example

Cópialo a .env:

En Linux / Mac:

cp .env.example .env  

En Windows:

copy .env.example .env  

---

## 🔑 Variables de entorno

Edita el archivo .env con tus credenciales de Meta:

PORT=3008  
META_TOKEN=TU_ACCESS_TOKEN_DE_META  
META_VERIFY_TOKEN=tu_verify_token_personal  
META_PHONE_NUMBER_ID=TU_PHONE_NUMBER_ID  
META_VERSION=v22.0  
JWT_TOKEN=un_string_secreto_aleatorio  

---

## 📲 Configuración en Meta Developers

### 1. Crear App

Ir a:
https://developers.facebook.com/

- Crear nueva app
- Tipo: Business

---

### 2. Agregar WhatsApp

- Add Product
- Seleccionar WhatsApp
- Activar Cloud API

---

### 3. Obtener credenciales

En WhatsApp > API Setup:

- Temporary Access Token → META_TOKEN
- Phone Number ID → META_PHONE_NUMBER_ID

---

### 4. Configurar Webhook

WhatsApp > Configuration

Callback URL:

https://TU_DOMINIO/webhook

---

## 🌐 Exponer servidor local (OBLIGATORIO)

Meta necesita acceder a tu bot desde internet.

---

### 🟢 Opción 1: ngrok (RECOMENDADO)

Instalación:

npm install -g ngrok  

Ejecutar bot:

npm run dev  

En otra terminal:

ngrok http 3008  

Ejemplo de URL generada:

https://abcd-1234.ngrok-free.app  

Webhook en Meta:

https://abcd-1234.ngrok-free.app/webhook  

---

### 🟡 Opción 2: VS Code Port Forwarding

- Abrir pestaña “Ports”
- Forward port 3008
- Usar URL pública generada

⚠️ No recomendado para Webhooks de Meta en producción (puede cambiar o fallar en POST).

---

## 🔁 Verify Token

Debe coincidir con tu .env:

META_VERIFY_TOKEN=mi_token_verify  

---

### 5. Suscribir eventos

Activar:

- messages
- message_status

---

## ▶️ Ejecutar el proyecto

Modo desarrollo:

npm run dev  

---

## 🧪 Pruebas locales

Flujo recomendado:

1. Levantar bot (`npm run dev`)
2. Exponer con ngrok
3. Configurar webhook en Meta
4. Enviar mensaje desde WhatsApp
5. Ver logs en consola

---

## 📌 Estructura del proyecto

src/  
 ├── app.ts  
 ├── flows/  
 ├── providers/  
 ├── services/  
 ├── routes/  
 ├── utils/  

---

## ❗ Errores comunes

### Invalid OAuth access token

- El META_TOKEN es incorrecto o expirado
- Debe empezar con EAAG...

---

### Webhook no responde

- ngrok apagado
- URL incorrecta
- verify token no coincide

---

### Phone Number ID inválido

- Verificar en Meta Developers