export const TRACKING_ID = 'G-11WQRGZ5LP';

export const initializeAnalytics = (ReactGA) => {
  // Disable analytics in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics disabled in development environment');
    return;
  }
  
  ReactGA.initialize(TRACKING_ID);
}; 