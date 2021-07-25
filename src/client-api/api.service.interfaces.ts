export interface ApiCallResponse<T> {
  status: number
  error: boolean
  data?: T
}
