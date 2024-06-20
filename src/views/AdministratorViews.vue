<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Compañias 123</h1>
        <ModalCreateAdministratorVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableAdministratorVue :desserts="dataAdministrator" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditAdministratorVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
</template>
<script>
/* eslint-disable */
import { ref, onMounted } from 'vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { findAlladministratorsApi, createadministratorsApi } from '@/api/AdministratorsService';
import ModalCreateAdministratorVue from '@/components/administrator/ModalCreateAdministrator.vue';
import TableAdministratorVue from '@/components/administrator/TableAdministrator.vue';
import ModalEditAdministratorVue from '@/components/administrator/ModalEditAdministrator.vue';
import store from '@/store';

export default {
    components: {
        ModalCreateAdministratorVue,
        ModalEditAdministratorVue,
        TableAdministratorVue
    },
    setup() {
        const dataAdministrator = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);

        onMounted(() => {
            loadData()
        })

        const onCreateItem = async (data) => {
console.log("gaaaaaaaaaa")
            if (data.name != "" && data.username != "" && data.password != "" ) {
                await createadministratorsApi(data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', "Se ha creado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacios")
            }
        }

        const loadData = async () => {
            const responseAdministrator = await findAlladministratorsApi(store.state.token)
            dataAdministrator.value = responseAdministrator.data.data
        }

        const onEditItem = (item) => {
            dialogEdit.value = true
            itemEdit.value = item
        }

        const onDeleteItem = () => {

        }

        const onUpdateItem = () => {

        }

        return {
            dialogEdit,
            dataAdministrator,
            itemEdit,
            onUpdateItem,
            onDeleteItem,
            onCreateItem,
            onEditItem
        }
    }
}
</script>