import {default as axios} from '../../../api/axios';

export const getBooksData = async () => {
  const result = await axios.get('/volumes', {
    params: {
      q: 'IT',
      langRestrict: 'ja',
      maxResults: 10,
      orderBy: 'newest',
      printType: 'books',
      projection: 'lite',
      showPreorders: 'true',
    },
  });

  return result.data;

  // console.log(result.data);
};
