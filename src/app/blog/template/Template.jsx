import { MDXRemote } from 'next-mdx-remote/rsc'

export default function MdxLayout() {
    // Create any shared layout or styles here
    return   (
      <MDXRemote
      source={`# Hello World
  
      This is from Server Components!
      `}
    />
    )
  }