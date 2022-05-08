import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const initialValue = `
<h2 className="ql-align-center">Embedding videos and images is simple</h2>
<p>To embed a video click video icon and paste a link to YouTube, Vimeo or other video service which supports
  inserting
  via iframe. Images are more complex you will need to setup uploading function and then editor will handle all
  heavy
  image stuff: dnd, pasting from clipboard and inserting with image button. Try the thing out!</p>
<h3>Image embed</h3>
<p>
<img src="https://example.com">
</p>
<p><br></p>
<h3>YouTube video embed</h3>
<iframe className="ql-video" frameBorder="0" allowFullScreen="true"
        src="https://example.com"></iframe>
<p><br></p>
<h3>Vimeo video embed</h3>
<iframe className="ql-video" frameBorder="0" allowFullScreen="true"
        src="https://example.com"></iframe>
<p>
  <br/>
</p>
`;

export default function Demo() {
  const [value, onChange] = useState(initialValue);
  return <SSRWrapper value={value} onChange={onChange} />;
}
