export const toggleTabView = (tab, controller, element) => {
  if (tab === element) {
    controller('');
  } else controller(element);
};

export const hideComponent = (tab, element) => {
  if (tab === element) {
    return false;
  } else return true;
};
