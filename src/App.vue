<script setup>
import Alert from '@/components/common/Alert.vue';
</script>
<template>
	<v-app>
		<v-main>
			<Alert />
			<router-view />
		</v-main>
	</v-app>
</template>
<style lang="scss">
/*font*/
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	src:
		url(./assets/font/NotoSansKR-Light.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Light.woff) format('woff'),
		url(./assets/font/NotoSansKR-Light.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	src:
		url(./assets/font/NotoSansKR-Regular.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Regular.woff) format('woff'),
		url(./assets/font/NotoSansKR-Regular.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	src:
		url(./assets/font/NotoSansKR-Medium.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Medium.woff) format('woff'),
		url(./assets/font/NotoSansKR-Medium.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	src:
		url(./assets/font/NotoSansKR-Bold.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Bold.woff) format('woff'),
		url(./assets/font/NotoSansKR-Bold.otf) format('opentype');
}
</style>
