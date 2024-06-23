import React from 'react';
import Head from 'next/head';

const GrafanaEmbed = () => {
  return (
    <div>
      <Head>
        {/* Adiciona a tag de Content-Security-Policy */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <iframe
        src="http://200.137.220.39:3000/public-dashboards/bd7064aaa1374d12b6673fa71c66ae49"
        width="100%"
        height="1080px"
        frameBorder="0"
      />
    </div>
  );
};

export default GrafanaEmbed;
