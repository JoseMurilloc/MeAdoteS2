
import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import { DropZoneContainer } from './styles'

interface Props {
  onFileUploaded: (file: File) => void;
  profileAvatar?: string;
}

export function Dropzone({onFileUploaded, profileAvatar}: Props) {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
      
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);

    onFileUploaded(file);
  }, [onFileUploaded]);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <DropZoneContainer {...getRootProps()} onChange={() => {}}>
    <input {...getInputProps()} accept="image/*" />
    { selectedFileUrl
      ? <img src={selectedFileUrl} alt="Imagem do perfil" />
      : (
        <img src={profileAvatar} alt="Profile avatar" />
      )
    }
  </DropZoneContainer>  )
}