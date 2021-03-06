import * as React from 'react'
import ChallengeMaterial from '../../components/ChallengeMaterial'

export default {
  component: ChallengeMaterial,
  title: 'Components/ChallengeMaterial'
}

const challenges = [
  {
    description:
      'Write a function that takes in a number and returns true if that number is greater than 5. Otherwise, return false.',
    id: '105',
    order: 0,
    title: 'Greater than 5'
  },
  {
    description:
      'Write a function that takes in 2 numbers and returns their sum.',
    id: '107',
    order: 1,
    title: 'Sum of 2 Numbers'
  }
]

const lessonStatus = {
  isEnrolled: '213423534',
  isTeaching: null
}

export const Basic: React.FC = () => (
  <ChallengeMaterial
    challenges={challenges}
    userSubmissions={[]}
    lessonStatus={lessonStatus}
    chatUrl="https://chat.c0d3.com/c0d3/channels/js0-foundations"
    lessonId="5"
  />
)

export const NoChallenges: React.FC = () => (
  <ChallengeMaterial
    challenges={[]}
    userSubmissions={[]}
    lessonStatus={lessonStatus}
    chatUrl="https://chat.c0d3.com/c0d3/channels/js0-foundations"
    lessonId="5"
  />
)
