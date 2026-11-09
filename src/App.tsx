import { ControlBar } from '@/components/controls/ControlBar/ControlBar'
import { MobileControls } from '@/components/controls/MobileControls/MobileControls'
import { EducationSection } from '@/components/cv/EducationSection/EducationSection'
import { ExperienceSection } from '@/components/cv/ExperienceSection/ExperienceSection'
import { ProfileHero } from '@/components/cv/ProfileHero/ProfileHero'
import { SkillsSection } from '@/components/cv/SkillsSection/SkillsSection'
import { VolunteerSection } from '@/components/cv/VolunteerSection/VolunteerSection'
import { Footer } from '@/components/layout/Footer/Footer'
import { PageContainer } from '@/components/layout/PageContainer/PageContainer'
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout/TwoColumnLayout'
import { education, experience, profile, skillGroups, volunteer } from '@/data/cv'

export default function App() {
  return (
    <>
      <ControlBar brand={profile.brand} />
      <MobileControls />
      <PageContainer>
        <ProfileHero profile={profile} />
        <TwoColumnLayout
          main={
            <>
              <ExperienceSection items={experience} />
              <VolunteerSection items={volunteer} />
            </>
          }
          aside={
            <>
              <EducationSection items={education} />
              <SkillsSection groups={skillGroups} />
            </>
          }
        />
        <Footer location={profile.location} status={profile.footerStatus} />
      </PageContainer>
    </>
  )
}
