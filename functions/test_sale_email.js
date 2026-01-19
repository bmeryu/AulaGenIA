// Test script para enviar correo de bienvenida de VENTA
// Ejecutar con: node functions/test_sale_email.js

const admin = require('firebase-admin');
const Mailjet = require('node-mailjet');

// Inicializar Firebase Admin
const serviceAccount = require('./aulagenia-firebase-adminsdk-nhzwq-fda53e1cd7.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Configurar Mailjet - Necesitamos las credenciales
// Puedes obtenerlas de Firebase: firebase functions:secrets:access MAILJET_API_KEY
// O establecerlas manualmente aquí para esta prueba:
const MAILJET_API_KEY = process.env.MAILJET_API_KEY || 'TU_API_KEY_AQUI';
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY || 'TU_SECRET_KEY_AQUI';

async function sendTestSaleEmail(targetEmail) {
    const mailjet = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

    // Variables de prueba (simulando una venta)
    const buyerName = 'Bernardita';
    const userEmail = targetEmail;
    const courseName = 'Pack Starter: +100 Master Prompts';
    const isPro = false;

    const itemRuta = `
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">🗺️</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Tu Ruta de Transformación: Fases 1-4</strong>
                        <span style="color: #64748b; font-size: 14px;">El camino paso a paso. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ingresa al Campus aquí</a></span>
                    </td>
                </tr>
            </table>
        </div>`;

    const itemPrompts = `
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">✅</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">+100 Instrucciones Maestras</strong>
                        <div style="color: #64748b; font-size: 14px; margin-bottom: 4px;">Copia y pega fórmulas probadas para ChatGPT, Claude y Gemini.</div>
                        <div style="font-size: 13px;">
                            <a href="https://aulagenia.cl/maestro-prompts-app.html" style="color: #0d9488; text-decoration: none; font-weight: 600;">👉 Acceder a la Herramienta</a><br>
                            <a href="https://aulagenia.cl/campus.html?download=pdf" style="color: #0d9488; text-decoration: none; font-weight: 600;">📥 Descargar PDF (Auto-descarga)</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`;

    let featuresHtml = itemRuta + itemPrompts;

    const subjectLine = 'Bienvenido/a a Aula GenIA - Acceso Confirmado [TEST]';

    try {
        const result = await mailjet.post("send", { 'version': 'v3.1' }).request({
            "Messages": [{
                "From": { "Email": "contacto@aulagenia.cl", "Name": "Aula GenIA" },
                "To": [{ "Email": userEmail, "Name": buyerName }],
                "Subject": subjectLine,
                "HTMLPart": `
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="utf-8">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                 <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-top: 40px; margin-bottom: 40px;">
                    <!-- Header -->
                    <div style="background: white; padding: 40px 0; text-align: center; border-bottom: 4px solid #0d9488;">
                        <h1 style="color: #1e293b; margin: 0; font-size: 24px; font-weight: 800;">¡Tu Acceso está listo!</h1>
                        <p style="color: #64748b; margin: 10px 0 0 0; font-size: 16px;">Tu futuro en Inteligencia Artificial comienza aquí.</p>
                    </div>

                    <div style="padding: 40px;">
                        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hola <strong style="color: #0d9488;">${buyerName}</strong>,</p>
                        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Es un gusto saludarte. Ya confirmamos tu inscripción al <strong style="color: #1e293b;">${courseName}</strong>. 
                        </p>

                        <!-- Highlight Box -->
                        <div style="background: #f0fdf4; border-left: 4px solid #4ade80; padding: 15px; margin: 25px 0; border-radius: 4px;">
                            <p style="margin: 0; color: #15803d; font-size: 14px; font-weight: 600;">✨ Tu acceso a la Bóveda de Recursos ya ha sido sincronizado.</p>
                        </div>

                        <!-- Credentials Card -->
                        <div style="background: #ccfbf1; border-radius: 16px; padding: 25px; margin: 30px 0; border: 1px solid #99f6e4;">
                            <h2 style="text-align: center; color: #0f766e; font-size: 18px; margin-top: 0; margin-bottom: 25px;">🔑 Tus Credenciales de Acceso</h2>
                            <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
                                <tr>
                                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                                        <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📍 Portal de Acceso</p>
                                        <a href="https://aulagenia.cl/acceso.html" style="color: #0d9488; font-size: 16px; font-weight: 600; text-decoration: none;">aulagenia.cl/acceso</a>
                                    </td>
                                </tr>
                                 <tr>
                                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                                        <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">👤 Tu Usuario</p>
                                        <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 600;">${userEmail}</p>
                                    </td>
                                </tr>
                                 <tr>
                                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                                       <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">🔐 Tu Contraseña</p>
                                        <p style="color: #555; margin: 0; font-size: 14px;">Haz clic en el botón verde de abajo para crearla</p>
                                    </td>
                                </tr>
                            </table>
                             <div style="text-align: center; margin-top: 25px;">
                                  <a href="https://aulagenia.cl/acceso.html" style="background-color: #0d9488; color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);">🔐 Crear mi Contraseña y Acceder</a>
                             </div>
                        </div>

                        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px;">📦 Lo que recibes hoy:</h3>

                        ${featuresHtml}

                        <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
                            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">¿Tienes dudas? Escríbenos a <a href="mailto:hola@aulagenia.cl" style="color: #0d9488; text-decoration: none;">hola@aulagenia.cl</a></p>
                            <p style="color: #0d9488; font-weight: 600; font-size: 14px;">¡Y recuerda: en Aula GenIA, la IA no es el futuro... TÚ lo eres!</p>
                        </div>

                    </div>
                    <!-- Footer -->
                    <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #94a3b8; font-size: 13px; margin: 0;">© 2026 Aula GenIA. Todos los derechos reservados.</p>
                    </div>
                 </div>
                </body>
                </html>`
            }]
        });

        console.log('✅ Email de prueba enviado a:', userEmail);
        console.log('Response:', JSON.stringify(result.body, null, 2));
        process.exit(0);
    } catch (err) {
        console.error('❌ Error enviando email:', err);
        process.exit(1);
    }
}

// Ejecutar con el email de destino
const targetEmail = process.argv[2] || 'bmeryu@gmail.com';
console.log('🚀 Enviando correo de prueba de VENTA a:', targetEmail);
sendTestSaleEmail(targetEmail);
