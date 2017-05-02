import * as React from 'react';
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
    darwins: VersionDarwin[];
    win32s: VersionWin32[];
}

export interface AppState {
    platform: string;
    version: string;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            platform: '',
            version: ''
        };
    }

    render() {
        const showDarwin = this.showDarwin.bind(this);
        const showWin32 = this.showWin32.bind(this);

        const darwins = this.props.darwins.map((v: VersionDarwin) => {
            return <li key={`darwin-${v.version}`}><a href="#" onClick={showDarwin}>{v.version}</a></li>;
        });

        const win32s = this.props.win32s.map((v: VersionWin32) => {
            return <li key={`win32-${v.version}`}><a href="#" onClick={showWin32}>{v.version}</a></li>;
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
                <hr />
                <Detail {...this.props} platform={this.state.platform} version={this.state.version} />
            </div>
        );
    }

    private showDarwin(e: MouseEvent): void {
        this.setState({
            platform: 'darwin',
            version: (e.target as Element).innerHTML
        });
    }

    private showWin32(e: MouseEvent): void {
        this.setState({
            platform: 'win32',
            version: (e.target as Element).innerHTML
        });
    }
}