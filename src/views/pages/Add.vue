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

                        <ion-input label="Nama" v-model="name" label-placement="floating" fill="solid"
                            placeholder="Masukkan Nama"></ion-input>

                        <ion-input label="Email" v-model="email" label-placement="floating" fill="solid"
                            placeholder="Masukkan Email"></ion-input>

                        <ion-input label="Telepon" v-model="phone" label-placement="floating" fill="solid"
                            placeholder="Masukkan Telepon"></ion-input>

                        <ion-radio-group>
                            <ion-item fill="solid" v-model="gender">
                                <ion-radio value="1" justify="start" label-placement="end">Lanang</ion-radio>
                            </ion-item>
                            <ion-item fill="solid">
                                <ion-radio value="2" justify="start" label-placement="end">Wadon</ion-radio>
                            </ion-item>
                        </ion-radio-group>

                        <ion-select label="Tipe" v-model="isFav" placeholder="Tipe Kontak" fill="solid">
                            <ion-select-option value="false">Biasa</ion-select-option>
                            <ion-select-option value="true">Favorit</ion-select-option>
                        </ion-select>

                        <ion-textarea label="Alamat" v-model="address" label-placement="floating" fill="solid"
                            placeholder="Masukkan Alamat"></ion-textarea>

                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>

        <ion-footer>
            <ion-button @click="simpan" expand="block">
                <ion-icon slot="start" :icon="save"></ion-icon>
                Simpan
            </ion-button>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { data } from '../../services/contacts';
import { useRouter } from 'vue-router';
import { arrowBackOutline, save } from "ionicons/icons";

const name = ref('')
const email = ref('')
const address = ref('')
const phone = ref('')
const gender = ref(1)
const isFav = ref(false)

const router = useRouter()

const back = () => {
    router.back()
}

const simpan = () => {
    const contact = {
        name: name.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        gender: gender.value,
        isFav: isFav.value,
    }

    console.log(contact)

    data.value.push(contact)

    router.back()
}
</script>

<style></style>