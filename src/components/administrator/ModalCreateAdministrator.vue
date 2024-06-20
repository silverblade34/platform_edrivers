<template>
    <v-btn size="small" class="text-none" color="indigo-darken-1" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Nuevo</v-btn>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-indigo-500 font-bold title_views">CREAR ADMINISTRADORES</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Nombre" color="indigo" v-model="name"
                        prepend-inner-icon="mdi-text"></v-text-field>
                    <v-text-field variant="outlined" label="Usuario" prepend-inner-icon="mdi-account" color="indigo"
                        v-model="username"></v-text-field>
                    <v-text-field variant="outlined" label="Contraseña" prepend-inner-icon="mdi-lock" color="indigo"
                        v-model="password"></v-text-field>
                    
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="closeItem">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="createItem">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref } from 'vue';

export default {
    emits: ['create-item'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const name = ref('');
        const username = ref('');
        const password = ref('');
        

        const createItem = () => {
            console.log("----------------------------------1")
            emit("create-item", {
                "name": name.value,
                "username": username.value,
                "password": password.value,
         
            })
            closeItem();
        }

        const closeItem = () => {
            dialog.value = false
            name.value = username.value = password.value =  ""
        }


        return {
            dialog,
            name,
            username,
            password,
            createItem,
            closeItem
        }
    }
}
</script>