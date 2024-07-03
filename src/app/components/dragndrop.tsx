import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import './style.css';

const fileTypes = ["JPG", "PNG", "PDF", "DOCX", "JPEG"];

interface FileUploadComponentProps {
  setUploadedFiles: (files: File[]) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({ setUploadedFiles }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (file: File | File[]) => {
    let newFiles: File[];
    if (file instanceof FileList) {
      newFiles = Array.from(file);
    } else if (Array.isArray(file)) {
      newFiles = file;
    } else {
      newFiles = [file];
    }
    setFiles([...files, ...newFiles]);
    setUploadedFiles([...files, ...newFiles]);
  };

  const handleDelete = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className="file-upload-container">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple={true}
      />
      <div className="file-list-container">
        {files.map((file, index) => (
          <div className="file-card" key={index}>
            {file.type.startsWith('image') ? (
              <img src={URL.createObjectURL(file)} alt={file.name} className="file-preview" />
            ) : (
              <div className="file-preview file-icon">
                <span></span>
              </div>
            )}
            <div className="file-name">{file.name}</div>
            <div className="delete-icon" onClick={() => handleDelete(file.name)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadComponent;
