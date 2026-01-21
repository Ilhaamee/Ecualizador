<script setup>
import { ref } from 'vue'

import casetePlay from '../assets/PinkRadioGIF.gif'
import casetePause from '../assets/casetePause.png'
import sonido from '../assets/sonidoDisplay.gif'
import sonidoPause from '../assets/sonidoDisplayPause.png'
import buttonControl from './buttonControl.vue'

import song1 from '../assets/3am.mp3'
import song2 from '../assets/DELLALI.mp3'
import song3 from '../assets/bittersweet.mp3'
import song4 from '../assets/IS_IT.mp3'

const playlist = [song1, song2, song3, song4]
const currentSongIndex = ref(0)
const audioRef = ref(null)
const isPlaying = ref(false)

function Play() {
    audioRef.value.play()
    isPlaying.value = true
}

function Stop() {
    audioRef.value.pause()
    audioRef.value.currentTime = 0
    isPlaying.value = false
}

/*function Play() {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}*/

function Fastforward() {
    audioRef.value.currentTime += 5
}

function Fastrewind() {
    audioRef.value.currentTime -= 5
}

function Eject() {
    audioRef.value.pause()
    isPlaying.value = false
}

function NextSong() {
  currentSongIndex.value =
    (currentSongIndex.value + 1) % playlist.length

  audioRef.value.load()

  if (isPlaying.value) {
    audioRef.value.play()
  }
}
</script>

<template>
    <div class="casete-container">
        <div class="casete">
            <div class="sonido">
                <img :src="isPlaying ? sonido : sonidoPause" alt="sonido" />
            </div>

            <!--<div class="sonido">
                <img :src="sonido" alt="sonido">
            </div>
            
            <div class="image-casete">
                <img :src="caseteImage" alt="casete">
            </div>-->

            <div class="image-casete">
                <img :src="isPlaying ? casetePlay : casetePause" alt="casete" />
            </div>
        </div>

        <div class="controls">
            <buttonControl 
                @fastrewind="Fastrewind"
                @play="Play"
                @fastforward="Fastforward"
                @next="NextSong"
                @stop="Stop"
                @eject="Eject"
            />
        </div>

        <div class="canciones">
            <audio ref="audioRef" @ended="isPlaying = false":key="currentSongIndex">
                <source :src="playlist[currentSongIndex]" type="audio/mpeg" />
            </audio>

            <!--<audio controls control>
                <source :src="playlist[0]" type="audio/mpeg">
                <source :src="playlist[1]" type="audio/mpeg">
                <source :src="playlist[2]" type="audio/mpeg">
            </audio>-->
        </div>
    </div>
</template>

<style scoped>
.casete-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
}

.casete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 50px; 
}

.sonido img,
.image-casete img {
    max-width: 100%;
    height: auto;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
}
</style>
