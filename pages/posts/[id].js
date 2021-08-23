import { getPostData, getAllPostIds } from '../../lib/posts'
import Layout from '../../components/layout'
import {useRouter} from "next/router";
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
      </Layout>
    )
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
//   const paths =     
//   [
//       {
//         params: {
//           id: 'ssg-ssr'
//         }
//       },
//       {
//         params: {
//           id: 'pre-rendering'
//         }
//       }
//     ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

// export default function Post() {
//     const router = useRouter();

//     return (
//         <Layout>
//             <p>Hello, my name is {router.query.profile} seo, I use next.js111</p>
//         </Layout>
//     )
// }