<script>
    import "$lib/gallery.css";
    import { onMount } from "svelte";

    let images = [
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg",
        "Car.jpeg", "Flowers.jpeg", "Water.jpeg", "Car.jpeg", "Flowers.jpeg", "Water.jpeg"
    ];

    onMount(() => {
        const blocks = document.querySelectorAll('.block');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        blocks.forEach((block) => observer.observe(block));
    });
</script>

<div class="gallery">
    {#each images as img}
        <div class="block">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src={img} alt="Gallery Image" class="gallery-image" />
        </div>
    {/each}
</div>