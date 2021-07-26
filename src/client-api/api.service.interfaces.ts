export interface ApiCallResponse<T> {
  status?: number
  error?: string
  data?: T
}
