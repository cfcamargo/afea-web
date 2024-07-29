<script lang="ts" setup>
import { Instagram } from 'lucide-vue-next';

</script> 

<template>
    <footer class="w-full py-10">
        <Container class="grid xs:grid-cols-1 md:grid-cols-3 xs:gap-10 md:gap-4">
            <div class="w-full">
                <NuxtImg src="/logo.png" class="w-[100px]"/>
            </div>

            <div class="flex flex-col gap-4">
                <div>
                    <span class="font-bold text-primary">Endereço</span>
                    <p class="text-text">
                        Av. Brasil, 4106 - Centro
                    </p>
                    <p class="text-text">
                        Ponta Porã - MS
                    </p>
                </div>

                <div>
                    <span class="font-bold text-primary">Telefone</span>
                    <p class="text-text">
                        +679 9842-2638
                    </p>
                </div>

                <div>
                    <span class="font-bold text-primary">Email</span>
                    <p class="text-text">
                        contatofea@gmail.com
                    </p>
                </div>
            </div>

            <div>
                <span class="font-bold text-primary">Redes Sociais</span>
                <div>
                    <div class="flex items-center gap-2 mt-4">
                        <Instagram :size="20"/>
                        <span>associacaoafea</span>
                    </div>
                </div>
            </div>
        </Container>

        <div class="flex flex-col justify-center w-full mt-16">
            <p class="font-bold text-secondary text-center">Associação Fronteiriça de Estudantes e Acadêmicos</p>
            <span class="text-text text-xs text-center">Todos os direitos reservados</span>
        </div>
    </footer>
</template>

