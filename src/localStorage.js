export const loadState = () => {
  return {
    AppData: {},
    FilterResults: {}
  }

  // try {
  //    const localStorageState = localStorage.getItem('state');
  //    if(!localStorageState) { return {} }
  //    console.log(JSON.parse(localStorageState));
  //  } catch (error) {
  //    return undefined;
  //  }
}


export const saveState = (state) => {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem('state', localStorageState)
  } catch (error) {
  }
}
