import { useState } from 'react';

export default function TodoCard({ todo, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);
    await onEdit(todo.id, { title: title.trim(), description: description.trim() });
    setSaving(false);
    setEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setDescription(todo.description || '');
    setEditing(false);
  };

  const formatDate = (dt) => {
    if (!dt) return '';
    return new Date(dt).toLocaleString('th-TH', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className={`todo-card${todo.completed ? ' completed' : ''}`}>
      {/* Checkbox */}
      <button
        className={`check-btn${todo.completed ? ' checked' : ''}`}
        onClick={() => onToggle(todo)}
        title={todo.completed ? 'Mark as pending' : 'Mark as done'}
      />

      {/* Body */}
      {editing ? (
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            rows={2}
            placeholder="Description (optional)..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <div className="edit-actions">
            <button
              type="submit"
              className="btn btn-sm btn-success"
              disabled={!title.trim() || saving}
            >
              {saving ? 'Saving...' : '✓ Save'}
            </button>
            <button type="button" className="btn btn-sm btn-ghost" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="todo-body">
          <div className="todo-title">{todo.title}</div>
          {todo.description && (
            <div className="todo-desc">{todo.description}</div>
          )}
          <div className="todo-meta">
            <span className={`badge ${todo.completed ? 'badge-done' : 'badge-pending'}`}>
              {todo.completed ? '✅ Done' : '⏳ Pending'}
            </span>
            <span>·</span>
            <span>{formatDate(todo.created_at)}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      {!editing && (
        <div className="todo-actions">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setEditing(true)}
            title="Edit"
          >
            ✏️
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(todo.id)}
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
