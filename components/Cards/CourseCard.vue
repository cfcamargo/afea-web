<script lang="ts" setup>
import type { CourseProps } from '~/types/Courses';
const props = defineProps<{
    course: CourseProps
}>()

</script>
<template>
    <div class="rounded shadow-md p-6 border">
        <div class="flex flex-col">
            <h4 class="text-2xl font-bold text-primary">{{ props.course.theme }}</h4>
            <span class="mt-2">Palestrante: {{ props.course.professionalResponsable }}</span>
            <span>Duração: {{ props.course.duration }}</span>
            <p class="my-4">{{ props.course.details }}</p>

            <div class="flex flex-col">
                <span class="text-primary">Observações</span>
                <span>{{ props.course.observation }}</span>
            </div>

            <div class="pt-2">
                <div >
                    <span>Data:</span>
                    <span>{{ props.course.date }}</span>
                </div>

                <div>
                    <span>Horário:</span>
                    <span>{{ props.course.hour }}</span>
                </div>

                <BaseButton type="button" class="mt-4 w-full">
                    <a :href="props.course.inscriptionUrl" target="_blank">
                        Inscreva-se
                    </a>
                </BaseButton>
            </div>
        </div>
    </div>
</template>

