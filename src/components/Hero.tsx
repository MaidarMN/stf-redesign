import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white/50" />
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative container mx-auto px-4 py-20 lg:py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        Шинжлэх ухааны инноваци
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                        Монгол улсын хөгжил дэвшил, <span className="text-blue-700">ирээдүйн төлөө</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Шинжлэх ухаан, технологийн сан нь шинжлэх ухаан, технологийн төсөл,
                        хөтөлбөрийг санхүүжүүлэх, хэрэгжилтэд хяналт тавих чиг үүрэг бүхий байгууллага юм.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-700 rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 active:scale-95">
                            Төсөл илгээх
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>

                        <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-blue-700 transition-all active:scale-95">
                            <FileText className="mr-2 h-5 w-5" />
                            Дэлгэрэнгүй
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
