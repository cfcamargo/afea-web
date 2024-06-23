<script lang="ts" setup>
const props = withDefaults(defineProps<{
    icon_width?: number,
    icon_heigth?: number,
}>(), {
    icon_width: 69,
    icon_heigth: 69
})
</script>
<template>
    <svg :width="props.icon_width" :height="props.icon_heigth" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.625 20.125C8.625 17.8375 9.5337 15.6437 11.1512 14.0262C12.7687 12.4087 14.9625 11.5 17.25 11.5H51.75C54.0375 11.5 56.2313 12.4087 57.8488 14.0262C59.4663 15.6437 60.375 17.8375 60.375 20.125V48.875C60.375 51.1625 59.4663 53.3563 57.8488 54.9738C56.2313 56.5913 54.0375 57.5 51.75 57.5H17.25C14.9625 57.5 12.7687 56.5913 11.1512 54.9738C9.5337 53.3563 8.625 51.1625 8.625 48.875V20.125Z" stroke="#FFCA28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.125 23H48.875M43.125 34.5H48.875M20.125 46H48.875M20.125 28.75C20.125 30.275 20.7308 31.7375 21.8091 32.8159C22.8875 33.8942 24.35 34.5 25.875 34.5C27.4 34.5 28.8625 33.8942 29.9409 32.8159C31.0192 31.7375 31.625 30.275 31.625 28.75C31.625 27.225 31.0192 25.7625 29.9409 24.6841C28.8625 23.6058 27.4 23 25.875 23C24.35 23 22.8875 23.6058 21.8091 24.6841C20.7308 25.7625 20.125 27.225 20.125 28.75Z" stroke="#FFCA28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
