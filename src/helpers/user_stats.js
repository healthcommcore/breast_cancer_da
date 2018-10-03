import store from 'store';

const user = store.get('user');

export const isAdmin = () => user.admin; 

export const lumpEligible = () => user.lump; 
