<script lang="ts" setup>
import Books from '~/components/icons/Books.vue';
import HandShake from '~/components/icons/HandShake.vue';
import Star from '~/components/icons/Star.vue';
import Trophy from '~/components/icons/Trophy.vue';

const props = defineProps<{
    data: {
        icon: string,
        title: string,
        description: string
    }
}>()

const iconsList:any = {
    Books,
    HandShake,
    Star,
    Trophy
}

</script>

<template>
    <div class="bg-zinc-100 rounded-lg p-10">
        <div class="flex flex-col gap-4">
            <component :is="iconsList[props.data.icon]" />
            <h4 class="text-primary font-bold text-lg">
                {{ props.data.title }}
            </h4>
            <p class="text-text">
                {{ props.data.description }}
            </p>
        </div>
    </div>
</template>
