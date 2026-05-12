/* ============================================================
   Pixel-Searcher Leaderboard — Data & Rendering
   All "Qwen-3.5" → "Qwen3-VL-8B"
   ============================================================ */

const taskData = {
  segmentation: {
    title: "Segmentation",
    metricLabel: "gIoU / cIoU",
    metrics: ["gIoU", "cIoU"],
    categories: ["Vehicles", "Pop-IP", "Anime", "Icons", "Celebrities", "Product"],
    models: [
      { name: "Seed-2.0-Pro",         overall: 43.32, data: [71.81, 21.22, 36.87, 61.05, 36.78, 51.53], raw: [79.00,71.81,41.66,21.22,49.79,36.87,73.26,61.05,56.21,36.78,62.13,51.53,61.22,43.32], highlights: [4,5,6,7,8,9,11,12,13] },
      { name: "Gemini-3.1-Pro",       overall: 38.76, data: [72.27, 27.46, 26.75, 48.89, 28.26, 49.86], raw: [79.79,72.27,43.80,27.46,38.14,26.75,61.19,48.89,43.89,28.26,65.06,49.86,54.56,38.76], highlights: [0,1,2,10] },
      { name: "Seed-1.6",             overall: 36.13, data: [57.13, 20.66, 32.60, 49.15, 30.39, 44.05], raw: [65.92,57.13,23.72,20.66,40.88,32.60,63.81,49.15,47.01,30.39,54.44,44.05,50.38,36.13] },
      { name: "Seed-1.8",             overall: 36.06, data: [62.57, 28.45, 23.02, 47.76, 31.20, 44.42], raw: [71.40,62.57,38.10,28.45,42.05,23.02,62.67,47.76,46.66,31.20,55.45,44.42,52.64,36.06], highlights: [3] },
      { name: "Gemini-3.1-Flash-Lite", overall: 35.58, data: [65.00, 24.87, 25.07, 26.17, 33.29, 43.51], raw: [67.32,65.00,28.44,24.87,29.11,25.07,40.43,26.17,38.40,33.29,45.04,43.51,39.11,35.58] },
      { name: "Pixel-Searcher (Ours)", overall: 32.41, data: [53.19, 15.25, 33.21, 19.19, 33.62, 35.24], raw: [61.01,53.19,23.91,15.25,37.57,33.21,39.86,19.19,37.57,33.62,46.33,35.24,39.17,32.41] },
      { name: "Qwen3-VL-8B",          overall: 25.94, data: [46.43, 11.23, 26.28, 20.85, 24.70, 25.59], raw: [57.63,46.43,33.82,11.23,32.12,26.28,32.84,20.85,36.81,24.70,37.43,25.59,35.78,25.94] },
      { name: "OneThinker-8B",        overall: 24.46, data: [35.41, 17.64, 24.52, 20.57, 23.20, 25.43], raw: [48.35,35.41,27.87,17.64,32.32,24.52,31.66,20.57,38.37,23.20,35.01,25.43,35.60,24.46] },
      { name: "SAM3-Agent",           overall: 24.50, data: [37.35, 24.98, 23.58, 9.64, 26.54, 24.94], raw: [38.22,37.35,14.51,24.98,13.76,23.58,12.14,9.64,19.88,26.54,20.49,24.94,19.83,24.50] },
      { name: "Seg-R1-7B",            overall: 23.72, data: [45.06, 18.93, 14.78, 17.10, 24.75, 21.68], raw: [56.54,45.06,26.72,18.93,17.57,14.78,27.89,17.10,36.32,24.75,27.21,21.68,32.04,23.72] },
      { name: "Seg-Zero-7B",          overall: 22.51, data: [35.98, 16.17, 21.18, 18.66, 27.36, 15.70], raw: [49.43,35.98,32.54,16.17,25.79,21.18,29.57,18.66,39.26,27.36,27.58,15.70,34.03,22.51] },
      { name: "GPT-5.4",              overall: 13.54, data: [37.06, 10.21, 7.43, 29.94, 8.64, 14.55], raw: [43.03,37.06,20.90,10.21,9.74,7.43,39.43,29.94,16.48,8.64,18.93,14.55,25.09,13.54] },
      { name: "LISA-7B",              overall: 12.82, data: [20.84, 18.78, 5.38, 4.32, 16.97, 10.65], raw: [15.74,20.84,11.85,18.78,9.09,5.38,2.82,4.32,21.02,16.97,8.67,10.65,11.53,12.82] },
      { name: "Affordance-R1",        overall: 11.50, data: [9.49, 6.93, 14.28, 19.27, 7.98, 11.02], raw: [11.84,9.49,13.28,6.93,14.15,14.28,30.08,19.27,9.87,7.98,15.82,11.02,15.84,11.50] },
      { name: "GPT-4.1",              overall: 6.79, data: [20.34, 0.49, 6.98, 0.24, 3.61, 4.93], raw: [24.28,20.34,0.85,0.49,8.10,6.98,0.43,0.24,5.84,3.61,7.19,4.93,4.99,6.79] },
      { name: "InternVL-3.5-8B",      overall: 5.28, data: [10.45, 2.31, 3.67, 2.06, 4.95, 5.82], raw: [10.62,10.45,3.72,2.31,4.59,3.67,2.99,2.06,7.67,4.95,5.53,5.82,5.28,5.28] },
      { name: "GPT-4o",               overall: 4.85, data: [2.81, 0.44, 5.14, 0.70, 0.08, 8.47], raw: [2.18,2.81,0.45,0.44,6.23,5.14,1.25,0.70,0.14,0.08,13.65,8.47,3.42,4.85] }
    ]
  },
  grounding: {
    title: "Grounding",
    metricLabel: "IoU / R@0.5",
    metrics: ["IoU", "R@0.5"],
    categories: ["Vehicles", "Pop-IP", "Anime", "Icon", "Celebrities", "Product"],
    models: [
      { name: "Seed-2.0-Pro",         overall: 35.69, data: [60.73,29.04,36.32,27.37,38.32,52.76], raw: [60.73,75.00,29.04,32.47,36.32,39.24,27.37,40.00,38.32,43.20,52.76,63.64,35.69,44.41], highlights: [1,8,9,10,11,12,13] },
      { name: "Pixel-Searcher (Ours)", overall: 34.17, data: [54.74,23.53,38.81,29.68,35.94,42.12], raw: [54.74,58.33,23.53,24.68,38.81,43.04,29.68,42.80,35.94,38.40,42.12,48.05,34.17,41.30], highlights: [4,5,6,7] },
      { name: "Seed-1.8",             overall: 33.28, data: [55.87,30.25,31.72,24.98,37.35,47.73], raw: [55.87,69.44,30.25,35.06,31.72,32.91,24.98,36.80,37.35,41.60,47.73,57.14,33.28,41.30], highlights: [3] },
      { name: "OneThinker-8B",        overall: 32.78, data: [51.19,28.19,23.86,21.81,37.71,33.92], raw: [51.19,61.11,28.19,32.89,23.86,24.05,21.81,32.81,37.71,42.40,33.92,38.96,32.78,38.70] },
      { name: "Seed-1.6",             overall: 31.53, data: [52.16,18.07,36.69,24.26,36.37,45.77], raw: [52.16,63.89,18.07,20.78,36.69,37.97,24.26,36.00,36.37,39.20,45.77,55.84,31.53,38.98] },
      { name: "Gemini-3.1-Pro",       overall: 30.52, data: [62.89,32.13,24.14,22.22,31.64,45.43], raw: [62.89,75.00,32.13,33.77,24.14,22.78,22.22,29.60,31.64,32.00,45.43,53.25,30.52,35.09], highlights: [0,1,2] },
      { name: "Gemini-3.1-Flash-Lite", overall: 27.90, data: [53.57,26.05,30.94,15.08,37.71,40.33], raw: [53.57,63.89,26.05,23.38,30.94,22.78,15.08,18.00,37.71,37.60,40.33,41.56,27.90,28.42] },
      { name: "Qwen3-VL-8B",          overall: 26.81, data: [47.58,20.13,24.78,22.30,32.54,31.17], raw: [47.58,58.33,20.13,25.97,24.78,29.11,22.30,28.40,32.54,36.80,31.17,37.66,26.81,32.61] },
      { name: "Ground-R1",            overall: 26.68, data: [44.47,24.11,24.23,9.60,32.41,25.23], raw: [44.47,50.00,24.11,28.95,24.23,24.05,9.60,13.67,32.41,32.80,25.23,28.57,26.68,29.67] },
      { name: "UniVG-R1",             overall: 25.79, data: [29.29,19.02,31.45,14.63,34.68,25.67], raw: [29.29,33.33,19.02,22.37,31.45,31.65,14.63,19.92,34.68,37.60,25.67,28.57,25.79,28.91] },
      { name: "GPT-5.4",              overall: 19.53, data: [34.36,19.64,13.90,18.89,20.08,19.46], raw: [34.36,41.67,19.64,22.08,13.90,7.59,18.89,19.60,20.08,17.60,19.46,18.18,19.53,19.10] },
      { name: "Perception-R1",        overall: 14.76, data: [16.07,9.61,22.16,4.08,23.50,13.15], raw: [16.07,11.11,9.61,6.58,22.16,21.52,4.08,4.00,23.50,22.40,13.15,12.99,14.76,13.10] },
      { name: "GPT-4.1",              overall: 6.38, data: [30.01,3.95,6.59,1.61,6.29,13.15], raw: [30.01,27.78,3.95,1.30,6.59,6.33,1.61,0.00,6.29,2.40,13.15,7.79,6.38,3.88] },
      { name: "InternVL-3.5-8B",      overall: 4.07, data: [10.58,3.49,3.39,1.45,5.92,7.75], raw: [10.58,2.78,3.49,0.00,3.39,1.27,1.45,0.00,5.92,1.60,7.75,1.30,4.07,0.78] },
      { name: "GPT-4o",               overall: 2.44, data: [13.94,1.14,1.09,1.47,0.17,6.59], raw: [13.94,2.78,1.14,0.00,1.09,0.00,1.47,0.00,0.17,0.00,6.59,2.60,2.44,0.47] }
    ]
  },
  vqa: {
    title: "VQA",
    metricLabel: "Accuracy (%)",
    metrics: ["Accuracy"],
    categories: ["Vehicles", "Pop-IP", "Anime", "Icons", "Celebrities", "Product"],
    models: [
      { name: "Seed-2.0-Pro",         overall: 65.37, data: [69.44,42.86,45.57,81.20,56.80,68.83], raw: [69.44,42.86,45.57,81.20,56.80,68.83,65.37], highlights: [2,3,6] },
      { name: "Gemini-3.1-Pro",       overall: 63.82, data: [83.33,48.05,44.30,68.00,62.40,79.22], raw: [83.33,48.05,44.30,68.00,62.40,79.22,63.82], highlights: [0,1,4,5] },
      { name: "Seed-1.8",             overall: 61.34, data: [69.44,28.57,41.77,78.80,54.40,64.94], raw: [69.44,28.57,41.77,78.80,54.40,64.94,61.34] },
      { name: "Seed-1.6",             overall: 54.97, data: [63.89,29.87,41.77,66.80,53.60,53.25], raw: [63.89,29.87,41.77,66.80,53.60,53.25,54.97] },
      { name: "GPT-5.4",              overall: 49.38, data: [44.44,28.57,35.44,60.00,48.80,53.25], raw: [44.44,28.57,35.44,60.00,48.80,53.25,49.38] },
      { name: "Pixel-Searcher (Ours)", overall: 42.24, data: [38.89,24.68,34.18,50.40,42.40,42.86], raw: [38.89,24.68,34.18,50.40,42.40,42.86,42.24] },
      { name: "Gemini-3.1-Flash-Lite", overall: 40.68, data: [55.56,23.38,43.04,40.40,40.80,49.35], raw: [55.56,23.38,43.04,40.40,40.80,49.35,40.68] },
      { name: "GPT-4.1",              overall: 40.22, data: [58.33,24.68,37.97,40.00,39.20,51.95], raw: [58.33,24.68,37.97,40.00,39.20,51.95,40.22] },
      { name: "Qwen3-VL-8B",          overall: 36.34, data: [47.22,24.68,31.65,35.60,43.20,38.96], raw: [47.22,24.68,31.65,35.60,43.20,38.96,36.34] },
      { name: "InternVL-3.5-8B",      overall: 36.02, data: [25.00,29.87,32.91,42.00,36.00,31.17], raw: [25.00,29.87,32.91,42.00,36.00,31.17,36.02] },
      { name: "GPT-4o",               overall: 29.97, data: [58.33,24.68,27.85,20.40,39.20,40.26], raw: [58.33,24.68,27.85,20.40,39.20,40.26,29.97] },
      { name: "SophiaVL-R1",          overall: 29.67, data: [38.89,23.68,22.78,27.46,34.40,37.66], raw: [38.89,23.68,22.78,27.46,34.40,37.66,29.67] },
      { name: "VL-Rethinker",         overall: 29.20, data: [33.33,23.68,31.65,27.05,33.60,29.87], raw: [33.33,23.68,31.65,27.05,33.60,29.87,29.20] },
      { name: "OneThinker",           overall: 28.26, data: [36.11,21.05,29.11,24.59,40.00,23.38], raw: [36.11,21.05,29.11,24.59,40.00,23.38,28.26] },
      { name: "UniVG-R1",             overall: 26.22, data: [30.56,19.74,31.65,22.13,36.00,22.08], raw: [30.56,19.74,31.65,22.13,36.00,22.08,26.22] },
      { name: "Vision-R1",            overall: 21.19, data: [13.89,22.37,17.72,27.87,12.80,19.48], raw: [13.89,22.37,17.72,27.87,12.80,19.48,21.19] }
    ]
  }
};

