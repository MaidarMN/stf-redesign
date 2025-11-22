import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail, Printer } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Organization Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">ШУТС</h3>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Шинжлэх ухаан, технологийн сан нь шинжлэх ухаан, технологийн төсөл,
                            хөтөлбөрийг санхүүжүүлэх, хэрэгжилтэд хяналт тавих чиг үүрэг бүхий байгууллага юм.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/mongolianfoundationforscienceandtechnology" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                                <Youtube size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Холбоос</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about/greeting" className="hover:text-white transition-colors">
                                    Бидний тухай
                                </Link>
                            </li>
                            <li>
                                <Link href="/news/general" className="hover:text-white transition-colors">
                                    Мэдээ мэдээлэл
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/list" className="hover:text-white transition-colors">
                                    Төслийн мэдээлэл
                                </Link>
                            </li>
                            <li>
                                <Link href="/transparency/finance/general" className="hover:text-white transition-colors">
                                    Ил тод байдал
                                </Link>
                            </li>
                            <li>
                                <Link href="https://shilendans.gov.mn" target="_blank" className="hover:text-white transition-colors">
                                    Шилэн данс
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-lg font-bold mb-6">Холбоо барих</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                                <span>
                                    Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Бага тойруу,
                                    МУИС-ийн Номын сангийн байр, 404 тоот
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span>11-313131</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <a href="mailto:info@stf.gov.mn" className="hover:text-white transition-colors">
                                    info@stf.gov.mn
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Printer size={20} className="text-blue-500 shrink-0" />
                                <span>Факс: 11-313131</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Шинжлэх Ухаан Технологийн Сан. Бүх эрх хуулиар хамгаалагдсан.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Нууцлалын бодлого</Link>
                        <Link href="#" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
