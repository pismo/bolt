import { Button } from '@pismo/bolt-button'
import { colors, P, styled } from '@pismo/bolt-core'
import * as React from 'react'
import { useDropzone } from 'react-dropzone'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 20px;
  background-color: #ececec;
  align-self: center;
  border-color: ${colors.grey300};
  border-width: 2px;
  border-style: dotted;
  opacity: 0.75;
  cursor: pointer;
  width: 100%;
`

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FileItemLabel = styled(P)`
  color: ${colors.grey900};
  font-weight: 700;
  align-self: center;
  transition: color ease-in-out 5ms;
`

const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-color: ${colors.grey300};
  border-width: 0;
  border-top-width: 0.5px;
  border-style: solid;
  transition: background-color ease-in-out 5ms;
  &:hover {
    background-color: ${colors.grey700};
  }
  &:hover ${FileItemLabel} {
    color: #fff;
  }
`

export interface Props {
  placeholder?: string
  style?: React.CSSProperties
  accept?: string
  disabled?: boolean
  multiple?: boolean
  removeButtonLabel?: string
  onSelect?(files: File[]): null
  onRemove?(files: File[]): null
  onChange?(files: File[]): null
}

export const Uploader = ({
  style = {},
  accept = '',
  disabled = false,
  multiple = true,
  removeButtonLabel = 'Remover',
  onSelect = () => null,
  onRemove = () => null,
  onChange = () => null,
  placeholder = 'Click or drag files here',
}: Props) => {
  const [selectedFiles, setSelectedFiles] = React.useState([])

  React.useEffect(() => {
    onChange(selectedFiles)
  }, [selectedFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: files => {
      setSelectedFiles(selectedFiles.concat(files.filter(file => !selectedFiles.includes(file))))
      onSelect(selectedFiles)
    },
    accept,
    disabled,
    multiple,
  })

  return (
    <Wrapper>
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <P>{placeholder}</P>
      </Box>
      {selectedFiles.length > 0 && (
        <FileList>
          <P>Lista de arquivos</P>
          {selectedFiles.map(file => (
            <FileItem key={file.path}>
              <FileItemLabel>{file.name}</FileItemLabel>
              <Button
                onClick={() => {
                  setSelectedFiles(selectedFiles.filter(selectedFile => selectedFile !== file))
                  onRemove(selectedFiles)
                }}
              >
                {removeButtonLabel}
              </Button>
            </FileItem>
          ))}
        </FileList>
      )}
    </Wrapper>
  )
}
