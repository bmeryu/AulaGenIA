/**
 * CRO Telemetry Script for Aula GenIA
 * Tracks granular user behavior for conversion rate optimization.
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 CRO Telemetry Loaded");

    // --- Helper: Safe GTAG ---
    // Robust wrapper to ensure events are sent even if gtag is not fully defined yet
    const sendEvent = (eventName, params) => {
        try {
            if (typeof gtag === 'function') {
                gtag('event', eventName, params);
                // console.log(`📡 Event Sent: ${eventName}`, params);
            } else if (window.dataLayer) {
                // Fallback: Push direct to dataLayer if gtag function is missing but GTM is there
                window.dataLayer.push({
                    'event': eventName,
                    ...params
                });
                console.log(`📡 Event Pushed to DL: ${eventName}`, params);
            } else {
                console.warn("⚠️ GA4/GTM not found. Event dropped:", eventName);
            }
        } catch (e) {
            console.error("Telemetry Error:", e);
        }
    };

    // --- 1. Scroll Depth Tracking ---
    let maxScroll = 0;
    const scrollMilestones = { 25: false, 50: false, 75: false, 90: false };

    document.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScroll) maxScroll = scrollPercent;

        Object.keys(scrollMilestones).forEach(milestone => {
            if (!scrollMilestones[milestone] && scrollPercent >= milestone) {
                scrollMilestones[milestone] = true;
                sendEvent(`scroll_depth_${milestone}`, {
                    'event_category': 'Engagement',
                    'event_label': `Scrolled ${milestone}%`
                });
            }
        });
    }, { passive: true }); // Optimized for performance

    // --- 2. Video Engagement (Hero Video) ---
    const videoContainer = document.getElementById("hero-video");
    const video = videoContainer ? videoContainer.querySelector("video") : null;

    if (video) {
        let videoStarted = false;
        let progress10 = false;
        let progress50 = false;

        video.addEventListener("play", () => {
            if (!videoStarted) {
                sendEvent('video_start', {
                    'event_category': 'Video VSL',
                    'event_label': 'Hero Video'
                });
                videoStarted = true;
            }
        });

        video.addEventListener("timeupdate", () => {
            if (!video.duration) return;
            const percent = (video.currentTime / video.duration) * 100;

            if (video.currentTime > 10 && !progress10) {
                progress10 = true;
                sendEvent('video_progress_10s', {
                    'event_category': 'Video VSL',
                    'event_label': 'Watched 10s'
                });
            }

            if (percent >= 50 && !progress50) {
                progress50 = true;
                sendEvent('video_progress_50', {
                    'event_category': 'Video VSL',
                    'event_label': 'Watched 50%'
                });
            }
        });

        video.addEventListener("ended", () => {
            sendEvent('video_complete', {
                'event_category': 'Video VSL',
                'event_label': 'Completed'
            });
        });
    }

    // --- 3. Form Interaction & Abandonment (INLINE FORM) ---
    // Targets the visible form: #inline-checkout-form
    const checkoutForm = document.getElementById("inline-checkout-form");

    if (checkoutForm) {
        const emailInput = document.getElementById("inline-email");
        let formStarted = false;

        if (emailInput) {
            emailInput.addEventListener("focus", () => {
                if (!formStarted) {
                    sendEvent('form_start', {
                        'event_category': 'Form',
                        'event_label': 'Checkout Form Initiated'
                    });
                    formStarted = true;
                }
            });

            emailInput.addEventListener("blur", () => {
                if (emailInput.value.length > 0 && !emailInput.value.includes('@')) {
                    sendEvent('form_error', {
                        'event_category': 'Form',
                        'event_label': 'Invalid Email Format'
                    });
                }
            });
        }
    }

    // --- 4. CTA Click Tracking ---
    document.addEventListener("click", (e) => {
        const btn = e.target.closest("button, a");
        if (!btn) return;

        // Hero CTA
        if (btn.id === "hero-cta-button") {
            sendEvent('click_cta_hero', { 'event_category': 'Conversion', 'event_label': 'Hero Section Button' });
        }

        // Sticky CTA (Mobile)
        if (btn.closest("#mobile-sticky-cta")) {
            sendEvent('click_cta_sticky', { 'event_category': 'Conversion', 'event_label': 'Sticky Mobile Button' });
        }

        // WhatsApp Button
        if (btn.id === "whatsapp-button") {
            sendEvent('click_whatsapp', { 'event_category': 'Contact', 'event_label': 'WhatsApp Float' });
        }

    }, { passive: true });
});
