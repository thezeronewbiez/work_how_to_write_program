// API service layer for TodoList
const BASE_URL = '/api/todos';

export const todoApi = {
  getAll: async (completed) => {
    const url = completed !== undefined
      ? `${BASE_URL}?completed=${completed}`
      : BASE_URL;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch todos');
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error('Failed to fetch todo');
    return res.json();
  },

  create: async (data) => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to create todo');
    }
    return res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to update todo');
    }
    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete todo');
    return res.json();
  },
};
