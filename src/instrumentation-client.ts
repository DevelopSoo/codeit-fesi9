// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// if (process.env.NODE_ENV !== "development") {
Sentry.init({
  beforeSend: (event, hint) => {
    const error = hint.originalException;
    // 에러 메세지에 "정확한 이메일 형식을 지켜주세요."이라는 텍스트가 들어가면 에러 호출을 하지 않는다.
    if (
      error instanceof Error &&
      error.message.includes("정확한 이메일 형식을 지켜주세요.")
    ) {
      return null;
    }
    return event;
  },
  dsn: "https://06e52e23998702de421c7fdf8a016064@o4509297330487296.ingest.us.sentry.io/4509314581135361",

  // Add optional integrations for additional features
  integrations: [Sentry.replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
// }
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
