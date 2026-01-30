"use client";

import Link from "next/link";
import { authorities } from "@/lib/data/authorities";
import { useState } from "react";

const issueTypeMapping: Record<string, string> = {
  "Investment fraud": "sebi",
  "Unauthorized NBFC": "rbi",
  "Digital / UPI fraud": "cybercrime",
  "Company fraud": "mca",
  "Ponzi / MLM": "eow",
  "Loan app harassment": "rbi",
  "Identity theft": "cybercrime",
};

export default function AuthorityDirectory() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const directoryEntries = [
    { issueType: "Investment fraud", authority: "SEBI (SCORES)" },
    { issueType: "Unauthorized NBFC", authority: "RBI CMS" },
    { issueType: "Digital / UPI fraud", authority: "Cybercrime Portal" },
    { issueType: "Company fraud", authority: "MCA" },
    { issueType: "Ponzi / MLM", authority: "State EOW" },
    { issueType: "Loan app harassment", authority: "RBI + Police" },
    { issueType: "Identity theft", authority: "Cybercrime" },
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      border: '1px solid rgba(139, 0, 0, 0.1)'
    }}>
      {/* Compact Header */}
      <div style={{
        background: 'linear-gradient(135deg, #8b0000 0%, #6b0000 100%)',
        padding: '16px 25px'
      }}>
        <h2 style={{
          color: '#ffffff',
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: '20px',
          fontWeight: 'bold',
          margin: 0,
          marginBottom: '4px'
        }}>
          Authority Directory
        </h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: '13px',
          margin: 0
        }}>
          Find the right authority for your complaint type
        </p>
      </div>

      {/* Compact Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(135deg, #6b0000 0%, #5a0000 100%)' }}>
              <th style={{
                padding: '14px 20px',
                textAlign: 'left',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '13px',
                fontWeight: '700',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Issue Type
              </th>
              <th style={{
                padding: '14px 20px',
                textAlign: 'left',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '13px',
                fontWeight: '700',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Authority
              </th>
              <th style={{
                padding: '14px 20px',
                textAlign: 'center',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '13px',
                fontWeight: '700',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                width: '100px'
              }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {directoryEntries.map((entry, index) => {
              const authorityId = issueTypeMapping[entry.issueType];
              const authority = authorityId ? authorities[authorityId] : null;
              const isHovered = hoveredRow === index;

              return (
                <tr
                  key={index}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    backgroundColor: isHovered ? 'rgba(139, 0, 0, 0.04)' :
                      index % 2 === 0 ? '#ffffff' : '#fafafa',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <td style={{
                    padding: '14px 20px',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#333333'
                  }}>
                    {entry.issueType}
                  </td>
                  <td style={{
                    padding: '14px 20px',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '14px',
                    color: '#555555'
                  }}>
                    {entry.authority}
                  </td>
                  <td style={{
                    padding: '14px 20px',
                    textAlign: 'center'
                  }}>
                    {authority ? (
                      <Link
                        href={`/find-authority/${authorityId}`}
                        style={{
                          display: 'inline-block',
                          backgroundColor: isHovered ? '#8b0000' : 'transparent',
                          color: isHovered ? '#ffffff' : '#8b0000',
                          fontFamily: "'Times New Roman', Times, serif",
                          fontSize: '13px',
                          fontWeight: '600',
                          padding: '6px 16px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          border: '1px solid #8b0000',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        View
                      </Link>
                    ) : (
                      <span style={{
                        color: '#999999',
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '13px',
                        fontStyle: 'italic'
                      }}>
                        Soon
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Compact Footer */}
      <div style={{
        backgroundColor: '#fafafa',
        padding: '12px 20px',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          color: '#777777',
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: '12px'
        }}>
          {directoryEntries.length} categories available
        </span>
        <Link
          href="/file-complaint"
          style={{
            color: '#8b0000',
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none'
          }}
        >
          File a Complaint
        </Link>
      </div>
    </div>
  );
}
