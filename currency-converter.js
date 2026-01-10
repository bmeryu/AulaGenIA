async function updateCLPPrice() {
    const e = "aula_genia_clp_rate", t = "aula_genia_clp_time";
    try {
        const o = localStorage.getItem(e), a = localStorage.getItem(t);
        let c;
        if (o && a && Date.now() - parseInt(a) < 3600000)
            c = parseFloat(o);
        else {
            console.log("Fetching new CLP exchange rate...");
            const o = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            if (!o.ok) throw new Error("API request failed");
            c = (await o.json()).rates.CLP,
                localStorage.setItem(e, c.toString()),
                localStorage.setItem(t, Date.now().toString()),
                console.log("Fetched and cached new CLP exchange rate:", c)
        }
        const n = Math.round(20 * c).toLocaleString("es-CL");
        document.querySelectorAll(".clp-price").forEach(e => { e.textContent = `≈ $${n} CLP` });
        document.querySelectorAll(".clp-price-only").forEach(e => { e.textContent = `$${n}` });
        document.querySelectorAll(".clp-price-mobile").forEach(e => { e.textContent = `(~$${n} CLP)` });
    } catch (e) {
        console.error("Error fetching exchange rate:", e);
        document.querySelectorAll(".clp-price").forEach(e => { e.textContent = "≈ $20.000 CLP" });
        document.querySelectorAll(".clp-price-only").forEach(e => { e.textContent = "$20.000" });
        document.querySelectorAll(".clp-price-mobile").forEach(e => { e.textContent = "(~$20.000 CLP)" });
    }
}
"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", updateCLPPrice) : updateCLPPrice();