"use client"

import { convertFileToUrl } from '@/lib/util'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderProps = {
 files: File[] | undefined,
 onChange: (file: File[]) => void
}
export const FileUploader = ({files , onChange}: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
          {files && files.length > 0 ? (
              <Image
                  src={convertFileToUrl(files[0])}
                  width={100}
                  height={100}
                  alt='Uploded Image'
                  className='max-h-[400px] overflow-hidden object-cover' />
          ) :
              <>
                  <Image

                      src="/assets/icons/upload.svg"
                      width={40}
                      height={40}
                      alt='Upload' />

                  <div className='file_upload_label'>
                      <p className='text-14-reguler'>
                          <span className='text-green-500'>Click to upload</span> or drang and drop
                      </p>
                      <p>SVG, PNG, JPG or Gif (Max 800x400)</p>
                  </div>
              </>
          }
    </div>
  )
}