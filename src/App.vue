<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite + Tailwind CSS" /> -->

    <div class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <header>
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Vite + Vue + Tailwind CSS
            </h1>
            <p class="mt-6 max-w-3xl text-xl">
                A simple starter project that allows you to quickly build and deploy simple one-page
                static-content websites.
            </p>
        </header>

        <main class="prose mt-12 lg:prose-lg">
            <p>
                Bavaria ipsum dolor sit amet Foidweg Auffisteign mogsd a Bussal i bin a woschechta
                Bayer soi. I moan scho aa hinter'm Berg san a no Leit schaugn glacht, Brodzeid. Do
                legst di nieda i sog ja nix, i red ja bloß so schee, Hendl. Iabaroi a bissal wos
                gehd ollaweil Maderln gar nia need, gschmeidig. Fei Weißwiaschd i hob di narrisch
                gean is, hallelujah sog i, luja! Samma sog i pfundig naa Weibaleid Weibaleid nois,
                Radler Hetschapfah Deandlgwand sei. Umma ognudelt fias Sauwedda.
            </p>

            <p>
                Watschnpladdla dahoam a sog i. Trihöleridi dijidiholleri scheans ded Maßkruag,
                Schuabladdla Reiwadatschi schoo Guglhupf glacht. Wo hi Ledahosn Schorsch Stubn
                ghupft wia gsprunga gwiss Wurschtsolod? I sog ja nix, i red ja bloß Almrausch wo hi
                moand Kaiwe Spotzerl hea von nackata Weiznglasl Foidweg. Spuiratz Kuaschwanz Schneid
                in da liberalitas Bavariae eana Baamwach dahoam Foidweg.
            </p>
        </main>

        <footer class="mt-12 text-lg">
            <small>&copy;{{ currentYear }} example footer content</small>
        </footer>
    </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

const currentYear = new Date().getFullYear()
</script>

<style></style>
