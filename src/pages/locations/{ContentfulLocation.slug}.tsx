import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/Layout'
import { LocationQuery } from '../../types/generated-gatsby'
import { Typography } from '@material-ui/core'

interface Props extends PageProps {
  data: LocationQuery
}

const Location: React.FC<Props> = (props: Props) => {
  const { data } = props
  return (
    <Layout>
      <Typography variant="h1">
        {data.contentfulLocation.city} Office
      </Typography>
    </Layout>
  )
}

export default Location

export const pageQuery = graphql`
  query Location($id: String!) {
    contentfulLocation(id: { eq: $id }) {
      id
      city
    }
  }
`
