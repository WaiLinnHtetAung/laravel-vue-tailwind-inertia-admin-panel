import { title } from "process";
import Swal from "sweetalert2";

export const askConfirmation = (text = "All changes will be saved !", confirm_text = "Yes, Save it !") => {
    return Swal.fire({
        title: "Are you sure?",
        text,
        icon: "question",
        showCancelButton: true,
        customClass: {
          cancelButton:
            "text-white bg-slate-500 border-slate-500 btn hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-custom-400/20",
            confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20",
        },
        confirmButtonText: confirm_text,
        buttonsStyling: false,
        showCloseButton: true,
        reverseButtons: true,

      })
};

export const successProcess = (title = 'Success !', text = 'Process Success') => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    showCancelButton: false,
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true
  });
};

export const warning = (title = "Warning !") => {
    Swal.fire({
        icon: "warning",
        title: title,
        customClass: {
            confirmButton:
            "text-white btn bg-default-500 border-default-500 hover:text-white hover:bg-default-500 hover:border-default-600 focus:text-white focus:bg-default-500 focus:border-default-600 focus:ring focus:ring-default-100 active:text-white active:bg-default-500 active:border-default-600 active:ring active:ring-default-100 dark:ring-default-400/20"
        },
        buttonsStyling: false,
        showCloseButton: true
        });
}

//Toast message
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
  })

//Toast message - success
export const toastSuccess = (text :any) => {
    Toast.fire({
        icon: "success",
        title: text,
    });
};

//Toast message - error
export const toastError = (text : any) => {
    Toast.fire({
        icon: "error",
        title: text,
    });
};
