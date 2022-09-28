export class CustomStorage {
  localStorage: Storage

  constructor(localStorage: Storage) {
    this.localStorage = localStorage
  }

  setItem(key: string, value: unknown) {
    this.localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value = this.localStorage.getItem(key)
    if (!value) return
    return JSON.parse(value)
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key)
  }
}

export const customStorage = new CustomStorage(localStorage)
