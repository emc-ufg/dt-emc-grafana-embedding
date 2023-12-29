import React from 'react';

const GrafanaEmbed = () => {
  return (
    <div>
      <Head>
        {/* Adiciona a tag de Content-Security-Policy */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <iframe
        src="http://200.137.220.250:3000/public-dashboards/0cc223ae37164ef4ac570a67830d2dfe?orgId=1"
        width="100%"
        height="1080px"
        frameBorder="0"
      />
    </div>
  );
};

export default GrafanaEmbed;
