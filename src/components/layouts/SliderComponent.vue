
<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="pos of positions" :key="pos.label" class="flex align-items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" :position="position">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
const positions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);

</script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>