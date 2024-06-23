<script lang="ts" setup>
import type { iconProps } from '~/types/IconProps';
const props = withDefaults(defineProps<{
    icon_width?: number,
    icon_heigth?: number,
}>(),{
    icon_heigth: 48,
    icon_width: 48
})
</script>

<template>
    <svg :width="props.icon_width" :height="props.icon_heigth" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1311 27.8688L5.93105 25.025L7.6373 23.3188L11.6998 23.8875L18.0373 17.55L5.3623 10.6438L7.6373 8.3688L23.1561 12.35L29.5342 6.05317C29.9946 5.59276 30.5704 5.36255 31.2616 5.36255C31.9527 5.36255 32.528 5.59276 32.9873 6.05317C33.4466 6.51359 33.6768 7.08938 33.6779 7.78055C33.679 8.47172 33.4488 9.04697 32.9873 9.5063L26.6498 15.8438L30.6311 31.3625L28.3561 33.6376L21.4498 20.9625L15.1123 27.3L15.6811 31.3625L13.9748 33.0688L11.1311 27.8688Z" fill="#FFCA28"/>
    </svg>
</template>
