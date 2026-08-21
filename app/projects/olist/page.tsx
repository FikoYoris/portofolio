"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OlistCaseStudy() {
    const [selectedYear, setSelectedYear] = useState("2016");

    const yearlySales = {
        "2016": "sales-analysis-2016.png",
        "2017": "sales-analysis-2017.png",
        "2018": "sales-analysis-2018.png",
    };

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <header className="border-b border-white/10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <Link
                        href="/"
                        className="text-xl font-semibold tracking-tight transition hover:text-[#31CB00]"
                    >
                        Fiko.
                    </Link>

                    <Link
                        href="/#projects"
                        className="text-sm text-zinc-400 transition hover:text-white"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-4xl">
                        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#31CB00]">
                            Data Analytics · 2026
                        </p>

                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Olist E-Commerce
                            <br />
                            <span className="text-[#3A862F]">Analytics</span>
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                            An interactive Power BI dashboard designed to explore sales
                            performance, customer behavior, product performance, and seller
                            geography using the Brazilian E-Commerce dataset.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Power BI",
                                "DAX",
                                "Data Modeling",
                                "Data Visualization",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-[#2A7221]/50 bg-[#071207] px-4 py-2 text-sm text-zinc-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/FikoYoris/olist-ecommerce-analytics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full bg-[#31CB00] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#5be52f]"
                            >
                                View on GitHub ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Snapshot */}
            <section className="border-y border-[#2A7221]/20 bg-[#071207] px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-8 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                        Project Snapshot
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["R$15.85M", "Total Revenue"],
                            ["98.7K", "Total Orders"],
                            ["96.1K", "Total Customers"],
                            ["4.09", "Average Review Score"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-2xl border border-[#2A7221]/30 bg-[#152614] p-6"
                            >
                                <p className="text-3xl font-semibold text-[#5ABF43]">
                                    {value}
                                </p>

                                <p className="mt-2 text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {[
                            ["3,095", "Total Sellers"],
                            ["31.88", "Average Orders per Seller"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="rounded-2xl border border-[#2A7221]/30 bg-[#152614] p-6"
                            >
                                <p className="text-3xl font-semibold text-[#5ABF43]">
                                    {value}
                                </p>

                                <p className="mt-2 text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Questions */}
            <section className="px-6 py-28">
                <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                            Business Questions
                        </p>

                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            What can the data tell us?
                        </h2>
                    </div>

                    <div className="space-y-5">
                        {[
                            "How does sales performance change across time?",
                            "Which product categories contribute the most revenue?",
                            "Which customer states generate the highest revenue?",
                            "How do seller performance and geography vary across the marketplace?",
                        ].map((question, index) => (
                            <div
                                key={question}
                                className="flex gap-5 border-b border-white/10 pb-5"
                            >
                                <span className="text-sm text-[#31CB00]">
                                    0{index + 1}
                                </span>

                                <p className="text-lg leading-7 text-zinc-300">
                                    {question}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Executive Overview */}
            <section className="border-y border-[#2A7221]/20 bg-[#071207] px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10">
                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                            01 · Executive Overview
                        </p>

                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            Marketplace at a glance.
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                            The executive dashboard provides a high-level view of revenue,
                            orders, customers, reviews, product categories, and geographic
                            performance.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614]">
                        <Image
                            src="/olist/executive-overview.png"
                            alt="Olist Executive Overview Power BI dashboard"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Key Insights */}
            <section className="px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12">
                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                            Key Insights
                        </p>

                        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            What stands out from the data.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {[
                            {
                                number: "01",
                                title: "Revenue is concentrated across leading categories.",
                                text: "Health & Beauty is the leading product category by revenue, followed by Watches & Gifts and Bed, Bath & Table.",
                            },
                            {
                                number: "02",
                                title: "São Paulo dominates customer revenue.",
                                text: "São Paulo contributes substantially more revenue than the other customer states shown in the dashboard.",
                            },
                            {
                                number: "03",
                                title: "Customer satisfaction remains relatively strong.",
                                text: "The overall average review score is 4.09 out of 5, indicating generally positive customer feedback across the marketplace.",
                            },
                            {
                                number: "04",
                                title: "Revenue changes significantly over time.",
                                text: "The sales analysis shows strong growth during 2017 and sustained high monthly revenue throughout much of 2018.",
                            },
                        ].map((insight) => (
                            <article
                                key={insight.number}
                                className="rounded-3xl border border-[#2A7221]/30 bg-[#152614] p-8 transition hover:-translate-y-1 hover:border-[#119822]"
                            >
                                <span className="text-sm text-[#31CB00]">
                                    {insight.number}
                                </span>

                                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                                    {insight.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {insight.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sales Analysis */}
            <section className="border-y border-[#2A7221]/20 bg-[#071207] px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                        02 · Sales Analysis
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Understanding revenue over time.
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                        The sales dashboard explores revenue trends, product category
                        performance, order status, and category positioning across
                        different years.
                    </p>

                    <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614]">
                        <Image
                            src="/olist/sales-analysis.png"
                            alt="Olist Sales Analysis dashboard"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="mt-10">
                        <div className="mb-6">
                            <p className="text-sm uppercase tracking-[0.15em] text-zinc-400">
                                Explore by year
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {["2016", "2017", "2018"].map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => setSelectedYear(year)}
                                        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${selectedYear === year
                                            ? "border-[#31CB00] bg-[#31CB00] text-black"
                                            : "border-white/10 bg-white/5 text-zinc-400 hover:border-[#31CB00]/50 hover:text-white"
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614]">
                            <div className="border-b border-white/10 px-6 py-4">
                                <p className="text-sm uppercase tracking-[0.15em] text-[#31CB00]">
                                    Sales Analysis · {selectedYear}
                                </p>
                            </div>

                            <Image
                                src={`/olist/${yearlySales[selectedYear as keyof typeof yearlySales]}`}
                                alt={`Olist Sales Analysis ${selectedYear}`}
                                width={1600}
                                height={900}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product & Customer */}
            <section className="px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                        03 · Product & Customer Analysis
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Products, customers, and purchasing behavior.
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                        Product and customer analysis compares category demand, review
                        scores, customer scale, and revenue relationships across the
                        marketplace.
                    </p>

                    <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614]">
                        <Image
                            src="/olist/product-customer-analysis.png"
                            alt="Olist Product and Customer Analysis dashboard"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Seller & Geography */}
            <section className="border-y border-[#2A7221]/20 bg-[#071207] px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                        04 · Seller & Geography Analysis
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Where marketplace performance comes from.
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                        Seller analysis examines revenue, order volume, seller
                        performance, and geographic distribution across Brazil.
                    </p>

                    <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A7221]/30 bg-[#152614]">
                        <Image
                            src="/olist/seller-geography-analysis.png"
                            alt="Olist Seller and Geography Analysis dashboard"
                            width={1600}
                            height={900}
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="px-6 py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                                Methodology
                            </p>

                            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                                From raw data to interactive insights.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                The project transforms Brazilian e-commerce transaction data
                                into an interactive analytical dashboard for exploring
                                marketplace performance.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                ["01", "Data Preparation"],
                                ["02", "Data Modeling"],
                                ["03", "DAX Measures"],
                                ["04", "Interactive Visualization"],
                            ].map(([number, title]) => (
                                <div
                                    key={number}
                                    className="rounded-2xl border border-[#2A7221]/30 bg-[#152614] p-6"
                                >
                                    <span className="text-sm text-[#31CB00]">
                                        {number}
                                    </span>

                                    <h3 className="mt-8 text-xl font-semibold">
                                        {title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="border-y border-[#2A7221]/20 bg-[#071207] px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                        Tools
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "Power BI",
                            "DAX",
                            "Data Modeling",
                            "Data Visualization",
                            "Brazilian E-Commerce Dataset",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="rounded-full border border-[#2A7221]/40 bg-[#152614] px-5 py-2.5 text-sm text-zinc-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section>
                <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
                    <div className="rounded-3xl border border-[#2A7221]/30 bg-[#071207] p-8 md:p-12">
                        <div className="max-w-3xl">
                            <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#31CB00]">
                                Project Repository
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                                Explore the implementation.
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-400">
                                The complete dashboard, data analysis, visualizations,
                                and supporting materials are available in the project repository.
                            </p>

                            <a
                                href="https://github.com/FikoYoris/olist-ecommerce-analytics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex rounded-full bg-[#31CB00] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#5be52f]"
                            >
                                Open GitHub Repository ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}