<script setup lang="ts">
    import { onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue';
    import List from "list.js";
    import {Pencil, Trash2} from "lucide-vue-next";

    import FormDialog from './FormDialog.vue';

    import { BrandListType, BrandPayloadType } from '../Types/BrandType';
    import { HeaderItems } from '../utils';
    import { askConfirmation, toastError, toastSuccess, warning } from '@/utils/sweetalert';
    import { deleteBrand, deleteMultipleBrands, submitForm } from '../Services/BrandServices';

    const props = defineProps<{
        brands: BrandListType[]
    }>()

    const listJsTable = ref();
    const id = "location-table"
    const createEditModal = ref(false);

    const isAllSelect = ref(false);
    const formData = ref<BrandPayloadType>();
    const tableData = ref<BrandListType[]>([...props.brands]);
    const isEdit = ref<boolean>(false);
    const componentKey = ref(Date.now())
    const initialize = () => {
        if(id) {
            const values = HeaderItems.map((item: any) => item.value);
            const options: any = {
                valueNames: values,
                pagination: true,
                page: 10,
            };

            listJsTable.value = new List(id, options).on(
                "updated",
                (list: any) => {
                    const noResultEle: any = document.querySelector(".no-result");

                    if (noResultEle) {
                        if (list.matchingItems.length === 0) {
                            noResultEle.style.display = "block";
                        } else {
                            noResultEle.style.display = "none";
                        }
                    }
                    refreshCallbacks();
                }
            );
            if (props.brands.length > 1) {
                listJsTable.value.sort("id", { order: "desc" });
            }
            addEventListeners();
        }
    }

    const onSelectAll = () => {
        isAllSelect.value = !isAllSelect.value;
        tableData.value = tableData.value.map((item) => {
            return {
            ...item,
            checked: isAllSelect.value,
            };
        });
    };

    const onAddNew = () => {
        formData.value = {
            name: "",
            image: null as unknown as File,
        };
        createEditModal.value = true;
    };

    onMounted(() => {
        initialize()
    });

    onUpdated(() => {
        initialize()
    })


    onBeforeUnmount(() => {
        const nextEle = document.querySelector(".pagination-next");
        nextEle?.removeEventListener("click", () => {});
        const prevEle = document.querySelector(".pagination-prev");
        prevEle?.removeEventListener("click", () => {});
        const checkAllEle: any = document.getElementById("checkAll");
        checkAllEle?.removeEventListener("click", () => {});
        const deleteBtns = document
            .querySelector("#" + id)
            ?.querySelectorAll("tbody .action .delete-btn");
        if (deleteBtns) {
            Array.from(deleteBtns).forEach((btn) => {
            btn.removeEventListener("click", () => {});
            });
        }
    });

    const addEventListeners = () => {
        const nextEle = document.querySelector(".pagination-next");
        const listPaginationEle: any = document.querySelector(
            ".pagination.listjs-pagination"
        );

        if (nextEle) {
            nextEle.addEventListener("click", () => {
                if (listPaginationEle) {
                    if (
                        listPaginationEle.querySelector(".active")
                            ?.nextElementSibling !== null
                    ) {
                        nextEle.classList.remove("disabled");

                        listPaginationEle
                            .querySelector(".active")
                            ?.nextElementSibling?.children[0].click();
                    } else {
                        nextEle.classList.add("disabled");
                    }
                }
            });
        }

        const prevEle = document.querySelector(".pagination-prev");
        if (prevEle) {
            prevEle.addEventListener("click", () => {
                if (listPaginationEle) {
                    if (
                        listPaginationEle.querySelector(".active")
                            .previousSibling !== null
                    ) {
                        prevEle.classList.remove("disabled");
                        listPaginationEle
                            .querySelector(".active")
                            ?.previousSibling?.children[0].click();
                    } else {
                        prevEle.classList.add("disabled");
                    }
                }
            });
        }

        const checkAllEle: any = document.getElementById("checkAll");
        if (checkAllEle) {
            checkAllEle.addEventListener("click", () => {
                const checkboxes = document.querySelectorAll(
                    '.form-check-all input[type="checkbox"]'
                );
                Array.from(checkboxes).forEach((checkbox: any) => {
                    checkbox.checked = checkAllEle.checked;
                    if (checkbox.checked) {
                        checkbox.closest("tr").classList.add("table-active");
                    } else {
                        checkbox.closest("tr").classList.remove("table-active");
                    }
                });
            });
        }

        refreshCallbacks();
    };

    const refreshCallbacks = () => {
        const deleteBtns = document
            .querySelector("#" + id)
            ?.querySelectorAll("tbody .action .delete-btn");

        if (deleteBtns) {
            Array.from(deleteBtns).forEach((btn) => {
                btn.addEventListener("click", () => {
                    const id = btn.parentElement?.closest("tr")?.children[0].innerHTML;
                    // listJsTable.value.remove("id", id);
                    deleteRecord(id);
                });
            });
        }

        const editButtons = document.querySelectorAll(".edit-item-btn");

        Array.from(editButtons).forEach((element) => {
            element.addEventListener("click", () => {
                const id =
                    element.parentElement?.closest("tr")?.children[0].innerHTML;
                const data = tableData.value.find((item) => item.id == id);
                if(data) formData.value = {id: data?.id, name: data?.name, image: data?.image };
                isEdit.value = true;
                createEditModal.value = true;
            });
        });
    };

    const deleteRecord = (id: any) => {
        askConfirmation("Are you sure you want to delete this record?", "Delete it !").then(async(result) => {
            if(result.isConfirmed) {
                deleteBrand(
                    id,
                    (page) => {
                        toastSuccess(page.props.flash.success)
                        tableData.value = page.props.brands;
                        componentKey.value = Date.now();
                        createEditModal.value = false;
                    },
                    (errors) => {
                        toastError('Something Wrong !')
                    }
                )
            }
        })
    };

    const onDeleteMultipleRecords = () => {
        let checkedIds: string[] = [];
        const checkedElements = document.getElementsByName("chk_child");
        Array.from(checkedElements).forEach((element: any) => {
            if (element.checked) {
            const elementId = element.closest("tr").children[0].innerHTML;
            checkedIds.push(elementId);
            }
        });

        if (checkedIds.length) {
            askConfirmation("Are you sure you want to delete these records?", "Delete it !").then(async(result) => {
            if(result.isConfirmed) {
                deleteMultipleBrands(
                    checkedIds,
                    (page) => {
                        toastSuccess(page.props.flash.success)
                        tableData.value = page.props.users;
                        componentKey.value = Date.now();
                        createEditModal.value = false;
                    },
                    (errors) => {
                        toastError('Something Wrong !')
                    }
                )
            }
            })

        } else {
            warning("Please select at least one record to delete.");
        }
    };

    const onSubmittedForm = (data: BrandPayloadType) => {
        try {
            submitForm(
                data,
                isEdit.value,
                (page) => {
                    toastSuccess(page.props.flash.success)
                    tableData.value = page.props.brands;
                    componentKey.value = Date.now();
                    createEditModal.value = false;
                },
                (errors) => {
                    toastError('Something Wrong !')
                }
            );
        }catch(error) {
            console.error("Error uploading file:", error);
        }
    }

</script>

<template>
    <div :key="componentKey">
        <PageHeader title="Brands" :items="['Product Management', 'Brands']" />
        <TCard class="overflow-x-auto">
            <div :id="(tableData && tableData.length > 0) ? id : ''">
                <TableFunction
                    title="Brand"
                    @onAddNew="onAddNew"
                    @onDeleteMultipleRecords="onDeleteMultipleRecords"
                />

                <table class="w-full" >
                    <THead
                        :headerItems="HeaderItems"
                        @onSelectAll="onSelectAll"
                    />

                    <TBody
                        :headerItems="HeaderItems"
                        :tableData="tableData"
                    >
                        <template #checked>
                            <input
                            class="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                            type="checkbox"
                            value="option"
                            name="chk_child"
                            :checked="isAllSelect"
                            @onSelectAll="onSelectAll"
                            />
                        </template>

                        <template #image="{ value }">
                            <img
                              class="w-10 h-10 rounded-full"
                              :src="value.image"
                              :alt="value"
                              loading="lazy"
                            />
                          </template>

                        <template #action="{ value }">
                            <div class="flex gap-2">
                            <TButton classes="py-1 text-xs edit-item-btn">
                                <Pencil :size="18"/>
                            </TButton>
                            <TButton
                                classes="py-1 text-xs delete-btn"
                                color="red"
                                :id="'delete-record-' + value.id"
                            >
                                <Trash2 :size="18" />
                            </TButton>
                            </div>
                        </template>
                    </TBody>
                </table>
                <div class="no-result" v-if="!tableData || tableData.length == 0">
                    <NoDataState text="Add New Brand" @onAddNew="onAddNew" />
                </div>
                <SearchNoData />
                <Pagination />
            </div>

            <FormDialog
                v-if="createEditModal"
                v-model="createEditModal"
                :formData="formData"
                :isEdit="isEdit"
                formName="Brand"
                @onSubmitted="onSubmittedForm"
            />
        </TCard>
    </div>

</template>
