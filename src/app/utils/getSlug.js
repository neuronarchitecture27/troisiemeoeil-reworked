

'use client'
 
import { useParams } from 'next/navigation'
 
export default function getSlug() {
  const params = useParams()
  return params
}