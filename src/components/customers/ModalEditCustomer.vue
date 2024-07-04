<template>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-500 font-bold title_views">EDITAR COMPAÑIA</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Nombre" color="blue" v-model="name"
                        prepend-inner-icon="mdi-text"></v-text-field>
                    <v-text-field variant="outlined" label="Usuario" prepend-inner-icon="mdi-account" color="blue"
                        v-model="username"></v-text-field>
                    <v-text-field variant="outlined" label="Contraseña" prepend-inner-icon="mdi-lock" color="blue"
                        v-model="password"></v-text-field>
                    <v-select :items="recourses" label="Recursos" item-text="name" item-value="recourseId" v-model="selectedRecourse" :disabled="loadingRecourses"></v-select>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="closeItem">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="editItem" :disabled="loadingRecourses">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { findRecoursesApi, assignRecourseApi } from '@/api/CustomersService'; // Asegúrate de tener esta función en tu servicio
import store from '@/store';

export default {
    props: {
        itemEdit: Object,
        openModal: Boolean
    },
    emits: ['edit-item', 'cancel-item'],
    setup(props, { emit }) {
        const dialog = ref(false);
        const id = ref('');
        const name = ref('');
        const username = ref('');
        const password = ref('');
        const codecompany = ref('');
        const recourses = ref([]);
        const selectedRecourse = ref(null);
        const loadingRecourses = ref(false);

        watch(() => props.openModal, (newVal) => {
            dialog.value = newVal;
        });

        watch(() => props.itemEdit, async (newVal) => {
            if (Object.keys(newVal).length !== 0) {
                id.value = newVal.item.id;
                name.value = newVal.item.name;
                username.value = newVal.item.user.username;
                password.value = newVal.item.user.password;
                codecompany.value = newVal.item.codecompany;
                selectedRecourse.value = newVal.item.recourseId; // Preseleccionar el recurso asignado previamente
                await loadRecourses(newVal.item.id); // Carga los recursos cuando el modal se abre
            }
        });

        const loadRecourses = async (id) => {
            recourses.value = []; // Vacía la lista de recursos
            loadingRecourses.value = true; // Activa el indicador de carga
            try {
                const response = await findRecoursesApi(store.state.token, id);
                console.log('Recourses response:', response.data);
                recourses.value = response.data.data.map(recourse => recourse.recourseId); // Extraer solo los valores de recourseId
            } catch (error) {
                console.error('Error loading recourses:', error);
            } finally {
                loadingRecourses.value = false; // Desactiva el indicador de carga
            }
        };

        const assignRecourse = async () => {
            try {
                const payload = {
                    customerId: id.value,
                    recourseId: selectedRecourse.value
                };
                await assignRecourseApi(payload, store.state.token);
                console.log('Recurso asignado correctamente');
            } catch (error) {
                console.error('Error asignando recurso:', error);
            }
        };

        const editItem = async () => {
            emit("edit-item", {
                id: id.value,
                name: name.value,
                username: username.value,
                password: password.value,
                codecompany: codecompany.value,
                recourseId: selectedRecourse.value // Agregar el recurso seleccionado
            });
            await assignRecourse(); // Asignar el recurso al cliente
            closeItem();
        };

        const closeItem = () => {
            emit('cancel-item');
        };

        return {
            dialog,
            name,
            id,
            username,
            password,
            codecompany,
            recourses,
            selectedRecourse,
            loadingRecourses,
            editItem,
            closeItem
        };
    }
};
</script>
