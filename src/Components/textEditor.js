import React, { useMemo, useState } from "react"
import { createEditor } from "slate"
import { Slate, Editable, withReact, useSlate } from "slate-react"

const TextEditor = () => {
  const initialState = [{type: 'paragraph', children: [{ text: "edit me"}]}]
  const editor = useMemo( () => withReact(createEditor()), [])
  const [value, setValue] = useState(initialState)
  const onClickEmoji = (e) => {
    setValue([{type: 'paragraph', children: [{ text: value[0].children[0].text + e.target.innerText}]}])
  }
  return (
    <>
      <div>
        <span onClick={onClickEmoji}>&#128512;</span>
        <span onClick={onClickEmoji}>&#128513;</span>
        <span onClick={onClickEmoji}>&#128514;</span>
        <span onClick={onClickEmoji}>&#128515;</span>
      </div>
      <div style={{border:'1px solid gray',borderRadius:'10px',padding: 12, width: '70vw'}}>
        <Slate editor={editor} value={value} onChange={newVal => {setValue(newVal)}}>
          <Editable />
        </Slate>
      </div>
    </>
  )
}

export default TextEditor
