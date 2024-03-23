import React, { useEffect, useRef, useState } from "react";
import { CookieWrapper, CookieButton } from "./CookieConsent.syles";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const acceptButtonRef = useRef(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "given") {
      setShowBanner(true);
      setTimeout(() => {
        if (acceptButtonRef.current) {
          acceptButtonRef.current.focus();
        }
      }, 100);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookieConsent", "given");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <CookieWrapper
      role="dialog"
      aria-labelledby="cookieconsent:desc"
      aria-live="polite"
    >
      <p id="cookieconsent:desc">
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <CookieButton ref={acceptButtonRef} onClick={handleConsent}>
        Accept
      </CookieButton>
    </CookieWrapper>
  );
};

export default CookieConsent;
