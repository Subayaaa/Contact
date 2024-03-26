<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Contact's Favorite</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-list-header>
          <ion-label>Daftar Kontak</ion-label>
        </ion-list-header>

        <ion-item-sliding>
          <ion-item>
            <ion-label>
              <h2>Nama Kontak</h2>
              <p>Nomor</p>
              <p>Email</p>
            </ion-label>
          </ion-item>

          <ion-item-options>
            <ion-item-option>
              <ion-icon slot="start" :icon="heart"></ion-icon>UNFAV
            </ion-item-option>
            <ion-item-option color="danger">
              <ion-icon slot="start" :icon="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <ion-label>
              <h2>Nama Kontak</h2>
              <p>Nomor</p>
              <p>Email</p>
            </ion-label>
          </ion-item>

          <ion-item-options>
            <ion-item-option>
              <ion-icon slot="start" :icon="heart"></ion-icon>UNFAV
            </ion-item-option>
            <ion-item-option color="danger">
              <ion-icon slot="start" :icon="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { heart, trash } from "ionicons/icons";
</script>
