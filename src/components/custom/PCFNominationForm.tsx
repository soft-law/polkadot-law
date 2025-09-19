"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  background: string;
  motivation: string;
  experience: string;
  kycConfirm: boolean;
  timeCommitment: boolean;
  legalResponsibilities: boolean;
  dsaAgreement: boolean;
}

export default function PCFNominationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    background: "",
    motivation: "",
    experience: "",
    kycConfirm: false,
    timeCommitment: false,
    legalResponsibilities: false,
    dsaAgreement: false,
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const {
      name,
      email,
      background,
      motivation,
      kycConfirm,
      timeCommitment,
      legalResponsibilities,
      dsaAgreement,
    } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !background.trim() ||
      !motivation.trim()
    ) {
      alert("Please fill in all required fields.");
      return false;
    }

    if (
      !kycConfirm ||
      !timeCommitment ||
      !legalResponsibilities ||
      !dsaAgreement
    ) {
      alert("Please confirm all requirements before submitting.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendNominationEmail = async (): Promise<void> => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create email content
      const emailSubject = `DOT Director Nomination - ${formData.name}`;
      const emailBody = `
POLKADOT COMMUNITY FOUNDATION - DOT DIRECTOR NOMINATION

Candidate Information:
====================
Name: ${formData.name}
Email: ${formData.email}

Background & Relevant Experience:
================================
${formData.background}

Motivation to serve as DOT Director:
===================================
${formData.motivation}

Polkadot/Kusama Experience:
==========================
${formData.experience || "Not specified"}

Requirements Confirmation:
=========================
✓ KYC Verification: Confirmed
✓ Time Commitment (10-15 hrs/month): Confirmed  
✓ Legal & Fiduciary Responsibilities: Understood
✓ Director Services Agreement: Accepted

Submitted on: ${new Date().toISOString()}

---
This nomination was submitted through the Polkadot Law platform.
For official processing, please contact: info@polkadotcommunity.foundation
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@polkadotcommunity.foundation?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;

      // Open mailto link
      window.location.href = mailtoLink;

      // Show success message
      alert(
        `Thank you ${formData.name}! Your nomination has been prepared. Your email client should open with the nomination details. Please send the email to complete your submission.`
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        background: "",
        motivation: "",
        experience: "",
        kycConfirm: false,
        timeCommitment: false,
        legalResponsibilities: false,
        dsaAgreement: false,
      });
    } catch (error) {
      console.error("Error sending nomination:", error);
      alert(
        "There was an error processing your nomination. Please try again or contact info@polkadotcommunity.foundation directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black/70 backdrop-blur-md border border-white/10 shadow-xl">
      <CardHeader className="bg-pink-600/90 backdrop-blur-sm text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          DOT Director Nomination Form
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="mb-4 sm:mb-6">
          <div className="bg-gray-800/50 border border-gray-600/30 p-3 sm:p-4 rounded-lg">
            <p className="text-gray-300 text-xs sm:text-sm">
              <strong className="text-pink-400">Note:</strong> This form will
              prepare an email nomination that will be sent to
              info@polkadotcommunity.foundation. Your email client will open
              with the nomination details pre-filled for you to send.
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full bg-gray-800/50 border-gray-600/30 text-white placeholder:text-gray-500 focus:border-pink-600 focus:ring-pink-600"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Contact Email *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-gray-800/50 border-gray-600/30 text-white placeholder:text-gray-500 focus:border-pink-600 focus:ring-pink-600"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Background & Relevant Experience *
            </label>
            <Textarea
              value={formData.background}
              onChange={(e) => handleInputChange("background", e.target.value)}
              className="w-full h-24 sm:h-32 bg-gray-800/50 border-gray-600/30 text-white placeholder:text-gray-500 focus:border-pink-600 focus:ring-pink-600"
              placeholder="Describe your professional experience, governance participation, Web3/Polkadot knowledge, etc."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Motivation to serve as DOT Director *
            </label>
            <Textarea
              value={formData.motivation}
              onChange={(e) => handleInputChange("motivation", e.target.value)}
              className="w-full h-24 sm:h-32 bg-gray-800/50 border-gray-600/30 text-white placeholder:text-gray-500 focus:border-pink-600 focus:ring-pink-600"
              placeholder="Why do you want to serve as a DOT Director? What value would you bring to the PCF?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Polkadot/Kusama Experience
            </label>
            <Textarea
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              className="w-full h-20 sm:h-24 bg-gray-800/50 border-gray-600/30 text-white placeholder:text-gray-500 focus:border-pink-600 focus:ring-pink-600"
              placeholder="OpenGov participation, parachain projects, ecosystem contributions, etc."
            />
          </div>

          <div className="bg-gray-800/50 border border-yellow-600/30 p-3 sm:p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">
              Requirements Confirmation
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <label className="flex items-start gap-2 cursor-pointer text-gray-200">
                <input
                  type="checkbox"
                  className="mt-1 flex-shrink-0 rounded border-gray-600 bg-gray-800 text-pink-600 focus:ring-pink-600 focus:ring-offset-0"
                  checked={formData.kycConfirm}
                  onChange={(e) =>
                    handleInputChange("kycConfirm", e.target.checked)
                  }
                  required
                />
                <span>
                  I confirm that I am willing to complete the full KYC
                  verification process
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer text-gray-200">
                <input
                  type="checkbox"
                  className="mt-1 flex-shrink-0 rounded border-gray-600 bg-gray-800 text-pink-600 focus:ring-pink-600 focus:ring-offset-0"
                  checked={formData.timeCommitment}
                  onChange={(e) =>
                    handleInputChange("timeCommitment", e.target.checked)
                  }
                  required
                />
                <span>
                  I can commit 10-15 hours per month to director
                  responsibilities
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer text-gray-200">
                <input
                  type="checkbox"
                  className="mt-1 flex-shrink-0 rounded border-gray-600 bg-gray-800 text-pink-600 focus:ring-pink-600 focus:ring-offset-0"
                  checked={formData.legalResponsibilities}
                  onChange={(e) =>
                    handleInputChange("legalResponsibilities", e.target.checked)
                  }
                  required
                />
                <span>
                  I understand the legal and fiduciary responsibilities under
                  Cayman Islands law
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer text-gray-200">
                <input
                  type="checkbox"
                  className="mt-1 flex-shrink-0 rounded border-gray-600 bg-gray-800 text-pink-600 focus:ring-pink-600 focus:ring-offset-0"
                  checked={formData.dsaAgreement}
                  onChange={(e) =>
                    handleInputChange("dsaAgreement", e.target.checked)
                  }
                  required
                />
                <span>
                  I agree to execute the Director Services Agreement (DSA) if
                  selected
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={sendNominationEmail}
              disabled={isSubmitting}
              size="lg"
              className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-8 sm:px-12 py-3 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:scale-105"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Nomination Email
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            For the official process, contact directly:
          </p>
          <div className="bg-gray-800/50 border border-gray-600/30 p-3 sm:p-4 rounded-lg">
            <p className="font-semibold text-pink-400 text-sm sm:text-base">
              info@polkadotcommunity.foundation
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Use the official nomination form and participate in the on-chain
              referendum
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
