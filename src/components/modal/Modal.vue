<script setup>
import { watch } from 'vue';
import { useStore } from 'vuex';
import { ModalsContainer, useModal } from 'vue-final-modal';
import ModalSample from '@/components/modal/ModalSample.vue';
const store = useStore();
const props = defineProps(['title', 'isOpen', 'component', 'width', 'data']);
/**
 * @description 모달 동적 컴포넌트 : 컴포넌트 이름을 실제 컴포넌트로 매핑
 */
const componentMap = {
	ModalSample,
};
const modalComponent = componentMap[props.component];
/**
 * @description 모달 컴포넌트 옵션
 */
const { open, close } = useModal({
	component: modalComponent,
	attrs: {
		title: props.title,
		onConfirm() {
			close();
		},
	},
});
/**
 * @description 모달 컴포넌트 옵션
 * @param width: 가로 넓이
 * @param props.data : 모달에 전달할 데이터 설정
 */
watch(
	() => props.isOpen,
	() => {
		store.commit('common/setModalOptionsStyle', { width: props.width ? props.width : '300px' }); //가로사이즈 설정
		store.commit('common/setModalOptionsSendData', props.data); //데이터 설정
		open();
	},
);
</script>
<template>
	<ModalsContainer />
</template>
<!-- 모달 공통 scss -->
<style lang="scss">
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	background: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.confirm-modal-content h1 {
	font-size: 1.375rem;
}
</style>
