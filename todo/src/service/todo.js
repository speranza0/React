import instance from "../library/axios";

export const findOneQueryKey = (idx) => ["todo", idx];
export const findAllQueryKey = (searchItem) => ["todos", searchItem];

export const search = async ({ query, condi }) => {
  const result = await instance.get("/todo", {
    params: {
      query,
      condi,
    },
  });
  return result.data;
};

export const create = async ({ content }) => {
  const result = await instance.post("/todo", { content });
  return result.data;
};

export const remove = async (id) => {
  const result = await instance.delete(`/todo/${id}`);
  return result.data;
};

export const update = async (id) => {
  const result = await instance.patch(`/todo/${id}`);
  return result.data;
};
