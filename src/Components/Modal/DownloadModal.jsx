import React, { useState, useEffect } from 'react';
import { Button, Modal, Progress } from 'antd';
import axios from 'axios';

const DownloadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [position, setPosition] = useState('end');
  const [loading, setLoading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const token = localStorage.getItem("token");

  const showModal = () => {
    setIsModalOpen(true);
    setValue(0); 
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDownload = async() =>{
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_BASE_URL}/download-pdf?fileName=TC.pdf`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          
      },
      responseType: 'blob'
  })
  .then(response => {
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'TC.pdf');  
    document.body.appendChild(link);
    link.click();  
    document.body.removeChild(link); 
    setLoading(false);
    setIsDownloaded(true);
  })
  .catch(error => {
      console.error('Error creating PDF:', error);
  }).finally(()=>{
    setLoading(false);
  });

  }

  useEffect(() => {
    setIsDownloaded(false);
    let timer;
    if (isModalOpen && value < 100) {
      timer = setTimeout(() => {
        setValue((prevValue) => prevValue + 1);
      }, 10);
    }
    return () => clearTimeout(timer);

  }, [isModalOpen, value]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Generate TC
      </Button>
      <Modal title="Download Progress" footer={null}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        <Progress percent={value} status="active" />
        {value == 100 && <><p className="text-[#16a34a]">PDF Generated Successfully</p>
        <Button type="primary" loading={loading} disabled={isDownloaded} iconPosition={position} onClick={onDownload}>
        Download {isDownloaded ? 'Completed' : 'File'}
      </Button></>}      
      </Modal>
    </>
  );
};

export default DownloadModal;
