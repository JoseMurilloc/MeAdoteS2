export interface ToastContextData {
  success: (message: string) => React.ReactText
  error: (message: string) => React.ReactText
}