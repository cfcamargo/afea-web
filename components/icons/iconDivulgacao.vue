<script lang="ts" setup>
const props = withDefaults(defineProps<{
    icon_width?: number,
    icon_heigth?: number,
}>(), {
    icon_width: 37,
    icon_heigth: 37
})
</script>
<template>
    <svg :width="props.icon_width" :height="props.icon_heigth" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.375 15.9931C35.375 8.07313 27.7981 1.625 18.5 1.625C9.20187 1.625 1.625 8.07313 1.625 15.9931C1.625 23.0863 7.62688 29.0394 15.7381 30.1681C17.7125 30.6163 17.4856 31.3756 17.0431 34.1675C16.97 34.6138 16.6981 35.915 18.5 35.1275C20.3 34.34 28.2125 29.1256 31.7619 24.8525C34.2069 22.0325 35.375 19.1731 35.375 16.0119V15.9931Z" stroke="#FFCA28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
