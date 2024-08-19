<template lang="">
    <section class="banner">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">Contact us</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">We're here to help</p>
            </div>
        </div>
    </section>

    <section class="startup-application-form">
        <div class="container">
            <div class="wrapper">
                <h2 class="heading" data-aos="fade-up" data-aos-delay="100">Start-Up Application Form</h2>
                <p class="description" data-aos="fade-up" data-aos-delay="200">Please complete this form to connect with
                    us.</p>

                <div data-aos="fade-up" data-aos-delay="300">
                    <button class="button">Fill The Form</button>
                </div>
            </div>
        </div>
    </section>

    <section class="map">
        <div class="container">
            <div class="wrapper">
                <div class="left">
                    <h2 class="heading" data-aos="fade-up">Reach out to us</h2>

                    <div class="details">
                        <div class="item" v-for="(detail, index) in detailsList" :key="index" data-aos="fade-right"
                            :data-aos-delay="(index + 1) * 100">
                            <span v-html="detail.icon">
                            </span>
                            <p>{{ detail.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="right" data-aos="fade-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.3788250402363!2d55.27469805765017!3d25.205100323363887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4285a63e8017%3A0xc95d5017c9fa72ba!2sCentral%20Park%20Towers%20Offices!5e0!3m2!1sen!2slb!4v1723637061199!5m2!1sen!2slb"
                        width="100%" height="300px" allowfullscreen="" loading=" lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    useSeoMeta({
        title: 'Contact Us',
        description: '',

        ogTitle: 'Contact Us',
        ogDescription: '',
        ogImage: '/assets/images/share-image-contact-us.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const detailsList = [
        { description: "Unit 30, floor 20, Central Park Tower. DIFC, Dubai.", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { description: "Monday to Friday from 9:00 AM to 5:00 PM", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { description: "montycapital@email.com", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { description: "00 971 4 565 7743", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
    ];
</script>

<style lang="sass">

</style>