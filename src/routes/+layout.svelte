<script lang="ts">
    import "$lib/app.css";
    import "$lib/darklight.css";
    import { page } from '$app/stores';
    import { onMount } from "svelte";

    onMount(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/24fc75aea0.js";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    });

    let activeLink = '';
    $: activeLink = $page.url.pathname;

    function getWidth(activeLink: string): number {
        if (activeLink === '/gallery') return 96;
        if (activeLink === '/contact') return 102;
        if (activeLink === '/about') return 88;
        return 0;
    }

    function getLeftPosition(activeLink: string): number {
        if (activeLink === '/gallery') return 20; 
        if (activeLink === '/contact') return 273;
        if (activeLink === '/about') return 532;
        return 0
    }
</script>

<div class="topbar-container">
    <div class="logo">
        <a href="./">
            <img src="Placeholder_logo.png" alt="Yost Designs Logo" class="logo-img" />
        </a>
    </div>
    <div class="topbar">
        <h2>
            <a href="./gallery" class="nav-link" id="gallery-link"
                class:active={$page.url.pathname === '/gallery'}>Gallery</a>
        </h2>
        <h2>
            <a href="./contact" class="nav-link" id="contact-link"
                class:active={$page.url.pathname === '/contact'}>Contact</a></h2>
        <h2>
            <a href="./about" class="nav-link" id="about-link"
                class:active={$page.url.pathname === '/about'}>About</a>
        </h2>
        <div class="highlight-bar" style="left: {getLeftPosition(activeLink)}px; width: {getWidth(activeLink)}px;"></div>
    </div>
    <div class="mode">
        <select>
            <option value="light">lightmode</option>
            <option value="dark">darkmode</option>
        </select>
    </div>
</div>

<div id="page-container" class="page-container" class:hidden={$page.url.pathname === '/contact'}>
    <slot />
</div>

<footer>

    <div class="footer-left">
        <p>2025 Yost Designs</p>
        <a href="tel:+4023068681">📞 (402) 306-8681</a>
        <a href="mailto:Byostdesigns@gmail.com">📭 Byostdesigns@gmail.com</a>
    </div>
    <div class="socials">
        <a href="./" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="./" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
        <a href="./" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        <a href="./" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
    </div>
</footer>