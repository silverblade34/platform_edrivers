<template>
     <div class="flex justify-between">
          <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Formularios</h1>
          <ModalCreateFormsVue @create-item="onCreateItem" />
     </div>
     <div class="py-5">
          <TableFormVue :desserts="dataForms" @edit-item="onEditItem" @delete-item="onDeleteItem" />
     </div>
     <ModalEditForms :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
          @edit-item="onUpdateItem" />
</template>
<script>
import { ref, onMounted } from 'vue';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { findAllFormApi, createFormApi, updateFormApi, deleteFormApi } from '@/api/FormService';
import ModalCreateFormsVue from '@/components/forms/ModalCreateForms.vue';
import TableFormVue from '@/components/forms/TableForm.vue';
import ModalEditForms from '@/components/forms/ModalEditForms.vue';
import store from '@/store';

export default {
     components: {
          ModalCreateFormsVue,
          ModalEditForms,
          TableFormVue
     },
     setup() {
          const dataForms = ref([]);
          const itemEdit = ref({});
          const dialogEdit = ref(false);
          const tokenAuth = ref(false);

          onMounted(() => {
               tokenAuth.value = store.state.token
               loadData()
          })

          const onCreateItem = async (data) => {
               if (data.title != "" && data.questions.length > 0) {
                    createFormApi(data, tokenAuth.value)
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
               const responseForms = await findAllFormApi(store.state.token)
               dataForms.value = responseForms.data.data
          }

          const onEditItem = (item) => {
               dialogEdit.value = true
               itemEdit.value = item
          }

          const onDeleteItem = (item) => {
               confirmBasic(async () => {
                    deleteFormApi(item.item.id, store.state.token)
                         .then(response => {
                              basicAlert(() => {
                                   loadData()
                              }, 'success', 'Logrado', response.data.message)
                         })
                         .catch(error => {
                              basicAlert(() => { loadData() }, 'error', 'Error', error.response.data.message)
                         })
               }, '¿Estás seguro de eliminar este formulario, se eliminaron los registros de formularios resueltos relacionados?', 'Aceptar');
          }

          const onUpdateItem = (item) => {
               if (item.title != "" && item.questions.length > 0) {
                    console.log(itemEdit.value.item)
                    updateFormApi(itemEdit.value.item.id, item, tokenAuth.value)
                         .then(() => {
                              basicAlert(() => {
                                   loadData()
                              }, 'success', 'Logrado', "Se ha editado correctamente")
                         })
                         .catch(error => {
                              basicAlert(() => { loadData() }, 'error', 'Error', error.message)
                         })
               } else {
                    basicAlert(() => { loadData() }, 'warning', 'Error', "Los campos no deben estar vacios")
               }
          }

          return {
               dialogEdit,
               dataForms,
               itemEdit,
               onUpdateItem,
               onDeleteItem,
               onCreateItem,
               onEditItem
          }
     }
}

</script>