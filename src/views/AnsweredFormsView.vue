<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Reportes de formularios</h1>
    </div>
    <div class="py-5">
        <div class="block w-full lg:flex justify-between gap-2 items-center mb-4">
            <div class="block w-full md:flex lg:flex gap-3 lg:w-[70%] md:w-[100%] items-center">
                <v-text-field label="Fecha desde" type="date" hide-details density="compact" v-model="dateFrom"
                    variant="outlined" color="indigo" class="mb-3 md:mb-0"></v-text-field>

                <v-text-field label="Fecha hasta" type="date" hide-details density="compact" v-model="dateTo"
                    variant="outlined" color="indigo" class="mb-3 md:mb-0"></v-text-field>

                <v-autocomplete label="Conductores" :items="dropdownDrivers" color="blue" v-model="driver"
                    variant="outlined" hide-details density="compact"
                    class="mb-3 md:mb-0 md:w-[20rem] w-full"></v-autocomplete>

                <v-btn color="indigo" class="custom-btn mb-3 md:mb-0" @click="searchReport">Buscar</v-btn>
            </div>
        </div>
        <TableAnsweredFormVue :desserts="dessertsAnsweredForms" />
    </div>
</template>
<script>
import { findAllDriversApi } from '@/api/DriversService';
import TableAnsweredFormVue from '@/components/answered-form/TableAnsweredForm.vue';
import { ref, onMounted } from 'vue';
import store from '@/store';

export default {
    components: {
        TableAnsweredFormVue
    },
    setup() {
        const dateFrom = ref('');
        const dateTo = ref('');
        const driver = ref('');
        const dataDrivers = ref([]);
        const dropdownDrivers = ref([]);
        const dessertsAnsweredForms = ref([]);

        onMounted(async () => {
            reloadData();
        })

        const reloadData = () => {
            findAllDriversApi(store.state.token)
                .then(response => {
                    dataDrivers.value = response.data.data
                    const driversParsed = response.data.data.map(driver => driver.name)
                    driversParsed.unshift('Todos');
                    dropdownDrivers.value = driversParsed
                })
        }

        return {
            driver,
            dateFrom,
            dateTo,
            dataDrivers,
            dropdownDrivers,
            dessertsAnsweredForms
        }
    }
}
</script>