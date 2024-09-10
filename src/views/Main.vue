<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Button from '@/components/ui/Button.vue';
import Modal from '@/components/modal/Modal.vue';
const getIsConfirmClick = computed(() => store.getters['common/getIsConfirmClick']); //모달 옵션 정보
const store = useStore();
const isOpen = ref(false);
const openModal = () => {
	isOpen.value = !isOpen.value;
};
const modalData = ref({ parent: '자식에게 전달한 데이터' });
/**
 * @description 알럿창 호출
 */
const openAlert = () => {
	store.commit('common/setAlertOptions', {
		isOpen: true,
		isConfirm: false,
		title: '경고',
		content: '경고 안내문 입니다.',
		type: 'sample1',
	}); //데이터 설정
};
/**
 * @description 컨펌창 호출
 */
const openConfirm = () => {
	store.commit('common/setAlertOptions', {
		isOpen: true,
		isConfirm: true,
		title: '환경설정',
		content: '컨펌 안내문 입니다.',
		type: 'sample',
	}); //데이터 설정
};
/**
 * @description 컨펌 이벤트 감지
 */
watch(
	() => getIsConfirmClick.value,
	() => {
		if (getIsConfirmClick.value && getIsConfirmClick.value.type === 'sample') {
			//컨펌 확인 버튼 클릭시 이벤트
			console.log('컨펌이벤트 실행');
		}
	},
);
/**
 * @description 알럿 이벤트 감지
 */
watch(
	() => getIsConfirmClick.value,
	() => {
		if (getIsConfirmClick.value && getIsConfirmClick.value.type === 'sample1') {
			//알럿 확인 버튼 클릭시 이벤트
			console.log('알럿 이벤트 실행');
		}
	},
);
</script>

<template>
	<div>안녕하세요 요것은 vue3 프로젝트 샘플입니다.</div>
	<Modal title="모달 타이틀" :isOpen="isOpen" component="ModalSample" width="800px" :data="modalData" />

	<div :class="$style.space"><Button label="모달 샘플" type="blue" @click="openModal" /></div>
	<div :class="$style.space"><Button label="알럿 샘플" type="blue" @click="openAlert" /></div>
	<div :class="$style.space"><Button label="컨펌 샘플" type="blue" @click="openConfirm" /></div>
</template>

<style module lang="scss">
.space {
	margin-bottom: 5px;
}
</style>
