<template>
    <NuxtLoadingIndicator :color="'pink'" />
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup lang="ts">
const heartCount = useState("HEART_COUNT", () => 0);
</script>
