<template lang="">
    <section class="banner">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">Your strategic partner</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">Transform challenges into successful
                    capital outcomes with Monty Capital.</p>
                <div data-aos="fade-up" data-aos-delay="300">
                    <button class="button">Get Started</button>
                </div>
            </div>
        </div>
    </section>

    <section class="services-section">
        <div class="container">
            <div class="wrapper">
                <div class="image" data-aos="fade-up">
                    <NuxtPicture priority format="webp,avif" :src="`images/your-strategic-partner.png`" class="w-full"
                        :imgAttrs="{class:'w-full'}" />
                </div>
                <p class="description" data-aos="fade-up">
                    At Monty Capital, we recognize that navigating the capital landscape is a complex journey for
                    businesses.<br />
                    Many struggle to become investor-ready, execute impactful roadshows, and negotiate favorable
                    terms.<br />
                    That's where we come in. Our end-to-end capital raising service ensures your company is not only
                    investor-ready but excels in roadshows and negotiations.
                </p>
            </div>
        </div>
    </section>

    <section class="advisory">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Advisory</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="wrapper">
                <div class="item" v-for="(advisory, index) in advisoriesList" :key="index" data-aos="fade-up"
                    :data-aos-delay="(index + 1) * 100">
                    <div v-html="advisory.icon"></div>
                    <h3 class="title">{{ advisory.title }}</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="family-office-diversification-platform">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Family Office Diversification Platform</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="wrapper">
                <p data-aos="fade-right">Private Family Offices and Family Holding Companies face the challenge of managing diverse assets and
                    investments efficiently, leading to missed opportunities and increased risk.<br />
                    Monty Capital introduces a Family Diversification Platform, empowering family offices to streamline
                    asset management, optimize portfolios, and enhance financial resilience. Our tailored platform
                    ensures comprehensive diversification, unlocking new avenues for growth and long-term wealth
                    preservation.</p>

                <NuxtPicture priority format="webp,avif" :src="`images/family-office-diversification-platform.png`"
                    class="w-full" :imgAttrs="{class:'w-full'}" data-aos="fade-left"  />
            </div>
        </div>
    </section>

</template>

