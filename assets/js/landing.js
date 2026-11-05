// Standalone home page: no workspace scripts are loaded here.
(() => {
  let count = 0;
  try {
    const value = JSON.parse(localStorage.getItem('coursecompass-plans') || '[]');
    count = Array.isArray(value) ? value.length : 0;
  } catch (_) { /* Empty planner is a valid demo state. */ }
  const badge = document.getElementById('plan-count');
  if (badge && count) badge.textContent = `(${count})`;
  const summary = document.getElementById('planner-summary');
  if (summary && count) summary.textContent = `${count} saved course ${count === 1 ? 'selection' : 'selections'} — continue planning in your workspace.`;
})();
