// src/composables/useUserForm.ts
import { router } from '@inertiajs/vue3';
import { UserType } from '../Types/UserType';

export const submitForm = (data: UserType, isEdit: boolean, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    try {
        if(isEdit) {
            router.put(`/user-management/users/${data.id}`, data, {
                onSuccess: (page) => {
                    if (onSuccess) onSuccess(page);
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                    if (onError) onError(errors);
                },
            })
        } else {
            router.post('/user-management/users', data, {
                onSuccess: (page) => {
                    if (onSuccess) onSuccess(page);
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                    if (onError) onError(errors);
                },
            });
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

export const deleteUser = (id: number|string, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    router.delete(`/user-management/users/${id}`, {
        onSuccess: (page) => {
            if (onSuccess) onSuccess(page);
        },
        onError: (error) => {
            if (onError) onError(error);
        },
    })
}

export const deleteMultipleUser = (ids: Array<number|string>, onSuccess?: (page: any) => void, onError?: (error: any) => void) => {
    try {
        router.post(`/user-management/users/delete-multi`, {ids},{
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


