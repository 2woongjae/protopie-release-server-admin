import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, {AppProps, VersionDarwin, VersionWin32} from './App';

import './index.css';

const darwin300: VersionDarwin = {
    version: '3.0.0',
    note: '### 3.0.0\n' +
    '- [Test] 3.0.0',
    file: 'ProtoPie-3.0.0-mac.zip',
    metadata: {
        osx: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const darwin301: VersionDarwin = {
    version: '3.0.1',
    note: '### 3.0.1\n' +
    '- [Test] 3.0.1',
    file: 'ProtoPie-3.0.1-mac.zip',
    metadata: {
        osx: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const darwin310: VersionDarwin = {
    version: '3.1.0',
    note: '### 3.1.0\n' +
    '- [Test] 3.1.0',
    file: 'ProtoPie-3.1.0-mac.zip',
    metadata: {
        osx: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const darwin322: VersionDarwin = {
    version: '3.2.2',
    note: '### 3.2.2\n' +
    '- [Test] 3.2.2',
    file: 'ProtoPie-3.2.2-mac.zip',
    metadata: {
        osx: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const darwin323: VersionDarwin = {
    version: '3.2.3',
    note: '### 3.2.3\n' +
    '- [Test] 3.2.3',
    file: 'ProtoPie-3.2.3-mac.zip',
    metadata: {
        osx: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const win32323: VersionWin32 = {
    version: '3.2.3',
    note: '### 3.2.3\n' +
    '- [Test] [windows] 3.2.3',
    file: 'ProtoPie-3.2.3-Setup.exe',
    metadata: {
        win32: {
            size: 72508193,
            checksum: '9e17109653422497d943c813b42739a5f3553df9'
        }
    },
    pub_date: '2017-02-16T12:02:07.535Z',
    state: 'enabled'
};

const data: AppProps = {
    darwins: [darwin300, darwin301, darwin310, darwin322, darwin323],
    win32s: [win32323]
};

ReactDOM.render(
  <App {...data} />,
  document.querySelector('#root') as HTMLElement
);