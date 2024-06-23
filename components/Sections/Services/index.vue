<script lang="ts" setup>
import { useServicesItems } from '~/composables/useServicesItems';
import IconAcessoriaDidatica from '~/components/icons/IconAcessoriaDidatica.vue';
import IconAcessoriaEmocional from '~/components/icons/IconAcessoriaEmocional.vue';
import IconAcessoriaEventos from '~/components/icons/IconAcessoriaEventos.vue';
import IconAcessoriaFinanceira from '~/components/icons/IconAcessoriaFinanceira.vue';
import IconAcessoriaFormatura from '~/components/icons/IconAcessoriaFormatura.vue';
import IconAcessoriaFraternal from '~/components/icons/IconAcessoriaFraternal.vue';
import IconAcessoriaImobiliaria from '~/components/icons/IconAcessoriaImobiliaria.vue';
import IconAcessoriaJuridica from '~/components/icons/IconAcessoriaJuridica.vue';
import IconAcessoriaManutencaoMobiliaria from '~/components/icons/IconAcessoriaManutencaoMobiliaria.vue';
import IconAcessoriaMarketing from '~/components/icons/IconAcessoriaMarketing.vue';
import IconAcessoriaMobiliaria from '~/components/icons/IconAcessoriaMobiliaria.vue';
import IconAcessoriaMobilidade from '~/components/icons/IconAcessoriaMobilidade.vue';
import IconAcessoriaRecepcao from '~/components/icons/IconAcessoriaRecepcao.vue';
import IconAcessoriaViagem from '~/components/icons/IconAcessoriaViagem.vue';
import IconCursosGratuitos from '~/components/icons/IconCursosGratuitos.vue';
import IconDiscountCard from '~/components/icons/IconDiscountCard.vue';
import IconIdentificacaoECredenciamento from '~/components/icons/IconIdentificacaoECredenciamento.vue';
import IconMeiaEntrada from '~/components/icons/IconMeiaEntrada.vue';
import IconOportunity from '~/components/icons/IconOportunity.vue';
import iconDivulgacao from '~/components/icons/iconDivulgacao.vue';

interface servicesProps {
    icon: string,
    title: string,
    link: string
}
const serviceItems:servicesProps[] = useServicesItems()

const serviceIcons:any = {
    iconDivulgacao,
    IconAcessoriaDidatica,
    IconAcessoriaEmocional,
    IconAcessoriaEventos,
    IconAcessoriaFinanceira,
    IconAcessoriaFormatura,
    IconAcessoriaFraternal,
    IconAcessoriaImobiliaria,
    IconAcessoriaJuridica,
    IconAcessoriaManutencaoMobiliaria,
    IconAcessoriaMarketing,
    IconAcessoriaMobiliaria,
    IconAcessoriaMobilidade,
    IconAcessoriaRecepcao,
    IconAcessoriaViagem,
    IconCursosGratuitos,
    IconDiscountCard,
    IconIdentificacaoECredenciamento,
    IconMeiaEntrada,
    IconOportunity,
}

</script>

<template>
    <Container class="py-10">
        <div class="w-full justify-center items-center py-20">
            <h4 class="font-bold text-4xl text-primary text-center">
                O que nós 
                <span class="text-secondary">Oferecemos?</span>
            </h4>
        </div>

        <div class="grid xs:grid-cols-2 md:grid-cols-4 gap-10">
            <a 
                v-for="service in serviceItems" 
                :href="service.link" 
                target="_blank"
                class="flex flex-col gap-4 items-center justify-center"
            >
                <div class="bg-primary rounded-full w-[100px] h-[100px] flex items-center justify-center">
                    <component :is="serviceIcons[service.icon]"/>
                </div>

                <span class="text-center text-text">
                    {{ service.title }}
                </span>
            </a>
        </div>
    </Container>
</template>
