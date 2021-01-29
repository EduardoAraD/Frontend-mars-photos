export interface User {
    id: number;
    name: string
}

export function initUser (): User {
  return { id: -1, name: '' }
}
