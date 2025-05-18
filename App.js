
import { useState } from "react";

const days = ["Ziua 1", "Ziua 2", "Ziua 3", "Ziua 4", "Ziua 5", "Ziua 6", "Ziua 7"];

export default function App() {
  const [dayIndex, setDayIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const currentDay = days[dayIndex];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [currentDay]: { ...formData[currentDay], [field]: value } });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>{currentDay}</h2>
      <label>🧠 Cum mă simt azi? (1-10)</label>
      <input
        type="number"
        min={1}
        max={10}
        value={formData[currentDay]?.mood || ""}
        onChange={(e) => handleChange("mood", e.target.value)}
      />
      <br /><br />
      <label>🎯 Obiectivul zilei</label>
      <input
        type="text"
        value={formData[currentDay]?.goal || ""}
        onChange={(e) => handleChange("goal", e.target.value)}
      />
      <br /><br />
      <label>💭 Mental Dump</label><br />
      <textarea
        rows={4}
        style={{ width: "100%" }}
        value={formData[currentDay]?.dump || ""}
        onChange={(e) => handleChange("dump", e.target.value)}
      />
      <br /><br />
      <label>🌙 Reflecție de seară</label><br />
      <textarea
        rows={3}
        style={{ width: "100%" }}
        value={formData[currentDay]?.reflect || ""}
        onChange={(e) => handleChange("reflect", e.target.value)}
      />
      <br /><br />
      <button onClick={() => setDayIndex(Math.max(dayIndex - 1, 0))} disabled={dayIndex === 0}>
        ◀ Ziua precedentă
      </button>
      <button onClick={() => setDayIndex(Math.min(dayIndex + 1, days.length - 1))} disabled={dayIndex === days.length - 1} style={{ float: "right" }}>
        Ziua următoare ▶
      </button>
    </div>
  );
}
