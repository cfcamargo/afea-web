<script lang="ts" setup>
const brands = [
    {
        url : "https://www.instagram.com/maisdefesa?igsh=MWJ0M295anB5c3A4NA==",
        image: "/brand/4life.png"
    },
    {
        url : "https://www.instagram.com/atena.modeladoras?igsh=MTA2bmhpNGt0bG16NA==",
        image: "/brand/Atenas.png"
    },
    {
        url : "https://www.instagram.com/catarinensemadeiras?igsh=MWdvcTJ2N2owZzJubA==",
        image: "/brand/CatarinenseMadeiras.png"
    },
    {
        url : "https://www.instagram.com/cvc.ms.pontapora?igsh=dms3NWpnZzB4aGl3",
        image: "/brand/cvc.jpeg"
    },
    {
        url : "https://www.instagram.com/projetodivulgamais?igsh=MTNmcjlpa2UyZzExMQ==",
        image: "/brand/Divulgamaistvweb.png"
    },
    {
        url : "https://www.instagram.com/lapidare_clinica?igsh=MWJ2OHBqdGVxdDkydw==",
        image: "/brand/Lapidare.jpeg"
    },
    {
        url : "Wa.me/556799237996",
        image: "/brand/b-on.png"
    },
    {
        url : "Wa.me/556784330641",
        image: "/brand/omni.png"
    },
    {
        url : "https://www.instagram.com/upappjc?igsh=Y3pwMDlyZGJtMGx0",
        image: "/brand/upap.png"
    },
    {
        url : "https://www.instagram.com/upg.zanjapy?igsh=bm40cW5oMzF0d3ho",
        image: "/brand/upg.jpg"
    },
    {
        url : "https://www.instagram.com/imperiovioletacosmeticos?igsh=MWp1bnFiOW5yazd4Mg==",
        image: "/brand/VIOLETA.jpg"
    },
]

const sliderPerView = ref(3)

onMounted(()=>{
    if(window.innerWidth < 430){
        sliderPerView.value = 2
    }
})
</script>
<template>
    <Container class="py-8">
        <h2 class="font-bold text-3xl text-primary">Nossos Parceiros</h2>
    </Container>
    <Container>
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="sliderPerView"
            :loop="true"
            :navigation="true"
            :pagination="true"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
            }"
            class="flex items-center"
        >
            <SwiperSlide v-for="(brand, index) in brands" :key="index">
                <a 
                    :href="brand.url" 
                    class="p-4 h-full w-full flex justify-center items-center"
                >
                    <NuxtImg :src="brand.image" class="w-full mx-auto my-auto"/>
                </a>
            </SwiperSlide>
        </Swiper>
    </Container>
</template>


