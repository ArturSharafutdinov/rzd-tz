import { patterns } from 'quasar'
import { i18n } from '@/locale/i18n'

const { testPattern } = patterns

export const EMAIL_RULE = (val: string) => testPattern.email(val) || i18n.global.t('rules.email')
export const EMPTY_RULE = (val: string) => val.length > 0 || i18n.global.t('rules.empty')

export function isValidString (val: string): boolean {
  return val?.length > 0;
}

export function isValidEmail (email: string): boolean {
  return testPattern.email(email);
}