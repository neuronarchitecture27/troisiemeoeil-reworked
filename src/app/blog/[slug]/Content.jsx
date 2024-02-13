import styles from './page.module.scss'
import Bold from '@tiptap/extension-bold'

import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import CodeBlock from '@tiptap/extension-code-block'
import Blockquote from '@tiptap/extension-blockquote'
import Text from '@tiptap/extension-text'
// Option 1: Browser + server-side
import { generateHTML } from '@tiptap/html'
import React, { useMemo } from 'react'



export default ({content}) => {
 
    const output = useMemo(() => {
        return generateHTML(content, [
          Document,
          Heading,
          Paragraph,
          Text,
          Bold,
          CodeBlock,
          Blockquote
          // other extensions …
        ])
      }, [content])
  return (
    <div  className={styles.container}  >
<div dangerouslySetInnerHTML={{ __html: output }} />
      
    </div>
   
  )
}