import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Detail from '../Detail';

import './App.css';

// const logo = require('./logo.svg');

export interface VersionDarwin {
    version: string;
    note: string;
    file: string;
    metadata: {
        osx: {
            size: number;
            checksum: string;
        };
    };
    pub_date: string;
    state: string;
}

export interface VersionWin32 {
    version: string;
    note: string;
    file: string;
    metadata: {
        win32: {
            size: number;
            checksum: string;
        };
    };
    pub_date: string;
    state: string;
}

export interface AppProps {
    darwin: VersionDarwin[];
    win32: VersionWin32[];
}

export interface AppState {
    platform: string;
    version: string;
}

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
    darwin: [darwin300, darwin301, darwin310, darwin322, darwin323],
    win32: [win32323]
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            platform: '',
            version: ''
        };
    }

    render() {
        const darwins = this.props.darwin.map((v: VersionDarwin) => {
            return <li key={`darwin-${v.version}`}><Link to={`/darwin/${v.version}`}>{v.version}</Link></li>;
        });

        const win32s = this.props.win32.map((v: VersionWin32) => {
            return <li key={`win32-${v.version}`}><Link to={`/win32/${v.version}`}>{v.version}</Link></li>;
        });

        return (
            <div className="App">
                <div className="App-header">
                    <h2>ProtoPie Release - Admin</h2>
                </div>
                <div className="platforms">
                    <div className="darwins">
                        <h3>macOS</h3>
                        <ul>
                            {darwins}
                        </ul>
                    </div>
                    <div className="win32s">
                        <h3>Windows</h3>
                        <ul>
                            {win32s}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const AppRouter = () => (
    <Router>
        <div>
            <Route exact={true} path="/" render={() => <App {...data} />} />
            <Route
                path="/:platform/:version?"
                render={({match}) => {
                    const platform = match.params.platform;
                    if (platform === 'darwin' || platform === 'win32') {
                        const version = match.params.version || '';
                        return <Detail {...data} platform={platform} version={version}/>;
                    } else {
                        return <Redirect to="/" />;
                    }
                }} />
            <Redirect to="/" />
        </div>
    </Router>

);

export default AppRouter;