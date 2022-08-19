import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://fb02923570fc4ee684597b07a024b848@o1364935.ingest.sentry.io/6659900",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export function log(error) {
  Sentry.captureException(error);
}
export default { init };
