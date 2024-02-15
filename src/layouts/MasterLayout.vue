<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="indigo-darken-1"
                class="border-0">
                <div class="p-2 py-10 flex items-center justify-center gap-2">
                    <span v-if="!rail" class="font-bold text-2xl">Signia</span>
                </div>
                <SidebarLayout :itemsNavegation="filteredItems" :rail="rail" />
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-100 block">
                <div class="w-full bg-white flex justify-between items-center px-3 shadow-sm">
                    <v-btn variant="text" icon="mdi-menu" color="blue-grey-lighten-1" class="cursor-pointer"
                        @click.stop="rail = !rail"></v-btn>
                    <div class="flex items-center">
                        <div class="flex items-center text-start text-xs">
                            <v-list>
                                <v-list-item class="text-start item-personalizado" :prepend-avatar="avatarPath">
                                    <template v-slot:default>
                                        <v-row>
                                            <v-col>
                                                <div class="text-sm">Hola, {{ username }}</div>
                                                <div class="caption">{{ rol }}</div>
                                            </v-col>
                                        </v-row>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </div>
                        <MenuAsPopover />
                    </div>
                </div>
                <section class="overflow-y-auto section_main" :class="isMobile ? 'p-4' : 'p-8'">
                    <router-view />
                </section>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import SidebarLayout from './SidebarLayout.vue';
import avatarImage from "@/assets/iconuser_hombre.png";
import MenuAsPopover from '@/components/general/MenuAsPopover.vue';
import store from '@/store';

export default {
    components: {
        MenuAsPopover,
        SidebarLayout
    },
    data() {
        return {
            avatarPath: avatarImage,
        }
    },
    setup() {
        const isMobile = ref(false);
        const drawer = ref(true)
        const rail = ref(true)
        const rol = ref('')
        const username = ref('')
        const ItemsNavegation = ref([
            {
                icon: "mdi-domain",
                title: "Compañias",
                value: "companies",
                to: "/companies",
                children: []
            },
            {
                icon: "mdi-form-select",
                title: "Formularios",
                value: "forms",
                to: "/forms",
                children: []
            },
            {
                icon: "mdi-table",
                title: "Reportes formularios",
                value: "reportsforms",
                to: "/reportsforms",
                children: []
            }
        ]);

        onMounted(() => {
            rol.value = "Administrador"
            username.value = store.state.username
            handleResize();
            window.addEventListener("resize", handleResize);
        })

        const filteredItems = computed(() => {
            return ItemsNavegation.value
        })

        const handleResize = () => {
            isMobile.value = window.innerWidth <= 500; // Define aquí el ancho máximo para considerar como pantalla pequeña
        };

        return {
            isMobile,
            drawer,
            rail,
            rol,
            username,
            ItemsNavegation,
            filteredItems
        }
    }
}
</script>
<style>
.v-list-item-title {
    font-size: 14px !important;
}

.v-list-item-subtitle {
    font-size: 13px !important;
}

.section_main {
    overflow-y: auto !important;
    height: 100%;
    padding-bottom: 5rem !important;
}
</style>