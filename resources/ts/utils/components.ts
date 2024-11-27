import { App } from "vue";

import TMenu from "@/Components/Menu.vue";

export const initGlobalComponent = (app: App) => {
    app.component('TMenu', TMenu);
}
