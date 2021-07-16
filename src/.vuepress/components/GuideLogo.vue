<template>
	<router-link :to="$localePath" class="guide-logo">
		<span class="site-name">
			<span class="site-name-text">
				Robot Guide
			</span>
		</span>
	</router-link>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background: url('/meta-image.webp') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	font-size: 2rem;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 600px) {
		text-indent: -9999px;
		padding-left: 0;
	}
	.site-name-text {
		line-height: 100%;
	}
}

</style>