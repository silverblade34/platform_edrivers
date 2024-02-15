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
                    <v-text-field variant="outlined" label="Codigo de compañia" prepend-inner-icon="mdi-barcode"
                        color="blue" v-model="codecompany"></v-text-field>
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

export default {
    props: {
        itemEdit: Object,
        openModal: Boolean
    },
    emits: ['edit-item', 'cancel-item'],
    setup(props, { emit }) {
        const dialog = ref(false);
        const name = ref('');
        const username = ref('');
        const password = ref('');
        const codecompany = ref('');


        watch(() => props.openModal, async (newVal) => {
            dialog.value = newVal
        })

        watch(() => props.itemEdit, (newVal) => {
            console.log(newVal)
            if (Object.keys(newVal).length !== 0) {
                name.value = newVal.item.name
                username.value = newVal.item.username
                password.value = newVal.item.password
                codecompany.value = newVal.item.codecompany
            }
        })


        const editItem = () => {
            emit("edit-item", {
                "name": name.value,
                "username": username.value,
                "password": password.value,
                "codecompany": codecompany.value
            })
            closeItem();
        }

        const closeItem = () => {
            emit('cancel-item')
        }

        return {
            dialog,
            name,
            username,
            password,
            codecompany,
            editItem,
            closeItem
        }
    }
}
</script>