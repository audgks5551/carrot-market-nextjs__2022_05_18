import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 px-14 py-16 grid gap-10">
        <div className="bg-white p-5 rounded-3xl shadow-2xl">
            <div>
                <div>
                    <span className="text-2xl font-semibold">Select Item</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Grey Chair</span>
                    <span>$170</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">Tooly Table</span>
                    <span>$800</span>
                </div>
            </div>
            <div className="flex justify-between mt-2 py-1 border-t-2 border-dashed">
                <span>Total</span>
                <span>$970</span>
            </div>
            <button
                className="flex justify-center bg-blue-500 text-center rounded-xl p-2 w-3/5 mx-auto text-white
                        hover:bg-blue-600 active:bg-blue-800"
            >
                Checkout
            </button>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-blue-500 px-5 py-8 text-white text-xl pb-20 font-semibold">
                <span>Profile</span>
            </div>
            <div className="bg-white relative rounded-xl -mt-8 p-5">
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <span className="text-gray-400">Orders</span>
                        <span className="font-semibold">340</span>
                    </div>
                    <div className="w-24 h-24 bg-blue-200 relative -top-16 rounded-full cursor-pointer"/>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-400">Spent</span>
                        <span className="font-semibold">$2,310</span>
                    </div>
                </div>
                <div className="relative -mt-10 flex flex-col items-center">
                    <span className="text-xl font-semibold">Tony Molloy</span>
                    <span className="text-xs text-gray-400">New York, USA</span>
                </div>
            </div>

        </div>
        <div className="bg-white px-5 py-6 rounded-3xl shadow-2xl">
            <div className="flex justify-between items-center">
                <div className="p-2 cursor-pointer">
                    <span>←</span>
                </div>
                <div className="flex space-x-2">
                    <div className="space-x-1">
                        <span>⭐️</span>
                        <span className="font-semibold">4.9</span>
                    </div>
                    <div className="cursor-pointer">
                        <span className="shadow-xl p-2 rounded">❤️</span>
                    </div>
                </div>
            </div>
            <div className="h-72 bg-gray-500 opacity-10 mt-2"></div>
            <div className="mt-2">
                <div className="flex flex-col">
                    <span className="font-semibold">Swoon Lounge</span>
                    <span className="text-xs text-gray-400 -mt-1">Chair</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-x-5 flex">
                        <button className="w-4 h-4 bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500 transition hover:ring-2" />
                        <button className="w-4 h-4 bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500 transition hover:ring-2" />
                        <button className="w-4 h-4 bg-amber-900 rounded-full focus:ring-2 ring-offset-2 ring-amber-900 transition hover:ring-2" />
                    </div>
                    <div className="space-x-4">
                        <button className="bg-blue-200 aspect-square w-10 rounded-xl">-</button>
                        <span className="font-semibold">1</span>
                        <button className="bg-blue-200 aspect-square w-10 rounded-xl">+</button>
                    </div>
                </div>
                <div className="flex justify-between pt-6">
                    <span className="font-semibold text-2xl">$450</span>
                     <button className="px-10 py-2 bg-blue-500 rounded-xl text-white">Add to cart</button>
                </div>
            </div>

        </div>
        <div className="bg-white p-5 rounded-3xl shadow-2xl"></div>
    </div>
  )
}

export default Home
