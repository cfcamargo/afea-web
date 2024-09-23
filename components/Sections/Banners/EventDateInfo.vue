<template>
    <div 
        v-show="props.show"
        class="w-full h-dvh fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-50 flex justify-center items-center" 
    >
        <div class="xs:w-[90%] md:w-[60%] max-w-[1920px] h-[30%] max-h-[1080px] bg-white relative">
            <button 
                @click="close"
                type="button" 
                class="rounded-full flex justify-center items-center w-10 h-10 absolute -top-5 -right-5 bg-white border border-primary"
                >
                <X />
            </button>
            <div>
                <nuxt-img src="/fisiculturismo.png"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next';

const emits = defineEmits(['close'])
const props = defineProps({
    show:{ type: Boolean, default: false}
})

const close = () => {
    emits('close')
}
</script>