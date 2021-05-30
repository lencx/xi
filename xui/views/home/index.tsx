import React from 'react';

import XEdit from '@/components/XEdit';
import XSide from '@/components/XSide';
import XPreview from '@/components/XPreview';

import './index.scss';

export default function HomeView() {
  return (
    <div>
      <div className="xi-layout-main">
        <div className="xi-layout-side">
          <XSide />
        </div>
        <div className="xi-layout-edit">
          <XEdit />
        </div>
        <div className="xi-layout-preview">
          <XPreview />
        </div>
      </div>
    </div>
  );
}
