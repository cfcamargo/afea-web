<script lang="ts" setup>
const form = reactive({
    nome: '',
    telefone: '',
    email: '',
    instituicao: ''
})
const submit = () => {

}

</script>

<template>
    <section id="contact" class="py-20">
        <div class="w-full flex justify-center pb-20">
            <h4 class="font-bold text-4xl text-primary">Entre Em Contato</h4>
        </div>
        <Container class="justify-end grid xs:grid-cols-1 md:grid-cols-2 gap-20">
            <div class="flex items-center justify-center">
                <NuxtImg src="/CONTACT.png"/>
            </div>
            <div class="h-full">
                <form @submit.prevent="submit" class="shadow-md rounded bg-white p-8 h-full flex flex-col items-center justify-center">
                    <h3 class="text-center text-text text-2xl">Preencha o Formulário abaixo, que nossa equipe entrará em contato</h3>

                    <div class="flex flex-col gap-4 mt-10 w-full">
                        <div class="flex gap-2 items-center p-2 border rounded-md text-text">
                            <label for="name" class="text-text">Nome:</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" class="bg-none focus:outline-none">
                        </div>

                        <div class="flex gap-2 items-center p-2 border rounded-md text-text">
                            <label for="email" class="text-text">Email:</label>
                            <input type="text" id="email" name="email" placeholder="Seu melhor Email" class="bg-none focus:outline-none">
                        </div>

                        <div class="flex gap-2 items-center p-2 border rounded-md text-text">
                            <label for="phone" class="text-text">Telefone:</label>
                            <input type="text" id="phone" name="phone" placeholder="Seu Telefone/Whatsapp" class="bg-none focus:outline-none">
                        </div>

                        <div class="flex gap-2 items-center p-2 border rounded-md text-text">
                            <label for="college" class="text-text">Instituição:</label>
                            <input type="text" id="college" name="college" placeholder="Seu Telefone/Whatsapp" class="bg-none focus:outline-none">
                        </div>

                        <BaseButton @click="submit" type="submit">
                            Enviar
                        </BaseButton>
                    </div>
                </form>
            </div>
        </Container>
    </section>
</template>
