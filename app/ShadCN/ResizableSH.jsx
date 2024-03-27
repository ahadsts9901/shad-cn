import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"


const ResizableSH = () => {
    return (
        <>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel className='p-8'>One</ResizablePanel>
                <ResizableHandle withHandle className="border-[2px] border-zinc-900" />
                <ResizablePanel className='p-8'>Two</ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}

export default ResizableSH