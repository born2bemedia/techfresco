import Script from "next/script";
import { useEffect, useState } from "react";

const LangSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("CS");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language, languageCode) => {
    const retryDispatchEvent = (attempts = 10) => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = language;
        const changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        select.dispatchEvent(changeEvent);

        if (document.documentElement.lang === language || attempts <= 1) {
          setCurrentLang(languageCode);
          setIsDropdownOpen(false);
          return;
        }
      }

      if (attempts > 1) {
        setTimeout(() => retryDispatchEvent(attempts - 1), 100);
      }
    };

    retryDispatchEvent();
  };

  useEffect(() => {
    document.cookie = `googtrans=/cs/cs;path=/;domain=${window.location.hostname}`;
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          padding: "0",
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "0",
          cursor: "pointer",
        }}
      >
        <img
          src={`/images/${currentLang}.svg`}
          style={{
            width: "28px",
          }}
        />
      </button>

      {isDropdownOpen && (
        <ul
          translate="no"
          style={{
            position: "absolute",
            top: "50px",
            left: "-16px",
            backgroundColor: "#F8F8F8",
            listStyle: "none",
            padding: "16px",
            margin: 0,
            border: "1px solid #ccc",
            borderRadius: "0",
            width: "130px",
          }}
        >
          <li
            onClick={() => handleLanguageChange("en", "EN")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#2D2C2B",
            }}
          >
            <img
              src="/images/EN.svg"
              style={{
                width: "28px",
              }}
            />
            English
          </li>
          <li
            onClick={() => handleLanguageChange("de", "DE")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#2D2C2B",
            }}
          >
            <img
              src="/images/DE.svg"
              style={{
                width: "28px",
              }}
            />
            German
          </li>
          <li
            onClick={() => handleLanguageChange("it", "IT")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#2D2C2B",
            }}
          >
            <img
              src="/images/IT.svg"
              style={{
                width: "28px",
              }}
            />
            Italian
          </li>
          <li
            onClick={() => handleLanguageChange("cs", "CS")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#2D2C2B",
            }}
          >
            <img
              src="/images/CS.svg"
              style={{
                width: "28px",
              }}
            />
            Czech
          </li>
        </ul>
      )}

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          };
          window.googleTranslateElementInit = googleTranslateElementInit;
        }}
      />
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LangSwitcher;
