<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Button from '@/components/ui/Button.vue';
const dialog = ref(false);
const store = useStore();
const getAlertOptions = computed(() => store.getters['common/getAlertOptions']); //알럿 정보
/**
 * @description 알럿, 컨펌창 활성
 */
watch(
	() => getAlertOptions.value,
	() => {
		if (getAlertOptions.value.isOpen) {
			dialog.value = true;
		}
	},
);
/**
 * @description 컨펌 클릭시 이벤트
 */
const confirm = () => {
	dialog.value = false;
	store.commit('common/setIsConfirmClick', { isClick: true, type: getAlertOptions.value.type });
};
/**
 * @description 알럿 클릭시 이벤트
 */
const alert = () => {
	dialog.value = false;
	if (getAlertOptions.value.type) {
		store.commit('common/setIsConfirmClick', { isClick: true, type: getAlertOptions.value.type });
	}
};
</script>
<template>
	<v-dialog v-model="dialog" width="auto" persistent>
		<v-card max-width="1000" width="500" :text="getAlertOptions.content" :title="getAlertOptions.title">
			<template v-slot:actions>
				<section :class="$style.btnWrap">
					<Button v-if="getAlertOptions.isConfirm" label="확인" type="blue" @click="confirm" />
					<Button :label="getAlertOptions.isConfirm ? '취소' : '확인'" type="gray" @click="alert" />
				</section>
			</template>
		</v-card>
	</v-dialog>
</template>
<style lang="scss" module>
.btnWrap {
	button {
		margin-right: 5px;
	}
}
</style>
