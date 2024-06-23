<script lang="ts" setup>
import type { CourseProps } from '~/types/Courses';
const props = defineProps<{
    course: CourseProps
}>()

</script>
<template>
    <div class="rounded shadow-md p-6 border">
        <div class="flex flex-col">
            <h4 class="text-2xl font-bold">{{ props.course.theme }}</h4>
            <span>Palestrante: {{ props.course.professionalResponsable }}</span>
            <span>Duração: {{ props.course.duration }}</span>

            <div class="pt-2">
                <div >
                    <span>Data:</span>
                    <span>{{ props.course.date }}</span>
                </div>

                <div>
                    <span>Horário:</span>
                    <span>{{ props.course.hour }}</span>
                </div>

                <BaseButton type="button" class="mt-4">
                    <a :href="props.course.inscriptionUrl" target="_blank">
                        Inscreva-se
                    </a>
                </BaseButton>
            </div>
        </div>
    </div>
</template>

