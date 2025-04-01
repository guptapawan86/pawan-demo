import { createTag } from '../../utils/utils.js';

export default function decorate(block) {
  const pathField = block.querySelector('div:nth-child(1)');
  const label = pathField?.textContent?.trim() || 'Path';

  const wrapper = createTag('div', { class: 'spectrum-path-field' });

  // Create label element
  const labelElement = createTag('label', { class: 'spectrum-field-label' });
  labelElement.textContent = label;
  wrapper.appendChild(labelElement);

  // Create input container
  const inputContainer = createTag('div', { class: 'spectrum-field-input-container' });

  // Create path input field
  const pathInput = createTag('input', {
    type: 'text',
    class: 'spectrum-field-input',
    placeholder: 'Enter path or select from picker'
  });

  // Create picker button
  const pickerButton = createTag('button', {
    class: 'spectrum-field-picker-button',
    'aria-label': 'Open path picker'
  });
  pickerButton.innerHTML = '<svg class="spectrum-icon" viewBox="0 0 36 36"><path d="M33 19.5c0 7.456-6.044 13.5-13.5 13.5S6 26.956 6 19.5 12.044 6 19.5 6 33 12.044 33 19.5zm-3 0c0 5.799-4.701 10.5-10.5 10.5S9 25.299 9 19.5 13.701 9 19.5 9 30 13.701 30 19.5z"/><path d="M19.5 15c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 7c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"/></svg>';

  inputContainer.appendChild(pathInput);
  inputContainer.appendChild(pickerButton);
  wrapper.appendChild(inputContainer);

  // Add help text if provided
  const helpText = block.querySelector('div:nth-child(2)');
  if (helpText?.textContent?.trim()) {
    const helpElement = createTag('div', { class: 'spectrum-field-help' });
    helpElement.textContent = helpText.textContent.trim();
    wrapper.appendChild(helpElement);
  }

  // Clear original content and append new structure
  block.textContent = '';
  block.appendChild(wrapper);

  // Add event listeners
  pickerButton.addEventListener('click', () => {
    // Implement path picker functionality here
    console.log('Path picker clicked');
  });

  pathInput.addEventListener('input', (e) => {
    // Handle input changes
    console.log('Path input changed:', e.target.value);
  });
}