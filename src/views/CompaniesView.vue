<template>
      <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Clientes</h1>
        <ModalCreateCompanyVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableCustomerVue :desserts="dataCustomer" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditCustomerVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
</template>
<script>
import ModalCreateCompanyVue from '@/components/companies/ModalCreateCompany.vue'

export default {
components: {
    ModalCreateCompanyVue
}
}
</script>