<script setup>
    useSeoMeta({
        title: 'Services',
        description: '',

        ogTitle: 'Services',
        ogDescription: '',
        ogImage: '/assets/images/share-image-services.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const advisoriesList = [
        { title: "Equity Advisory", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M41.6667 41.6667V27.0833M25 41.6667V20.8333M8.33334 41.6667L8.33334 33.3333M27.9306 10.474L38.6982 14.5118M22.4975 11.2519L10.8338 19.9996M43.8764 13.4153C45.0968 14.6357 45.0968 16.6143 43.8764 17.8347C42.656 19.0551 40.6774 19.0551 39.457 17.8347C38.2366 16.6143 38.2366 14.6357 39.457 13.4153C40.6774 12.1949 42.656 12.1949 43.8764 13.4153ZM10.5431 19.6653C11.7634 20.8857 11.7634 22.8643 10.5431 24.0847C9.32266 25.3051 7.34402 25.3051 6.12363 24.0847C4.90325 22.8643 4.90325 20.8857 6.12363 19.6653C7.34402 18.4449 9.32266 18.4449 10.5431 19.6653ZM27.2097 7.16529C28.4301 8.38568 28.4301 10.3643 27.2097 11.5847C25.9893 12.8051 24.0107 12.8051 22.7903 11.5847C21.5699 10.3643 21.5699 8.38568 22.7903 7.16529C24.0107 5.9449 25.9893 5.9449 27.2097 7.16529Z' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Mergers and Acquisitions", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.625 22.9167H9.58335C8.41658 22.9167 7.83319 22.9167 7.38754 23.1437C6.99554 23.3435 6.67683 23.6622 6.47709 24.0542C6.25002 24.4998 6.25002 25.0832 6.25002 26.25V43.75M34.375 22.9167H40.4167C41.5835 22.9167 42.1669 22.9167 42.6125 23.1437C43.0045 23.3435 43.3232 23.6622 43.5229 24.0542C43.75 24.4998 43.75 25.0832 43.75 26.25V43.75M34.375 43.75V12.9167C34.375 10.5831 34.375 9.41634 33.9209 8.52504C33.5214 7.74103 32.884 7.10361 32.1 6.70414C31.2087 6.25 30.0419 6.25 27.7084 6.25H22.2917C19.9581 6.25 18.7914 6.25 17.9001 6.70414C17.1161 7.10361 16.4786 7.74103 16.0792 8.52504C15.625 9.41634 15.625 10.5831 15.625 12.9167V43.75M45.8334 43.75H4.16669M22.9167 14.5833H27.0834M22.9167 22.9167H27.0834M22.9167 31.25H27.0834' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Working Capital Management", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.4165 27.0833C10.4165 20.1798 16.013 14.5833 22.9165 14.5833M10.4165 27.0833C10.4165 30.5175 11.8014 33.6282 14.0431 35.8874C14.2593 36.1053 14.3674 36.2142 14.4312 36.319C14.492 36.419 14.5275 36.505 14.5547 36.6189C14.5832 36.7382 14.5832 36.8739 14.5832 37.1455V42.0833C14.5832 42.6667 14.5832 42.9584 14.6967 43.1812C14.7966 43.3772 14.9559 43.5366 15.1519 43.6365C15.3748 43.75 15.6665 43.75 16.2498 43.75H20.2082C20.7916 43.75 21.0833 43.75 21.3061 43.6365C21.5021 43.5366 21.6614 43.3772 21.7613 43.1812C21.8748 42.9584 21.8748 42.6667 21.8748 42.0833V41.25C21.8748 40.6666 21.8748 40.3749 21.9884 40.1521C22.0882 39.9561 22.2476 39.7967 22.4436 39.6969C22.6664 39.5833 22.9581 39.5833 23.5415 39.5833H26.4582C27.0416 39.5833 27.3333 39.5833 27.5561 39.6969C27.7521 39.7967 27.9114 39.9561 28.0113 40.1521C28.1248 40.3749 28.1248 40.6666 28.1248 41.25V42.0833C28.1248 42.6667 28.1248 42.9584 28.2384 43.1812C28.3382 43.3772 28.4976 43.5366 28.6936 43.6365C28.9164 43.75 29.2081 43.75 29.7915 43.75H33.75C34.3334 43.75 34.6251 43.75 34.8479 43.6365C35.0439 43.5366 35.2033 43.3772 35.3031 43.1812C35.4167 42.9584 35.4167 42.6667 35.4167 42.0833V40.0507C35.4167 39.6297 35.4167 39.4192 35.4766 39.2503C35.534 39.0883 35.6064 38.975 35.7291 38.8547C35.8571 38.7292 36.0739 38.6285 36.5077 38.4271C38.5539 37.4771 40.3001 35.9897 41.5648 34.1462C41.7872 33.822 41.8984 33.6599 42.0172 33.5641C42.1307 33.4726 42.2326 33.4189 42.3724 33.3771C42.5185 33.3333 42.692 33.3333 43.039 33.3333H44.1667C44.75 33.3333 45.0417 33.3333 45.2646 33.2198C45.4606 33.1199 45.6199 32.9606 45.7198 32.7646C45.8333 32.5417 45.8333 32.2501 45.8333 31.6667V24.5536C45.8333 23.9982 45.8333 23.7205 45.7301 23.5063C45.6278 23.2937 45.4562 23.1222 45.2437 23.0198C45.0294 22.9167 44.7517 22.9167 44.1963 22.9167C43.7943 22.9167 43.5933 22.9167 43.4314 22.8621C43.2568 22.8032 43.1344 22.725 43.0078 22.5912C42.8903 22.4671 42.7944 22.2597 42.6026 21.8447C41.9871 20.513 41.1441 19.3079 40.1234 18.2792C39.9072 18.0614 39.7991 17.9524 39.7353 17.8477C39.6745 17.7477 39.639 17.6616 39.6118 17.5478C39.5833 17.4285 39.5833 17.2927 39.5833 17.0212V14.7095C39.5833 13.9594 39.5833 13.5844 39.4271 13.3323C39.2903 13.1115 39.0759 12.9497 38.826 12.8788C38.5406 12.7979 38.18 12.9009 37.4588 13.107L32.5159 14.5192C32.432 14.5432 32.3899 14.5552 32.3473 14.5636C32.3093 14.5711 32.271 14.5765 32.2325 14.5797C32.1891 14.5833 32.1451 14.5833 32.0571 14.5833H22.9165M10.4165 27.0833H8.33332C6.03214 27.0833 4.16666 25.2179 4.16666 22.9167C4.16666 21.3744 5.00457 20.0279 6.24999 19.3074M22.9165 14.5833H31.1761C31.2248 14.2431 31.25 13.8953 31.25 13.5417C31.25 9.51459 27.9854 6.25 23.9583 6.25C19.9312 6.25 16.6667 9.51459 16.6667 13.5417C16.6667 14.4108 16.8187 15.2445 17.0977 16.0175C18.8357 15.1017 20.8155 14.5833 22.9165 14.5833Z' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Risk Assessment", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M29.1666 22.9167H16.6666M20.8333 31.25H16.6666M33.3333 14.5833H16.6666M41.6666 20.8333V14.1667C41.6666 10.6663 41.6666 8.91618 40.9854 7.57923C40.3862 6.40321 39.4301 5.44709 38.2541 4.84788C36.9171 4.16667 35.167 4.16667 31.6666 4.16667H18.3333C14.833 4.16667 13.0828 4.16667 11.7459 4.84788C10.5699 5.44709 9.61373 6.40321 9.01452 7.57923C8.33331 8.91618 8.33331 10.6663 8.33331 14.1667V35.8333C8.33331 39.3337 8.33331 41.0838 9.01452 42.4208C9.61373 43.5968 10.5699 44.5529 11.7459 45.1521C13.0828 45.8333 14.833 45.8333 18.3333 45.8333H26.0416M37.5 43.75C37.5 43.75 43.75 40.771 43.75 36.3026V31.0893L39.1925 29.4608C38.0975 29.0686 36.9 29.0686 35.805 29.4608L31.25 31.0893V36.3026C31.25 40.771 37.5 43.75 37.5 43.75Z' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Capital Raise", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M35.4167 18.75L24.0952 30.0715C23.6827 30.484 23.4764 30.6903 23.2386 30.7675C23.0293 30.8355 22.804 30.8355 22.5948 30.7675C22.3569 30.6903 22.1507 30.484 21.7382 30.0715L17.8452 26.1785C17.4327 25.766 17.2264 25.5597 16.9886 25.4825C16.7793 25.4145 16.554 25.4145 16.3448 25.4825C16.1069 25.5597 15.9007 25.766 15.4882 26.1785L6.25 35.4167M35.4167 18.75H27.0833M35.4167 18.75V27.0833M16.25 43.75H33.75C37.2503 43.75 39.0005 43.75 40.3374 43.0688C41.5135 42.4696 42.4696 41.5135 43.0688 40.3374C43.75 39.0005 43.75 37.2503 43.75 33.75V16.25C43.75 12.7497 43.75 10.9995 43.0688 9.66256C42.4696 8.48655 41.5135 7.53042 40.3374 6.93121C39.0005 6.25 37.2503 6.25 33.75 6.25H16.25C12.7497 6.25 10.9995 6.25 9.66256 6.93121C8.48655 7.53042 7.53042 8.48655 6.93121 9.66256C6.25 10.9995 6.25 12.7497 6.25 16.25V33.75C6.25 37.2503 6.25 39.0005 6.93121 40.3374C7.53042 41.5135 8.48655 42.4696 9.66256 43.0688C10.9995 43.75 12.7497 43.75 16.25 43.75Z' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
        { title: "Corporate Restructuring", icon: "<svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M43.75 10.4167C43.75 13.8684 35.3553 16.6667 25 16.6667C14.6447 16.6667 6.25 13.8684 6.25 10.4167M43.75 10.4167C43.75 6.96488 35.3553 4.16666 25 4.16666C14.6447 4.16666 6.25 6.96488 6.25 10.4167M43.75 10.4167V39.5833C43.75 43.0417 35.4167 45.8333 25 45.8333C14.5833 45.8333 6.25 43.0417 6.25 39.5833V10.4167M43.75 25C43.75 28.4583 35.4167 31.25 25 31.25C14.5833 31.25 6.25 28.4583 6.25 25' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>" },
    ];
</script>

<style lang="sass">

</style>