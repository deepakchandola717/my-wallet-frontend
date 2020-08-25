import crudData from './apiService';

// get all transactions
export const getAllTransactions = (userId) => new Promise((resolve, reject) => {
  crudData('/transactions/{userId}', 'GET', {userId})
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// calculate credit, debit and balance
export const calculateTransactions = (userId, startMonth, endMonth) => new Promise((resolve, reject) => {
    crudData('/transactions/balance/{userId}', 'GET', {userId}, undefined, {startMonth, endMonth})
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });
