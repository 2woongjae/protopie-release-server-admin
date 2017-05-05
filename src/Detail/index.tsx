import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {AppProps, AppState, VersionDarwin, VersionWin32} from '../App';

import './Detail.css';

interface DetailProps extends AppProps, AppState {
}

export default class Detail extends React.Component<DetailProps, {}> {
    render() {
        if (this.props.platform === 'darwin') {
            const versions: VersionDarwin[] = this.props.darwin.filter(v => v.version === this.props.version);

            if (versions.length > 0) {
                const version = versions[0];
                return (
                    <div className="version">
                        <p>버전명 : {version.version}</p>
                        <p>릴리즈 노트 : {version.note}</p>
                        <p>처음 설치 파일 : http://release.protopie.io/ProtoPie-{version.version}.dmg</p>
                        <p>업데이트 파일 : http://release.protopie.io/{version.file}</p>
                        <p>업데이트 파일 크기 : {version.metadata.osx.size}</p>
                        <p>업데이트 파일 체크섬 : {version.metadata.osx.checksum}</p>
                        <p>작성일 : {version.pub_date}</p>
                        <p>현재 상태 : {version.state}</p>
                    </div>
                );
            } else {
                return <Redirect to="/" />;
            }
        } else if (this.props.platform === 'win32') {
            const versions: VersionWin32[] = this.props.win32.filter(v => v.version === this.props.version);

            if (versions.length > 0) {
                const version = versions[0];
                return (
                    <div className="version">
                        <p>버전명 : {version.version}</p>
                        <p>릴리즈 노트 : {version.note}</p>
                        <p>처음 설치 및 업데이트 파일 : http://release.protopie.io/{version.file}</p>
                        <p>업데이트 파일 크기 : {version.metadata.win32.size}</p>
                        <p>업데이트 파일 체크섬 : {version.metadata.win32.checksum}</p>
                        <p>작성일 : {version.pub_date}</p>
                        <p>현재 상태 : {version.state}</p>
                    </div>
                );
            } else {
                return <Redirect to="/" />;
            }
        } else {
            return <Redirect to="/" />;
        }
    }
}