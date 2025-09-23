import React from 'react'
import { TbMessage2Exclamation } from 'react-icons/tb'

function MessageNotif({message}) {
    return (

        <div class="flex p-3 items-center  rounded-[14px] shadow ">
            <div>
                <TbMessage2Exclamation className="text-2xl text-blue-500" />
            </div>
            <div class="ml-3 font-sans text-xs leading-6 text-[#000]">
                This is Message
            </div>
        </div>
    )
}

export default MessageNotif