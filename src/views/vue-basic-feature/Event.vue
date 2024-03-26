<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Event</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Event</ion-title>
                </ion-toolbar>
            </ion-header>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useRouter } from "vue-router";
import { arrowBackOutline } from 'ionicons/icons';

const router = useRouter()

const back = () => {
    router.back()
}
</script>