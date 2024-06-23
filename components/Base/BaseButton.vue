<script lang="ts" setup>
const props = withDefaults(defineProps<{
    variant?: 'primary' | 'secondary' | 'delete'
}>(), {
    variant: 'primary'
})

const getButtonColor = computed(() => {
    if(props.variant === 'primary'){
        return 'bg-primary text-white'
    }

    if(props.variant === 'secondary'){
        return 'bg-secondary text-primary'
    }

    if(props.variant === 'delete'){
        return 'bg-red-600 text-white'
    }
})

</script>

<template>
    <button 
        v-bind="$attrs" 
        class="px-4 py-3 rounded hover:brightness-90"
        :class="getButtonColor"
    >
        <slot/>
    </button>
</template>
