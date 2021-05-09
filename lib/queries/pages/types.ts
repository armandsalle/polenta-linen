import type { Sys } from '@/lib/shared/types/Sys'

export interface PagesData {
  data: PagesContent
}

export interface PagesContent {
  heritageCollection: HeritageCollection
}

export interface HeritageCollection {
  items: Item[]
}

export interface Item {
  uid: string
  title: string
  order: number
  sys: Sys
}
