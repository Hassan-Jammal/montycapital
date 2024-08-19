<template>
    <div class="page-wrapper">
		<!-- 404 Error Section Start -->
		<section class="error-section d-flex justify-content-center align-items-center rel z-1">
			<div class="container">
				<div class="error-content row justify-content-between align-items-center text-center text-lg-start">
					<div class="col-lg-6 order-2 order-lg-1">
						<div class="rmb-55">
							<div class="section-title mb-50 rmb-35">
								<h1>Accept our appologies!</h1>
								<p class="mt-20">The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
							</div>
							<NuxtLink href="/" class="theme-btn">Go to Home page<i class="far fa-arrow-right"></i></NuxtLink>
						</div>
					</div>
					<div class="col-lg-6 order-1 order-lg-2 text-center text-lg-end">
						<h2>404</h2>
					</div>
				</div>
			</div>
		</section>
		<!-- 404 Error Section End -->
	</div>
</template>

<script setup>
	useSeoMeta({
		title: 'Page Not Found',
		ogTitle: 'Page Not Found',
		twitterTitle: 'Page Not Found',
	})
</script>