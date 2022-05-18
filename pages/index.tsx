import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 px-10 py-16 grid gap-10">
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
            <div className="bg-blue-500 text-center rounded-xl p-2 w-3/5 mx-auto text-white cursor-pointer"><span>Checkout</span></div>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-2xl"></div>
        <div className="bg-white p-5 rounded-3xl shadow-2xl"></div>
        <div className="bg-white p-5 rounded-3xl shadow-2xl"></div>
    </div>
  )
}

export default Home
