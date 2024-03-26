import { add } from 'ionicons/icons';
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Todo Apps</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-list inset="true" lines="inset">
                <ion-list-header>
                    <ion-label>Video Games</ion-label>
                </ion-list-header>

                <ion-item>
                    <ion-label>
                        <h2>Red Dead Redemption 2</h2>
                        <p>Rockstar</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>GTA V</h2>
                        <p>Rockstar</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Valorant</h2>
                        <p>Riot Games</p>
                    </ion-label>
                </ion-item>
            </ion-list>

            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button>
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>

        <ion-footer>
            <ion-toolbar>
                <ion-title>Todo Apps</ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { logoIonic, add } from 'ionicons/icons';
</script>

<style>
ion-content {
    height: 90%;
}
</style>