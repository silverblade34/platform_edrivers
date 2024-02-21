<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1 text-sm">
        <template v-slot:[`item.answeredquestions`]="{ item }">
            {{ item.answeredquestions.length }}
        </template>
        <template v-slot:[`item.driver`]="{ item }">
            {{ dataDrivers.find(driver => driver.id == item.driverId).name }}
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
            {{ formatCreatedAt(item.createdAt) }}
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <div class="flex gap-1 justify-center">
                <span @click="visualizeItem(item)">
                    <v-btn icon="mdi-eye" size="small" variant="text" color="green"></v-btn>
                    <v-tooltip activator="parent" location="top">Visualizar</v-tooltip>
                </span>
                <span @click="deleteItem(item)">
                    <v-btn icon="mdi-delete-empty" size="small" variant="text" color="red"></v-btn>
                    <v-tooltip activator="parent" location="top">Eliminar</v-tooltip>
                </span>
            </div>
        </template>
    </v-data-table>
    <VisualizeAnsweredForm :openModal="openModalView" :itemView="itemView" :dataDrivers="dataDrivers" @cancel-item="openModalView = false"/>
</template>
<script>
import { ref } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import VisualizeAnsweredForm from './VisualizeAnsweredForm.vue';

export default ({
    props: {
        desserts: Array,
        dataDrivers: Array
    },
    components: {
        VDataTable,
        VisualizeAnsweredForm,
    },
    emits: ['delete-item'],
    data() {
        return {
            headers: [
                { title: 'Código', key: 'id' },
                { title: 'Formulario', align: 'start', key: 'form.title' },
                { title: 'Preguntas respondidas', align: 'start', key: 'answeredquestions' },
                { title: 'Conductor', align: 'start', key: 'driver' },
                { title: 'Fecha de creación', align: 'center', key: 'createdAt' },
                { title: 'Acciones', align: 'center', key: 'actions' },
            ]
        }
    },
    setup(_, { emit }) {
        const itemView = ref({})
        const openModalView = ref(false)

        const visualizeItem = (item) => {
            openModalView.value = true
            itemView.value = item
        }

        const deleteItem = (item) => {
            emit('delete-item', { item })
        }
        const formatCreatedAt = (dateString) => {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const createdAt = new Date(dateString).toLocaleDateString('es-PE', options);
            return createdAt;
        }
        return {
            itemView,
            openModalView,
            formatCreatedAt,
            visualizeItem,
            deleteItem
        }
    }
})
</script>