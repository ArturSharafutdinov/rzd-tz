import { useQuasar } from 'quasar'

export const NOTIFY_COLORS = {
  WARNING: 'warning',
  ERROR: 'error'
}

export const useNotify = () => {
  const $q = useQuasar()

  const addNotify = (message: string,
                     position: | 'top-left'
                       | 'top-right'
                       | 'bottom-left'
                       | 'bottom-right'
                       | 'top'
                       | 'bottom'
                       | 'left'
                       | 'right'
                       | 'center' = 'top',
                     color = NOTIFY_COLORS.WARNING,
                     textColor = 'white') => {
    $q.notify({
      message: message,
      position: position,
      color: color,
      textColor: textColor
    })
  }

  return {
    addNotify
  }
}