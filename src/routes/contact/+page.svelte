<script lang="ts">
    import "$lib/contact.css"

    let firstName = '';
    let lastName = '';
    let email = '';
    let phone = '';
    let description = '';

    async function handleSubmit() {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, phone, description }),
        });

        const result = await response.json();
        if (result.success) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    }
</script>

<div class="bottom-background">
    <form on:submit={handleSubmit} class="contact-form">
        <h2>Contact</h2>

        <input type="text" id="firstName" placeholder="First Name" bind:value={firstName} required />
        <input type="text" id="lastName" placeholder="Last Name" bind:value={lastName} required />
        <input type="email" id="email" placeholder="Email Address" bind:value={email} required />
        <input type="tel" id="phone" placeholder="Phone Number" bind:value={phone} required />
        <textarea id="description" placeholder="Description" bind:value={description} required></textarea>
  
        <button type="submit">Send</button>
    </form>
</div>