export type BrandListType = {
    id: number|string,
    name: string,
    image?: string,
}

export type BrandPayloadType = {
    id?: number|string,
    name: string,
    image?: File|string,
}
