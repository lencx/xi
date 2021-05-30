import React from 'react';
import { fileOpen, directoryOpen } from 'browser-fs-access';

import { listDirectory } from '@utils/tools';

import './index.scss';

const XSide = () => {
  const handleReadFile = async () => {
    // setText(blobs);
    // const content =
    // console.log('«18» /views/home/index.tsx ~> ', blobs);
    // const [_fileHandle] = await win.showOpenFilePicker();
    // const file = await _fileHandle.getFile();
    // const contents = await file.text();
    // setHandle(_fileHandle);
    // setText(contents);
  };

  const handleTextarea = (e: any) => {
    // setText(e.target.value);
  };

  const handleSaveFile = () => {
    // writeFile(fileHandle, text);
  };

  const handleReadDir = async () => {
    try {
      const blobs = await directoryOpen();
      listDirectory(blobs);
    } catch (err) {
      if (err.name !== 'AbortError') {
        return console.error(err);
      }
      console.log('The user aborted a request.');
    }
  };

  return (
    <div className="xi-side">
      <div className="xi-btns">
        <button onClick={handleReadDir}>read directory</button>
        <button onClick={handleReadFile}>read file</button>
        <button onClick={handleSaveFile}>save file</button>
        <div className="xi-dirs"></div>
      </div>
    </div>
  );
};

export default XSide;
