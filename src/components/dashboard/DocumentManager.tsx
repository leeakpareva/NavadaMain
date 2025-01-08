import React, { useCallback } from 'react';
import { Document, DocumentType } from './types';

interface DocumentManagerProps {
  documents: Document[];
  onUpload: (document: Document) => void;
  onDelete: (id: string) => void;
}

const DocumentManager: React.FC<DocumentManagerProps> = ({
  documents,
  onUpload,
  onDelete,
}) => {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Please upload PDF, DOC, DOCX, JPG, or PNG files.');
      return;
    }

    // Create document object
    const newDocument: Document = {
      id: `doc_${Date.now()}`,
      name: file.name,
      type: getDocumentType(file.name),
      url: URL.createObjectURL(file),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    onUpload(newDocument);
  }, [onUpload]);

  const getDocumentType = (filename: string): DocumentType => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (filename.toLowerCase().includes('resume') || filename.toLowerCase().includes('cv')) {
      return 'resume';
    } else if (filename.toLowerCase().includes('portfolio')) {
      return 'portfolio';
    } else if (filename.toLowerCase().includes('cert')) {
      return 'certification';
    }
    return 'other';
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">My Documents</h2>
      
      {/* Upload Section */}
      <div className="mb-6">
        <label className="block mb-2">Upload Document</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileUpload}
          className="w-full"
        />
        <p className="text-sm text-gray-500 mt-1">
          Supported formats: PDF, DOC, DOCX, JPG, PNG
        </p>
      </div>

      {/* Document List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 border rounded hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-500 capitalize">{doc.type}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <a
                href={doc.url}
                download={doc.name}
                className="text-blue-600 hover:underline text-sm"
              >
                Download
              </a>
              <button
                onClick={() => onDelete(doc.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentManager;
