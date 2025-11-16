// data/tasksData.js - armazenamento em memória
let tasks = [];
let nextId = 1;

exports.getAll = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...tasks]), 5);
  });
};

exports.create = async ({ title, status }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const task = { id: nextId++, title, status };
      tasks.push(task);
      resolve(task);
    }, 5);
  });
};

exports._updateCallback = (id, patch, cb) => {
  setTimeout(() => {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return cb(null, null);
    tasks[idx] = { ...tasks[idx], ...patch };
    cb(null, tasks[idx]);
  }, 5);
};

exports.update = (id, patch) => {
  return new Promise((resolve) => {
    exports._updateCallback(id, patch, (err, updated) => {
      resolve(updated);
    });
  });
};

exports.remove = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const idx = tasks.findIndex(t => t.id === id);
      if (idx === -1) return resolve(false);
      tasks.splice(idx, 1);
      resolve(true);
    }, 5);
  });
};

// Helpers for tests
exports._reset = () => {
  tasks = [];
  nextId = 1;
};
