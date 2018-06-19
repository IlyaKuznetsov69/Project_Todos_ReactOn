/* 
  придерживайся соглашения что action возвращает
  объект типа 
  {
    type: 'SOME_ACTION',
    payload: 'Action data'
  }
*/
export const addListItem = (text) => ({
  type: 'ADD_LISTITEM',
  /* 
    не нужно никаой дополнительной логики, типо генерации id
    делать в action. action - функция которая возвращает объект без каких-либо вычислений
  */
  id: Date.now().toString(),
  text
});

export const deleteListItem = (id) => ({
  type: 'DELETE_LISTITEM',
  id
});

export const toggleListItem = (id) => ({
  type: 'TOGGLE_LISTITEM',
  id
});

export const editListItem = (id, text) => ({
  type: 'EDIT_LISTITEM',
  id,
  text
});

export const changeListItemView = (id) => ({
  type: 'CHANGE_LISTITEM_VIEW',
  id
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
});

export const toggleAllItems = (switchState) => ({
  type: 'TOGGLE_ALL',
  switchState
})

export const deleteAllCompleted = () => ({
  type: 'DELETE_ALL_COMPLETED'
})

export const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};