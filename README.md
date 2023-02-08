# VGS Sensitive Data Portal Proxy Demo

## How to use this repo:
### Set up steps
1. Create a new Github codespace in this repo
1. Start app: `npm start`
1. [Ensure your codespace has port 3000 open to the public so that it can accept the requests from VGS](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)
1. Open app in browser. You should see a version of the ACME Card Portal with sensitive card numbers being served to the browser.
1. Create a new vault in your VGS dashboard
1. Import the configuration file at `/assets/web-portal-intercept-inbound-config.yaml` in this repo.
1. Update your VGS Inbound Route's Upstream URL to the same URL that this app is running at in your browser
1. Navigate to your Inbound Route URL in the browser. You should see a version of the ACME Card Portal website with VGS tokens where the card numbers were before.
