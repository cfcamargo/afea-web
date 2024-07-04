<script lang="ts" setup>
const infoModal = ref(true)
const closeModal = () => {
    infoModal.value = false
}

useHead({
    title: 'AFEA | Associação Fronteiriça de Estudantes e Acadêmicos',
    meta: [
        { name: 'description', content: 'Associação Fronteiriça de Estudantes e Acadêmicos' }
    ],
})
</script>

<template>
    <div class="absolute top-0 z-50 w-full">
        <Header />
    </div>
    <main>
        <BannerHero />
        <HeroCard />
        <About />
        <Specialist />
        <Services />
        <Events />
        <Brands />
        <Contact />
        <Footer />
        <EventDateInfo :show="infoModal" @close="closeModal"/>
    </main>
</template>
