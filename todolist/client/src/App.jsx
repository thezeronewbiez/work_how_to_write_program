import { useState, useEffect, useCallback } from 'react';
import { todoApi } from './services/todoApi';
import TodoCard from './components/TodoCard';
import AddTodoForm from './components/AddTodoForm';
import './index.css';

const FILTERS = [
  { key: 'all',     label: '✦ All' },
  { key: 'pending', label: '⏳ Pending' },
  { key: 'done',    label: '✅ Done' },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  const notify = useCallback((msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      const param = filter === 'done' ? true : filter === 'pending' ? false : undefined;
      const data = await todoApi.getAll(param);
      setTodos(data);
    } catch {
      notify('Failed to load todos', 'error');
    } finally {
      setLoading(false);
    }
  }, [filter, notify]);

  useEffect(() => { loadTodos(); }, [loadTodos]);

  const handleCreate = async (data) => {
    try {
      const created = await todoApi.create(data);
      setTodos(prev => [created, ...prev]);
      notify('Todo created ✨');
    } catch (e) {
      notify(e.message, 'error');
    }
  };

  const handleToggle = async (todo) => {
    try {
      const updated = await todoApi.update(todo.id, { completed: !todo.completed });
      setTodos(prev => prev.map(t => t.id === updated.id ? updated : t));
      notify(updated.completed ? 'Marked as done ✅' : 'Marked as pending');
    } catch {
      notify('Update failed', 'error');
    }
  };

  const handleEdit = async (id, data) => {
    try {
      const updated = await todoApi.update(id, data);
      setTodos(prev => prev.map(t => t.id === updated.id ? updated : t));
      notify('Todo updated ✏️');
    } catch (e) {
      notify(e.message, 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await todoApi.delete(id);
      setTodos(prev => prev.filter(t => t.id !== id));
      notify('Todo deleted 🗑️');
    } catch {
      notify('Delete failed', 'error');
    }
  };

  const total   = todos.length;
  const done    = todos.filter(t => t.completed).length;
  const pending = total - done;

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-icon">✅</div>
          <h1>TodoList</h1>
          <p>Organize your tasks, stay productive</p>
        </header>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card total">
            <div className="stat-number">{total}</div>
            <div className="stat-label">Total</div>
          </div>
          <div className="stat-card done">
            <div className="stat-number">{done}</div>
            <div className="stat-label">Done</div>
          </div>
          <div className="stat-card pending">
            <div className="stat-number">{pending}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>

        {/* Add todo */}
        <AddTodoForm onAdd={handleCreate} />

        {/* Filter tabs */}
        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* List */}
        {loading ? (
          <div className="spinner"><div className="spinner-ring" /></div>
        ) : todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎉</div>
            <h3>No todos here</h3>
            <p>
              {filter === 'done' ? 'No completed todos yet.' :
               filter === 'pending' ? 'All caught up!' :
               'Add your first todo above.'}
            </p>
          </div>
        ) : (
          <div className="todo-list">
            {todos.map(todo => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Toasts */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            {t.type === 'success' ? '✓' : '✕'} {t.msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
