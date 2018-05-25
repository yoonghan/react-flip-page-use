`use strict`

import * as React from "react";

export class Progressive extends React.PureComponent<{}, {}> {
  private isServiceWorkerAvailable = false;

  constructor(props:any) {
    super(props);
    this.isServiceWorkerAvailable = ('serviceWorker' in navigator);
    this.handleInstallation();
  }

  handleInstallation = () => {
    if(!this.isServiceWorkerAvailable) {
      return;
    }

    navigator.serviceWorker.register('/service-worker.js').then(function(reg:ServiceWorkerRegistration) {
      let active = reg.active;
      if(active) {
        console.log("Active");
        return;
      }

      reg.onupdatefound = function() {
        var installingWorker = reg.installing;
        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              console.log("Installed");
              break;
            case 'redundant':
              console.log("Already installed");
              break;
          }
        };
      };
    }).catch(function(e:string) {
      console.log("Failed to install");
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}
