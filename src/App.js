import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

function App() {
  const value = 'World3';
  return <div>Hello {value}</div>;
}

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=9a75d247-e558-463b-923c-950637fe5deb;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView();

export default App;
