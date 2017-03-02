export const loadState = () => {
  return {
    AppData: {},
    FilterResults: {}
  }
}


export const saveState = (state) => {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem('state', localStorageState)
  } catch (error) {
  }
}
