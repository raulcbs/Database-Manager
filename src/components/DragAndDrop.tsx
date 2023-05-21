"use client"

import { Data } from "@/types";
import { validateJSON } from "@/utils/validateJSON";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

export function DragAndDrop() {

  const [ jsonContent, setJsonContent ] = useState<Data | null>(null)

  const handleDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[ 0 ];
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result as string;
        validateJSON(fileContent)
        console.log(file.type)
        try {
          const jsonData: Data = JSON.parse(fileContent);
          // Aquí puedes hacer algo con los datos JSON, como enviarlos a una API o procesarlos localmente
          console.log(jsonData);
          setJsonContent(jsonData)
        } catch (error) {
          throw new Error('Error al parsear el JSON')
        }
      };

      reader.readAsText(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/json': [ '.json' ]
    }, // Definimos los tipos de archivo aceptados
    onDrop: handleDrop,
    maxFiles: 1
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`flex items-center justify-center w-full ${isDragActive ? 'border-blue-500' : 'border-gray-600 hover:border-gray-500'
          }`}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">(.json)</p>
          </div>
          <input id="dropzone-file" {...getInputProps()} className="hidden" />
        </div>
      </div>
      <div className='max-w-lg bg-gray-600/40 mx-auto mt-8 p-4 rounded-md flex flex-col gap-8'>
        {
          jsonContent?.users.map(user => (
            <div className='flex flex-col gap-3 w-full border-b-[1px] border-gray-200/20'>
              <h2 className='font-bold text-xl text-gray-200'>Usuario: <span className='italic'>{user.name}</span></h2>
              <div className='ml-5'>
                <p className=' text-gray-200'>
                  <span className="font-bold">Name:</span> {user.name}
                </p>
                <p className=' text-gray-200'>
                  <span className="font-bold">Email:</span>  {user.email}
                </p>
              </div>
              <h3 className='font-bold text-lg text-gray-200'>Posts:</h3>
              {
                user.posts.map(post => (
                  <div className='ml-5 mb-4'>
                    <p className='text-gray-200'>
                      <span className="font-bold">Title:</span> {post.title}
                    </p>

                    <p className='text-gray-200'>
                      <span className="font-bold">Content:</span> {post.content}
                    </p>

                    {
                      post.published ?? (
                        <p className='text-gray-200'>
                          <span className="font-bold">Published:</span> {post.published}
                        </p>
                      )
                    }

                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  );
}