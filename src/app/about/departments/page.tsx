export default function DepartmentsPage() {
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
                            Хэлтэс нэгжийн үүрэг
                        </h1>

                        <div className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">Захиргаа удирдлагын хэлтэс</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Шинжлэх ухаан, технологийн салбарын хэмжээнд мөрдөгдөж байгаа эрх зүйн орчин, үйл ажиллагаа, хүний нөөцийн бодлогыг сайжруулах санал боловсруулах, хэрэгжилтийг хангах, гадаад, дотоод хамтын ажиллагааг өргөжүүлэх, байгууллагын өдөр тутмын үйл ажиллагааг хэвийн, жигд явуулах нөхцлийг бүрдүүлэх
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">Санхүү төлөвлөлтийн хэлтэс</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Шинжлэх ухаан, технологийн сангийн төсвийн төлөвлөлтийг боловсруулах, санхүүгийн шинжилгээ судалгааг гаргах, гүйцэтгэлийг хангах, тайлагнах ажлыг хууль, тогтоомжийн хүрээнд хэрэгжүүлэх, салбарын хэмжээнд мөрдөгдөж байгаа эрх зүйн орчин, үйл ажиллагааг сайжруулах санал боловсруулах, байгууллагын стратеги төлөвлөгөөний хэрэгжилтийг зохион байгуулах, нягтлан бодох бүртгэлийн чиглэлээр хамт олныг мэргэжил арга зүйн удирдлагаар хангах, төсөв, санхүүгийн сахилга бат, үр ашгийг дээшлүүлэх
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">Мэдээлэлийн сан маркетингийн хэлтэс</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Шинжлэх ухаан, технологи, инновацийн мэдээлийн нэгдсэн санг бүрдүүлэх, баяжуулах, хамгаалах, шинжлэх ухааны мэдлэг, инновацийн соёлыг олон нийтэд түгээн дэлгэрүүлэх, судалгаа боловсруулалтын ажлын үр дүн, мэдлэг шингэсэн бүтээгдэхүүн, үйлчилгээг сурталчлах, үйлдвэрлэлд нэвтрүүлэх ажлыг зохион байгуулах, салбарын үйл ажиллагааны маркетингийн төлөвлөгөө гарган хэрэгжүүлэх, байгууллагын стратеги төлөвлөгөөний хэрэгжилтийг хангах
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">Төслийн хяналт шинжилгээний хэлтэс</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Шинжлэх ухаан, технологийн төсөл сонгон шалгаруулах, гэрээ байгуулах, судалгааны үндсэн чиглэлийн гэрээ байгуулах, гүйцэтгэлд хяналт-шинжилгээ хийх, тайлагнах ажлыг зохион байгуулах, төслийн мониторинг хийх, судалгаа шинжилгээний тайланг хүлээн авах, эрдэм шинжилгээний байгууллагуудын үйл ажиллагааны уялдаа холбоо, хамтын ажиллагааг бодлого, зохицуулалтаар хангах
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
