// import { useSearchParams } from 'next/navigation'

// export default function getSlug()  {
//     const searchParams = useSearchParams()
//     const slug = searchParams.get('id')
//     return slug
//   }

'use client'
 
import { useParams } from 'next/navigation'
 
export default function getSlug() {
  const params = useParams()
 
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
 
  return params
}