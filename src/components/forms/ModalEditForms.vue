<template>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-500 font-bold title_views">EDITAR FORMULARIO</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Titulo" color="indigo" v-model="title"
                        prepend-inner-icon="mdi-text"></v-text-field>
                    <v-textarea variant="outlined" label="Descripción" color="indigo" v-model="description"
                        prepend-inner-icon="mdi-text-search" rows="3"></v-textarea>
                    <div class="pb-3 flex gap-1 items-center">
                        <v-text-field variant="outlined" label="Pregunta" color="indigo" v-model="question"
                            prepend-inner-icon="mdi-help" hide-details></v-text-field>
                        <span @click="onAddQuestion">
                            <v-btn icon="mdi-check-bold" color="green" size="small" variant="text">
                            </v-btn>
                            <v-tooltip activator="parent" location="top">Crear</v-tooltip>
                        </span>
                    </div>
                    <v-divider :thickness="3"></v-divider>
                    <div class="pt-3">
                        <v-alert class="my-1 text-sm" density="compact" color="blue-grey-lighten-5"
                            v-for="(item, index) of itemsQuestion" :key="item.description">
                            <div class="w-full flex justify-between items-center text-gray-600">
                                <div>{{ item.description }}</div>
                                <div>
                                    <span @click="onDeleteQuestion(index)">
                                        <v-btn variant="text" icon="mdi-delete-empty" size="small" color="red">
                                        </v-btn>
                                        <v-tooltip activator="parent" location="top">Eliminar</v-tooltip>
                                    </span>
                                </div>
                            </div>
                        </v-alert>
                    </div>
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
        const title = ref('');
        const description = ref('');
        const question = ref('');
        const itemsQuestion = ref([]);


        watch(() => props.openModal, async (newVal) => {
            dialog.value = newVal
        })

        watch(() => props.itemEdit, (newVal) => {
            if (Object.keys(newVal).length !== 0) {
                title.value = newVal.item.title
                description.value = newVal.item.description
                itemsQuestion.value = newVal.item.questions
            }
        })


        const editItem = () => {
            emit("edit-item", {
                "title": title.value,
                "description": description.value,
                "questions": itemsQuestion.value
            })
            closeItem();
        }

        const closeItem = () => {
            itemsQuestion.value = []
            emit('cancel-item')
        }

        const onAddQuestion = () => {
            itemsQuestion.value.push({
                description: question.value
            })
            question.value = ""
        }

        const onDeleteQuestion = (index) => {
            itemsQuestion.value.splice(index, 1);
        }

        return {
            dialog,
            question,
            title,
            description,
            itemsQuestion,
            onAddQuestion,
            onDeleteQuestion,
            editItem,
            closeItem
        }
    }
}
</script>