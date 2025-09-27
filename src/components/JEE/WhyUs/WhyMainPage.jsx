import React from 'react'
import JeeWhyUs from './JeeWhyUs'
import StudyCompanionSection from './StudyCompanionSection'
import TestimonialScroller from './TestimonialScroller'
import ComparisonTable from './ComparisonTable'
import QuestPixDifference from './QuestPixDifference'

export default function WhyMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <JeeWhyUs/>
        <StudyCompanionSection/>
        <TestimonialScroller/>
        <ComparisonTable/>
        <QuestPixDifference/>
    </div>
    </div>
  )
}
