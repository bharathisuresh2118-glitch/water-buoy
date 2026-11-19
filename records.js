(() => {
  const section = document.querySelector('.leaderboard-section');
  if (!section) return;
  const actions = document.createElement('div');
  actions.className = 'leaderboard-actions';
  actions.innerHTML = '<button id="downloadScores" class="board-button">DOWNLOAD FULL SCORE REPORT</button><button id="clearScores" class="board-button danger">DELETE ALL LOCAL RECORDS</button>';
  section.append(actions);
  const allScores = () => { try { return JSON.parse(localStorage.riverguardLeaderboard || '[]'); } catch { return []; } };
  document.getElementById('downloadScores').addEventListener('click', () => {
    const rows = allScores().sort((a,b)=>b.score-a.score);
    const report = ['RIVERGUARD GERMBLAST - LOCAL SCORE REPORT', `Exported: ${new Date().toLocaleString()}`, '', 'RANK | PILOT | SCORE | DATE', ...rows.map((row,index) => `${index + 1} | ${row.name} | ${row.score} | ${new Date(row.date).toLocaleString()}`)].join('\n');
    const url = URL.createObjectURL(new Blob([report], {type:'text/plain'}));
    const link = Object.assign(document.createElement('a'), {href:url, download:'riverguard-germblast-scores.txt'});
    link.click(); URL.revokeObjectURL(url);
  });
  document.getElementById('clearScores').addEventListener('click', () => {
    if (!confirm('Permanently delete all locally stored RiverGuard GermBlast scores on this device?')) return;
    localStorage.removeItem('riverguardLeaderboard');
    location.reload();
  });
})();
