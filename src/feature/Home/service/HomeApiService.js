import {default as axios} from '../../../../api/axios';

export const getBooksData = async searchText => {
  const result = await axios.get('/volumes', {
    params: {
      q: searchText,
      langRestrict: 'ja',
      maxResults: 10,
      orderBy: 'newest',
      printType: 'books',
      projection: 'lite',
      showPreorders: 'false',
    },
  });

  return result.data;
};
