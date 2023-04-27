import path from "path"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import Typography from "@/component/Typography"
import { MDXRemote } from "next-mdx-remote"
import { Button } from "@/component/Button"
import SyntaxHighlighter from "react-syntax-highlighter"
import Container from "@/component/Container"


const PostPage = ({ serializedContent }) => {

    const components = { Button, SyntaxHighlighter }
    const { frontmatter } = serializedContent

    console.log(frontmatter)
    return (
        <Container>

            <div className=" m-10 mt-24 leading-[1.5em] text-xl">
                <Typography variant={1}>{frontmatter.title}</Typography>
                <MDXRemote {...serializedContent} components={components} />

            </div>
           
        </Container>
    )
}


const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src', 'posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.split('.')[0],
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdown = fs.readFileSync(path.join('src', 'posts', slug + '.mdx'), 'utf-8')

    const serializedContent = await serialize(markdown, {
        format: 'mdx',
        parseFrontmatter: true,
        scope: '', // we can supply variables to the mdx files via scope
        mdxOptions: {
            remarkPlugins: [], // plugins like syntax highlighters
            rehypePlugins: [],
        },
    })

    return {
        props: {
            slug,
            serializedContent,
        },
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage