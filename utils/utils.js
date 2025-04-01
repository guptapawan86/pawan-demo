/**
 * Creates an HTML element with the specified tag name and attributes
 * @param {string} tag - The HTML tag name
 * @param {Object} attributes - Object containing attribute names and values
 * @param {string} [text] - Optional text content for the element
 * @returns {HTMLElement} The created HTML element
 */
export function createTag(tag, attributes = {}, text = '') {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });

  // Set text content if provided
  if (text) {
    element.textContent = text;
  }

  return element;
}

/**
 * Sanitizes a string for use in HTML
 * @param {string} str - The string to sanitize
 * @returns {string} The sanitized string
 */
export function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} The debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} Whether the element is in the viewport
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}