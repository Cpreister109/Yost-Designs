<script lang="ts">
    import "$lib/app.css";
    import "$lib/darklight.css";
    import { page } from '$app/stores';

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
    <p>2025 Yost Designs</p>
</footer>