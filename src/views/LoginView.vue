<template>
  <div class="flex justify-center items-center w-full h-screen overflow-y-hidden bg-login">
    <div class="w-full h-full">
      <div class="w-full flex justify-end">
        <h1 class="text-gray-600 pt-10 font-bold text-5xl mr-15">eDrivers</h1>
      </div>
      <div class="flex justify-start w-full pt-[2rem]">
        <div class="min-w-[30rem] rounded-xl ml-20 pt-3 bg-white">
          <div v-if="statusError" class="flex justify-center">
            <v-alert color="#FF5250" theme="dark" icon="mdi-alert-circle" density="compact" closable class="max-w-[25rem]"
              border>
              {{ messageError }}
            </v-alert>
          </div>
          <FormAuthVue @validate-login="onValidateLogin" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import FormAuthVue from '@/components/login/FormAuth.vue';
import ImgFrontPage from '@/assets/login/FrontPage.png';
import { authLoginApi } from '@/api/LoginService';
import { useRouter } from 'vue-router';
import store from '@/store';

export default {
  components: {
    FormAuthVue
  },
  data: () => ({
    visible: false,
    imgFrontPage: ImgFrontPage
  }),
  setup() {
    const messageError = ref('');
    const statusError = ref(false);
    const router = useRouter();

    const onValidateLogin = (data) => {
      console.log(data)
      authLoginApi(data)
        .then(response => {
          const user = response.data.data
          store.commit('setUsername', user.username);
          store.commit('setToken', user.token);
          store.commit('setRole', user.role);
          store.commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(error => {
          console.log(error)
          statusError.value = true
          if (error.response) {
            if (error.response.status === 401) {
              // Manejar el error de Unauthorized (401) aquí
              messageError.value = "Las credenciales de usuario no son válidas"
            } else if (error.response.status === 500) {
              // Manejar el error de Internal Server Error (500) aquí
              messageError.value = "Error 500: Error interno del servidor"
            } else {
              // Otros códigos de estado pueden ser manejados aquí
              messageError.value = "Error:", error.response.data
            }
          } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            messageError.value = "No se recibió respuesta del servidor"
          } else {
            // Ocurrió un error al configurar la solicitud
            messageError.value = "Error al configurar la solicitud:", error.message
          }
        });
    }

    return {
      onValidateLogin,
      messageError,
      statusError
    }
  }
}
</script>
<style scoped>
/* Estilos para la capa transparente */
.bg-login {
  background-image: url('../assets/login/FrontPage.png');
  /* Ruta de la imagen */
  background-size: cover;
  background-position: bottom;
}
</style>