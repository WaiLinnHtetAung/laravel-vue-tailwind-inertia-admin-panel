<script lang="ts" setup>
import { X } from "lucide-vue-next";
import { computed, PropType, ref } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { UserType } from "../Types/UserType";

const emit = defineEmits(["update:modelValue", "onAddUpdate", "onSubmitted"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object as PropType<UserType>,
    default: {}
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  formName: {
    type: String,
    default: ""
  }
});

const preparedData:any = ref(props.formData);

const rules = {
  name: { required },
  email: { required, email },
  password: props.isEdit ? {} : { required, minLength: minLength(6) },
  is_admin: { required },
};

//define validation
const v$ = useVuelidate(rules, preparedData.value, { $lazy: true });


const createEditModal = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit("update:modelValue", newVal);
  }
});

const uploadForm = async () => {
  v$.value.$touch(); // Trigger validation

  if(!v$.value.$invalid) {
      emit('onSubmitted', {...preparedData.value});
  }

  return;
};

</script>
<template>
  <TModal v-model="createEditModal" size="default">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
      >
        <h5 class="text-16" id="exampleModalLabel">
          {{ isEdit ? `Update ${formName}` : `Add ${formName}` }}
        </h5>
        <TButton
          icon
          variant="plain-soft"
          class="p-0"
          color="slate"
          @click="createEditModal = false"
        >
          <X />
        </TButton>
      </div>
      <div class="p-4">
        <div class="mb-5" v-if="v$.$errors.length > 0">
            <TAlert color="red" border-top>
              <span class="font-bold">Error</span>
              Please fill required fields.
            </TAlert>
        </div>
        <TInputField
          v-model="preparedData.name"
          label="User Name"
          placeholder="Enter username"
          required
          class="mb-5 "
          :error="v$.name.$error"
          :errorMessage="v$.name.$errors[0]?.$message"
        />

        <TInputField
          v-model="preparedData.email"
          label="Email"
          placeholder="Enter email"
          required
          type="email"
          class="mb-5 "
          :error="v$.email.$error"
          :errorMessage="v$.email.$errors[0]?.$message"
        />

        <TInputField
          v-model="preparedData.password"
          label="Password"
          placeholder="Enter password"
          required
          class="mb-5 "
          :error="v$.password.$error"
          :errorMessage="v$.password.$errors[0]?.$message"
        />

        <TSwitch label="UserType" @change="preparedData.is_admin = preparedData.is_admin ==1 ? 0 : 1" class="mb-5" color="orange" v-model="preparedData.is_admin" :checked="preparedData.is_admin == 1" :id="'default-switch-' + 1">
          {{preparedData.is_admin == 1 ? "Admin" : "User"}}
        </TSwitch>

        <div class="flex gap-2 justify-end mt-3">
          <TButton color="slate" @click="createEditModal = false">
            Close
          </TButton>
          <TButton color="orange" @click="uploadForm">
            {{ isEdit ? "Update" : `Create ${formName}` }}
          </TButton>
        </div>
      </div>
    </template>
  </TModal>
</template>
