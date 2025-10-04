import React from 'react'
import Introduction from './Introduction'
import NeetExam from './NeetExam'
import NeetCounselling from './NeetCounselling'

export default function NeetUGPage() {
    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto  px-6 sm:px-10 py-3 sm:py-6">
                <Introduction/>
                <NeetExam/>
                <NeetCounselling/>
            </div>
        </div>
    )
}

