import store from 'store';


const isAdmin = () => {
  const user = store.get('user');
  return user.admin;
}

const lumpEligible = () => {
  const user = store.get('user');
  return user.lump;
}

export { isAdmin, lumpEligible }
