import Image from 'next/image'
import { Flex } from '@/component/Flex'
import { Card } from '@/component/Card'
import Link from 'next/link'
import Typography from '@/component/Typography'
import fs from "fs"
import path from "path"


export default function Home({ posts }) {
  console.log(posts)
  return (
    <main className='mt-12'>
      <Flex>
        {
          posts.map((post, index) => {

            const { slug } = post
            const { frontMatter } = post

            const { title, thumbnailUrl, description , date} = frontMatter
            return (
              <Link href={`/blog/${slug}`} key={index} >
                <Card>
                 <div className='transition-all duration-300 ease-in-out h-[200px] w-full'>
                    <Image src={thumbnailUrl}  width={500} height={200} className='rounded-sm object-cover w-full h-full' alt={title} />
                 </div>

                 <div className='mt-3'>
                  <Typography variant={2} className='text-[1.2em] hover:underline font-normal'>
                    {title}
                  </Typography>
                 </div>

                 <div className='text-[0.96em] font-light mt-3'>
                  <p>{description}</p>
                 </div>

                 <div className='text-[0.96em] font-bold mt-3'>
                  {date}
                 </div>

                </Card>
              </Link>
            )
          })
        }

      </Flex>
    </main>
  )
}


export const getStaticProps = async () => {
  // const fs = require('fs')
  // const path = require('path')
  const matter = require('gray-matter')

  const files = fs.readdirSync(path.join('src', 'posts'))

  const posts = files.map((filename) => {
    const markDownwithMeta = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8')
    const { data } = matter(markDownwithMeta)

    return {
      frontMatter: data,
      slug: filename.split('.')[0]
    }
  })

  // console.log(posts)

  return {
    props: {
      posts
    }
  }
}
