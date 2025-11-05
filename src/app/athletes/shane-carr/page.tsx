"use client";

import { useState } from "react";

export default function ShaneCarrPage() {
  const [tab, setTab] = useState<"bio" | "stats">("bio");
  const [open2025, setOpen2025] = useState(true);
  const [open2024, setOpen2024] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 min-h-screen bg-white text-gray-900">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gray-200" aria-label="Headshot" />
        <div>
          <h1 className="text-3xl font-bold">Shane Carr</h1>
          <p className="text-gray-600">Wide Receiver • #2</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="inline-flex gap-2">
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === "bio"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTab("bio")}
            aria-pressed={tab === "bio"}
          >
            Bio
          </button>
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === "stats"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTab("stats")}
            aria-pressed={tab === "stats"}
          >
            Stats
          </button>
        </div>
      </div>

      {tab === "bio" ? (
        <section className="mt-6 space-y-6">
          <div className="h-48 w-full rounded-lg bg-gray-100" aria-label="Hero image" />

          <div>
            <h2 className="text-xl font-semibold">Fall 2024 (Freshman)</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Appeared in all 12 games for the Thunderbirds</li>
              <li>Led team with 627 receiving yards on 31 receptions (20.23 yards per catch)</li>
              <li>Scored 6 touchdowns; season-long catch of 56 yards</li>
              <li>Career high seven catches for 104 yards and a touchdown vs. Idaho State</li>
              <li>Named to Phil Steele All-UAC Fourth Team</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">At South High School</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>773 career rushing yards with six rushing touchdowns</li>
              <li>23 receptions for 410 yards and four touchdowns</li>
              <li>674 passing yards and 10 touchdowns</li>
              <li>40 tackles senior season; six interceptions and three pass breakups</li>
            </ul>
          </div>
        </section>
      ) : (
        <section className="mt-6 space-y-6">
          {/* 2025 Season */}
          <div className="rounded-lg border border-gray-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
              onClick={() => setOpen2025(!open2025)}
              aria-expanded={open2025}
            >
              <span>2025 Season Statistics</span>
              <span className="text-sm text-gray-600">{open2025 ? "Hide" : "Show"}</span>
            </button>
            {open2025 && (
              <div className="border-t border-gray-200 p-4">
                <div className="mb-4">
                  <h3 className="font-medium">Season Highs (Offensive)</h3>
                  <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-gray-600">Statistic</th>
                          <th className="px-3 py-2 text-left text-gray-600">Value</th>
                          <th className="px-3 py-2 text-left text-gray-600">Date</th>
                          <th className="px-3 py-2 text-left text-gray-600">Opponent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr><td className="px-3 py-2">Rushing Yards</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/01/2025</td><td className="px-3 py-2">Austin Peay</td></tr>
                        <tr><td className="px-3 py-2">Longest Rush</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/01/2025</td><td className="px-3 py-2">Austin Peay</td></tr>
                        <tr><td className="px-3 py-2">Rushing Touchdowns</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/01/2025</td><td className="px-3 py-2">Austin Peay</td></tr>
                        <tr><td className="px-3 py-2">Reception Yards</td><td className="px-3 py-2">89</td><td className="px-3 py-2">09/13/2025</td><td className="px-3 py-2">Northern Ariz.</td></tr>
                        <tr><td className="px-3 py-2">Longest Reception</td><td className="px-3 py-2">42</td><td className="px-3 py-2">09/13/2025</td><td className="px-3 py-2">Northern Ariz.</td></tr>
                        <tr><td className="px-3 py-2">Receiving Touchdowns</td><td className="px-3 py-2">1</td><td className="px-3 py-2">10/18/2025</td><td className="px-3 py-2">Abilene Christian</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium">Offensive Statistics (Game Log)</h3>
                  <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-gray-600">Date</th>
                          <th className="px-3 py-2 text-left text-gray-600">Opponent</th>
                          <th className="px-3 py-2 text-left text-gray-600">REC</th>
                          <th className="px-3 py-2 text-left text-gray-600">YDS</th>
                          <th className="px-3 py-2 text-left text-gray-600">TD</th>
                          <th className="px-3 py-2 text-left text-gray-600">Long</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr><td className="px-3 py-2">08/30/2025</td><td className="px-3 py-2">Idaho St.</td><td className="px-3 py-2">6</td><td className="px-3 py-2">77</td><td className="px-3 py-2">0</td><td className="px-3 py-2">26</td></tr>
                        <tr><td className="px-3 py-2">09/06/2025</td><td className="px-3 py-2">at San Diego</td><td className="px-3 py-2">5</td><td className="px-3 py-2">54</td><td className="px-3 py-2">1</td><td className="px-3 py-2">21</td></tr>
                        <tr><td className="px-3 py-2">09/13/2025</td><td className="px-3 py-2">Northern Ariz.</td><td className="px-3 py-2">3</td><td className="px-3 py-2">89</td><td className="px-3 py-2">1</td><td className="px-3 py-2">42</td></tr>
                        <tr><td className="px-3 py-2">09/20/2025</td><td className="px-3 py-2">at UC Davis</td><td className="px-3 py-2">6</td><td className="px-3 py-2">83</td><td className="px-3 py-2">0</td><td className="px-3 py-2">30</td></tr>
                        <tr><td className="px-3 py-2">09/27/2025</td><td className="px-3 py-2">West Ga.</td><td className="px-3 py-2">2</td><td className="px-3 py-2">46</td><td className="px-3 py-2">0</td><td className="px-3 py-2">39</td></tr>
                        <tr><td className="px-3 py-2">10/04/2025</td><td className="px-3 py-2">at Tarleton St.</td><td className="px-3 py-2">1</td><td className="px-3 py-2">3</td><td className="px-3 py-2">1</td><td className="px-3 py-2">3</td></tr>
                        <tr><td className="px-3 py-2">10/18/2025</td><td className="px-3 py-2">Abilene Christian</td><td className="px-3 py-2">3</td><td className="px-3 py-2">24</td><td className="px-3 py-2">1</td><td className="px-3 py-2">17</td></tr>
                        <tr><td className="px-3 py-2">10/25/2025</td><td className="px-3 py-2">at Utah Tech</td><td className="px-3 py-2">3</td><td className="px-3 py-2">47</td><td className="px-3 py-2">0</td><td className="px-3 py-2">21</td></tr>
                        <tr><td className="px-3 py-2">11/01/2025</td><td className="px-3 py-2">Austin Peay</td><td className="px-3 py-2">4</td><td className="px-3 py-2">77</td><td className="px-3 py-2">0</td><td className="px-3 py-2">32</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Totals</h3>
                  <p className="mt-1 text-sm text-gray-700">33 REC • 500 YDS • 4 TD • Long 42</p>
                </div>
              </div>
            )}
          </div>

          {/* 2024 Season */}
          <div className="rounded-lg border border-gray-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
              onClick={() => setOpen2024(!open2024)}
              aria-expanded={open2024}
            >
              <span>2024 Season Statistics</span>
              <span className="text-sm text-gray-600">{open2024 ? "Hide" : "Show"}</span>
            </button>
            {open2024 && (
              <div className="border-t border-gray-200 p-4">
                <div className="mb-4">
                  <h3 className="font-medium">Season Highs (Offensive)</h3>
                  <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-gray-600">Statistic</th>
                          <th className="px-3 py-2 text-left text-gray-600">Value</th>
                          <th className="px-3 py-2 text-left text-gray-600">Date</th>
                          <th className="px-3 py-2 text-left text-gray-600">Opponent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr><td className="px-3 py-2">Rushing Yards</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/23/2024</td><td className="px-3 py-2">Utah Tech</td></tr>
                        <tr><td className="px-3 py-2">Longest Rush</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/23/2024</td><td className="px-3 py-2">Utah Tech</td></tr>
                        <tr><td className="px-3 py-2">Rushing Touchdowns</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11/23/2024</td><td className="px-3 py-2">Utah Tech</td></tr>
                        <tr><td className="px-3 py-2">Reception Yards</td><td className="px-3 py-2">104</td><td className="px-3 py-2">09/21/2024</td><td className="px-3 py-2">at Idaho St.</td></tr>
                        <tr><td className="px-3 py-2">Longest Reception</td><td className="px-3 py-2">56</td><td className="px-3 py-2">10/26/2024</td><td className="px-3 py-2">at West Georgia</td></tr>
                        <tr><td className="px-3 py-2">Receiving Touchdowns</td><td className="px-3 py-2">1</td><td className="px-3 py-2">11/23/2024</td><td className="px-3 py-2">Utah Tech</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium">Offensive Statistics (Game Log)</h3>
                  <div className="mt-2 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-gray-600">Date</th>
                          <th className="px-3 py-2 text-left text-gray-600">Opponent</th>
                          <th className="px-3 py-2 text-left text-gray-600">REC</th>
                          <th className="px-3 py-2 text-left text-gray-600">YDS</th>
                          <th className="px-3 py-2 text-left text-gray-600">TD</th>
                          <th className="px-3 py-2 text-left text-gray-600">Long</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr><td className="px-3 py-2">08/29/2024</td><td className="px-3 py-2">at Utah</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td></tr>
                        <tr><td className="px-3 py-2">09/07/2024</td><td className="px-3 py-2">at UTEP</td><td className="px-3 py-2">2</td><td className="px-3 py-2">32</td><td className="px-3 py-2">0</td><td className="px-3 py-2">27</td></tr>
                        <tr><td className="px-3 py-2">09/14/2024</td><td className="px-3 py-2">UC Davis</td><td className="px-3 py-2">1</td><td className="px-3 py-2">11</td><td className="px-3 py-2">0</td><td className="px-3 py-2">11</td></tr>
                        <tr><td className="px-3 py-2">09/21/2024</td><td className="px-3 py-2">at Idaho St.</td><td className="px-3 py-2">7</td><td className="px-3 py-2">104</td><td className="px-3 py-2">1</td><td className="px-3 py-2">32</td></tr>
                        <tr><td className="px-3 py-2">09/28/2024</td><td className="px-3 py-2">at Austin Peay</td><td className="px-3 py-2">1</td><td className="px-3 py-2">24</td><td className="px-3 py-2">0</td><td className="px-3 py-2">24</td></tr>
                        <tr><td className="px-3 py-2">10/05/2024</td><td className="px-3 py-2">Tarleton St.</td><td className="px-3 py-2">3</td><td className="px-3 py-2">84</td><td className="px-3 py-2">1</td><td className="px-3 py-2">37</td></tr>
                        <tr><td className="px-3 py-2">10/12/2024</td><td className="px-3 py-2">Eastern Ky.</td><td className="px-3 py-2">1</td><td className="px-3 py-2">38</td><td className="px-3 py-2">1</td><td className="px-3 py-2">38</td></tr>
                        <tr><td className="px-3 py-2">10/26/2024</td><td className="px-3 py-2">at West Georgia</td><td className="px-3 py-2">2</td><td className="px-3 py-2">96</td><td className="px-3 py-2">1</td><td className="px-3 py-2">56</td></tr>
                        <tr><td className="px-3 py-2">11/02/2024</td><td className="px-3 py-2">at Abilene Christian</td><td className="px-3 py-2">2</td><td className="px-3 py-2">11</td><td className="px-3 py-2">0</td><td className="px-3 py-2">6</td></tr>
                        <tr><td className="px-3 py-2">11/09/2024</td><td className="px-3 py-2">North Ala.</td><td className="px-3 py-2">5</td><td className="px-3 py-2">72</td><td className="px-3 py-2">1</td><td className="px-3 py-2">33</td></tr>
                        <tr><td className="px-3 py-2">11/16/2024</td><td className="px-3 py-2">at Central Ark.</td><td className="px-3 py-2">5</td><td className="px-3 py-2">75</td><td className="px-3 py-2">0</td><td className="px-3 py-2">34</td></tr>
                        <tr><td className="px-3 py-2">11/23/2024</td><td className="px-3 py-2">Utah Tech</td><td className="px-3 py-2">2</td><td className="px-3 py-2">80</td><td className="px-3 py-2">1</td><td className="px-3 py-2">40</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Totals</h3>
                  <p className="mt-1 text-sm text-gray-700">31 REC • 627 YDS • 6 TD • Long 56</p>
                </div>
              </div>
            )}
          </div>

          {/* Career Statistics (Receiving) */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium">Career Statistics — Receiving</h3>
            <div className="mt-2 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-600">Season</th>
                    <th className="px-3 py-2 text-left text-gray-600">GP</th>
                    <th className="px-3 py-2 text-left text-gray-600">REC</th>
                    <th className="px-3 py-2 text-left text-gray-600">YDS</th>
                    <th className="px-3 py-2 text-left text-gray-600">TD</th>
                    <th className="px-3 py-2 text-left text-gray-600">Long</th>
                    <th className="px-3 py-2 text-left text-gray-600">REC/G</th>
                    <th className="px-3 py-2 text-left text-gray-600">AVG/C</th>
                    <th className="px-3 py-2 text-left text-gray-600">AVG/G</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-3 py-2">2024</td><td className="px-3 py-2">12</td><td className="px-3 py-2">31</td><td className="px-3 py-2">627</td><td className="px-3 py-2">6</td><td className="px-3 py-2">56</td><td className="px-3 py-2">2.6</td><td className="px-3 py-2">20.2</td><td className="px-3 py-2">52.3</td></tr>
                  <tr><td className="px-3 py-2">2025</td><td className="px-3 py-2">9</td><td className="px-3 py-2">33</td><td className="px-3 py-2">500</td><td className="px-3 py-2">4</td><td className="px-3 py-2">42</td><td className="px-3 py-2">3.7</td><td className="px-3 py-2">15.2</td><td className="px-3 py-2">55.6</td></tr>
                  <tr className="bg-gray-50 font-medium"><td className="px-3 py-2">Total</td><td className="px-3 py-2">21</td><td className="px-3 py-2">64</td><td className="px-3 py-2">1127</td><td className="px-3 py-2">10</td><td className="px-3 py-2">56</td><td className="px-3 py-2">3.0</td><td className="px-3 py-2">17.6</td><td className="px-3 py-2">53.7</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Career Statistics (Scoring) */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium">Career Statistics — Scoring</h3>
            <div className="mt-2 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-600">Season</th>
                    <th className="px-3 py-2 text-left text-gray-600">GP</th>
                    <th className="px-3 py-2 text-left text-gray-600">TD</th>
                    <th className="px-3 py-2 text-left text-gray-600">Rush</th>
                    <th className="px-3 py-2 text-left text-gray-600">REC</th>
                    <th className="px-3 py-2 text-left text-gray-600">RET</th>
                    <th className="px-3 py-2 text-left text-gray-600">FG</th>
                    <th className="px-3 py-2 text-left text-gray-600">PAT</th>
                    <th className="px-3 py-2 text-left text-gray-600">2PT</th>
                    <th className="px-3 py-2 text-left text-gray-600">TOT</th>
                    <th className="px-3 py-2 text-left text-gray-600">AVG/G</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-3 py-2">2024</td><td className="px-3 py-2">12</td><td className="px-3 py-2">5</td><td className="px-3 py-2">0</td><td className="px-3 py-2">6</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">1</td><td className="px-3 py-2">0</td><td className="px-3 py-2">32</td><td className="px-3 py-2">2.7</td></tr>
                  <tr><td className="px-3 py-2">2025</td><td className="px-3 py-2">9</td><td className="px-3 py-2">4</td><td className="px-3 py-2">0</td><td className="px-3 py-2">4</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">24</td><td className="px-3 py-2">2.7</td></tr>
                  <tr className="bg-gray-50 font-medium"><td className="px-3 py-2">Total</td><td className="px-3 py-2">21</td><td className="px-3 py-2">9</td><td className="px-3 py-2">0</td><td className="px-3 py-2">10</td><td className="px-3 py-2">0</td><td className="px-3 py-2">0</td><td className="px-3 py-2">1</td><td className="px-3 py-2">0</td><td className="px-3 py-2">56</td><td className="px-3 py-2">2.7</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Career Totals */}
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium">Career Totals</h3>
            <p className="mt-1 text-sm text-gray-700">64 REC • 1,127 YDS • 10 TD • Long 56</p>
          </div>
        </section>
      )}
    </div>
  );
}