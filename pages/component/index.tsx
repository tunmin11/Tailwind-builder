import { useState } from "react";
import { PhotoIcon, PlusCircleIcon } from '@heroicons/react/20/solid';

const classes = {
    width : {
        
    }
}

const Component = () => {

    const elements = useState({
        element_1 : {
            element : 'div',
            className : [],
            child : {
                element_1_1 : {
                    element : 'div',
                    className : [],
                    child : {}
                }
            },
        }
    });

    const addElement = (index: string, element: string) => {
        type key = keyof typeof elements;
        const key_index = index as key;
        let new_elements = elements[key_index].child.push({
            element, 
            className : [],
            child : {}
        })
    }

    return (
        <>
            <div className="flex justify-center p-4 gap-2">

                {/* Elements list */}
                {/* <div className="bg-gray-100 w-1/4 rounded-lg">
                    <div className="w-full p-3 bg-gray-500 rounded-t-lg">
                        <h3 className="font-bold tracking-wider pb-1">Elements</h3>
                    </div>
                    <div className="flex flex-wrap m-1">
                        <div className="w-1/2 p-2 text-gray-800 text-center hover:bg-slate-300 cursor-default transform duration-150">
                            <div className="px-3 py-10 bg-gray-600">
                            </div>
                            <span className="select-none">Block</span>
                        </div>
                        
                        <div className="w-1/2 p-2 text-gray-800 text-center hover:bg-slate-300 cursor-default transform duration-150">
                            <div className="px-3 py-10 ">
                                <hr className="border-gray-800"/>
                            </div>
                            <span className="select-none">Divider </span>
                        </div>

                        <div className="w-1/2 p-2 text-gray-800 text-center hover:bg-slate-300 cursor-default transform duration-150">
                            <div className="px-3 py-6 bg-gray-600 flex justify-center">
                                <PhotoIcon className="w-1/3 text-white"/>
                            </div>
                            <span className="select-none">Image</span>
                        </div>
                        
                        <div className="w-1/2 p-2 text-gray-800 text-center hover:bg-slate-300 cursor-default transform duration-150">
                            <div className="px-3 py-1 flex justify-center">
                                <div className="w-20 h-20 bg-gray-600 rounded-full"></div>
                            </div>
                            <span className="select-none">Circle </span>
                        </div>
                    </div>
                </div> */}

                {/* Component Output */}
                <div className="p-4 bg-gray-300 w-3/5 h-96 rounded-md flex relative">
                <button className="w-10 bg-slate-800 p-1 rounded-l-full opacity-10 hover:opacity-75 transform duration-500 absolute right-0 hover:w-11 " title="Add Element">
                    <PlusCircleIcon/>
                </button>     
                </div>

                {/* Component Editor */}
                <div className="p-4 bg-indigo-500 w-1/5 rounded-md">

                    <div className="gap-3 flex flex-wrap border-b-2 border-gray-600 pb-4">
                        <span>Add Classes</span>
                        <input type="text" className="bg-gray-300 rounded-lg border border-gray-800"/>
                        <button className="bg-gray-600 hover:bg-gray-800 p-1 px-2 rounded-lg">Add</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Component;