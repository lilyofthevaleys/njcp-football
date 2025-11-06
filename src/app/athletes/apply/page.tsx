"use client";

import React, { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { countries } from '@/data/country-codes';

type PhoneCodeSelectProps = {
  value?: string;
  onChange: (val: string) => void;
};

function PhoneCodeSelect({ value, onChange }: PhoneCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) =>
      c.name.toLowerCase().includes(q) || c.dialCode.replace('+','').includes(q.replace('+',''))
    );
  }, [query]);
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);
  const selected = countries.find((c) => c.dialCode === value);
  return (
    <div ref={containerRef} className="relative w-28">
      <button
        type="button"
        className="w-full flex items-center justify-between rounded-md border px-3 py-2 bg-white"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-sm">
          {selected ? `${selected.dialCode}` : 'Code'}
        </span>
        <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-80 rounded-md border bg-white shadow">
          <div className="p-2 border-b">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code"
              className="w-full rounded-md border px-2 py-1 text-sm"
            />
          </div>
          <ul role="listbox" className="max-h-60 overflow-auto">
            {options.map((c) => (
              <li key={c.iso2}>
                <button
                  type="button"
                  onClick={() => { onChange(c.dialCode); setOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center justify-between"
                  role="option"
                  aria-selected={c.dialCode === value}
                >
                  <span className="text-sm">{c.name}</span>
                  <span className="text-sm text-gray-600">{c.dialCode}</span>
                </button>
              </li>
            ))}
            {options.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function AthleteApplyPage() {
  const [insurance, setInsurance] = useState<'yes' | 'no' | ''>('');
  const [country, setCountry] = useState<string>('');
  const [phoneCode, setPhoneCode] = useState<string>('+1');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('Application submitted. Thank you!');
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-njcpBlack text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">NJCP Athlete Application</h1>
          <p className="text-white/80 mt-2">Fill out the form below to apply.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 space-y-8">
          {/* Basic Info */}
          <section>
            <h2 className="text-xl font-semibold">Basic Information</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">First name(Required)</label>
                <input type="text" required placeholder="Enter your first name" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Last name(Required)</label>
                <input type="text" required placeholder="Enter your last name" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* DOB */}
          <section>
            <h2 className="text-xl font-semibold">Date of Birth</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">Month</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="">
                  <option value="" disabled>Month</option>
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Day</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="">
                  <option value="" disabled>Day</option>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Year</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="">
                  <option value="" disabled>Year</option>
                  {Array.from({ length: 60 }).map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Phone(Required)</label>
                <div className="mt-1 flex gap-2">
                  <PhoneCodeSelect value={phoneCode} onChange={setPhoneCode} />
                  <input type="tel" required placeholder="Enter your phone number" className="flex-1 rounded-md border px-3 py-2" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Select your country code then enter your number.</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Email(Required)</label>
                <input type="email" required placeholder="Enter your email" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* Address */}
          <section>
            <h2 className="text-xl font-semibold">Address</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium">Multi-line address</label>
              <textarea placeholder="" className="mt-1 w-full rounded-md border px-3 py-2 h-24" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Country/Region(Required)</label>
                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                >
                  <option value="" disabled>Select your country</option>
                  {countries.map((c) => (
                    <option key={c.iso2} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Address(Required)</label>
                <input type="text" required className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">City(Required)</label>
                <input type="text" required className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Zip / Postal code(Required)</label>
                <input type="text" required className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* Uploads */}
          <section>
            <h2 className="text-xl font-semibold">Documents</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium">Photo ID</label>
                <input type="file" className="mt-1 w-full rounded-md border px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">Upload File</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Professional Headshot</label>
                <input type="file" className="mt-1 w-full rounded-md border px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">Upload File</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Latest Transcript(Required)</label>
                <input type="file" required className="mt-1 w-full rounded-md border px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">Upload Transcript</p>
              </div>
            </div>
          </section>

          {/* Academic & Athletic */}
          <section>
            <h2 className="text-xl font-semibold">Coaching & School</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Coach's Name(Required)</label>
                <input type="text" required placeholder="Enter your coach's name" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">High School Attended</label>
                <input type="text" placeholder="Answer in a few words" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Graduation Year</label>
                <input type="number" placeholder="Enter a number" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* Physical */}
          <section>
            <h2 className="text-xl font-semibold">Physical</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Height (in)(Required)</label>
                <input type="text" required placeholder="e.g. 6'1" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Weight (lbs)(Required)</label>
                <input type="text" required placeholder="e.g. 185" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* Position & Stats */}
          <section>
            <h2 className="text-xl font-semibold">Athletic</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Position Played(Required)</label>
                <input type="text" required placeholder="e.g. Quarterback, Linebacker" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Personal Stats</label>
                <input type="text" placeholder="" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          </section>

          {/* Insurance */}
          <section>
            <h2 className="text-xl font-semibold">Insurance</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium">Do you have active insurance?(Required)</label>
              <div className="mt-2 flex items-center gap-6">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="insurance" required onChange={() => setInsurance('yes')} />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="insurance" required onChange={() => setInsurance('no')} />
                  <span>No</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">If yes, which insurance provider?</label>
              <input type="text" placeholder="Enter provider name" className="mt-1 w-full rounded-md border px-3 py-2" disabled={insurance !== 'yes'} />
            </div>
          </section>

          {/* Motivation */}
          <section>
            <h2 className="text-xl font-semibold">Motivation</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium">Why You Want to Join NJCP</label>
              <textarea placeholder="Tell us why you want to be part of the program" className="mt-1 w-full rounded-md border px-3 py-2 h-28" />
            </div>
          </section>

          {/* Submit */}
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-njcpRed px-5 py-3 text-white font-semibold shadow hover:bg-njcpRed/90">
              Submit
            </button>
            <Link href="/athletes" className="text-njcpBlack hover:underline">Back to Athletes</Link>
          </div>
        </form>
      </div>
    </div>
  );
}