<template lang="">
    <section class="banner extra-spacing">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">Technology first.</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">The core ethos of Monty Capital revolves
                    around being a technology-first company.</p>
                <div data-aos="fade-up" data-aos-delay="300">
                    <button class="button">Get Started</button>
                </div>
            </div>
        </div>

        <div class="approach">
            <div class="container">
                <span class="subheading" data-aos="fade-up">Outdated Approach</span>
                <p class="description" data-aos="fade-up">Time consuming and inefficient</p>

                <picture class="outdated-approach" data-aos="fade-up">
                    <source srcset="public/images/new-approach-mobile.png" media="(max-width: 767.98px)" />
                    <source srcset="public/images/outdated-approach-desktop.png" media="(min-width: 768px)" />
                    <img src="public/images/outdated-approach-desktop.png" alt="Outdated Approach"
                        class="w-full md:w-1/2 mx-auto" />
                </picture>

                <picture class="new-approach" data-aos="fade-up">
                    <source srcset="public/images/new-approach-mobile.png" media="(max-width: 767.98px)" />
                    <source srcset="public/images/new-approach-desktop.png" media="(min-width: 768px)" />
                    <img src="public/images/new-approach-desktop.png" alt="New Approach" class="w-full" />
                </picture>
            </div>
        </div>
    </section>

    <section class="key-benefits">
        <div class="container">
            <div class="wrapper">
                <div class="card">
                    <h2 class="heading">Efficiency Grain</h2>

                    <ul class="list">
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Automation of Repetitive Tasks</span>
                        </li>
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Real-time Data Analysis</span>
                        </li>
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Improved Collaboration and Communication and Enhanced Process Integration</span>
                        </li>
                    </ul>
                </div>

                <div class="card">
                    <h2 class="heading">Time Savings</h2>

                    <ul class="list">
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Quick Access to information</span>
                        </li>
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Automated Workflows and Processes</span>
                        </li>
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Enhanced Project Management</span>
                        </li>
                        <li class="item">
                            <Icon name="material-symbols:check-rounded" class="text-3xl" />
                            <span>Data Centralization and Accessibility</span>
                        </li>
                    </ul>
                </div>

                <div class="card table">
                    <h2 class="heading">Tech Stack</h2>

                    <div class="list">
                        <div class="item">
                            <span>Data Analytics</span>
                            <span>Reporting</span>
                        </div>
                        <hr />
                        <div class="item">
                            <span>Marketing Automation</span>
                            <span>Sales</span>
                        </div>
                        <hr />
                        <div class="item">
                            <span>Communication Tools</span>
                            <span>CRM</span>
                        </div>
                        <hr />
                        <div class="item">
                            <span>Project Managment</span>
                            <span>Investor Relations</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="internation-tmt">
        <div class="container">
            <div class="wrapper" data-aos="fade-up">
                <div class="left">
                    <NuxtPicture priority format="webp,avif" :src="`images/monty-mobile-1.png`" class="image"
                        :imgAttrs="{class:'w-full'}" />
                    <h2 class="heading">Backed By An International TMT</h2>
                </div>
                <p class="right"><span class="font-bold text-2xl">Successful Track
                        Record</span><br /><br /><br />Monty Capital is backed by
                    a leading global TMT-focused conglomerate Monty Group, with board members offering valuable
                    experience in Fintech, Payments and eCommerce.</p>
            </div>
        </div>
    </section>

    <section class="mm-international-presence">
        <div class="container">
            <div class="wrapper">
                <h2 class="heading">Monty Mobile's International Persence</h2>
                <h3 class="subheading">Founded in 1998</h3>

                <div class="item">
                    <div class="left">
                        <div>
                            <div class="number">01</div>
                            <p class="description">Leading application to person (“A2P”) SMS, VAS & telecom solutions
                                provider and an
                                international SMS wholesale intermediary hub</p>
                        </div>
                        <div>
                            <div class="number">02</div>
                            <p class="description">Connections with 1000+ Mobile Operators (MNOs) and aggregators</p>
                        </div>
                    </div>
                    <div class="right">
                        <NuxtPicture priority format="webp,avif" :src="`images/mm-international-presence-1.png`"
                            class="image" :imgAttrs="{class:'w-full'}" />
                    </div>
                </div>

                <div class="item">
                    <div class="left lg:order-2">
                        <div>
                            <div class="number">03</div>
                            <p class="description">Headquartered in London</p>
                        </div>
                        <div>
                            <div class="number">04</div>
                            <p class="description">Engaged with 30+ MNOs as preferred partner</p>
                        </div>
                        <div>
                            <div class="number">05</div>
                            <p class="description">GSM licensed</p>
                        </div>
                    </div>
                    <div class="right lg:order-1">
                        <NuxtPicture priority format="webp,avif" :src="`images/mm-international-presence-2.png`"
                            class="image" :imgAttrs="{class:'w-full'}" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mm-map">
        <div class="container">
            <div class="wrapper">
                <h2 class="heading">Global TMT Player - MontyMobile</h2>
                <h3 class="subheading">19 Countries</h3>

                <Map class="map" />
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'About Us',
        description: '',

        ogTitle: 'About Us',
        ogDescription: '',
        ogImage: '/assets/images/share-image-about-us.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })
</script>

<style>
</style>