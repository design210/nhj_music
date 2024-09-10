<script setup>
/**
 * @description props
 * @param text : 텍스트
 * @param type : 유형
 * @param size : 버튼 크기 (x-small, small, undefined(medium), large, x-large)
 * @param disabled : 비활성 유무
 */
const props = defineProps(['label', 'type', 'disabled', 'size']);
const emit = defineEmits(['click']);
const click = () => {
	emit('click');
};
</script>
<template>
	<v-btn
		:size="props.size"
		:class="[props.type, props.size]"
		:style="{ marginLeft: props.marginLeft + 'px' }"
		@click.stop="click"
		:disabled="props.disabled"
	>
		{{ props.label }}
	</v-btn>
</template>
<style lang="scss">
button {
	border-radius: 2px !important;
	box-shadow: none !important;
	&.blue {
		background-color: #3a99ff !important;
		span {
			color: #fff;
			font-weight: 400;
		}
		&:disabled {
			border: rgba(0, 0, 0, 0.12) !important;
			background-color: rgba(0, 0, 0, 0.12) !important;
			span {
				color: #fff;
			}
		}
	}
	&.gray {
		background-color: #b0b0b0 !important;
		span {
			color: #fff;
			font-weight: 400;
		}
	}
	&.medium {
		height: 300px !important;
	}
}
</style>
