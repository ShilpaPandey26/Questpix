import React from 'react'
import Introduction from './Introduction';
import SyllabusTable from './SyllabusTable';
import MarksDistribution from './MarksDistribution';
import MarkingSchema from './MarkingSchema';
import ImportantDates from './ImportantDates';


export default function JeeMainPage() {
    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto  px-6 sm:px-10 py-3 sm:py-6">
                <Introduction/>
                <SyllabusTable/>
                <MarksDistribution/>
                <MarkingSchema/>
                <ImportantDates/>
               
               
            </div>
        </div>
    )
}

