export type UserListType = {
    id: number|string,
    name: string,
    email: string,
    is_admin: number|string,
    checked?: boolean,
    isActive?:any
}

export type UserType = {
    id?: number|string,
    name: string,
    email: string,
    password: string,
    is_admin: number|string,
}
