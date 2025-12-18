function bgGlow(): void {
    const body: HTMLElement = document.body;
    const overlay: HTMLElement | null = document.querySelector<HTMLElement>(".overlay");

    function applyOverlayMask(e: PointerEvent): void {
        if (!overlay) return;
        const rect: DOMRect = body.getBoundingClientRect();
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;

        overlay.style.setProperty("--opacity", "1");
        overlay.style.setProperty("--x", `${x}px`);
        overlay.style.setProperty("--y", `${y}px`);
    }

    function hideMask(): void {
        if (!overlay) return;
        overlay.style.setProperty("--opacity", "0");
    }

    document.addEventListener("pointermove", applyOverlayMask, { passive: true });
    document.addEventListener("pointerleave", hideMask);
}

document.addEventListener("astro:page-load", bgGlow);