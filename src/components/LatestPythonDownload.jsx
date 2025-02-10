// src/components/LatestPythonDownload.js
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import latestPythonVersion from '../../latest-python-release-version.json';

const LatestPythonDownload = () => {
    const [latestVersion, setLatestVersion] = useState(latestPythonVersion.latestVersion);

    useEffect(() => {
        setLatestVersion(latestPythonVersion.latestVersion);
    }, [latestPythonVersion.latestVersion]);

    const downloadUrl = `https://www.python.org/ftp/python/${latestVersion}/python-${latestVersion}-amd64.exe`;

    return (
        <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            下载最新版本的 Python ({latestVersion})
        </Link>
    );
};

export default LatestPythonDownload;