import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useMemo,
  useImperativeHandle,
} from 'react';

import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/continuelist';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/lib/codemirror.css';

import { ReactCodemirrorProps } from './types';

const defaultOptions = {
  tabSize: 2,
  autoCloseBrackets: true,
  matchBrackets: true,
  showCursorWhenSelecting: true,
  lineNumbers: true,
  fullScreen: true,
};

const ReactCodeMirror = (props: ReactCodemirrorProps, ref: any) => {
  const { options = {}, value = '', width = '100%', height = '100%' } = props;
  const textareaRef = useRef(null);
  const [editor, setEditor] =
    useState<CodeMirror.EditorFromTextArea | null>(null);

  useImperativeHandle(ref, () => ({ editor }));

  const getEventHandleFromProps = () => {
    const propNames = Object.keys(props);
    const eventHandle = propNames.filter((keyName) => /^on+/.test(keyName));

    const eventDict: any = {};
    eventHandle.forEach((ele) => {
      const name = ele.slice(2);
      if (name && name[0]) {
        eventDict[ele] = name.replace(name[0], name[0].toLowerCase());
      }
    });
    return eventDict;
  };

  // http://codemirror.net/doc/manual.html#config
  const setOptions = async (instance: any, opt: any = {}) => {
    if (typeof opt === 'object' && window) {
      const mode = CodeMirror.findModeByName(opt.mode || '');
      if (mode) {
        opt.mode = mode.mime;
      }
      Object.keys(opt).forEach((name) => {
        if (opt[name] && JSON.stringify(opt[name])) {
          instance.setOption(name, opt[name]);
        }
      });
    }
  };

  useEffect(() => {
    if (!editor && window) {
      // codemirror instance
      const instance = CodeMirror.fromTextArea((textareaRef as any).current, {
        ...defaultOptions,
        ...options,
      });
      const eventDict = getEventHandleFromProps();
      Object.keys(eventDict).forEach((event) => {
        instance.on(eventDict[event], (props as any)[event]);
      });
      instance.setValue(value || '');

      if (width || height) {
        instance.setSize(width, height);
      }
      setEditor(instance);
      setOptions(instance, { ...defaultOptions, ...options });
    }
    return () => {
      if (editor && window) {
        editor.toTextArea();
        setEditor(null);
      }
    };
  }, []);

  useMemo(() => {
    if (!editor || !window) return;
    const val = editor.getValue();
    if (value !== undefined && value !== val) {
      editor.setValue(value);
    }
  }, [value]);

  useMemo(() => {
    if (!editor || !window) return;
    editor.setSize(width, height);
  }, [width, height]);

  useMemo(() => {
    if (!editor || !window) return;
    setOptions(editor, { ...defaultOptions, ...options });
  }, [editor, options]);

  return <textarea ref={textareaRef} />;
};

export default forwardRef(ReactCodeMirror);
