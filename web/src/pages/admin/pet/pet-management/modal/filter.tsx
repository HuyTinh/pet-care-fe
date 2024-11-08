import React from 'react'

const FilterComponent = ({handleSetFilter, searchBy}) => {
    
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
            >
                Filter
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg text-black relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Find by
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ×
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <fieldset>
                                        <div className="flex flex-wrap gap-x-6 gap-y-8">
                                            <label
                                                htmlFor="id"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="id" 
                                                        checked={searchBy.includes("id")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Pet ID</strong>
                                                </div>
                                            </label>

                                            <label
                                                htmlFor="customerName"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="customerName" 
                                                        checked={searchBy.includes("customerName")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Customer Name</strong>
                                                </div>
                                            </label>

                                            <label
                                                htmlFor="petName"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="petName" 
                                                        checked={searchBy.includes("petName")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Pet Name</strong>
                                                </div>
                                            </label>

                                            <label
                                                htmlFor="species"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="species" 
                                                        checked={searchBy.includes("species")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Pet Species</strong>
                                                </div>
                                            </label>
                                            <label
                                                htmlFor="age"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="age" 
                                                        checked={searchBy.includes("age")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Pet Age</strong>
                                                </div>
                                            </label>
                                            <label
                                                htmlFor="weight"
                                                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 w-full sm:w-[calc(50%-0.75rem)]"
                                            >
                                                <div className="flex items-center">
                                                    &#8203;
                                                    <input 
                                                        type="checkbox" 
                                                        className="size-4 rounded border-gray-300"
                                                        id="weight" 
                                                        checked={searchBy.includes("weight")}
                                                        onChange={handleSetFilter}    
                                                    />
                                                </div>

                                                <div>
                                                    <strong className="font-medium text-gray-900">Pet Weight</strong>
                                                </div>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="btn border border-1 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Set Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default FilterComponent
