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

                <p>
                    Atendemos estudantes desde o ensino fundamental e médio até universitários, oferecendo suporte e recursos para todas as etapas da jornada educacional. Nossa associação está comprometida em proporcionar um ambiente enriquecedor e colaborativo, onde cada aluno pode crescer, aprender e alcançar seu pleno potencial.
                </p>

                <BaseButton class="xs:w-full md:w-auto">
                    QUERO SER CREDENCIADO
                </BaseButton>
            </div>
        </Container>
    </section>
</template>
