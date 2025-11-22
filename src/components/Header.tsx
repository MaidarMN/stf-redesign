"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Globe, ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
    name: string;
    href?: string;
    children?: NavItem[];
}

const navigation: NavItem[] = [
    {
        name: "Бидний тухай",
        children: [
            { name: "Захирлын мэндчилгээ", href: "/about/greeting" },
            { name: "Байгууллагын бүтэц", href: "/about/structure" },
            { name: "Түүхэн замнал", href: "/about/history" },
            { name: "Алсын хараа", href: "/about/vision" },
            { name: "Эрхэм зорилго", href: "/about/mission" },
            { name: "Стратегийн зорилго", href: "/about/strategy" },
            { name: "Хэлтэс, нэгжийн үүрэг", href: "/about/departments" },
        ],
    },
    {
        name: "Мэдээ, мэдээлэл",
        children: [
            { name: "Мэдээ, мэдээлэл", href: "/news/general" },
            { name: "Төслийн зар", href: "/news/projects" },
            { name: "Видео мэдээ", href: "/news/video" },
            { name: "Зар мэдээ", href: "/news/announcements" },
        ],
    },
    {
        name: "Хууль эрх зүй",
        children: [
            { name: "Хууль тогтоомж", href: "/legal/laws" },
            { name: "Дүрэм журам", href: "/legal/regulations" },
        ],
    },
    {
        name: "Ил тод байдал",
        children: [
            {
                name: "Санхүүгийн мэдээлэл",
                children: [
                    { name: "Санхүүгийн мэдээлэл", href: "/transparency/finance/general" },
                    { name: "Шилэн данс", href: "https://shilendans.gov.mn/organization/5322?ry=2025&group=117" },
                    { name: "Шил ажиллагаа", href: "https://shilen.gov.mn/legal-entity/9126813?type=INTRODUCTION" },
                ],
            },
            {
                name: "Хүний нөөц",
                children: [
                    { name: "Ажлын байрны зар", href: "/transparency/hr/jobs" },
                    { name: "Албан тушаалын тодорхойлолт", href: "/transparency/hr/descriptions" },
                    { name: "Албан хаагчдын утасны жагсаалт", href: "/transparency/hr/contacts" },
                ],
            },
        ],
    },
    {
        name: "Төслийн мэдээлэл",
        children: [
            { name: "Төсөл", href: "/projects/list" },
            { name: "Хяналт үнэлгээ", href: "/projects/monitoring" },
            { name: "Гэрээний маягт", href: "/projects/templates" },
        ],
    },
    {
        name: "Хамтын ажиллагаа",
        children: [
            { name: "Гадаад хамтын ажиллагаа", href: "/cooperation/foreign" },
            { name: "Дотоод хамтын ажиллагаа", href: "/cooperation/domestic" },
        ],
    },
    {
        name: "Хамтрагч байгууллагууд",
        children: [
            { name: "Их сургуулиуд", href: "/partners/universities" },
            { name: "Хүрээлэн төв", href: "/partners/institutes" },
            { name: "Нээлттэй лабортори", href: "/partners/labs" },
        ],
    },
    {
        name: "Онлайн үзэсгэлэн",
        children: [
            { name: "Танилцуулга", href: "/exhibition/intro" },
            { name: "Кателоги", href: "/exhibition/catalog" },
            { name: "Шинжлэх ухааны сэтгүүл", href: "/exhibition/journal" },
            { name: "Цахим үзэсгэлэн", href: "/exhibition/digital" },
            { name: "Үзэсгэлэнгийн танхимийн виртуал орчин", href: "https://stf.gov.mn/wp-shut-san/index.htm" },
        ],
    },
];

const systemLinks = [
    { name: "Төслийн удирдлагын систем", href: "https://project.stf.gov.mn/#/landing/3824568/0" },
    { name: "Судлаачийн мэдээллийн сан", href: "https://researcher.stf.gov.mn/#/login" },
    { name: "Докторын зэрэг хамгаалуулах зөвлөл", href: "https://zuvlul.stf.gov.mn/#/login" },
    { name: "Гарааны компани", href: "https://startup.stf.gov.mn/#/login" },
    { name: "Нээлттэй мэдээллийн сан", href: "https://data.stf.gov.mn/" },
    { name: "Шинжлэх ухааны түлхүүр нэр томьеоны тайлбар толь", href: "http://dict.stf.gov.mn/" },
    { name: "Лабаратори бүртгэл", href: "https://docs.google.com/forms/d/e/1FAIpQLSfseYezmqUeB80CM3AJvvMf63mfdk4u2j8ZR7yQ78jew44cPg/viewform" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileSystemsOpen, setMobileSystemsOpen] = useState(false);

    return (
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3 group shrink-0">
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden">
                        <Image
                            src="/logo.jpg"
                            alt="STF Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg lg:text-xl font-bold text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                            ШУТС
                        </span>
                        <span className="text-[8px] lg:text-[10px] text-gray-500 uppercase tracking-wider font-medium hidden sm:block">
                            Шинжлэх Ухаан Технологийн Сан
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors py-2">
                                {item.name}
                                {item.children && (
                                    <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />
                                )}
                            </button>

                            {/* Dropdown */}
                            {item.children && (
                                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-2">
                                        {item.children.map((child) => (
                                            <div key={child.name} className="relative group/sub">
                                                {child.children ? (
                                                    // Nested Dropdown (Level 3)
                                                    <>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 flex justify-between items-center">
                                                            {child.name}
                                                            <ChevronDown size={14} className="-rotate-90" />
                                                        </button>
                                                        <div className="absolute top-0 left-full w-56 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-1">
                                                            <div className="py-2">
                                                                {child.children.map((subChild) => (
                                                                    <Link
                                                                        key={subChild.name}
                                                                        href={subChild.href || "#"}
                                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                                                    >
                                                                        {subChild.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={child.href || "#"}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-2 lg:space-x-4">
                    <button className="p-2 text-gray-500 hover:text-blue-700 transition-colors">
                        <Search size={20} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-700 transition-colors">
                        <Globe size={20} />
                    </button>

                    {/* Desktop Systems Dropdown */}
                    <div className="relative group hidden lg:block">
                        <button className="bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 active:scale-95 flex items-center">
                            Цахим систем
                            <ChevronDown size={16} className="ml-2 group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full right-0 w-72 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 mt-2">
                            <div className="py-2">
                                {systemLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="xl:hidden p-2 text-gray-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="p-4 space-y-4">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 pb-2 last:border-0">
                                <div className="font-medium text-gray-900 mb-2">{item.name}</div>
                                {item.children && (
                                    <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                                        {item.children.map((child) => (
                                            <div key={child.name}>
                                                {child.children ? (
                                                    <div className="space-y-2">
                                                        <div className="text-sm font-medium text-gray-700">{child.name}</div>
                                                        <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                                                            {child.children.map((subChild) => (
                                                                <Link
                                                                    key={subChild.name}
                                                                    href={subChild.href || "#"}
                                                                    className="block text-sm text-gray-600 hover:text-blue-700 py-1"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {subChild.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={child.href || "#"}
                                                        className="block text-sm text-gray-600 hover:text-blue-700 py-1"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4">
                            <div className="border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setMobileSystemsOpen(!mobileSystemsOpen)}
                                    className="w-full bg-blue-700 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-800 transition-all flex justify-between items-center"
                                >
                                    Цахим систем
                                    <ChevronDown size={16} className={`transition-transform ${mobileSystemsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileSystemsOpen && (
                                    <div className="bg-gray-50 border-t border-gray-200">
                                        {systemLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-200 last:border-0"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
