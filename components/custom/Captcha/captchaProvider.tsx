"use client";

import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const CaptchaProvider = ({ children }: { children: ReactNode }) => {
  const captchaSiteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={captchaSiteKey!}>
      {children}
    </GoogleReCaptchaProvider>
  );
};
