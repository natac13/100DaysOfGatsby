import { Typography } from '@material-ui/core'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { LocationsQuery } from '../../types/generated-gatsby'
import { Link } from 'gatsby-material-ui-components'

interface Props extends PageProps {
  data: LocationsQuery
}

const Locations: React.FC<Props> = (props: Props) => {
  const { data } = props
  return (
    <Layout>
      {data.allContentfulLocation.nodes.map((location) => (
        <Link to={`locations/${location.slug}`}>{location.city}</Link>
      ))}
    </Layout>
  )
}

export default Locations

export const pageQuery = graphql`
  query Locations {
    allContentfulLocation {
      nodes {
        id
        slug
        city
      }
    }
  }
`
