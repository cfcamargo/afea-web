<script lang="ts" setup>
import type { iconProps } from '~/types/IconProps';
const props = withDefaults(defineProps<{
    icon_width?: number,
    icon_heigth?: number,
}>(),{
    icon_heigth:42,
    icon_width: 42
})
</script>
<template>
    <svg :width="props.icon_width" :height="props.icon_heigth" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.5 31.5C35.366 31.5 38.5 25.232 38.5 17.5C38.5 9.76801 35.366 3.5 31.5 3.5C27.634 3.5 24.5 9.76801 24.5 17.5C24.5 25.232 27.634 31.5 31.5 31.5Z" stroke="#FFCA28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.5 3.5C26.0698 3.5 14.8137 7.6615 8.34925 10.2445C5.38825 11.4275 3.5 14.3115 3.5 17.5C3.5 20.6885 5.39 23.5725 8.34925 24.7555C14.8137 27.3385 26.0698 31.5 31.5 31.5M19.25 38.5L15.8498 36.6275C14.0344 35.6228 12.562 34.0971 11.6224 32.2473C10.6828 30.3975 10.3193 28.3085 10.5788 26.25" stroke="#FFCA28" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
