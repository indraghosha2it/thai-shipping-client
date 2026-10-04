// utils/fetchFooterSettings.js
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export const fetchFooterSettings = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/footer-settings`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) throw new Error('Failed to fetch footer settings');

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching footer settings:', error);
    return null;
  }
};