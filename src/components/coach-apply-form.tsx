"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoachApplyFormProps {
  className?: string;
}

export function CoachApplyForm({ className }: CoachApplyFormProps) {
  const [hasCoachingExp, setHasCoachingExp] = useState<string>("no");
  const [hasProExp, setHasProExp] = useState<string>("no");
  const [hasNationalAch, setHasNationalAch] = useState<string>("no");
  const [achievementDetails, setAchievementDetails] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const emailValid = /.+@.+\..+/.test(email);
  const formValid = firstName && lastName && phone && emailValid && !!resumeFile;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    if (!formValid) return;

    console.log("Coach Application Submitted (component)", {
      firstName,
      lastName,
      email,
      phone,
      hasCoachingExp,
      hasProExp,
      hasNationalAch,
      achievementDetails,
      resumeFileName: resumeFile?.name,
    });

    setSubmitted(true);
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden text-black", className)}>
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="text-center py-10">
            <h3 className="font-heading text-2xl font-bold mb-2">Application Submitted</h3>
            <p className="font-subheading text-gray-600">Thank you for applying. Our team will review your submission and get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="firstName">First name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-invalid={showErrors && !firstName ? true : undefined}
                  className={cn("w-full border-b bg-transparent py-3 focus:outline-none", showErrors && !firstName ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-njcpGold")}
                />
                {showErrors && !firstName && (
                  <p className="font-subheading text-xs text-red-600 mt-2">First name is required.</p>
                )}
              </div>
              <div>
                <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="lastName">Last name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-invalid={showErrors && !lastName ? true : undefined}
                  className={cn("w-full border-b bg-transparent py-3 focus:outline-none", showErrors && !lastName ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-njcpGold")}
                />
                {showErrors && !lastName && (
                  <p className="font-subheading text-xs text-red-600 mt-2">Last name is required.</p>
                )}
              </div>
              <div>
                <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={showErrors && !phone ? true : undefined}
                  placeholder="Include country code if outside US"
                  className={cn("w-full border-b bg-transparent py-3 focus:outline-none", showErrors && !phone ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-njcpGold")}
                />
                {showErrors && !phone && (
                  <p className="font-subheading text-xs text-red-600 mt-2">Phone is required.</p>
                )}
              </div>
              <div>
                <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={showErrors && !emailValid ? true : undefined}
                  className={cn("w-full border-b bg-transparent py-3 focus:outline-none", showErrors && !emailValid ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-njcpGold")}
                />
                {showErrors && !emailValid && (
                  <p className="font-subheading text-xs text-red-600 mt-2">Enter a valid email address.</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="font-subheading block text-sm text-gray-700 mb-2">Coaching Experience</span>
                <div className="flex items-center gap-3">
                  {(["yes","no"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHasCoachingExp(opt)}
                      className={cn("px-4 py-2 rounded-full border transition-all", hasCoachingExp === opt ? "bg-njcpBlack text-white border-njcpBlack hover:bg-njcpBlack/90" : "bg-white text-gray-700 border-gray-300 hover:border-njcpGold")}
                      aria-pressed={hasCoachingExp === opt}
                    >
                      {opt === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-subheading block text-sm text-gray-700 mb-2">Professional Football Experience</span>
                <div className="flex items-center gap-3">
                  {(["yes","no"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHasProExp(opt)}
                      className={cn("px-4 py-2 rounded-full border transition-all", hasProExp === opt ? "bg-njcpBlack text-white border-njcpBlack hover:bg-njcpBlack/90" : "bg-white text-gray-700 border-gray-300 hover:border-njcpGold")}
                      aria-pressed={hasProExp === opt}
                    >
                      {opt === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="font-subheading block text-sm text-gray-700 mb-2">National Achievement</span>
              <div className="flex items-center gap-3 mb-4">
                {(["yes","no"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setHasNationalAch(opt)}
                    className={cn("px-4 py-2 rounded-full border transition-all", hasNationalAch === opt ? "bg-njcpBlack text-white border-njcpBlack hover:bg-njcpBlack/90" : "bg-white text-gray-700 border-gray-300 hover:border-njcpGold")}
                    aria-pressed={hasNationalAch === opt}
                  >
                    {opt === "yes" ? "Yes" : "No"}
                  </button>
                ))}
              </div>
              {hasNationalAch === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="achievementDetails">If yes, specify</label>
                    <input
                      id="achievementDetails"
                      name="achievementDetails"
                      type="text"
                      value={achievementDetails}
                      onChange={(e) => setAchievementDetails(e.target.value)}
                      placeholder="e.g., National Coach of the Year 2022"
                      className="w-full border-b border-gray-500 focus:border-njcpGold focus:outline-none bg-transparent py-3"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="font-subheading block text-sm text-gray-700 mb-2" htmlFor="resume">Attach Resume</label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-njcpGold file:text-njcpBlack hover:file:bg-njcpGold/90"
              />
              <p className="font-subheading text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX. Max size ~10MB.</p>
              {showErrors && !resumeFile && (
                <p className="font-subheading text-xs text-red-600 mt-2">Please attach your resume.</p>
              )}
              {resumeFile && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  <span className="font-subheading">{resumeFile.name}</span>
                  <span className="font-subheading text-gray-500">{Math.round(resumeFile.size / 1024)} KB</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={!formValid}
                className={cn("w-full sm:w-auto bg-njcpBlack text-white rounded-full transition-transform duration-300", !formValid ? "opacity-60 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg hover:shadow-njcpGold/40 hover:bg-njcpBlack/90")}
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto border-gray-300 hover:border-njcpGold"
                onClick={() => {
                  setFirstName("");
                  setLastName("");
                  setPhone("");
                  setEmail("");
                  setHasCoachingExp("no");
                  setHasProExp("no");
                  setHasNationalAch("no");
                  setAchievementDetails("");
                  setResumeFile(null);
                  setShowErrors(false);
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}