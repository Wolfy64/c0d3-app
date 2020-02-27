import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Layout from '../components/Layout'
import LessonCard from '../components/LessonCard'

import { GET_LESSONS } from '../graphql/queries'
type Challenge = {
  id: number
}

type Lesson = {
  id: number
  title: string
  description: string
  order: number
  challenges: Challenge[]
}

const Curriculum: React.FC = () => {
  const { loading, data } = useQuery(GET_LESSONS)
  if (loading) {
    return <h1>Loading</h1>
  }

  if (data) {
    const { lessons }: { lessons: Lesson[] } = data
    const sortedLessons: React.ReactElement[] = lessons
      .sort((a, b) => a.order - b.order)
      .map((e, idx) => (
        <LessonCard
          key={e.id}
          coverImg={`js-${idx}-cover.svg`}
          title={e.title}
          lessonCount={10}
          challengeCount={e.challenges.length}
          hourCount={2}
          description={e.description}
        ></LessonCard>
      ))
    return (
      <Layout>
        <>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              {sortedLessons}
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
          </div>
        </>
      </Layout>
    )
  }

  return <h1>...</h1>
}

export default Curriculum
