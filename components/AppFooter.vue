<template lang="">
    <footer class="footer">
        <div class="container">
            <div class="footer--top">
                <AppLogoSmall />
                <SocialMedia />
            </div>

            <hr class="footer--line" />

            <div class="footer--middle">
                <nav class="nav-wrapper">
                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/about-us">About us</NuxtLink></h6>
                        <!-- <ul class="nav-list">
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Our Services</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Monty Capital's Network</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Why Monty Capital</NuxtLink>
                            </li>
                        </ul> -->
                    </div>

                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/services">Services</NuxtLink></h6>
                        <!-- <ul class="nav-list">
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Our Board</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Our Team</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Team Experience</NuxtLink>
                            </li>
                        </ul> -->
                    </div>

                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/team">Team</NuxtLink></h6>
                        <!-- <ul class="nav-list">
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Advisory</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Digital Transformation</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="" class="nav-link">Family Office Diversification Platform</NuxtLink>
                            </li>
                        </ul> -->
                    </div>

                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/News">News</NuxtLink></h6>
                    </div>

                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/contact-us">Contact us</NuxtLink></h6>
                    </div>

                    <div class="nav-block">
                        <h6 class="heading"><NuxtLink class="nav-link" to="/startup-application">Startup application</NuxtLink></h6>
                    </div>
                </nav>
            </div>

            <hr class="footer--line" />

            <div class="footer--bottom">
                <div class="top-level">
                    <p class="copyright">© {{ new Date().getFullYear() }} Copyright and rights reserved</p>

                    <ul class="nav-list">
                        <li class="nav-item">
                            <NuxtLink to="/terms-and-conditions" class="nav-link">Terms & Conditions</NuxtLink>
                        </li>
                        <span class="hidden md:block">|</span>
                        <li class="nav-item">
                            <NuxtLink to="/privacy-policy" class="nav-link">Privacy Policy</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="bottom-level">
                    <p class="disclaimer">This report has been prepared in good faith, based on Monty Capital’s current
                        anecdotal and evidence-based views of the market. Although Monty Capital believes its views
                        reflect market conditions on the date of this presentation, they are subject to significant
                        uncertainties and contingencies, many of which are beyond Monty Capital’s control. In addition,
                        many of Monty Capital’s views are opinion and/or projections based on Monty Capital’s subjective
                        analyses of current market circumstances. Other firms may have different opinions, projections
                        and analyses, and actual market conditions in the future may cause Monty Capital’s current views
                        to later be incorrect. Monty Capital has no obligation to update its views herein if its
                        opinions, projections, analyses or market circumstances later change.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="">

</style>