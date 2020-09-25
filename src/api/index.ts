import Config from '@/config';

export const Api = {
  GetTicketList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('error la'), 5000);
    });
  },
};
