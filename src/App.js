import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

function App() {
  const value = 'World3';
  return <div>Hello {value}</div>;
}

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=9a75d247-e558-463b-923c-950637fe5deb;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/;ApplicationId=838bf4b3-a996-4b96-a0cc-3fe391df855f'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView();

export default App;
