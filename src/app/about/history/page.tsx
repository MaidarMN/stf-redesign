export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-blue-900 h-32 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl" />
                    </div>

                    <div className="px-8 py-10 md:px-12 md:py-14">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            Түүхэн замнал
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
                            <p>
                                Шинжлэх ухаан, технологийн сан (ШУТС) нь Монгол Улсын Засгийн Газрын 1993 оны 12-р сарын 24-ны өдрийн 192 дугаар тогтоолоор байгуулагдаж, мөрдөгдөж байгаа хууль тогтоомж болон холбогдох дүрэм, журмын дагуу үйл ажиллагаа явуулж байна.
                            </p>
                            <p>
                                Шинжлэх ухаан, технологийн сангийн дүрэм нь дээрх тогтоолын хавсралтаар батлагдсан ба Сангийн ажиллах журам.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
