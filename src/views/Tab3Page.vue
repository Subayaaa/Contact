<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-list>
        <ion-list-header>
          <ion-label>Vue Basic Features</ion-label>
        </ion-list-header>

        <ion-item @click="toState" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>State</h2>
            <p>State Management?</p>
          </ion-label>
        </ion-item>

        <ion-item @click="toIterator" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Iterator - V-for</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toIf" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>If Statement - v-if</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toModal" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Model - Two Data Binding - v-if</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toEvent" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Event</h2>
            <p></p>
          </ion-label>
        </ion-item>

        <ion-item @click="toLifecycle" class="ion-activatable ripple-parent">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-label>
            <h2>Lifecycle</h2>
            <p></p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter()

const toEvent = () => router.push({ path: '/vue/event' })
const toIf = () => router.push({ path: '/vue/if' })
const toIterator = () => router.push({ path: '/vue/iterator' })
const toLifecycle = () => router.push({ path: '/vue/lifecycle' })
const toModal = () => router.push({ path: '/vue/modal' })
const toState = () => router.push({ path: '/vue/state' })

// VARIABLE let, var, const

// penulisan variable dengan let
// let tidak bersifat constant, jadi nilai variable bisa dirubah
let name = 'Arif'

// penulisan variable dengan const
// const bersifat constant, jadi nilai variable tidak bisa dirubah
const kelas = 'IK2'

// FUNCTION

// menggunakan syntax function
function gantiNama(name: string) {
  alert('ganti nama')
}

// menggunakan syntak const
const gantiKelas = (name: string) => {
  alert('ganti kelas')
}

// TIPE PRIMITIVE
// string, number, boolean, any, Array

// 1. string
const peliharaan: string = 'kucing'

// 2. number
const umur: number = 20

// 3. boolean
const isHidup: boolean = true /* true or false */

// 4. any
const gajelas: any = true /* could be string, number, or boolean but not effective */

// 5. Array
const names: Array<string> = [
  'arip',
  'yanto',
  'madun',
]

const nilais: number[] = [
  1,
  2,
  3,
]

const semrawut: any[] = [
  'aku',
  123,
  true
]

// TIPE DATA OBJEK
const orang = {
  nama: 'Yanto',
  kelas: 'IK2',
  umur: 30,
  pacars: [
    'Ayu',
    'Ginanjar',
    'Dewi',
  ],
  ayah: {
    nama: 'Pak Ku',
    jk: 2,
    alamat: 'Jl. Thamrin 35A'
  }
}

const siswas: any[] = [
  {
    name: 'si A',
    umur: 17
  },
  {
    name: 'si B',
    umur: 20
  },
  {
    name: 'si C',
    umur: 50
  },
]

// TIPE - CUSTOM
type Orang = {
  name: string
  kelas: string
  umur: number
  isHidup?: boolean
  alamat?: string
  jk?: KELAMIN
}

const orang1: Orang = {
  name: '',
  kelas: '',
  isHidup: false,
  umur: 12
}

const orang2: Orang = {
  name: '',
  kelas: '',
  umur: 12,
  jk: 'laki-laki'
}

// TIPE - enumable
type KELAMIN = 'laki-laki' | 'perempuan';
</script>
