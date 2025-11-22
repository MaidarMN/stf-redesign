import Image from "next/image";

export default function StructurePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-8 py-10 md:px-12 md:py-14">


                        <div className="relative w-full bg-white rounded-xl overflow-hidden">
                            <Image
                                src="/structure.png"
                                alt="Organization Structure Chart"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg">Удирдлага</h3>
                                <ul className="space-y-2">
                                    <li>• Захирал</li>
                                    <li>• Захиргаа, удирдлагын хэлтэс</li>
                                    <li>• Санхүү, төлөвлөлтийн хэлтэс</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg">Үйл ажиллагаа</h3>
                                <ul className="space-y-2">
                                    <li>• Төслийн хяналт, шинжилгээний хэлтэс</li>
                                    <li>• Мэдээллийн сан, маркетингийн хэлтэс</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
