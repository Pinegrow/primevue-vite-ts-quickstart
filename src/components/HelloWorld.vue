<script lang="ts" setup>
import {ref} from 'vue'
import { useToast } from "primevue/usetoast";

const toast = useToast();

const increaseCount = () => {
  count.value++

  if(count.value === 3) {
    toast.add({severity:'success', summary: 'PrimeVue', detail:'Welcome to PrimeVue + Create Vue', life: 3000})

    count.value = 0
  }
}

const count = ref(0)
</script>
<template>
    <div class="greetings">
        <Card style="margin-bottom: 35px;">
            <template #subtitle>
                <h6>This is a subtitle</h6>
            </template>
            <template #title>
                <h1>This is a card</h1>
            </template>
        </Card>
        <Toast/>
        <Avatar image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGF2YXRhcnxlbnwwfHx8fDE2OTc4MDkzNjJ8MA&ixlib=rb-4.0.3&q=80&w=200" shape="circle" size="large"></Avatar>
        <h3> <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> + <a href="https://www.primefaces.org/primevue/" target="_blank" rel="noopener">PrimeVue</a>. </h3>
        <Button @click="increaseCount" label="Count"></Button>
        <Button size="large">My Button</Button>
        <Button size="large" rounded outlined style="margin: 66px 53px 84px 44px;">Our Temp Fix</Button>
        <h5 class="green">{{ count }}</h5>
    </div>
</template>
<style scoped>h1 { font-weight: 500; font-size: 2.6rem; top: -10px; } h3 { font-size: 1.2rem; } .green { margin-top: 20px; } button { margin-top: 20px; margin-right: 33px; margin-bottom: 43px; }</style>
