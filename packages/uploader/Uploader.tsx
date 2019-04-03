import { styled } from '@pismo/bolt-core'
import * as React from 'react'
import { useDropzone } from 'react-dropzone'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px 20px;
  padding: 20px;
  background-color: azure;
`

const FileList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  margin: 10px;
`

const Input = styled.input`
  width: 100%;
  height: 20px;
`

export const Uploader = ({
  style = {},
  accept,
  disabled = false,
  multiple = true,
  onSelect,
  onRemove,
  placeholder,
}) => {
  const [selectedFiles, setSelectedFiles] = React.useState([])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: files => {
      setSelectedFiles(files.filter(file => !selectedFiles.includes(file)))
      onSelect(selectedFiles)
    },
    accept,
    disabled,
    multiple,
  })

  return (
    <Wrapper>
      <Box {...getRootProps({ style })}>
        <Input {...getInputProps()} />
        <p>{placeholder}</p>
      </Box>
      <FileList>
        {selectedFiles.map(file => (
          <FileItem key={file.path}>
            <p>{file.name}</p>
            <button
              onClick={() => {
                setSelectedFiles(selectedFiles.filter(selectedFile => selectedFile !== file))
                onRemove(selectedFiles)
              }}
            >
              Remover
            </button>
          </FileItem>
        ))}
      </FileList>
    </Wrapper>
  )
}
