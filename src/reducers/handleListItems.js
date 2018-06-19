const handleListItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          isEditing: false
        }
      ]
    case 'DELETE_LISTITEM':
      /* 
        можно же короче написать
        state.filter(item => item.id !== action.id)
      */
      return state.filter((listItem) => {
        return listItem.id !== action.id;
      })
    case 'TOGGLE_LISTITEM':
      return state.map((listItem) => {
        if (listItem.id === action.id)
          return { ...listItem, completed: !listItem.completed }
        /* зачем else ? */
        else
          return listItem;
      })
    case 'EDIT_LISTITEM':
      if (action.text !== '') {
        return state.map((listItem) => {
          if (listItem.id === action.id)
            return { ...listItem, text: action.text }
          /* зачем else ? */          
          else {
            return listItem;
          }
        })
      /* зачем else ? */      
      } else {
        return state.filter((listItem) => {
          return listItem.id !== action.id;
        })
      }
    case 'CHANGE_LISTITEM_VIEW':
      return state.map((listItem) => {
        if (listItem.id === action.id)
          return { ...listItem, isEditing: !listItem.isEditing }
        /* зачем else ? */        
        else
          return listItem;
      })
    case 'TOGGLE_ALL':
      return state.map((listItem) => {
        if (action.switchState === true) {
          return { ...listItem, completed: true }
        }
        /* зачем else ? */
        else {
          return { ...listItem, completed: false }
        }
      })
    case 'DELETE_ALL_COMPLETED':
      return state.filter((listItem) => listItem.completed === false)
    default:
      return state
  }
}

export default handleListItems;