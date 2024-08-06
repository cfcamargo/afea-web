<script lang="ts" setup>
const showMenu = ref(false)

const toogleMenu = () => {
    showMenu.value = !showMenu.value
}

const defineAnimationToHamburgueMenu = computed(() => {
    if(showMenu.value) {
        return 'hamburger--spin-r is-active'
    } else {
        return 'hamburger--spin'
    }
})
</script>

<template>
    <header>
        <Container class="flex justify-between items-center h-[80px]">
            <a href="#home">
                <NuxtImg src="/logo.png" class="w-[80px]"/>
            </a>

            <nav class="xs:hidden md:flex items-center gap-4 text-white ">
                <a href="" class="hover:brightness-90">A Associação</a>
                <a href="" class="hover:brightness-90">Benefícios</a>
                <a href="" class="hover:brightness-90">Eventos</a>
            </nav>

            <a href="https://docs.google.com/forms/d/1zGT4gIv0SPjGGFNe2iH3d_l_qD5bzVq7L6xIJOld3gE/viewform" target="_blank">
                <BaseButton class="xs:hidden md:flex">
                    Seja Credenciado
                </BaseButton>
            </a>

            <div class="xs:flex absolut right-0 md:hidden z-50">
                <button class="hamburger" type="button" @click="toogleMenu" :class="defineAnimationToHamburgueMenu">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </Container>
        <nav class="w-full flex-1 h-dvh fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-8 bg-white text-rose py-10 px-2" v-if="showMenu">
            <div class="flex-1 flex flex-col gap-8 justify-center items-center">
                <a href="" class="hover:brightness-90 font-bold text-xl">A Associação</a>
                <a href="" class="hover:brightness-90 font-bold text-xl">Benefícios</a>
                <a href="" class="hover:brightness-90 font-bold text-xl">Eventos</a>
            </div>

            <a href="https://docs.google.com/forms/d/1zGT4gIv0SPjGGFNe2iH3d_l_qD5bzVq7L6xIJOld3gE/viewform" target="_blank" class="w-full">
                <BaseButton class="mt-20 w-full">
                    Seja Credenciado
                </BaseButton>
            </a>
        </nav>
    </header>
</template>
