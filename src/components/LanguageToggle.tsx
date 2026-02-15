import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageToggle = () => {
  const [isKannada, setIsKannada] = useState(false);

  // Initialize Google Translate (hidden widget)
  useEffect(() => {
    // Add the Google Translate script if not already present
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,kn',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const triggerTranslation = useCallback(
    (langCode: string) => {
      // Method 1: use the select inside the google translate widget
      const selectEl = document.querySelector<HTMLSelectElement>(
        '.goog-te-combo, #google_translate_element select'
      );
      if (selectEl) {
        selectEl.value = langCode;
        selectEl.dispatchEvent(new Event('change'));
        return;
      }

      // Method 2: try via cookie
      const domain = window.location.hostname;
      if (langCode === 'en') {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        window.location.reload();
      } else {
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/${langCode}; path=/`;
        window.location.reload();
      }
    },
    []
  );

  const handleToggle = () => {
    const next = !isKannada;
    setIsKannada(next);
    triggerTranslation(next ? 'kn' : 'en');
  };

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" className="hidden" />

      <button
        onClick={handleToggle}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border
          bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300"
        title={isKannada ? 'Switch to English' : 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ'}
      >
        <span className="text-sm">🇮🇳</span>
        <span>{isKannada ? 'English' : 'ಕನ್ನಡ'}</span>
      </button>
    </>
  );
};

export default LanguageToggle;
