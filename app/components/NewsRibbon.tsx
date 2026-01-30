"use client";

import { useState, useEffect } from "react";

interface NewsItem {
    title: string;
    link: string;
    source_id?: string;
}

export default function NewsRibbon() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsdata.io/api/1/news?apikey=pub_84b99d9002c84c42bcb33c1f71804b77&country=in&language=en&q=fraud%20OR%20scam%20OR%20cybercrime&size=10`
                );
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    setNews(data.results.map((item: { title: string; link: string; source_id?: string }) => ({
                        title: item.title,
                        link: item.link,
                        source_id: item.source_id
                    })));
                } else {
                    setNews([
                        { title: "IAFAF: Your trusted guide to navigating financial fraud complaints", link: "/" },
                        { title: "Stay alert: Report suspicious financial activities to the appropriate authorities", link: "/report-fraud" },
                        { title: "New cybercrime reporting portal launched by Government of India", link: "/find-authority" },
                    ]);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setNews([
                    { title: "IAFAF: Your trusted guide to navigating financial fraud complaints", link: "/" },
                    { title: "Stay alert: Report suspicious financial activities to the appropriate authorities", link: "/report-fraud" },
                    { title: "Know your rights: File complaints with SEBI, RBI, or Cybercrime Portal", link: "/find-authority" },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
        const interval = setInterval(fetchNews, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div style={{
                backgroundColor: '#8b0000',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <span style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)'
                }}>
                    Loading news...
                </span>
            </div>
        );
    }

    const duplicatedNews = [...news, ...news];

    return (
        <div style={{
            backgroundColor: '#8b0000',
            height: '32px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Label */}
            <div style={{
                backgroundColor: '#6b0000',
                height: '100%',
                padding: '0 14px',
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                zIndex: 10
            }}>
                <span style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Latest News
                </span>
            </div>

            {/* Scrolling Container */}
            <div style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    animation: 'newsScroll 80s linear infinite',
                    whiteSpace: 'nowrap'
                }}>
                    {duplicatedNews.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            style={{
                                fontFamily: "'Times New Roman', Times, serif",
                                fontSize: '12px',
                                color: '#ffffff',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginRight: '40px',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <span style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                marginRight: '8px',
                                fontSize: '10px'
                            }}>●</span>
                            <span>{item.title}</span>
                            {item.source_id && (
                                <span style={{
                                    fontSize: '10px',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    marginLeft: '6px',
                                    textTransform: 'uppercase'
                                }}>
                                    [{item.source_id}]
                                </span>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
        @keyframes newsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    );
}
