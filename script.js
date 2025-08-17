// Reusable slim vertical bar chart
function createChart(id, color) {
  new Chart(document.getElementById(id), {
    type: 'bar',
    data: {
      labels: ["", "", "", "", "", ""],
      datasets: [{
        data: [5, 8, 3, 6, 4, 7], // sample values
        backgroundColor: color,
        borderRadius: 4,  // rounded edges
        barThickness: 6   // slim bars (not chunky)
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false, grid: { display: false } },
        y: { display: false, grid: { display: false } }
      }
    }
  });
}

// Create for all 4 cards
createChart("chart1", "#3498db");
createChart("chart2", "#e67e22");
createChart("chart3", "#27ae60");
createChart("chart4", "#9b59b6");
