import React, { useState, useEffect } from 'react';
import init, { greet } from '@rsw/xi';

import { writeFile } from '@utils/tools';

const win: any = window;

export default function HomeView() {
  const [text, setText] = useState('');
  const [fileHandle, setHandle] = useState(null);
  useEffect(() => {
    init();
  }, [])

  const handleReadFile = async () => {
    const [_fileHandle] = await win.showOpenFilePicker();
    const file = await _fileHandle.getFile();
    const contents = await file.text();
    setHandle(_fileHandle);
    setText(contents);
  }

  const handleTextarea = (e: any) => {
    setText(e.target.value);
  }

  const handleSaveFile = () => {
    writeFile(fileHandle, text);
  }

  return (
    <div>
      <button onClick={handleReadFile}>read file</button>
      <button onClick={handleSaveFile}>save file</button>
      <button onClick={greet}>wasm - hello</button>
      <br />
      <textarea rows={20} value={text} onChange={handleTextarea} />
    </div>
  );
}
