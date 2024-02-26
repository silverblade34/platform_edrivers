<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Compañias</h1>
        <ModalCreateCompanyVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableCompaniesVue :desserts="dataCompanies" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditCompanyVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
</template>
<script>
/* eslint-disable */
import { ref, onMounted } from 'vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { findAllCustomersApi, createCustomersApi } from '@/api/CustomersService';
import ModalCreateCompanyVue from '@/components/customers/ModalCreateCompany.vue';
import TableCompaniesVue from '@/components/customers/TableCompanies.vue';
import ModalEditCompanyVue from '@/components/customers/ModalEditCompany.vue';
import store from '@/store';

export default {
    components: {
        ModalCreateCompanyVue,
        ModalEditCompanyVue,
        TableCompaniesVue
    },
    setup() {
        const dataCompanies = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);

        onMounted(() => {
            loadData()
        })

        const onCreateItem = async (data) => {
            if (data.name != "" && data.username != "" && data.password != "" && data.codecompany != "") {
                await createCustomersApi(data, store.state.token)
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
            const responseCompany = await findAllCustomersApi(store.state.token)
            dataCompanies.value = responseCompany.data.data
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
            dataCompanies,
            itemEdit,
            onUpdateItem,
            onDeleteItem,
            onCreateItem,
            onEditItem
        }
    }
}
</script>