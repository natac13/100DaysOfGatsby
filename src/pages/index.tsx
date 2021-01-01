import { Typography } from '@material-ui/core'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { IndexPageQuery } from '../types/generated-gatsby'

interface Props extends PageProps {
  data: IndexPageQuery
}

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Typography variant="h1">
        {props.data.site?.siteMetadata?.title}
      </Typography>
      <Typography>Here we deal with Headphones.</Typography>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        author
        siteRepo
        description
      }
    }
  }
`
