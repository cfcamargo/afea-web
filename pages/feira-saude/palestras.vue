<script lang="ts" setup>
import type { CourseProps } from '~/types/Courses';
import { LoaderCircle } from 'lucide-vue-next';

const config = useRuntimeConfig()

const courses = ref<CourseProps[]>([])
const loading = ref(true)

const fetchCourses = async() => {
    loading.value = true

    const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID; 
    const apiKey = import.meta.env.VITE_API_KEY;
    const range = 'BD!A:K';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        for(let i = 0; i < data.values.length; i++) {
            console.log(data.values[i])
            if(
                i !== 0 && 
                data.values[i][0] !== '' &&
                data.values[i][1] !== '' &&
                data.values[i][2] !== '' &&
                data.values[i][3] !== '' &&
                data.values[i][4] !== '' &&
                data.values[i][5] !== '' &&
                data.values[i][6] !== '' &&
                data.values[i][7] !== '' &&
                data.values[i][8] !== '' &&
                data.values[i][10] === 'sim' || data.values[i][10] === 'Sim'
            ){
                const course:CourseProps = {
                date: data.values[i][0],
                hour: data.values[i][1],
                duration: data.values[i][2],
                theme: data.values[i][3],
                brandResponsable: data.values[i][4],
                professionalResponsable: data.values[i][5],
                cost: data.values[i][6],
                inscriptionUrl: data.values[i][7],
                details: data.values[i][8]
            }

            courses.value.push(course)
            }
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    } finally {
        loading.value = false; 
    }

}

onMounted(() => {
    fetchCourses()
})

</script>

<template>
    <header class="w-full h-[100px] shadow-md flex justify-center items-center">
        <nuxt-img src="/feira-saude/logo.png" class="w-[200px]"/>
    </header>

    <main class="py-8">
        <Container class="flex flex-col gap-4">
            <h3 class="text-3xl text-center font-bold text-blue-500">Palestras</h3>

            <div v-if="loading" class="w-full flex justify-center flex-col gap-2 items-center">
                <LoaderCircle :size="60" class="animate-spin" color="#553A81"/>
                <span>Carregando, aguarde...</span>
            </div>

            <div class="grid xs:grid-cols-1 md:grid-cols-3 gap-8" v-else-if="courses.length > 0">
                <CourseCard 
                    v-for="(course, index) in courses" 
                    :key="index" 
                    :course="course"
                />
            </div>

            <div class="flex justify-center items-center" v-else>
                <span>Não foram encontrados resultados.. </span>
            </div>
        </Container>
    </main>
</template>

