function bgGlow() {
    const body = document.body;
    const overlay = document.querySelector(".overlay");

    // update overlay position and visibility based on pointer location
    function applyOverlayMask(e) {
        const rect = body.getBoundingClientRect();
        // using clientX/Y minus the target’s getBoundingClientRect(), so the glow stays aligned to the overlay
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // pass cursor position and opacity to CSS vars
        overlay.style.setProperty("--opacity", "1");
        overlay.style.setProperty("--x", `${x}px`);
        overlay.style.setProperty("--y", `${y}px`);
    }

    // hide glow when the pointer leaves the page
    function hideMask() {
        overlay.style.setProperty("--opacity", "0");
    }

    // track pointer movement and exit events
    document.addEventListener("pointermove", applyOverlayMask, { passive: true });
    document.addEventListener("pointerleave", hideMask);
}

document.addEventListener("astro:page-load", bgGlow);


