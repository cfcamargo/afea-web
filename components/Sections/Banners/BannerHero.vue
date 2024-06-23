<script lang="ts" setup>

</script>

<template>
    <section id="hero" class="w-full h-dvh relative overflow-hidden">
        <NuxtImg :src="'/hero-banner.png'" class="absolute z-0 w-full h-full object-center object-cover"/>
        <div class="w-full h-full bg-black/70 z-1 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <Container>
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h2 class="xs:text-4xl md:text-7xl font-bold text-center text-white">Unidos pelo Conhecimento</h2>
                    <p class="text-white font-semibold text-center">Transformamos sonhos em realidade. Credencie-se conosco e seja a mudança!</p>
                </div>
            </Container>
        </div>
    </section>
</template>
