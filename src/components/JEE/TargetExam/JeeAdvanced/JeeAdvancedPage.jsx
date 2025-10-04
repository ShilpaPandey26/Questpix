import React from 'react'
import Introduction from './Introduction';
import MarksDistribution from './MarkingSchema';
import MarkingSchema from './MarkingSchema';
import ImportantDates from './ImportantDates';



export default function JeeAdvancedPage() {
    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto  px-6 sm:px-10  py-3 sm:py-6">
                <Introduction />
                <MarkingSchema />
                <ImportantDates />

            </div>
        </div>
    )
}

