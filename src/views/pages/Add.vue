<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Input Contact</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Input Data Contact</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-input label="Nama" label-placement="floating" placeholder="Masukkan Nama"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-input label="Email" label-placement="floating"
                                placeholder="Masukkan Email"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-input label="Telp" label-placement="floating"
                                placeholder="Masukkan Telepon"></ion-input>
                        </ion-item>

                        <ion-list>
                            <ion-list-header>Kelamin</ion-list-header>

                            <ion-radio-group>
                                <ion-item>
                                    <ion-radio value="1" justify="end">Lanang</ion-radio>
                                </ion-item>
                            </ion-radio-group>

                            <ion-radio-group>
                                <ion-item>
                                    <ion-radio value="2" justify="end">Wadon</ion-radio>
                                </ion-item>
                            </ion-radio-group>
                        </ion-list>

                        <ion-item>
                            <ion-select label="Tipe" placeholder="Tipe Kontak">
                                <ion-select-option value="0">Biasa</ion-select-option>
                                <ion-select-option value="1">Favorit</ion-select-option>
                            </ion-select>
                        </ion-item>

                        <ion-item>
                            <ion-textarea label="Alamat" label-placement="floating"
                                placeholder="Masukkan Alamat"></ion-textarea>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonList, IonItemSliding, IonFab, IonItemOption, IonIcon, IonItem, IonListHeader, IonLabel, IonItemOptions, IonInput, IonSelect, IonTextarea, IonRadio, IonRadioGroup, IonSelectOption } from '@ionic/vue';
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}
</script>

<style></style>