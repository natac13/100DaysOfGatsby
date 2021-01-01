import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { LocationsQuery } from '../../types/generated-gatsby'
import { Link } from 'gatsby-material-ui-components'
import { IS_DEV } from '../../constants'

interface Props extends PageProps {
  data: LocationsQuery
}

const Locations: React.FC<Props> = (props: Props) => {
  const { data } = props
  return (
    <Layout>
      {data.allContentfulLocation.nodes.map((location) => (
        <Link
          key={location.id}
          to={`${IS_DEV ? 'locations/' : ''}${location.slug}`}
        >
          {location.city}
        </Link>
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
