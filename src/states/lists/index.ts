import { createReStateMethods } from '@raulpesilva/re-state'
import { Color } from '../../styles/theme';
import { customStorage, randomId } from '../../utils'

const listsKey = 'lists'

export type ListItem = { name: string; id: string, color: Color }

export type ListsProps = ListItem[]

const listsInitialValue = [{ name: 'All', id: randomId(), color: 'themeBlue' }] as ListsProps

export const { useLists, useListsSelect, dispatchLists, getLists, resetLists } = createReStateMethods(
  listsKey,
  listsInitialValue
)

export const addList = (name: ListItem['name'], color: ListItem['color']) => dispatchLists((prev) => [...prev, { name, id: randomId(), color }])

const getLocalStorageLists = () => {
  const listsLocalStorage = customStorage.getItem('lists')
  if (listsLocalStorage) dispatchLists(listsLocalStorage)
}

getLocalStorageLists()
