type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, payload?: AnalyticsPayload) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, payload);
  }
  window.dispatchEvent(new CustomEvent('shuheng:analytics', { detail: { name, payload } }));
}
