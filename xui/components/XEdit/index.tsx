import React, { useState, useRef } from 'react';

// theme
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neo.css';

// mode
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/css/css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/pug/pug';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/markdown/markdown';

import CodeMirror from '@comps/CodeMirror';

import './index.scss';

const codeModeList = ['js', 'html', 'css', 'markdown', 'jsx', 'yaml', 'rust'];
const themeList = ['monokai', 'dracula', 'material', 'neo'];

const XEdit = () => {
  const [mode, setMode] = useState('js');
  const [theme, setTheme] = useState('monokai');
  const codeMirrorRef = useRef();

  const handleMode = (e: any) => {
    setMode(e.target.value);
  };
  const handleTheme = (e: any) => {
    setTheme(e.target.value);
  };

  return (
    <div className="xi-edit">
      <label>Language:</label>
      <select onChange={handleMode} value={mode}>
        {codeModeList.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>{' '}
      <label>Theme:</label>
      <select onChange={handleTheme} value={theme}>
        {themeList.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>
      <CodeMirror
        options={{
          theme,
          mode,
          tabSize: 2,
          keyMap: 'sublime',
        }}
        ref={codeMirrorRef}
      />
    </div>
  );
};

export default XEdit;
