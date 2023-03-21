import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";
import components from "./template";

type ComponentsListType = {
    visible: boolean,
    close: Function,
    addComponent : Function,
}


const ComponentsList: FC<ComponentsListType> = ({ visible, close, addComponent  }) => {

    const [ list, setList ] = useState(components);

    const add = (payload:any, type:string) => {
        addComponent({ name : payload.name, type, component : <payload.component/> })
    }
  
    return visible ? (
        <div className="w-screen h-fit p-10 z-30 bg-slate-700 absolute inset-0 backdrop-blur-md bg-opacity-60 flex justify-center">
            <div className=" bg-slate-700 w-3/4 rounded-xl border border-gray-400 opacity-70 h-fit flex flex-col">
                <div className="flex justify-end p-3">
                    <XMarkIcon onClick={ () => close()} className="w-7 hover:text-orange-500 hover:cursor-pointer"/>
                </div>
                <div className="p-4">
                {
                    Object.keys(components).map( type => (
                        <div key={type}>
                            <span className="block w-full bg-slate-900 p-1 px-4 rounded-full">{ type }</span>
                            <div className='flex'>
                                {
                                    components[type].map( (el, index) => (
                                        <div key={el.name + index} className='p-3 flex flex-col text-center' onClick={ () => add(el, type) }>
                                            <div className='px-24 py-10 bg-slate-500'></div>
                                            { el.name }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    ) : null
}


export default ComponentsList;