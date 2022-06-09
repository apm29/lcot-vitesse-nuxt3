interface JavaResponse<T> {
  code: number
  msg: string
  data: T
}

interface PagedData<T> {
  records: T[]
  total: number
}
interface Subject {
  id: number
  text: string
}
interface Article {
  subject: Subject[]
  content: string
  banner: string
  title: string
}
