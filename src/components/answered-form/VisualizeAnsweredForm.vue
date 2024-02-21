<template>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-500 font-bold title_views">REGISTRO DE FORMULARIO</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12" class="text-sm">
                    <div class="flex justify-between py-1">
                        <span class="font-bold text-gray-600">
                            Formulario:
                        </span>
                        <span>
                            {{ itemView.form.title }}
                        </span>
                    </div>
                    <div class="flex justify-between py-1">
                        <span class="font-bold text-gray-600">
                            Descripción:
                        </span>
                        <span>
                            {{ itemView.form.description }}
                        </span>
                    </div>
                    <div class="flex justify-between py-1">
                        <span class="font-bold text-gray-600">
                            Conductor:
                        </span>
                        <span>
                            {{ dataDrivers.find(driver => driver.id == itemView.driverId).name }}
                        </span>
                    </div>
                    <div>
                        <p class="font-bold pb-3 text-indigo-600">Preguntas: </p>
                        <v-expansion-panels>
                            <v-expansion-panel v-for="item in itemView.answeredquestions" :key="item.name">
                                <v-expansion-panel-title>{{ item.question.description }}</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div class="flex justify-between py-1">
                                        <span class="font-bold">
                                            Respuesta:
                                        </span>
                                        <span>
                                            {{ item.answer }}
                                        </span>
                                    </div>
                                    <div class="flex justify-between py-1">
                                        <span class="font-bold">
                                            Descripción:
                                        </span>
                                        <span>
                                            {{ item.description }}
                                        </span>
                                    </div>
                                    <div class="py-1">
                                        <span class="font-bold">
                                            Imagen:
                                        </span>
                                        <div>
                                            <img :src="'http://198.211.99.223:3020/api/v1/answered-forms/getImage/' + item.img"
                                                alt="" class="w-[50%]">
                                        </div>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-lighten-1" variant="tonal" @click="closeItem">
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
        dataDrivers: Array,
        itemView: Object,
        openModal: Boolean
    },
    emits: ['edit-item', 'cancel-item'],
    setup(props, { emit }) {
        const dialog = ref(false);

        watch(() => props.openModal, async (newVal) => {
            dialog.value = newVal
        })

        watch(() => props.itemView, (newVal) => {
            console.log(newVal)
        })


        const closeItem = () => {
            emit('cancel-item')
        }

        return {
            dialog,
            closeItem
        }
    }
}
</script>