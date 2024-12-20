// src/composables/useUserForm.ts
import { router } from '@inertiajs/vue3';
import { BrandPayloadType } from '../Types/BrandType';

export const submitForm = (data: BrandPayloadType, isEdit: boolean, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    try {
        if(isEdit) {
            router.post(`/product-management/brand-update/${data.id}`, data, {
                onSuccess: (page) => {
                    if (onSuccess) onSuccess(page);
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                    if (onError) onError(errors);
                },
            })
        } else {
            router.post('/product-management/brands', data, {
                onSuccess: (page) => {
                    if (onSuccess) onSuccess(page);
                },
                onError: (error) => {
                    console.error('Validation error:', error);
                    if (onError) onError(error);
                },
            });
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

export const deleteBrand = (id: number|string, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    router.delete(`/product-management/brands/${id}`, {
        onSuccess: (page) => {
            if (onSuccess) onSuccess(page);
        },
        onError: (error) => {
            if (onError) onError(error);
        },
    })
}

export const deleteMultipleBrands = (ids: Array<number|string>, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    try {
        router.post(`/product-management/brands/delete-multi`, {ids},{
            onSuccess: (page) => {
                if (onSuccess) onSuccess(page);
            },
            onError: (error) => {
                if (onError) onError(error);
            },
        })
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}


