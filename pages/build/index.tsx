import { PlusCircleIcon, Bars3Icon, MinusCircleIcon } from '@heroicons/react/20/solid';
import NavigationT1 from '@/components/template/navigation/t_1';
import HeaderT1 from '@/components/template/header/t_1';
import PricingT1 from '@/components/template/pricing/t_1';
import FooterT1 from '@/components/template/footer/t_1';
import TeamT1 from '@/components/template/team/t_1';
import SortableList, { SortableItem } from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move'

import components from '@/components/template';
import { useEffect, useLayoutEffect, useState } from 'react';
import React from 'react'
import SelectComponent from '@/components/SelectedComponents';


const Generator = () => {

    type ComponentSetType = {
        name? : string,
        type? : string,
        component? : JSX.Element,
    }

    const [source, setSource] = useState(components);
     
    const [ data , setData ] = useState([
        { name : 'Header', type : 'Header' , component : <HeaderT1/> },
        { name : 'Pricing', type : 'Pricing' , component : <PricingT1/> },
        { name : 'Team', type : 'Team' , component : <TeamT1/> },
        { name : 'Footer', type : 'Footer' , component : <FooterT1/> }
    ]);

    const selected_components = data.map( ele => ele.component );

    const onSortEnd = (oldIndex: number, newIndex: number) => {
        setData((data) => arrayMoveImmutable(data, oldIndex, newIndex))
    }

    const selectComponent = (payload:any) => {
        setData( [ ...data, payload ] );
    }

    const removeComponent = (index:Number) => {
        setData( data.filter( ( el, key ) => key !== index ));
    }

    
    useEffect( () => {
        console.log("rendering..")
    }, [data])
 
    return (
        <div className="container">
            <div className="flex gap-10 px-10 mt-2">
                <SelectComponent
                    components={data}
                    reArrange={ (list:Array<ComponentSetType> ) => setData(list)}
                    removeComponent={removeComponent}
                    addComponent={selectComponent}
                />
                <div id='template' className="w-10/12 h-screen bg-slate-600 flex flex-col">
                    {/* <NavigationT1 /> */}
                    <div className='p-3 flex gap-2 justify-end bg-gray-300 rounded-t-md'>
                        <div className='p-2 w-full rounded-xl bg-slate-100'></div>
                        <span className='p-2 rounded-full bg-green-500'></span>
                        <span className='p-2 rounded-full bg-yellow-500'></span>
                        <span className='p-2 rounded-full bg-red-500'></span>
                    </div>
                    <div className='h-fit overflow-scroll'>
                        { selected_components }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generator;