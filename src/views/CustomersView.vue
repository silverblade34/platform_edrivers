<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Compañias</h1>
        <ModalCreateCustomerVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableCustomersVue :desserts="dataCompanies" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditCustomerVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
    <v-dialog v-model="dialogLoader" :scrim="false" persistent width="auto">
        <v-card color="indigo">
            <v-card-text>
                Procesando...
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, onMounted } from 'vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { findAllCustomersApi, createCustomersApi, updateCustomerApi, deleteCustomerApi } from '@/api/CustomersService';
import ModalCreateCustomerVue from '@/components/customers/ModalCreateCustomer.vue';
import TableCustomersVue from '@/components/customers/TableCustomers.vue';
import ModalEditCustomerVue from '@/components/customers/ModalEditCustomer.vue';
import store from '@/store';

export default {
    components: {
        ModalCreateCustomerVue,
        ModalEditCustomerVue,
        TableCustomersVue,
    },
    setup() {
        const dataCompanies = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);
        const itemToDelete = ref(null);
        const dialogLoader = ref(false);

        onMounted(() => {
            loadData()
        })

        const onCreateItem = async (data) => {
            dialogLoader.value = true;
            if (data.name !== "" && data.username !== "" && data.password !== "" && data.codecompany !== "") {
                await createCustomersApi(data, store.state.token)
                    .then(() => {
                        dialogLoader.value = false;
                        basicAlert(() => {
                            loadData();
                        }, 'success', 'Logrado', "Se ha creado correctamente")
                    })
                    .catch(error => {
                        dialogLoader.value = false;
                        basicAlert(() => { }, 'error', 'Error', error.response.data.message)
                    })
            } else {
                dialogLoader.value = false;
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacíos")
            }
        }

        const loadData = async () => {
            const responseCompany = await findAllCustomersApi(store.state.token)
            dataCompanies.value = responseCompany.data.data
        }

        const onEditItem = (item) => {
            dialogEdit.value = true;
            itemEdit.value = { ...item, token: store.state.token }; // Pasar el token al itemEdit
        }

        const onDeleteItem = (item) => {
            itemToDelete.value = item;
            confirmBasic(async () => {
                await confirmDelete();
            }, '¿Estás seguro de que deseas eliminar esta compañía?', 'Eliminar');
        }

        const confirmDelete = async () => {
            if (itemToDelete.value) {
                await deleteCustomerApi(store.state.token, itemToDelete.value.id)
                    .then(() => {
                        basicAlert(() => {
                            loadData();
                        }, 'success', 'Logrado', "Se ha eliminado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
                    .finally(() => {
                        itemToDelete.value = null;
                    });
            }
        }

        const onUpdateItem = async (data) => {
            if (data.name !== "" && data.username !== "" && data.password !== "" && data.codecompany !== "") {
                await updateCustomerApi(data, store.state.token, data.id)
                    .then(() => {
                        basicAlert(() => {
                            loadData();
                            dialogEdit.value = false;
                        }, 'success', 'Logrado', "Se ha actualizado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacíos")
            }
        }

        return {
            dialogEdit,
            dataCompanies,
            dialogLoader,
            itemEdit,
            itemToDelete,
            onUpdateItem,
            onDeleteItem,
            onCreateItem,
            onEditItem,
            confirmDelete
        }
    }
}
</script>
