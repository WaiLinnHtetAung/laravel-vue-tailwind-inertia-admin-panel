import { App } from "vue";

import TMenu from "@/Components/Menu.vue";
import { Head, Link } from "@inertiajs/vue3";
import PageHeader from "@/Components/PageHeader.vue";
import Card from "@/Components/Card.vue";
import Button from "@/Components/Button.vue";
import Label from "@/Components/Label.vue";
import SearchNoData from "@/Components/Table/SearchNoData.vue";
import NoDataState from "@/Components/Table/NoDataState.vue";
import Pagination from "@/Components/Table/Pagination.vue";
import TableFunction from "@/Components/Table/TableFunction.vue";
import THead from "@/Components/Table/THead.vue";
import TBody from "@/Components/Table/TBody.vue";
import TModal from "@/Components/Modal.vue";
import TInputField from "@/Components/FormFields/InputField.vue";
import TSwitch from "@/Components/FormFields/Switch.vue"
import TAlert from "@/Components/Alert.vue";
import TFileUploader from "@/Components/FormFields/FileUpload.vue";

export const initGlobalComponent = (app: App) => {
    app.component('TMenu', TMenu);
    app.component('Head', Head);
    app.component('Link', Link);
    app.component('PageHeader', PageHeader);
    app.component('TCard', Card);
    app.component('TButton', Button);
    app.component('TLabel', Label);
    app.component('SearchNoData', SearchNoData);
    app.component('NoDataState', NoDataState);
    app.component('Pagination', Pagination);
    app.component('TableFunction', TableFunction);
    app.component('THead', THead);
    app.component('TBody', TBody);
    app.component('TModal', TModal);
    app.component('TInputField', TInputField);
    app.component('TSwitch', TSwitch);
    app.component('TAlert', TAlert);
    app.component('TFileUploader', TFileUploader);
}
