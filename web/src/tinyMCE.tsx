import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useTestTinyMCEMutation } from './pages/admin/doctor/prescription.service';

export default function TinyMCE() {
    const editorRef = useRef<any>(null);
    const [testTinyMCE] = useTestTinyMCEMutation()

    const log = () => {
        if (editorRef.current) {
            testTinyMCE(editorRef.current.getContent());
        }
    };
    return (
        <div className='mt-28'>
            <Editor
                apiKey='3q3fwbtk8nu12pn587p8vzmlmkr41h24xg6zarcl7lk08iw9'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue="<img src='https://res.cloudinary.com/dprkvtle0/image/upload/v1731910306/xcfsidzxsi1qlbfh5qpl.webp' />"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </div>
    );
}