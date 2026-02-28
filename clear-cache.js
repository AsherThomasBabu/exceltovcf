// Add this to browser console to clear service worker cache

// Clear all caches
caches.keys().then(function(names) {
  for (let name of names) {
    caches.delete(name);
    console.log('Deleted cache:', name);
  }
});

// Unregister service worker
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
    console.log('Unregistered SW:', registration);
  }
});

console.log('✅ All caches and service workers cleared!');
console.log('🔄 Hard refresh the page to see changes');