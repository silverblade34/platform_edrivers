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
                    <v-select :items="recourses" label="Recursos" item-text="name" item-value="recourseId" v-model="selectedRecourse"></v-select>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="closeItem">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="editItem">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { findRecoursesApi } from '@/api/CustomersService'; 

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
        const token = ref('');

        watch(() => props.openModal, (newVal) => {
            dialog.value = newVal;
        });

        watch(() => props.itemEdit, (newVal) => {
            if (Object.keys(newVal).length !== 0) {
                id.value = newVal.item.id;
                name.value = newVal.item.name;
                username.value = newVal.item.user.username;
                password.value = newVal.item.user.password;
                codecompany.value = newVal.item.codecompany;
                token.value = newVal.item.token;
                console.log('itemEdit:', newVal.item);
                loadRecourses(newVal.item.token, newVal.item.id);
            }
        });

        const loadRecourses = async (token, id) => {
            try {
                console.log('Loading recourses for ID:', id, 'with token:', token);
                const response = await findRecoursesApi(token, id);
                console.log('Recourses response:', response.data);
                recourses.value = response.data.data.filter(recourse => recourse.recourseId === 401275157);
            } catch (error) {
                console.error('Error loading recourses:', error);
            }
        };

        const editItem = () => {
            emit("edit-item", {
                id: id.value,
                name: name.value,
                username: username.value,
                password: password.value,
                codecompany: codecompany.value,
                recourseId: selectedRecourse.value
            });
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
            editItem,
            closeItem
        };
    }
};
</script>
