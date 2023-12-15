<template>
    <div>
        <UiHeartAnimation />
        <button
            @click="toggleAnimation()"
            type="button"
            class="heartButton relative bg-zinc-800/80 md:bg-white/50 md:dark:bg-zinc-800/80 rounded-full flex justify-center items-center w-12 h-12"
        >
            <Ph.PhHeart :size="24" :color="fillColor" :weight="fillHeart" class="absolute z-10" />
            <span class="likeOverlay" :style="{'background-color': bgColorArray[Math.floor(Math.random() * bgColorArray.length)] }"></span>
        </button>
    </div>
</template>
<script setup>
import * as Ph from "@phosphor-icons/vue";

definePageMeta({
    layout: 'default'
})

const heartCount = useState("HEART_COUNT");
const fillHeart = ref('bold');
const bgColorArray = ['#F3DE8A','#CEE397','#BDB4BF','#D9D9D9','#EFF2EF'];
const heartColorArray = ['#EF7674','#EC5766','#DA344D','#D91E36','#C42348'];

const fillColor = ref(heartColorArray[2]);

const toggleAnimation = () => {
    const heart = document.querySelector(".heartButton");
    if(heart) {
        heartCount.value++;
        heart.classList.add("bounced");
        fillHeart.value = 'fill';
        fillColor.value = heartColorArray[Math.floor(Math.random() * heartColorArray.length)];
        setTimeout(() => {
            heart.classList.remove("bounced");
        }, 300);
    }
}
</script>

<style scoped>
.bounced {
    animation: bounced 0.6s;
    animation-duration: 0.6s;
    animation-fill-mode: both;
}
.likeOverlay{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(0);
    transition: all .4s;
    z-index: 0;
}
.bounced .likeOverlay {
    transform: scale(1);
}
@keyframes bounced {
    from, to { transform: scale(1, 1); }
    25% { transform: scale(0.9, 1.1); }
    50% { transform: scale(1.1, 0.9); }
    75% { transform: scale(0.95, 1.05);}
}
</style>