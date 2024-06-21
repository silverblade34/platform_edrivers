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

    <v-dialog v-model="confirmDialog" max-width="500px">
        <v-card>
            <v-card-title class="headline">Confirmar Eliminación</v-card-title>
            <v-card-text>¿Estás seguro de que deseas eliminar esta compañía?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="confirmDialog = false">Cancelar</v-btn>
                <v-btn color="green darken-1" text @click="confirmDelete">Eliminar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
/* eslint-disable */
import { ref, onMounted } from 'vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert'; // Importando basicAlert
import { findAllCustomersApi, createCustomersApi, updateCustomerApi, deleteCustomerApi } from '@/api/CustomersService';
import ModalCreateCompanyVue from '@/components/customers/ModalCreateCompany.vue';
import TableCompaniesVue from '@/components/customers/TableCompanies.vue';
import ModalEditCompanyVue from '@/components/customers/ModalEditCompany.vue';
import store from '@/store';

export default {  
    components: {
        ModalCreateCompanyVue,
        ModalEditCompanyVue,
        TableCompaniesVue,
    },
    setup() {   
        const dataCompanies = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);
        const confirmDialog = ref(false);
        const itemToDelete = ref(null);

        onMounted(() => {
            loadData()
        })

        const onCreateItem = async (data) => {
            if (data.name !== "" && data.username !== "" && data.password !== "" && data.codecompany !== "") {
                await createCustomersApi(data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            loadData();
                        }, 'success', 'Logrado', "Se ha creado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => {}, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => {}, 'warning', 'Error', "Los campos no deben estar vacíos")
            }
        }

        const loadData = async () => {
            const responseCompany = await findAllCustomersApi(store.state.token)
            dataCompanies.value = responseCompany.data.data
        }

        const onEditItem = (item) => {
            dialogEdit.value = true;
            itemEdit.value = item;
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
                        basicAlert(() => {}, 'error', 'Error', error.message)
                    })
                    .finally(() => {
                        confirmDialog.value = false;
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
                        basicAlert(() => {}, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => {}, 'warning', 'Error', "Los campos no deben estar vacíos")
            }
        }

        return {
            dialogEdit,
            dataCompanies,
            itemEdit,
            confirmDialog,
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
