export const scans = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Web App Server ${i + 1}`,
  type: i % 2 ? "Greybox" : "Blackbox",
  status: i % 5 === 0 ? "Failed" : "Completed",
  progress: i % 5 === 0 ? 10 : 100,
  last: `${Math.floor(Math.random()*5)+1}d`
}));