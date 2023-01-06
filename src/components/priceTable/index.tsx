export const PriceTable = () => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm ">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">#</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">24h Volume</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">1h %</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">24h %</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">7d %</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Market Cap</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Circulating Supply</th>


                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    <tr className="hover:bg-gray-50">
                        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">

                            <div className="text-sm">
                                <div className="font-medium text-gray-700">1</div>

                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="font-bold text-md"

                            >
                                bitcoin

                            </span>
                        </td>
                        <td className="px-6 py-4">$16,861.66 </td>
                        <td className="px-6 py-4">
                            $13,662,851,622
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            $324,635,298,314
                        </td>
                        <td className="px-6 py-4">
                            19,253,281 BTC
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">

                            <div className="text-sm">
                                <div className="font-medium text-gray-700">2</div>

                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="font-bold text-md"

                            >
                                bitcoin

                            </span>
                        </td>
                        <td className="px-6 py-4">$16,861.66 </td>
                        <td className="px-6 py-4">
                            $13,662,851,622
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            0.01%
                        </td>
                        <td className="px-6 py-4">
                            $324,635,298,314
                        </td>
                        <td className="px-6 py-4">
                            19,253,281 BTC
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}