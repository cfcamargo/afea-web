<script lang="ts" setup>

const cards = [
    {
        icon: 'Books',
        title: 'Nossos Projetos',
        description: 'Oferecemos uma variedade de projetos e iniciativas que incentivam a aprendizagem contínua, o desenvolvimento de habilidades e a participação ativa na comunidade.'
    },
    {
        icon: 'Star',
        title: 'Nossa Missão',
        description: 'Promover a união e o desenvolvimento dos estudantes através de atividades educacionais, culturais e sociais, preparando líderes para um futuro melhor.'
    },
    {
        icon: 'HandShake',
        title: 'Nossos Valores',
        description: 'Valorizamos a colaboração, a inovação, a ética e o comprometimento com a educação de qualidade, buscando sempre o crescimento pessoal e coletivo.'
    },
    {
        icon: 'Trophy',
        title: 'Nossos Resultados',
        description: 'Com orgulho, compartilhamos nossas conquistas e os impactos positivos que nossos membros têm alcançado, demonstrando a força e a dedicação de nossa comunidade estudantil.'
    },

]

</script>

<template>
    <section id="about" class="">
        <Container class="py-8 flex xs:flex-col md:flex-row gap-10 items-center">
            <div class="w-full max-w-[500px] flex flex-col gap-4 items-start">
                <h3 class="font-bold text-3xl text-primary">
                    QUEM SOMOS ?
                </h3>

                <p class="text-justify text-text">
                    Somos uma organização de estudantes, focados no bem estar, que através do trabalho em equipe e sistema de credenciamento estudantil, estamos comprometidos em causar diferença na vida dos estudantes, sobretudo destacar todos os benefícios  que posssam ser proporcionados, dando-lhes uma oportunidade real de crescimento pessoal, contribuição social e benefícios financeiros
                </p>
                <a href="https://wa.me/5567998422638" target="_blank">
                    <BaseButton>
                        Contato
                    </BaseButton>
                </a>
            </div>

            <div class="flex-1 grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                <div class="transform flex flex-col gap-4 xs:translate-y-0 md:translate-y-[50px]">
                    <CardAbout :data="cards[0]"/>
                    <CardAbout :data="cards[2]"/>
                </div>

                <div class="transform flex flex-col gap-4 xs:translate-y-0 md:-translate-y-[50px]">
                    <CardAbout :data="cards[1]"/>
                    <CardAbout :data="cards[3]"/>
                </div>
            </div>
        </Container>
    </section>
</template>
