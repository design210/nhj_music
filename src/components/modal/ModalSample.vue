<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { VueFinalModal } from 'vue-final-modal';
import Button from '@/components/ui/Button.vue';
const store = useStore();
const props = defineProps(['title', 'width']);
const emit = defineEmits(['confirm']);
const getModalOptions = computed(() => store.getters['common/getModalOptions']); //모달 옵션 정보
const modalContentStyle = {
	width: getModalOptions.value.style.width,
};
const close = () => {
	emit('confirm');
	store.commit('common/setModalOptionsGetData', { child: '부모에게 전달 데이터' }); //데이터 설정
	console.log('data :', getModalOptions.value.getData); //부모에게 전달받은 데이터
};

console.log('data :', getModalOptions.value.sendData); //부모에게 전달받은 데이터
</script>

<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:contentStyle="modalContentStyle"
		:click-to-close="false"
		:esc-to-close="false"
	>
		<h1>{{ props.title }}</h1>
		<div>나랏말싸미 듕귤에 달아</div>
		<section :class="$style.btnWrap">
			<Button label="닫기" type="blue" size="large" @click="close" />
		</section>
	</VueFinalModal>
</template>
<style lang="scss" module>
.btnWrap {
	display: flex;
	justify-content: center;
}
</style>
