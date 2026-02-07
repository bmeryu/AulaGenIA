// =======================================================================================
// EMAIL TEMPLATES - Unified Email System v2
// =======================================================================================

/**
 * Template HTML para Pack Starter
 */
function getEmailTemplateStarter({ name, email, resetLink }) {
    const hasResetLink = !!resetLink;
    const passwordSection = hasResetLink
        ? `<div style="color: #1e293b; font-size: 14px;">Haz clic abajo para crearla 👇</div>`
        : `<div style="color: #1e293b; font-size: 14px;">Haz clic en el botón verde de abajo para crearla</div>`;

    const ctaLink = resetLink || 'https://aulagenia.cl/acceso.html';

    return `<!DOCTYPE html>
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
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hola <strong style="color: #0d9488;">${name}</strong>,</p>
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Es un gusto saludarte. Ya confirmamos tu inscripción al <strong style="color: #1e293b;">Pack Starter: +100 Master Prompts</strong>.</p>

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
                        <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 600;">${email}</p>
                    </td>
                </tr>
                <tr>
                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">🔐 Tu Contraseña</p>
                        ${passwordSection}
                    </td>
                </tr>
            </table>
            <div style="text-align: center; margin-top: 25px;">
                <a href="${ctaLink}" style="background-color: #0d9488; color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);">🔐 Crear mi Contraseña y Acceder</a>
            </div>
            ${hasResetLink ? '<p style="color: #94a3b8; font-size: 13px; margin-top: 15px; text-align: center;">(Este enlace es único y seguro)</p>' : ''}
        </div>

        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px;">📦 Lo que recibes hoy:</h3>

        <!-- Item Ruta -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">🗺️</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Tu Ruta de Transformación: Fases 1-5</strong>
                        <span style="color: #64748b; font-size: 14px;">El camino paso a paso. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ingresa al Campus aquí</a></span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- Item Prompts -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">✅</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">+150 Casos Aplicados</strong>
                        <div style="color: #64748b; font-size: 14px; margin-bottom: 4px;">Tu biblioteca de instrucciones lista para copiar y pegar en ChatGPT, Claude y Gemini.</div>
                        <div style="font-size: 13px;">
                            <a href="https://aulagenia.cl/campus-curso-ia.html#modulo5" style="color: #0d9488; text-decoration: none; font-weight: 600;">👉 Acceder a los Casos</a><br>
                            <a href="https://aulagenia.cl/campus.html?download=pdf" style="color: #0d9488; text-decoration: none; font-weight: 600;">📥 Descargar PDF (Auto-descarga)</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
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
</html>`;
}

/**
 * Template HTML para Pack PRO (Arsenal Experto)
 */