/* ---------- Color palette ---------- */
const palette = [
  "#2563eb","#7c3aed","#0d9488","#f97316","#ec4899","#111827",
  "#34a853","#64748b","#a16207","#dc2626","#6366f1","#059669",
  "#8b5cf6","#d97706","#0284c7","#be185d","#475569"
];

/* ---------- ECharts instances ---------- */
let barChart, radarChart, pieChart;

function initCharts() {
  barChart = echarts.init(document.getElementById("bar-chart"));
  radarChart = echarts.init(document.getElementById("radar-chart"));

  /* Dataset pie chart */
  const pieEl = document.getElementById("pie-chart");
  if (pieEl) {
    pieChart = echarts.init(pieEl);
    const pieColors = ["#6366f1","#0d9488","#f97316","#ec4899","#2563eb","#8b5cf6"];
    pieChart.setOption({
      tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
      legend: { bottom: 0, textStyle: { fontSize: 11, fontFamily: "Inter" } },
      series: [{
        type: "pie", radius: ["36%", "62%"], center: ["50%", "44%"],
        avoidLabelOverlap: true,
        itemStyle: { borderRadius: 6, borderColor: "#fff", borderWidth: 2 },
        label: { show: true, formatter: "{b}\n{d}%", fontSize: 11, color: "#334155" },
        emphasis: {
          label: { fontSize: 13, fontWeight: "bold" },
          itemStyle: { shadowBlur: 12, shadowColor: "rgba(0,0,0,.12)" }
        },
        data: [
          { name: "Icon",      value: 256, itemStyle: { color: pieColors[0] } },
          { name: "Celebrity", value: 125, itemStyle: { color: pieColors[1] } },
          { name: "Anime",     value: 79,  itemStyle: { color: pieColors[2] } },
          { name: "Pop-IP",    value: 78,  itemStyle: { color: pieColors[3] } },
          { name: "Product",   value: 77,  itemStyle: { color: pieColors[4] } },
          { name: "Vehicles",  value: 36,  itemStyle: { color: pieColors[5] } }
        ]
      }]
    });
  }

  render("segmentation");

  /* Tab switching */
  document.querySelectorAll("[data-task]").forEach(btn => {
    btn.addEventListener("click", () => render(btn.dataset.task));
  });

  /* Responsive resize */
  window.addEventListener("resize", () => {
    barChart.resize();
    radarChart.resize();
    if (pieChart) pieChart.resize();
  });
}

