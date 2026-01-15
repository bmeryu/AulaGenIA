/**
 * CRO Telemetry Script for Aula GenIA
 * Tracks granular user behavior for conversion rate optimization.
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 CRO Telemetry Loaded");

    // --- Helper: Safe GTAG ---
    const sendEvent = (eventName, params) => {
        if (typeof gtag === 'function') {
            gtag('event', eventName, params);
            // console.log(`📡 Event Sent: ${eventName}`, params);
        } else {
            console.warn("⚠️ GTAG not found. Event dropped:", eventName);
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
    });

    // --- 2. Video Engagement (Hero Video) ---
    const video = document.querySelector("#hero-video video");
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

    // --- 3. Form Interaction & Abandonment ---
    const checkoutForm = document.getElementById("checkout-form");
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

        // Detect abandonment (simple page unload check if form started but not submitted)
        // Note: Tracking actual abandonment reliably is tricky, focus/start is a good proxy.
    }

    // --- 4. CTA Click Tracking ---
    document.addEventListener("click", (e) => {
        const btn = e.target.closest("button, a");
        if (!btn) return;

        // Hero CTA
        if (btn.id === "hero-cta-button") {
            sendEvent('click_cta_hero', { 'event_category': 'Conversion', 'event_label': 'Hero Section Button' });
        }

        // Sticky/Nav CTA (if exists)
        if (btn.classList.contains("sticky-cta")) { // Assuming a class for sticky
            sendEvent('click_cta_sticky', { 'event_category': 'Conversion', 'event_label': 'Sticky Header Button' });
        }

        // Order Bump Toggle
        if (btn.closest("#bump-checkbox") || btn.closest(".order-bump-container")) {
            // Let the toggle logic handle the UI, we just track intention
            // This might fire multiple times, so be careful. 
            // Better to track the final submission state in the main script.
        }
    });
});
