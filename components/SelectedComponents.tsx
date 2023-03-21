import { MinusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { arrayMoveImmutable } from "array-move";
import SortableList, { SortableItem } from "react-easy-sort";
import { FC, useState } from "react";
import ComponentsList from "./ComponentsList";

type SelectComponentType = {
    components : Array<object>,
    reArrange : Function,
    removeComponent : Function,
    addComponent : Function
}

const SelectComponent: FC<SelectComponentType> = ({ components, reArrange, removeComponent, addComponent }) => {

    const [ listVisible, SetListVisible ] = useState(false)

    const onSortEnd = (oldIndex: number, newIndex: number) => {
        reArrange(arrayMoveImmutable(components, oldIndex, newIndex));
    }

    return (
        <div className="w-1/5 bg-slate-600 p-4 rounded-lg border-sky-800 border-2 bg-opacity-50 flex flex-col gap-3">
           <div className="w-full flex justify-end">
                <PlusIcon className="w-5 hover:text-orange-500" onClick={() => SetListVisible(status => true)} />
           </div>
           <SortableList onSortEnd={onSortEnd} className="list flex flex-col gap-2" draggedItemClassName="dragged">
            {
                components.map( (el:any, index:any ) => (
                    <SortableItem key={index}>
                        <div className="bg-slate-500 px-6 p-2 select-none border-sky-800 bg-opacity-60 backdrop-blur-lg border-2 flex justify-between rounded-full">
                            <span> {el.name} <span className="text-xs bg-slate-800 px-2 rounded-full">{el.type}</span> </span>
                            <MinusCircleIcon onClick={ () => removeComponent(index) } className='w-5 text-slate-800 hover:text-slate-900'/>
                        </div>
                    </SortableItem>
                ))
            }   
            </SortableList>
            <ComponentsList 
                visible={listVisible}
                close={() => SetListVisible( status => false)}
                addComponent={addComponent}
            />
        </div>    
    )}


export default SelectComponent;