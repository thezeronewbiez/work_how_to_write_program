import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    await onAdd({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    setLoading(false);
  };

  return (
    <div className="add-card">
      <h2>➕ New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group" style={{ flex: 2 }}>
            <label>Title *</label>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="input-group" style={{ marginBottom: '14px' }}>
          <label>Description</label>
          <textarea
            rows={2}
            placeholder="Add details (optional)..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title.trim() || loading}
        >
          {loading ? '⏳ Adding...' : '✦ Add Todo'}
        </button>
      </form>
    </div>
  );
}
