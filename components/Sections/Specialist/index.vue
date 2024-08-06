<script lang="ts" setup>

</script>

<template>
    <section id="specialist" class="w-full py-10 bg-[url('/color-bg.png')] bg-cover bg-center mt-4">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="w-full flex justify-center">
                <NuxtImg src="/specialist.png"/>
            </div>

            <div class="space-y-8">
                <h4 class="text-4xl font-bold text-zinc-800">
                    Contamos com um time de 
                    <span class="text-primary">Especialistas</span> 
                </h4>

                <p class="pb-5">
                    Atendemos estudantes desde o ensino fundamental e médio até universitários, oferecendo suporte e recursos para todas as etapas da jornada educacional. Nossa associação está comprometida em proporcionar um ambiente enriquecedor e colaborativo, onde cada aluno pode crescer, aprender e alcançar seu pleno potencial.
                </p>

                <a href="https://docs.google.com/forms/d/1zGT4gIv0SPjGGFNe2iH3d_l_qD5bzVq7L6xIJOld3gE/viewform" target="_blank">
                    <BaseButton class="xs:w-full md:w-auto">
                        QUERO SER CREDENCIADO
                    </BaseButton>
                </a>
            </div>
        </Container>
    </section>
</template>
