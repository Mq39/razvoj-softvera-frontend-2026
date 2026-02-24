<script lang="ts" setup>
import { ref } from 'vue';
import type { ToyModel } from './models/toy.model';
import { ToyService } from './services/toy.service';
import MainLayout from './components/MainLayout.vue';

const toys = ref<ToyModel[]>()

ToyService.getToys()
    .then(rsp => toys.value = rsp.data)
</script>


<template>
    <MainLayout>
        <h1>Home page</h1>
        <pre v-if="toys">{{ toys[0]?.name }}</pre>
        <p v-else>Ucitavanje...</p>
    </MainLayout>
</template>