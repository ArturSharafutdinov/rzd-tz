<template>
  <div class="absolute-center">
    <q-card class="login-card">
      <q-card-section class="text-center text-h5">
        {{ $t('login.title') }}
      </q-card-section>
      <q-card-section>
        <q-form>
          <input-text
            v-model="email"
            :label="$t('input.email')"
            :input-label="$t('input.enterEmail')"
            :rules="[EMPTY_RULE, EMAIL_RULE]"
          />
          <input-text
            v-model="password"
            :label="$t('input.password')"
            :input-label="$t('input.enterPassword')"
            :rules="[EMPTY_RULE]"
          />

          <q-card-actions align="right">
            <q-btn :disable="!isValidForm" @click="login">
              {{ $t('btn.login') }}
            </q-btn>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
    <q-inner-loading :showing="isLogging" />
  </div>
</template>

<script setup lang="ts">

import { computed, ref, watch } from 'vue'
import InputText from '@/components/inputs/field/InputText.vue'
import { EMAIL_RULE, EMPTY_RULE, isValidEmail, isValidString } from '@/utils/validation.util'
import { useSecurityStore } from '@/stores/security.store'

const securityStore = useSecurityStore()

const email = ref<string>()
const password = ref<string>()

const login = () => {
  securityStore.login(email.value ?? '', password.value ?? '')
}

const isLogging = computed<boolean>(() => securityStore.isLogging)

const isValidForm = ref<boolean>(false)

watch([ email, password ], (newVal: string[]) => {

  let isValid = true

  if(!isValidString(newVal[0]) || !isValidEmail(newVal[0])) {
    isValid = false
  }

  if(!isValidString(newVal[1])) {
    isValid = false
  }

  isValidForm.value = isValid

})

</script>

<style scoped lang="scss">

.login-card {
  width: 500px;
  border-radius: 20px
}

</style>