function render(taskKey) {
  const task = taskData[taskKey];
  const sorted = [...task.models].sort((a, b) => b.overall - a.overall);

  /* Update tab selection */
  document.querySelectorAll("[data-task]").forEach(btn => {
    btn.setAttribute("aria-selected", String(btn.dataset.task === taskKey));
  });

  /* Titles */
  document.getElementById("bar-title").textContent = `Overall Performance (${task.title})`;
  document.getElementById("radar-title").textContent = `Category-wise Analysis (${task.title})`;

  /* Color mapping */
  const colorMap = {};
  sorted.forEach((m, i) => { colorMap[m.name] = palette[i % palette.length]; });

  /* ---- Bar Chart ---- */
  barChart.setOption({
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { left: "3%", right: "4%", bottom: "22%", top: "8%", containLabel: true },
    xAxis: {
      type: "category",
      data: sorted.map(m => m.name),
      axisLabel: { rotate: 40, interval: 0, fontSize: 10, fontFamily: "Inter" }
    },
    yAxis: { type: "value", splitLine: { lineStyle: { color: "#f0f0f0" } } },
    series: [{
      name: "Overall Score", type: "bar", barWidth: "80%",
      data: sorted.map(m => ({
        value: m.overall,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorMap[m.name] },
            { offset: 1, color: colorMap[m.name] + "88" }
          ]),
          borderRadius: [4, 4, 0, 0]
        }
      })),
      label: {
        show: true, position: "insideTop", color: "#fff",
        fontWeight: 700, fontSize: 11,
        formatter: p => p.value.toFixed(1)
      }
    }]
  }, true);

  /* ---- Radar Chart ---- */
  const maxVal = Math.max(...task.models.flatMap(m => m.data)) + 8;
  const radarIndicators = task.categories.map(c => ({ name: c, max: maxVal }));
  const top6 = sorted.slice(0, 6).map(m => m.name);
  const selected = {};
  sorted.forEach(m => { selected[m.name] = top6.includes(m.name); });

  radarChart.setOption({
    tooltip: { trigger: "item" },
    legend: {
      type: "scroll", top: 0, textStyle: { fontSize: 11, fontFamily: "Inter" },
      selected, data: sorted.map(m => m.name)
    },
    radar: {
      indicator: radarIndicators, center: ["50%", "56%"], radius: "58%",
      shape: "polygon",
      axisName: { fontSize: 11, color: "#526176", fontFamily: "Inter" },
      splitArea: { areaStyle: { color: ["#fafbfc", "#f1f5f9"] } }
    },
    series: [{
      type: "radar",
      data: sorted.map(m => ({
        value: m.data, name: m.name,
        itemStyle: { color: colorMap[m.name] },
        lineStyle: { color: colorMap[m.name], width: 2 },
        areaStyle: { color: colorMap[m.name], opacity: 0.08 }
      }))
    }]
  }, true);

  /* ---- Table ---- */
  updateTable(task, sorted);
}

