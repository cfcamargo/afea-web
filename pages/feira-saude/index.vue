<script lang="ts" setup>
useHead({
    title: 'AFEA | Feira Saude E Bem Estar',
})
</script>

<template>
    <div class="w-ful h-dvh bg-[url('/feira-saude/BACKGROUND2.jpg')] bg-center bg-cover">
        <div class="w-full flex justify-center items-center h-full bg-white/70">
            <div class="p-8 bg-white shadow-md min-w-[400px] flex flex-col gap-10 justify-center items-center">
                <nuxt-img src="/feira-saude/logo.png" class="w-[300px]"/>

                <div class="w-full flex flex-col gap-4">
                    <NuxtLink to="/feira-saude/palestras" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">PALESTRAS</NuxtLink>
                    <a href="" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">PUBLICIDADE</a>
                    <a href="" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">ESTANDES</a>
                    <a href="" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">PODCAST</a>
                    <NuxtLink to="/" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">SITE</NuxtLink>
                    <a href="" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">REVISTA</a>
                    <a href="" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">PUBLICIDADE IN LOCO</a>
                    <a href="https://www.instagram.com/feiraidesaude?igsh=bTQ5b3IzcndyMGs3" target="_blank" class="w-full px-4 py-2 bg-blue-500 rounded flex justify-center text-white hover:brightness-105">INSTAGRAM</a>
                </div>
            </div>
        </div>
    </div>
</template>

