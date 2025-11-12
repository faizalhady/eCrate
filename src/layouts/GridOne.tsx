"use client"

export default function GridOne() {
    return (
        <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-4">
            <div className="col-span-3 row-span-8 bg-slate-200 flex items-center justify-center">
                1
            </div>

            <div className="col-span-3 row-span-6 col-start-4 bg-slate-300 flex items-center justify-center">
                2
            </div>

            <div className="col-span-5 row-span-2 col-start-4 row-start-7 bg-slate-400 flex items-center justify-center">
                3
            </div>

            <div className="col-span-2 row-span-3 col-start-7 row-start-1 bg-slate-500 flex items-center justify-center">
                4
            </div>

            <div className="col-span-2 row-span-3 col-start-7 row-start-4 bg-slate-600 flex items-center justify-center">
                5
            </div>
        </div>
    )
}
