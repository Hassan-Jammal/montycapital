<template lang="">
    <section class="banner extra-spacing">
        <div class="container">
            <div class="wrapper">
                <h1 class="heading" data-aos="fade-up" data-aos-delay="100">A team focused on growth and progress.</h1>
                <p class="description" data-aos="fade-up" data-aos-delay="200">We are based around the globe but share
                    one drive.</p>
            </div>
        </div>
    </section>

    <section class="board-members">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Monty Capital Board Members</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="wrapper">
                <div class="item" v-for="(boardMember, index) in boadMembersList" :key="index" data-aos="fade-up"
                    :data-aos-delay="(index + 1) * 100">
                    <NuxtPicture priority format="webp,avif" :src="`images/${boardMember.image}.png`" class="w-full"
                        :imgAttrs="{class:'w-full'}" />
                    <h3 class="heading">{{ boardMember.name }}</h3>
                    <h4 class="title" v-html="boardMember.title"></h4>
                </div>
            </div>
        </div>
    </section>

    <section class="team-members">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Monty Capital Team</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>

            <div class="wrapper">
                <div class="item" v-for="(teamMember, index) in teamMembersList" :key="index">
                    <div class="top">
                        <div class="left" data-aos="fade-right">
                            <div>
                                <h3 class="heading">{{ teamMember.name }}</h3>
                                <h4 class="title">{{ teamMember.title }}</h4>
                            </div>
                            <NuxtPicture priority format="webp,avif" :src="`images/${teamMember.image}.png`"
                                class="image" :imgAttrs="{class:'w-full'}" />
                            <div class="description">
                                <p v-html="teamMember.description"></p>
                                <button class="button">
                                    <a href="">Read More</a>
                                </button>
                            </div>
                        </div>
                        <div class="right" data-aos="fade-left">
                            <NuxtPicture priority format="webp,avif" :src="`images/${teamMember.image}.png`"
                                class="image w-full" :imgAttrs="{class:'w-full'}" />
                        </div>
                    </div>
                    <div class="bottom" data-aos="fade-up">
                        <div class="experience">
                            <NuxtPicture v-for="(experience, index) in teamMember.experience" :key="index"
                                data-aos="fade-up" :data-aos-delay="(index + 1) * 100" priority format="webp,avif"
                                :src="`images/${experience.image}.png`" class="w-full" :imgAttrs="{class:'w-full'}" />
                        </div>

                        <div class="info">
                            <div class="mobile">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <span>{{ teamMember.mobile }}</span>
                            </div>
                            <div class="email">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.9863 18.5934L15.3507 12.5854M9.63639 12.5785L2.98634 18.5705M2.49956 7.5699L10.6576 13.2952C11.3182 13.7588 11.6485 13.9906 12.008 14.0807C12.3255 14.1602 12.6577 14.1606 12.9755 14.0818C13.3352 13.9926 13.666 13.7616 14.3277 13.2996L22.4995 7.59399M7.2839 20.5757L17.6839 20.5882C19.364 20.5902 20.2041 20.5912 20.8463 20.265C21.4111 19.9781 21.8706 19.5197 22.1589 18.9556C22.4866 18.3142 22.4876 17.4741 22.4897 15.794L22.4974 9.39399C22.4994 7.71383 22.5004 6.87375 22.1742 6.23163C21.8873 5.66679 21.4289 5.2073 20.8647 4.919C20.2234 4.59125 19.3833 4.59023 17.7032 4.58821L7.30317 4.57568C5.62301 4.57366 4.78294 4.57265 4.14081 4.89885C3.57598 5.18579 3.11648 5.64418 2.82818 6.20832C2.50043 6.84966 2.49942 7.68974 2.49739 9.3699L2.48968 15.7699C2.48766 17.45 2.48665 18.2901 2.81285 18.9323C3.09979 19.4971 3.55818 19.9566 4.12232 20.2449C4.76366 20.5726 5.60374 20.5736 7.2839 20.5757Z"
                                        stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>{{ teamMember.email }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="team-experience">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="heading">Team Experience</h2>
                <div class="icon">
                    <div class="line line1"></div>
                    <div class="tri tri1"></div>
                    <div class="tri tri2"></div>
                    <div class="line line2"></div>
                </div>
            </div>
            <!--  -->
            <div data-aos="fade-up">
                <Swiper class="swiper" :grabCursor="true" :loop="true" :centeredSlides="false" :spaceBetween="50"
                    :slidesPerView="1" :breakpoints="{
                        768: { slidesPerView: 1.5 }, 
                        1024: { slidesPerView: 3, centeredSlides: true  },
                    }" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
                    <SwiperSlide class="" v-for="(teamExperience, index) in teamExperiencesList" :key="index">
                        <div class="top">
                            <NuxtPicture priority format="webp,avif" :src="`images/${teamExperience.image}.png`"
                                class="image" :imgAttrs="{class:'w-full'}" />
                            <span>{{ teamExperience.amount }}</span>
                        </div>
                        <hr />
                        <div class="center">
                            <template v-for="(company, index) in teamExperience.companies" :key="index"
                                data-aos="fade-up">
                                <NuxtPicture priority format="webp,avif" :src="`images/${company.image}.png`"
                                    class="w-full" :imgAttrs="{class:'w-auto mx-auto'}" />
                            </template>
                        </div>
                        <hr />
                        <div class="bottom">
                            <span>{{ teamExperience.industry }}</span>
                            <span>{{ teamExperience.year }}</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'Team',
        description: '',

        ogTitle: 'Team',
        ogDescription: '',
        ogImage: '/assets/images/share-image-team.webp',

        twitterTitle: '',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const boadMembersList = [
        { name: 'Ahmad Tabbara', title: 'Chief Executive Officer<br />Monty Capital', image: 'ahmad-tabbara' },
        { name: 'Mountasser Hachem', title: 'Chief Executive Officer<br />Monty Mobile', image: 'mountasser-hachem' },
        { name: 'Randa Naboulsa', title: 'Chief Financial Officer<br />Monty Mobile', image: 'randa-nabulsi' }
    ]

    const teamMembersList = [
        {
            name: 'Ahmad Tabbara',
            title: 'Chief Executive Officer',
            image: 'ahmad-tabbara-1',
            quote: '',
            description: 'Ahmad is currently at the helm of investment activities and corporate finance advisory at Monty Capital. With a wealth of experience in the Middle East, he has held key positions in various financial institutions in the GCC region. Throughout his career, Ahmad has evaluated numerous tech companies and played a pivotal role in securing funding from strategic players and venture capital firms. Additionally, he actively participates as an angel investor in several tech startups based in the US.<br />Prior to his tenure at Monty Holding, Ahmad served as the Head of Corporate Finance at Capital Investments (DIFC), the investment banking arm of the Capital Bank of Jordan.',
            mobile: '+971 56 740 9067',
            email: 'ahmad.tabbara@montyholding.com',
            experience: [
                {
                    company: 'Capital Investments',
                    image: 'capital-investments',
                },
                {
                    company: 'ADIB',
                    image: 'adib',
                },
                {
                    company: 'RothChild&Co',
                    image: 'rothschild-co',
                },
                {
                    company: 'Cappinova',
                    image: 'cappinova',
                }
            ]
        },
        {
            name: 'Paul Rizk',
            title: 'Director',
            image: 'paul-rizk-1',
            quote: '',
            description: 'Paul has 18 years of expertise in corporate finance and M&A advisory. He holds a master\'s degree in Banking and Finance and a bachelor\'s degree in Economics from Saint-Joseph University in Beirut. He provides strategic financial solutions tailored to clients\' unique needs, using his extensive knowledge and global perspective.',
            mobile: '+9613743290',
            email: 'paul.rizk@montycapital.com',
            experience: [
                {
                    company: 'Banque Libano-Francaise',
                    image: 'banque-libano-francaise',
                },
                {
                    company: 'Abington Advisory',
                    image: 'abington',
                },
                {
                    company: 'Ey',
                    image: 'Ey',
                }
            ]
        },
        {
            name: 'Mohammad Bakodah',
            title: 'Associate Director',
            image: 'mohammad-bakodah',
            quote: '',
            description: 'Mohammed is based in Abu Dhabi with experience in Corporate Finance and Equity Research including VC Financing, M&A, Audit, Fundraising and Alternative Investments. He has a bachelors degree in Accounting & Finance from Abu Dhabi University, holds MCSI from CISI and FMVA.<br />Hobbies Nonfiction books, horse-riding, watching documentaries, sports mainly boxing, UFC and Jiu Jitsu, shooting guns (9mm Pistol, Caracal 816 & 22, Shotgun, 22 cal rifle, Sniper), endurance training, ice baths and habits formation.',
            mobile: '+971547175099',
            email: 'Mohammed.bakodah@montyholding.com',
            experience: [
                {
                    company: 'Fuel Ventures',
                    image: 'fuel-ventures',
                },
                {
                    company: 'Tech Stars',
                    image: 'techstars',
                },
                {
                    company: 'Latoken',
                    image: 'latoken',
                }
            ]
        },
        // {
        //     name: 'Liliane Madi',
        //     title: 'Manager',
        //     image: 'liliane-madi',
        //     quote: '',
        //     description: 'Liliane Madi has 13 years of experience in commercial and corporate banking. In her previous role, she performed financial and credit analysis of project financing transactions for well- established companies and startups, in the Telecom, Information technology, Real Estate and Retail industries.<br />Ms. Madi has a B.S. in Banking and Finance from the Lebanese American University. She is a CFA charterholder.',
        //     mobile: '+123456',
        //     email: 'test@montyholding.com',
        //     experience: [
        //         {
        //             company: 'Fuel Ventures',
        //             // image: 'fuel-ventures',
        //             image: 'rothschild-co',
        //         },
        //         {
        //             company: 'Tech Stars',
        //             // image: 'tech-stars',
        //             image: 'rothschild-co',
        //         },
        //         {
        //             company: 'Latoken',
        //             // image: 'latoken',
        //             image: 'rothschild-co',
        //         }
        //     ]
        // },
    ]

    const teamExperiencesList = [
        {
            image: 'uae',
            amount: '$25 M',
            companies: [
                {
                    name: 'Monty Mobile',
                    image: 'monty-mobile'
                },
                {
                    name: 'Debt Financing',
                    image: 'debt-financing'
                },
                {
                    name: 'NBK Capital',
                    image: 'nbk'
                },
            ],
            industry: 'Telecommunications',
            year: '2022'
        },
        {
            image: 'gambia',
            amount: '$2 M',
            companies: [
                {
                    name: 'Monty Mobile',
                    image: 'monty-mobile'
                },
                {
                    name: 'Project Financing',
                    image: 'project-financing'
                },
                {
                    name: 'Trade River',
                    image: 'trade-river'
                },
            ],
            industry: 'Telecommunications',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$13 M',
            companies: [
                {
                    name: 'Grab',
                    image: 'grab'
                },
                {
                    name: 'Acquisiton',
                    image: 'acquisition'
                },
                {
                    name: 'Aramex',
                    image: 'aramex'
                },
            ],
            industry: 'Logistics',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$5.75 M',
            companies: [
                {
                    name: 'Monty Mobile',
                    image: 'monty-mobile'
                },
                {
                    name: 'Debt Financing',
                    image: 'debt-financing'
                },
                {
                    name: 'Citibank',
                    image: 'citibank'
                },
            ],
            industry: 'Telecommunications',
            year: '2021'
        },
        {
            image: 'gambia',
            amount: '$2.5 M',
            companies: [
                {
                    name: 'Monty Mobile',
                    image: 'monty-mobile'
                },
                {
                    name: 'Acquisiton',
                    image: 'acquisition'
                },
                {
                    name: 'Comium',
                    image: 'comium'
                },
            ],
            industry: 'Telecommunications',
            year: '2022'
        },
        {
            image: 'uae',
            amount: '$35 M',
            companies: [
                {
                    name: 'Sporter',
                    image: 'sporter'
                },
                {
                    name: 'Acquisition',
                    image: 'acquisition'
                },
                {
                    name: 'Gulf Capital',
                    image: 'gulf-capital'
                },
            ],
            industry: 'Food & Nutrition',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$60 M',
            companies: [
                {
                    name: 'Zomato',
                    image: 'zomato'
                },
                {
                    name: 'Equity Financing',
                    image: 'equity-financing'
                },
                {
                    name: 'Temasek',
                    image: 'temasek'
                },
            ],
            industry: 'Food Delivery',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$15 M',
            companies: [
                {
                    name: 'Convertible Financing',
                    image: 'convertible-financing'
                },
                {
                    name: 'Regional Health Tech',
                    image: 'regional-health-tech'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Digital Health',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$30 M',
            companies: [
                {
                    name: 'Equity Financing',
                    image: 'equity-financing'
                },
                {
                    name: 'Regional BNPL',
                    image: 'regional-bnpl'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Fintech',
            year: '2021'
        },
        {
            image: 'uae',
            amount: '$XX M',
            companies: [
                {
                    name: 'Vendor Due Diligence',
                    image: 'vendor-due-diligence'
                },
                {
                    name: 'iORGA',
                    image: 'iorga'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'IT Services',
            year: '2019'
        },
        {
            image: 'france',
            amount: '$XX M',
            companies: [
                {
                    name: 'Restrcturing',
                    image: 'restructuring'
                },
                {
                    name: 'Gregoire Besson',
                    image: 'gregoire-besson'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Agriculture',
            year: '2019'
        },
        {
            image: 'france',
            amount: '$XX M',
            companies: [
                {
                    name: 'Vendor Due Diligence',
                    image: 'vendor-due-diligence'
                },
                {
                    name: 'itaque',
                    image: 'itaque'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'IT Services',
            year: '2019'
        },
        {
            image: 'France',
            amount: '$XX M',
            companies: [
                {
                    name: 'Buy Side Due Diligence',
                    image: 'buy-side-due-diligence'
                },
                {
                    name: 'Trimane',
                    image: 'trimane'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'IT Services',
            year: '2019'
        },
        {
            image: 'france',
            amount: '$XX M',
            companies: [
                {
                    name: 'Vendor Due Diligence',
                    image: 'vendor-due-diligence'
                },
                {
                    name: 'idk',
                    image: 'idk'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Marketing Services',
            year: '2020'
        },
        {
            image: 'USA',
            amount: '$XX M',
            companies: [
                {
                    name: 'Buy Side Due Diligence',
                    image: 'buy-side-due-diligence'
                },
                {
                    name: 'Bounty Source',
                    image: 'bounty-source'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Crowdfunding',
            year: '2020'
        },
        {
            image: 'France',
            amount: '$XX M',
            companies: [
                {
                    name: 'Buy Side Due Diligence',
                    image: 'buy-side-due-diligence'
                },
                {
                    name: 'E-Cobot',
                    image: 'e-cobot'
                },
                // {
                //     name: '',
                //     image: ''
                // },
            ],
            industry: 'Industrial',
            year: '2021'
        },
    ]
</script>

<style lang="sass">

</style>