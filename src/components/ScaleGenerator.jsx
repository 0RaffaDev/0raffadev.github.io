import { useState } from "react";
import * as Tone from "tone";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];

function getScale(root) {
  const rootIndex = notes.indexOf(root);
  return majorScaleIntervals.map(i => notes[(rootIndex + i) % 12]);
}

export default function ScaleGenerator() {
  const [root, setRoot] = useState("C");
  const scale = getScale(root);

  const playNote = async (note) => {
    await Tone.start(); // Activar audio en el navegador
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`${note}4`, "8n");
  };

  return (
    <div className="piano">
      <h1 className="text-xl font-bold mb-4">Piano Escalas Mayores</h1>
      <select
        className="p-2 border rounded mb-4 w-full"
        value={root}
        onChange={(e) => setRoot(e.target.value)}
      >
        {notes.map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <div className="pianonotes">
        
        {scale.map((note, i) => (
          <button className="pianonotas"
            key={i}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}