function getEmailTemplatePRO({ name, email, resetLink }) {
    const hasResetLink = !!resetLink;
    const passwordSection = hasResetLink
        ? `<div style="color: #1e293b; font-size: 14px;">Haz clic abajo para crearla 👇</div>`
        : `<div style="color: #1e293b; font-size: 14px;">Haz clic en el botón verde de abajo para crearla</div>`;

    const ctaLink = resetLink || 'https://aulagenia.cl/acceso.html';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
 <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-top: 40px; margin-bottom: 40px;">
    <!-- Header PRO -->
    <div style="background: linear-gradient(135deg, #0d9488 0%, #065f5b 100%); padding: 40px 0; text-align: center;">
        <p style="color: #a7f3d0; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">🎉 Nivel PRO Desbloqueado</p>
        <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 800;">¡Bienvenido/a al Arsenal Experto!</h1>
        <p style="color: #99f6e4; margin: 10px 0 0 0; font-size: 16px;">Acceso vitalicio confirmado.</p>
    </div>

    <div style="padding: 40px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hola <strong style="color: #0d9488;">${name}</strong>,</p>
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Es un honor darte la bienvenida al <strong style="color: #1e293b;">Pack PRO: Starter + Arsenal Experto</strong>. A partir de este momento, tienes <strong style="color: #0d9488;">acceso vitalicio</strong> a las herramientas que transformarán tu productividad.</p>

        <!-- Highlight Box PRO -->
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ccfbf1 100%); border-left: 4px solid #0d9488; padding: 15px; margin: 25px 0; border-radius: 4px;">
            <p style="margin: 0; color: #065f5b; font-size: 14px; font-weight: 600;">✨ Tu acceso PRO a la Bóveda de Recursos ya ha sido sincronizado.</p>
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
                        <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 600;">${email}</p>
                    </td>
                </tr>
                <tr>
                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                        <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">🔐 Tu Contraseña</p>
                        ${passwordSection}
                    </td>
                </tr>
            </table>
            <div style="text-align: center; margin-top: 25px;">
                <a href="${ctaLink}" style="background: linear-gradient(135deg, #0d9488 0%, #065f5b 100%); color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);">🔐 Crear mi Contraseña y Acceder</a>
            </div>
            ${hasResetLink ? '<p style="color: #94a3b8; font-size: 13px; margin-top: 15px; text-align: center;">(Este enlace es único y seguro)</p>' : ''}
        </div>

        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px;">📦 Tu Arsenal PRO Completo:</h3>

        <!-- Item Ruta -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">🗺️</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Tu Ruta de Transformación: Fases 1-5</strong>
                        <span style="color: #64748b; font-size: 14px;">El camino paso a paso. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ingresa al Campus aquí</a></span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- Item Prompts -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">✅</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">+150 Casos Aplicados</strong>
                        <div style="color: #64748b; font-size: 14px; margin-bottom: 4px;">Tu biblioteca de instrucciones lista para copiar y pegar en ChatGPT, Claude y Gemini.</div>
                        <div style="font-size: 13px;">
                            <a href="https://aulagenia.cl/campus-curso-ia.html#modulo5" style="color: #0d9488; text-decoration: none; font-weight: 600;">👉 Acceder a los Casos</a><br>
                            <a href="https://aulagenia.cl/campus.html?download=pdf" style="color: #0d9488; text-decoration: none; font-weight: 600;">📥 Descargar PDF (Auto-descarga)</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <!-- PRO BONUSES -->
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 15px; margin-bottom: 15px; border: 1px solid #fcd34d;">
            <p style="margin: 0 0 10px 0; color: #92400e; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">⭐ Bonus PRO Exclusivo</p>
        </div>

        <!-- Item LinkedIn -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">💼</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Masterclass LinkedIn Pro</strong>
                        <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- Item Visual -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">👁️</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Taller Visual: Piensa en Imágenes</strong>
                        <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- Item Guia -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">📘</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Guía de Consulta Rápida</strong>
                        <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- Item Licencia -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">💎</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Licencia Permanente de Arquitecto</strong>
                        <span style="color: #64748b; font-size: 14px;">Tu entrada a la plataforma y todas sus actualizaciones futuras, sin suscripciones.</span>
                    </td>
                </tr>
            </table>
        </div>

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
</html>`;
}

/**
 * Unified Welcome Email Sender
 * Automatically selects PRO or Starter template based on isPro flag or paidAmount
 */
async function sendUnifiedWelcomeEmail({ email, name, isPro, paidAmount, resetLink, mailjetClient }) {
    // Auto-detect isPro from paidAmount if not explicitly provided
    const isProUser = isPro !== undefined ? isPro : (paidAmount >= 14000);

    const template = isProUser
        ? getEmailTemplatePRO({ name, email, resetLink })
        : getEmailTemplateStarter({ name, email, resetLink });

    const subjectLine = isProUser
        ? '¡Bienvenido/a al Nivel PRO! - Acceso Confirmado'
        : 'Bienvenido/a a Aula GenIA - Acceso Confirmado';

    const courseName = isProUser
        ? 'Pack PRO (Starter + Arsenal Experto)'
        : 'Pack Starter: +100 Master Prompts';

    console.log(`📧 Sending ${isProUser ? 'PRO' : 'Starter'} email to:`, email);

    try {
        const result = await mailjetClient.post('send', { version: 'v3.1' }).request({
            Messages: [{
                From: {
                    Email: 'contacto@aulagenia.cl',
                    Name: 'Aula GenIA'
                },
                To: [{
                    Email: email,
                    Name: name
                }],
                Bcc: [{
                    Email: 'bmeryu@gmail.com',
                    Name: 'Admin'
                }, {
                    Email: 'hola@aulagenia.cl',
                    Name: 'Hola Aula GenIA'
                }],
                Subject: subjectLine,
                HTMLPart: template,
                TextPart: `¡Hola ${name}! Acceso Confirmado a ${courseName}.\n\nUsuario: ${email}\n${resetLink ? 'Link de Acceso: ' + resetLink : ''}\n\nIngresa a https://aulagenia.cl/acceso.html`
            }]
        });

        console.log('✅ Email enviado OK:', email);
        return { success: true, result };
    } catch (err) {
        console.error('❌ Error enviando email:', err);
        throw err;
    }
}

module.exports = {
    getEmailTemplateStarter,
    getEmailTemplatePRO,
    sendUnifiedWelcomeEmail
};
