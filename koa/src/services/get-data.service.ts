import { Data } from '../models/data.model';

export const getData = () => {
  const data: Data = { value: 'Hello world!' };

  const getData = new Promise<Data>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });

  return getData.then((res: any) => res);
};
