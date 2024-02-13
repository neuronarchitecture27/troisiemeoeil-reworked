import styles from './page.module.scss'
import Bold from '@tiptap/extension-bold'

import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import CodeBlock from '@tiptap/extension-code-block'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'
import BulletList from '@tiptap/extension-bullet-list'


import Blockquote from '@tiptap/extension-blockquote'
import Image from '@tiptap/extension-image'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'




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
          Blockquote,
          Image,
          TaskItem,
          TaskList,
          ListItem,
          OrderedList,
          Code,
          Link,
          BulletList
          // other extensions …
        ])
      }, [content])
  return (
    <div  className={styles.container}  >
        <div className=" w-full h-[4rem]"></div> 

<div className='w-[80%]' dangerouslySetInnerHTML={{ __html: output }} />
      
    </div>
   
  )
}