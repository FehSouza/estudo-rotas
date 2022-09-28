import { createReStateMethods } from '@raulpesilva/re-state'
import { customStorage, randomId } from '../../utils'

const listsKey = 'lists'

export type ListItem = { name: string; id: string }

export type ListsProps = ListItem[]

const listsInitialValue = [{ name: 'All', id: randomId() }] as ListsProps

export const { useLists, useListsSelect, dispatchLists, getLists, resetLists } = createReStateMethods(
  listsKey,
  listsInitialValue
)

export const addList = (name: ListItem['name']) => dispatchLists((prev) => [...prev, { name, id: randomId() }])

const getLocalStorageLists = () => {
  const listsLocalStorage = customStorage.getItem('lists')
  if (listsLocalStorage) dispatchLists(listsLocalStorage)
}

getLocalStorageLists()
