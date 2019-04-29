//
// Toasts
//
import Vue, { VNode } from 'vue'

export interface BvToastOptions = {
  // Commonly used props
  toaster?: string
  title?: string | VNode | Array<Vnode>
  variant?: string
  solid?: boolean
  noAutoHide?: boolean
  noHoverPause?: boolean
  autoHideDelay?: number
  appendToast?: boolean
  isStatus?: boolean
  noFade?: boolean
  toastClass?: string | Array<any> | object | any
  headerClass?: string | Array<any> | object | any
  bodyClass?: string | Array<any> | object | any
  href?: string
  to?: string | any
  // Catch all
  [key: string]: any
}

export type ToastData = boolean | null | any

export interface BvToastShortcutMethod {
  (message: string | VNode | Array<VNode>, options?: BvToastOptions): Promise<ToastData>
  // Future
  //(message: string | VNode | Array<VNode>, title: string | VNode | Array<VNode>, options?: BvToastOptions): Promise<ToastData>
}

export interface BvToast {
  // Show a toast
  toast: BvToastShortcutMethod

  // Show a toast by id
  show (id: string): void

  // Hide a toast by id (or hide all tosts)
  hide (id?: string): void
}

//
// Vue Prototype Injections
//
declare module 'vue/types/vue' {
  interface Vue {
    // Toast injection
    $bvToast: BvToast
  }
}
