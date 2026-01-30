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

    // Relevant news content for the website theme
    const relevantFallbackNews: NewsItem[] = [
        { title: "SEBI issues new guidelines for investor protection in mutual fund investments", link: "/find-authority/sebi" },
        { title: "RBI warns against unauthorized digital lending apps - file complaints via CMS portal", link: "/find-authority/rbi" },
        { title: "Cybercrime Portal receives record complaints on UPI fraud - stay vigilant", link: "/find-authority/cybercrime" },
        { title: "IAFAF advisory: Always verify investment schemes before investing your money", link: "/fraud-awareness" },
        { title: "New awareness campaign launched against Ponzi schemes and MLM frauds", link: "/report-fraud" },
        { title: "Government strengthens consumer protection laws for online financial transactions", link: "/research" },
        { title: "Report financial fraud immediately - early reporting increases recovery chances", link: "/file-complaint" },
        { title: "SEBI SCORES portal now offers faster grievance resolution for investors", link: "/find-authority/sebi" },
    ];

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // More specific search terms related to website theme
                const searchTerms = encodeURIComponent(
                    "(financial fraud OR investment scam OR banking fraud OR cyber crime india OR SEBI investor OR RBI fraud OR ponzi scheme OR digital payment fraud)"
                );

                const response = await fetch(
                    `https://newsdata.io/api/1/news?apikey=pub_84b99d9002c84c42bcb33c1f71804b77&country=in&language=en&q=${searchTerms}&category=business,crime&size=10`
                );
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    // Filter to keep only truly relevant news
                    const relevantNews = data.results.filter((item: { title: string }) => {
                        const title = item.title.toLowerCase();
                        const relevantKeywords = [
                            'fraud', 'scam', 'cyber', 'sebi', 'rbi', 'investor',
                            'ponzi', 'mlm', 'banking', 'financial', 'complaint',
                            'cheating', 'arrest', 'police', 'crime', 'money',
                            'upi', 'digital', 'online', 'loan app', 'nbfc'
                        ];
                        return relevantKeywords.some(keyword => title.includes(keyword));
                    });

                    if (relevantNews.length >= 3) {
                        setNews(relevantNews.map((item: { title: string; link: string; source_id?: string }) => ({
                            title: item.title,
                            link: item.link,
                            source_id: item.source_id
                        })));
                    } else {
                        // Mix API results with fallback for relevance
                        setNews(relevantFallbackNews);
                    }
                } else {
                    setNews(relevantFallbackNews);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setNews(relevantFallbackNews);
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
                    Loading updates...
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
                    Updates
                </span>
            </div>

            {/* Scrolling Container */}
            <div
                className="news-scroll-container"
                style={{
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <div
                    className="news-scroll-content"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        animation: 'newsScroll 40s linear infinite',
                        whiteSpace: 'nowrap'
                    }}
                >
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
                .news-scroll-container:hover .news-scroll-content {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
