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
      <TableAnsweredFormVue :desserts="dessertsAnsweredForms" :dataDrivers="dataDrivers" />
      <v-dialog v-model="showAlert" persistent max-width="400">
        <v-card>
          <v-card-title class="headline">
            ¡Alerta!
          </v-card-title>
          <v-card-text>
            Por favor, seleccione ambas fechas.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="showAlert = false">
              Entendido
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import { reportAnsweredFormApi } from "@/api/AnsweredFormService";
  import { findAllDriversApi } from "@/api/DriversService";
  import TableAnsweredFormVue from "@/components/answered-form/TableAnsweredForm.vue";
  import { ref, onMounted, watch } from "vue";
  import store from "@/store";
  
  export default {
    components: {
      TableAnsweredFormVue,
    },
    setup() {
      const dateFrom = ref("");
      const dateTo = ref("");
      const driver = ref("");
      const driverId = ref(0);
      const dataDrivers = ref([]);
      const dropdownDrivers = ref([]);
      const dessertsAnsweredForms = ref([]);
      const showAlert = ref(false);
  
      onMounted(async () => {
        reloadData();
      });
  
      const reloadData = () => {
        findAllDriversApi(store.state.token).then((response) => {
          dataDrivers.value = response.data.data;
          const driversParsed = response.data.data.map((driver) => driver.name);
          driversParsed.unshift("Todos");
          dropdownDrivers.value = driversParsed;
        });
      };
  
      watch(() => driver.value, (newVal) => {
        if (newVal !== "Todos") {
          driverId.value = dataDrivers.value.find((driver) => driver.name === newVal).id;
        } else {
          driverId.value = 0;
        }
      });
  
      const searchReport = () => {
        // Validar que ambas fechas estén seleccionadas
        if (!dateFrom.value || !dateTo.value) {
          // Mostrar alerta si alguna fecha está faltante
          showAlert.value = true;
          return;
        }
  
        const payload = {
          dateFrom: dateFrom.value,
          dateTo: dateTo.value,
          driverId: driverId.value,
        };
  
        reportAnsweredFormApi(payload, store.state.token)
          .then((response) => {
            dessertsAnsweredForms.value = response.data.data;
          })
          .catch((error) => {
            console.error("Error al realizar la búsqueda:", error);
            // Manejar el error de manera apropiada
          });
      };
  
      return {
        driver,
        dateFrom,
        dateTo,
        dataDrivers,
        dropdownDrivers,
        searchReport,
        dessertsAnsweredForms,
        showAlert,
      };
    },
  };
  </script>
  