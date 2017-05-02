import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, {AppProps, VersionDarwin, VersionWin32} from './index';

const darwin: VersionDarwin = {
  version: '3.2.0-qa.1',
  note: '### 3.2.0-qa.1\n' +
  '- [PPAU-1107] dropbox에서 다운로드 한 파일 열때 경고창 뜸\n' +
  '- [PPAU-814] 가끔씩 메뉴가 안 뜸\n' +
  '- [PPAU-1632] [Windows] Ctrl+Z 로 undo 안 됨\n' +
  '- [PPAU-1640] [Windows] 영문/숫자 폰트가 얇게 노출 되어 가독성이 떨어짐\n' +
  '- [PPAU-1641] [Window] 비 retina환경에서 아이콘이 뿌옇게 노출 됨.\n' +
  '- [PPAU-1642] [windows] multiselect key 변경 필요',
  file: 'ProtoPie-3.2.0-qa.1-mac.zip',
  metadata: {
    osx: {
      size: 72508193,
      checksum: '9e17109653422497d943c813b42739a5f3553df9'
    }
  },
  pub_date: '2017-02-16T12:02:07.535Z',
  state: 'enabled'
};

const win32: VersionWin32 = {
  version: '3.2.3',
  note: '### 3.2.0-qa.1\n' +
  '- [PPAU-1107] dropbox에서 다운로드 한 파일 열때 경고창 뜸\n' +
  '- [PPAU-1640] [Windows] 영문/숫자 폰트가 얇게 노출 되어 가독성이 떨어짐\n' +
  '- [PPAU-1641] [Window] 비 retina환경에서 아이콘이 뿌옇게 노출 됨.\n' +
  '- [PPAU-1642] [windows] multiselect key 변경 필요',
  file: 'ProtoPie-3.2.0-qa.1-mac.zip',
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
  darwins: [darwin],
  win32s: [win32]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...data} />, div);
});
