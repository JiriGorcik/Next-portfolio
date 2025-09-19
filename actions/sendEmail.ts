"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500) || !validateString(message, 5000)) {
    throw new Error("Invalid form data");
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "jirigorcik@seznam.cz",
      subject: "New message from Portfolio",
      react: React.createElement(ContactFormEmail, { message, email }),
    });
  } catch (e) {
    return {
      error: getErrorMessage(e),
    };
  }

  return {
    data,
  };
};
