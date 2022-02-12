export interface PostInterface {
  id: number,
  title: string,
  body: string,
  date: string,
}

interface dataInterface {
  data: PostInterface[]
}

const getResource = (url: string): Promise<dataInterface> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

export const getAllPosts = () => {
  return getResource(`url`);
}

export const getPost = (id: number) => {
  return getResource(`url/${id}`);
}