function updateTable(task, models) {
  const head = document.getElementById("table-head");
  const body = document.getElementById("table-body");

  head.innerHTML = `
    <tr>
      <th rowspan="2">Rank</th>
      <th rowspan="2">Model</th>
      ${task.categories.map(c => `<th colspan="${task.metrics.length}">${c}</th>`).join("")}
      <th colspan="${task.metrics.length}">Overall</th>
    </tr>
    <tr>
      ${[...Array(task.categories.length + 1)].map(() =>
        task.metrics.map(m => `<th>${m}</th>`).join("")
      ).join("")}
    </tr>`;

  body.innerHTML = models.map((m, idx) => {
    const isOurs = m.name.toLowerCase().includes("ours");
    const rankClass = idx === 0 ? "gold" : idx === 1 ? "silver" : idx === 2 ? "bronze" : "";
    return `
      <tr class="${isOurs ? "ours-row" : ""}">
        <td><span class="rank-badge ${rankClass}">${idx + 1}</span></td>
        <td><span class="model-name">${m.name}</span>${isOurs ? '<span class="ours-tag">Ours</span>' : ""}</td>
        ${m.raw.map((val, vIdx) => {
          const isBest = m.highlights && m.highlights.includes(vIdx);
          return `<td class="${isBest ? "best-val" : ""}">${val === -1 ? "—" : val}</td>`;
        }).join("")}
      </tr>`;
  }).join("");
}

/* ---------- Init ---------- */
window.addEventListener("DOMContentLoaded", initCharts);
