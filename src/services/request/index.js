import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/list-items");
    return result.data;
  } catch (error) {
    alert("Error data receive api");
    return { error };
  }
};

export const createItem = async (item) => {
  try {
    const result = await api.post("/list-item", {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Error saving new item");
    return { error };
  }
};

export const updateItem = async (id, item) => {
  try {
    const result = await api.put(`/list-item/${id}`, {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Error update item");
    return { error };
  }
};

export const checkItem = async (id, item) => {
  try {
    const result = await api.put(`/list-item/${id}`, {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Error check item");
    return { error };
  }
};

export const deleteItem = async (id) => {
  try {
    const result = await api.delete(`/list-item/${id}`);
    return result.data;
  } catch (error) {
    alert("Error delete item");
    return { error };
  }
};
