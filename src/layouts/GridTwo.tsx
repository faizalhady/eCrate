
export default function GridTwo() {
    return (

        <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-2 ">
            <div className="col-span-3 row-span-10 flex items-center justify-center bg-amber-700">1</div>
            <div className="col-span-3 row-span-8 col-start-4 flex items-center justify-center bg-red-700">2</div>
            <div className="col-span-7 row-span-2 col-start-4 row-start-9 flex items-center justify-center bg-blue-700">3</div>
            <div className="col-span-4 row-span-3 col-start-7 row-start-1 flex items-center justify-center bg-amber-700">4</div>
            <div className="col-span-4 row-span-3 col-start-7 row-start-4 flex items-center justify-center bg-yellow-700">7</div>
            <div className="col-span-4 row-span-2 col-start-7 row-start-7 flex items-center justify-center bg-blue-600">8</div>
        </div>

    )
}
