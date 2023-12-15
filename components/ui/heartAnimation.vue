<template>
    <div class="relative">
        <div
                class="heart move"
                :class="{
				'ml-[8px] left-move': index % 2 === 0,
				'ml-[16px] ': index % 2 !== 0,
			}"
                v-for="(item, index) in heartCount"
        >
            <div v-if="(index % 16 === 0 || index % 20 === 0) && index > 15" class="w-[40px] h-[30px]">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :class="{ 'pl-[15px]': index % 4 === 0 }">
                    <!--라이브-->
                    <lottie-player
                            src="https://lottie.host/da802902-ed4b-404c-93d1-7377d29e04e5/CRL9l2IiLD.json"
                            background="transparent"
                            speed="1"
                            style="width: 50px; height: 50px"
                            loop
                            autoplay
                    ></lottie-player>
                </div>
            </div>
            <div v-if="(index % 14 === 0 || index % 19 === 0) && index > 10" class="w-[40px] h-[30px]">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :class="{ 'pl-[15px]': index % 6 === 0 }">
                    <!--스마일-->
                    <lottie-player
                            src="https://lottie.host/956d3180-ac0e-41ae-808c-3016787eb237/CecD01af83.json"
                            background="transparent"
                            speed="1"
                            style="width: 70px; height: 70px"
                            loop
                            autoplay
                    ></lottie-player>
                </div>
            </div>
            <div v-if="(index % 6 === 0 || index % 10 === 0) && index > 5" class="w-[40px] h-[30px]">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" :class="{ 'pl-[15px]': index % 6 === 0 }">
                    <!--흘러내리는 하트-->
                    <lottie-player
                            src="https://lottie.host/92228642-ea8a-4ee7-b60e-6b6d2a22c86e/fCC9rHWaRQ.json"
                            background="transparent"
                            speed="1"
                            style="width: 150px; height: 150px"
                            loop
                            autoplay
                    ></lottie-player>
                </div>
            </div>
            <Ph.PhHeart :size="20" :color="heartColorArray[Math.floor(Math.random() * heartColorArray.length)]" weight="fill" class="ml-1"/>
            <Ph.PhHeart :size="15" :color="heartColorArray[Math.floor(Math.random() * heartColorArray.length)]" weight="fill" v-if="index % 2 !== 0" class="mr-1" />
            <Ph.PhHeart :size="25" :color="heartColorArray[Math.floor(Math.random() * heartColorArray.length)]" weight="fill" v-else class="ml-3"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Ph from "@phosphor-icons/vue";
const heartCount = useState("HEART_COUNT");
const heartColorArray = ['#EF7674','#EC5766','#DA344D','#D91E36','#C42348'];
</script>

<style scoped>
.heart {
    position: absolute;
    bottom: 10px;
}

.heart.move {
    animation: upAnimation 2.8s ease-in-out forwards, disappear 2s cubic-bezier(0.215, 0.61, 0.255, 1) forwards;
}
.heart.left-move {
    animation: leftAnimation 2.8s ease-in-out forwards, disappear 2s cubic-bezier(0.215, 0.61, 0.255, 1) forwards;
}

@-webkit-keyframes disappear {
    0% {
        opacity: 0;
    }
    10%,
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes disappear {
    0% {
        opacity: 0;
    }
    10%,
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes upAnimation {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-150px);
        transform: translateY(-150px) translateX(30px);
    }
}

@keyframes upAnimation {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-30em);
        transform: translateY(-30em) translateX(30px);
    }
}
@-webkit-keyframes leftAnimation {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-150px);
        transform: translateY(-150px) translateX(-30px);
    }
}

@keyframes leftAnimation {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-30em);
        transform: translateY(-30em) translateX(-30px);
    }
}
</style>