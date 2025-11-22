import Image from "next/image";

export default function GreetingPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                    {/* Header Image / Banner */}
                    <div className="bg-blue-900 h-32 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl" />
                    </div>

                    <div className="px-8 py-10 md:px-12 md:py-14">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Захирлын мэндчилгээ
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-10 items-start">
                            {/* Director's Photo */}
                            <div className="w-full lg:w-1/3 shrink-0 order-1 lg:order-2">
                                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/director.png"
                                        alt="Director B.Bat-Erdene"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="mt-4 text-center lg:text-left">
                                    <p className="font-bold text-blue-900 text-lg">Б.БАТ-ЭРДЭНЭ</p>
                                    <p className="text-sm text-gray-500">Ажлын албаны дарга</p>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full lg:w-2/3 order-2 lg:order-1 prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed text-justify">
                                <p>
                                    Шинжлэх ухаан, технологийн салбарт эрдэм мэдлэг, цаг хугацаа, зүрх сэтгэлээ зориулан ажиллаж буй үе үеийн эрдэмтэн мэргэд, судлаачид та бүхэндээ мэндчилгээ дэвшүүлж байгаадаа баяртай байна.
                                </p>

                                <p>
                                    Монгол Улсын хөгжлийн бодлогын үндэс нь шинжлэх ухаан, мэдлэгт суурилсан хөгжил бөгөөд нийгэм, эдийн засгийн тулгамдсан асуудлыг зөвхөн шинжлэх ухаанчаар шийдвэрлэх замаар тогтвортой ирээдүйг бүтээх билээ.
                                </p>

                                <p>
                                    Үндэсний шинжлэх ухаан, технологийн сан нь шинжлэх ухаан, технологийн тэргүүлэх чиглэлийн онолын суурь судалгааг гүйцэтгэх, үндэсний болон шинжлэх ухаан, технологийн төсөл арга хэмжээг хэрэгжүүлэхэд санхүүжилт олгох, үр дүнг үйлдвэрлэл, үйлчилгээ, бодлого төлөвлөлтөд нэвтрүүлэхэд онцгой анхаарч ажиллаж байна.
                                </p>

                                <p>
                                    Үндэсний шинжлэх ухаан, технологийн сан нь шинжлэх ухаан, технологийн салбарт хэрэгжүүлж буй төсөл, хөтөлбөр, арга хэмжээний бодлого, санхүүгийн тогтолцоог боловсронгуй болгох, төслийн хэрэгжилтийг цахимжуулах, шинэчлэхэд анхаарах, судалгааны үр дүн, чанарыг дээшлүүлж, нийгэм, эдийн засгийн хөгжлийн стратегийн зорилттой уялдуулах, эрдэм шинжилгээний ажлын гүйцэтгэлд суурилсан санхүүжилтийг төлөвшүүлж, хариуцлага, үр дүнг чухалчилсан шинэ механизмыг бүрдүүлэх болно.
                                </p>

                                <p>
                                    Үндэсний шинжлэх ухаан, технологийн сан нь зөвхөн санхүүжүүлэгч байгууллага бус, харин шинжлэх ухаан, инновацын бодлого хэрэгжүүлэгч байгууллагын гол түшиц байхыг эрмэлзэнэ. Монголын эрдэмтэн судлаачдын оюуны хөрөнгө, судалгааны шинэ үр дүн, хамтын хүчин чармайлт бол улсын өрсөлдөх чадвар, тогтвортой хөгжлийн баталгаа байх болно.
                                </p>

                                <p>
                                    Та бүхэнтэй хамтран ажиллаж, Монгол Улсын шинжлэх ухааны салбарын хөгжлийг шинэ түвшинд гаргахад хамтдаа бодит ахиц дэвшил гаргана гэдэгт итгэлтэй байна.
                                </p>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="font-bold text-blue-900 text-lg italic text-right">
                                        "Улсын хөгжил – Шинжлэх ухаанаас эхтэй"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
