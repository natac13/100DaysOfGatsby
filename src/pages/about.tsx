import { LinearProgress, Typography } from '@material-ui/core'
import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

interface Props extends PageProps {
  data: {}
}

const About: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Typography variant="h1">About Us</Typography>
      <Typography variant="h2">Under Construction</Typography>
      <LinearProgress variant="indeterminate" color="primary" />
    </Layout>
  )
}

export default About
