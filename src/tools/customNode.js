import { Position, Handle } from "react-flow-renderer"
import { useState } from "react"
import '../css/dist/output.css'
export const types = {
    custom : CustomNode,
}

export function CustomNode({data}){
    const [clicked, setClicked] = useState(false)
    return (
        <div className={`w-[200px] h-[200px] px-1 py-1 border-black border-2 shadow-black shadow-lg rounded-md text-white blur-sm hover:blur-none hover:bg-green-400 duration-200`}
             onClick={() => {setClicked(!clicked)}}>
            <Handle type='target' position={Position.Top} id="top"/>
            <div className={`text-center w-full h-full bg-neutral-800 border-black border-2 shadow-black shadow-inner`} >
                {data.label}
            </div>
            <Handle type='source' position={Position.Bottom} id="bottom"/>
        </div>
    )
}