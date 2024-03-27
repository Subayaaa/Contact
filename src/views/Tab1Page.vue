<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-list-header>
          <ion-label>Daftar Kontak</ion-label>
        </ion-list-header>

        <ion-item-sliding v-for="i in data">
          <ion-item>
            <ion-label>
              <h2>{{ i.name }}</h2>
              <p>{{ i.phone }}</p>
              <p>{{ i.email }}</p>
            </ion-label>
          </ion-item>

          <ion-item-options>
            <ion-item-option><ion-icon slot="start" :icon="heart"></ion-icon>Favorite</ion-item-option>
            <ion-item-option color="danger"><ion-icon slot="start" :icon="trash"></ion-icon></ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="success" @click="tambah">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { data } from "../services/contacts";
import { useRouter } from 'vue-router';
import { add, heart, trash } from "ionicons/icons";

const router = useRouter()

const tambah = () => {
  router.push('/add')
}
</script>