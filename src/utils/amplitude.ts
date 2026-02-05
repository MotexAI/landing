import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = '26a6485a79ea1273adc8e88eaac3fd17';

// Initialize Amplitude
export function initAmplitude() {
  amplitude.init(AMPLITUDE_API_KEY, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
}

// Track page views
export function trackPageView(pageName: string, properties?: Record<string, any>) {
  amplitude.track('Page Viewed', {
    page_name: pageName,
    ...properties,
  });
}

// Track button clicks
export function trackButtonClick(buttonName: string, properties?: Record<string, any>) {
  amplitude.track('Button Clicked', {
    button_name: buttonName,
    ...properties,
  });
}

// Track link clicks
export function trackLinkClick(linkName: string, linkUrl: string, properties?: Record<string, any>) {
  amplitude.track('Link Clicked', {
    link_name: linkName,
    link_url: linkUrl,
    ...properties,
  });
}

// Track form submissions
export function trackFormSubmit(formName: string, properties?: Record<string, any>) {
  amplitude.track('Form Submitted', {
    form_name: formName,
    ...properties,
  });
}

// Track custom events
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  amplitude.track(eventName, properties);
}

// Set user properties
export function setUserProperties(properties: Record<string, any>) {
  amplitude.identify(new amplitude.Identify().set(properties));
}

export default amplitude;

