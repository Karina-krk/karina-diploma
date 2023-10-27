
<template>
    <div class="card flex justify-content-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

const dialog = useDialog();
const toast = useToast();

const showProducts = () => {
    const dialogRef = dialog.open(ProductListDemo, {
        props: {
            header: 'Product List',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        templates: {
            footer: markRaw(FooterDemo)
        },
        onClose: (options) => {
            const data = options.data;
            if (data) {
                const buttonType = data.buttonType;
                const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };

                toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            }
        }
    });
}
</script>
