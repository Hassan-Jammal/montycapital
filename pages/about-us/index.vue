<template lang="">
    <div>
        <Hero 
            title="About us"
            paragraph="With our extensive coverage, you can confidently expand their reach and serve customers in diverse markets without any barriers."
            image="about-us"
            hero="111"
        />

        <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col">
                    <div class="w-full lg:w-2/3 pl-0 lg:pl-28">
                        <ContentBlock 
                            title="MontyPay is a global payment service provider"
                            paragraph="Pioneering cutting-edge solutions across the world. Think of us as the unrivaled conductor orchestrating international financial prowess!"
                        />
                        <ContentBlock
                            class="mt-10"
                            title="Based in the UK"
                            paragraph="Our headquarters are merely the tip of the iceberg. Our payment dominion stretches across the globe, with strategic outposts in Lebanon, Jordan, the UAE, Indonesia, and Nigeria, ensuring our proximity to where currencies clash and transactions flare."
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 py-8 lg:py-16 bg-[#f6f6f6]" style="background-image: url('images/lines.svg')">
            <div class="container">
                <ContentBlock
                    class="text-center lg:w-1/2 mx-auto"
                    title="Our Offices"
                    paragraph="We offer a wide range of 100+ payment methods that cover Middle East, Asia, Europe and America."
                />
            </div>
            <div class="w-full md:w-3/4 mx-auto mt-16 lg:mt-32">
                <Map />
            </div>
        </section>

        <section id="section-5" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col">
                    <div class="w-full lg:w-2/3 pl-0 lg:pl-28">
                        <ContentBlock 
                            title="Our secret?"
                            paragraph="Envision a symphony of flawlessly executed online transactions, a choreography of clicks and swipes gliding effortlessly through 50+ countries, embracing payment methods as diverse as a palette of colours.<br /><br />We offer a wide range of 100+ payment methods that cover Middle East, Asia, Europe and America."
                        />
                        <ContentBlock
                            class="mt-10"
                            title="This isn’t just business"
                            paragraph="It's a world of financial finesse! MontyPay doesn't talk the talk; our track record of triumph speaks volumes. While others stumble with their wallets, we elevate your whole payment experience!"
                        />

                        <ContentBlock
                            class="mt-10"
                            title=""
                            paragraph="Our services encompass an end-to-end solution, spanning from E-Commerce development, content management, order fulfilment, and social media mastery, all the way to cutting-edge payment solutions and beyond. If you're eager to uncover your business's next stride, connect with us at: info@montypay.com"
                        />
                    </div>
                </div>
                <div class="mt-16 lg:mt-36 overflow-hidden w-full p-10 md:p-20 text-white text-center bg-[url('/images/connect-with-us-bg.png')] bg-cover bg-no-repeat rounded-lg">
                    <Blob />
                    <div class="lg:w-1/2 mx-auto">
                        <ContentBlock subtitle="If you're eager to uncover your business's next stride" />
                        <ContentBlock title="Connect with us at" class="mt-5" />
                        <a class="mp-button-secondary mx-auto mt-5" href="mailto:info@montypay.com">info@montypay.com</a>
                    </div>
                </div>
                <div class="mt-16 lg:mt-20 flex-col flex gap-5 lg:px-20">
                    <div class="group w-full bg-[#f6f6f6] p-10 rounded-lg text-center flex flex-col gap-5 items-center transition hover:bg-quaternary hover:text-white">
                        <div class="w-[118px] h-[118px] border-[3px] border-black  group-hover:border-white rounded-full flex items-center justify-center">
                            <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-white" d="M2.83123 20.6494C2.51613 20.1505 2.35858 19.901 2.27039 19.5162C2.20414 19.2272 2.20414 18.7714 2.27039 18.4824C2.35858 18.0976 2.51613 17.8481 2.83123 17.3492C5.43511 13.2262 13.1858 2.80322 24.9974 2.80322C36.8089 2.80322 44.5596 13.2262 47.1635 17.3492C47.4786 17.8481 47.6362 18.0976 47.7244 18.4824C47.7906 18.7714 47.7906 19.2272 47.7244 19.5162C47.6362 19.901 47.4786 20.1505 47.1635 20.6494C44.5596 24.7724 36.809 35.1954 24.9974 35.1954C13.1858 35.1954 5.43511 24.7724 2.83123 20.6494Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="group-hover:stroke-[#00DFDF]" d="M24.9974 25.9405C28.8309 25.9405 31.9385 22.8328 31.9385 18.9993C31.9385 15.1658 28.8309 12.0581 24.9974 12.0581C21.1639 12.0581 18.0562 15.1658 18.0562 18.9993C18.0562 22.8328 21.1639 25.9405 24.9974 25.9405Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <ContentBlock
                            class="lg:w-1/2"
                            title="Our vision"
                            paragraph="To offer a simple global payment gateway to all merchants. To provide merchants with the best payment gateway experience."
                        />
                    </div>
                    <div class="group w-full bg-[#f6f6f6] p-10 rounded-lg text-center flex flex-col gap-5 items-center hover:bg-quaternary hover:text-white">
                        <div class="w-[118px] h-[118px] border-[3px] border-black group-hover:border-white rounded-full flex items-center justify-center">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#00DFDF]" d="M4.63917 37.36L11.1834 30.8158M30.816 11.1832L37.3602 4.639M30.816 30.8158L37.3602 37.36M4.63917 4.639L11.1834 11.1832M7.91128 34.0879C0.682748 26.8594 0.682748 15.1396 7.91128 7.9111C15.1398 0.682577 26.8596 0.682575 34.0881 7.9111C41.3166 15.1396 41.3166 26.8594 34.0881 34.0879C26.8596 41.3164 15.1398 41.3164 7.91128 34.0879ZM16.0915 25.9077C13.3808 23.197 13.3808 18.8021 16.0915 16.0914C18.8022 13.3807 23.1971 13.3807 25.9078 16.0914C28.6185 18.8021 28.6185 23.197 25.9078 25.9077C23.1971 28.6184 18.8022 28.6184 16.0915 25.9077Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                        <ContentBlock
                            class=""
                            title="Our mission"
                            paragraph="MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience. MontyPay is here to help all merchants capitalize on their global business by supporting worldwide currencies and different payment types."
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section id="section-6" class="mt-16 lg:mt-36 pt-16 pb-36 min-h-screen w-full">
            <div class="text-center mb-10 lg:sticky lg:top-1/2">
                <div class="container">
                    <h1 class="sm:text-2xl md:text-5xl lg:text-7xl">CORE VALUES</h1>
                </div>
            </div>

            <div class="container">
                <div class="grid lg:grid-cols-2 gap-10 lg:gap-56">
                    <div v-for="(value, index) in values" :key="value.id" :class="(index%2)==0 ? 'lg:pt-32' : ''">
                        <div class="bg-quaternary rounded-lg px-10 lg:px-16 py-7 lg:py-10 text-white text-center">
                            <ContentBlock :title="value.title" />
                            <hr class="my-5 block w-full h-[1px] bg-[#d9d9d9] opacity-30" />
                            <ContentBlock :paragraph="value.description" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script setup>

import { register } from 'swiper/element/bundle';
register();

useSeoMeta({
    title: 'White Label For PSP/Acquirer',
    ogTitle: 'White Label For PSP/Acquirer',
    description: 'White Label For PSP/Acquirer description',
    ogDescription: 'White Label For PSP/Acquirer description',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});

const values = [
    {
        id: 1,
        title: "Transparency",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience."
    },
    {
        id: 2,
        title: "Innovation",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience."
    },
    {
        id: 3,
        title: "Flexibility",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience."
    },
    {
        id: 4,
        title: "Honesty & Integrity",
        description: "MontyPay facilitates payments in the simplest, yet most secure way, understanding the merchants’ needs & difficulties, and optimizing the customer experience."
    },
]

const solutions_items = [
    {
        title: 'Payment Gateway'
    },
    {
        title: 'Merchant Management System'
    },
    {
        title: 'Merchant Mobile App'
    },
    {
        title: 'QR Code Self Service Checkout'
    }
]

const merchant_items = [
    {
        title: 'Track transactions and monitor revenue'
    },
    {
        title: 'Send invoice links'
    },
    {
        title: 'Utilize the pay-by-link feature for convenient payments  anytime, anywhere'
    },
    {
        title: 'Request support'
    },
    {
        title: 'Customize payment options based on client needs'
    },
    {
        title: 'Display QR codes for efficient payments at your physical location'
    },
    {
        title: 'Collect payments easily with the QR pay feature'
    },
]

const connectors = [
    {
        image: 'google.svg'
    },
    {
        image: 'shopify.svg'
    },
    {
        image: 'netflix.svg'
    },
    {
        image: 'creative-market.svg'
    },
    {
        image: 'dropbox.svg'
    },
    {
        image: 'evernote.svg'
    },
    {
        image: 'spotify.svg'
    },
    {
        image: 'asana.svg'
    },
    {
        image: 'airbnb.svg'
    },
    {
        image: 'youtube.svg'
    },

]

const activeTab = ref(0);

const show = (index) => {
    activeTab.value = index;
};
</script>

<style lang="sass">
    .swiper-scrollbar-drag 
        @apply bg-quaternary h-full rounded-full
</style>