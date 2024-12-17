import './bootstrap';
// import '../css/app.css';
import '../ts/assets/scss/tailwind.scss'
import '../ts/assets/scss/custom_style.scss'

import { createApp, h } from 'vue';
import type { DefineComponent } from "vue";
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m'
import * as Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { initGlobalComponent } from '@/utils/components';
import Popper from 'vue3-popper';
import simplebar from "simplebar-vue";
import pinia from "./store/index"

const appName = import.meta.env.VITE_APP_NAME || 'Admin Panel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name: string) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue") ),

    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
        initGlobalComponent(app)
        app.use(pinia)
        app.use(plugin)
        app.use(ZiggyVue, (window as any).Ziggy)
        app.component("Popper", Popper)
        app.component("simplebar", simplebar)
        // app.component('EasyDataTable', Vue3EasyDataTable)
        app.mount(el);
    },
    progress: {
        // delay: 250,
        color: '#ec6316',
        includeCSS: true,
        showSpinner: false,
    },
});
