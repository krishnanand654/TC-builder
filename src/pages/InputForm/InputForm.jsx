/* eslint-disable no-unused-vars */
import { Form, Input, Select, DatePicker, Button, Col, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../../Components/AppNavbar/AppNavbar';
import { ReloadOutlined, CloudDownloadOutlined, EyeOutlined } from '@ant-design/icons'

const { Option } = Select;
function InputForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [response, setResponse] = useState({});
    const [dobDate, setDobDate] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [lastAttendanceDate, setLastAttendanceDate] = useState("");
    const [removedDate, setRemovedDate] = useState("");
    const [applicationDate, setApplicationDate] = useState("");
    const [certificateIssueDate, setCertificateIssueDate] = useState("");

    const token = localStorage.getItem("token");

    const nav = useNavigate();


    const onFinish = (values) => {
        values.dob = dobDate;
        values.admissionDate = admissionDate;
        values.lastAttendanceDate = lastAttendanceDate;
        values.removedDate = removedDate;
        values.applicationDate = applicationDate;
        values.certificateIssueDate = certificateIssueDate;

        populateData(values);
    };

    const populateData = async (data) => {
        setIsLoading(true);
        await axios.post(`${import.meta.env.VITE_BASE_URL}/generate-pdf`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setIsLoading(false);
                setIsSuccess(true);
                message.success('Pdf Generated successfully');
                console.log(response.data);
                setResponse(response.data);
            })
            .catch(error => {
                setIsSuccess(false);
                if (error.response.status == 403) {
                    localStorage.clear();
                    nav('/')
                }
                message.error('Error creating PDF');
            }).finally(()=>{
                setIsLoading(false);
            })

    }



    function convertDateFormat(inputDate) {

        var parts = inputDate.split('-');
        var convertedDate = new Date(parts[0], parts[1] - 1, parts[2]);

        var day = convertedDate.getDate();
        var month = convertedDate.getMonth() + 1;
        var year = convertedDate.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return day + '/' + month + '/' + year;
    }



    const onDobDateChange = (date, dateString) => setDobDate(convertDateFormat(dateString));
    const onAdmissionDateChange = (date, dateString) => setAdmissionDate(convertDateFormat(dateString));
    const onLastAttendanceDateChange = (date, dateString) => setLastAttendanceDate(convertDateFormat(dateString));
    const onRemovedDateChange = (date, dateString) => setRemovedDate(convertDateFormat(dateString));
    const onApplicationDateChange = (date, dateString) => setApplicationDate(convertDateFormat(dateString));
    const onCertificateIssueDateChange = (date, dateString) => setCertificateIssueDate(convertDateFormat(dateString));


    const onDownload = async (url) => {
        setIsDownloaded(true);
        await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
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
                message.success('Download successful');
                setIsDownloaded(false);
            })
            .catch(error => {
                message.error("Error Downloading PDF");
                console.error('Error creating PDF:', error);
            }).finally(() => {
                setIsDownloaded(false);
            });

    }

    return (
        <>
            <AppNavbar />
            <div >
                {token ? (
                    <>

                        {/* < Navbar /> */}
                        <div>
                            <div className='section' style={{ padding: '100px 20px' }}>
                                <div>
                                  
                                    <Form name="custom-form" onFinish={onFinish}>

                                        <Form.Item label="TC Number" name="tcNo" rules={[{ required: true, message: 'Please enter the TC number' }]}>
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item label="Name of pupil" name="pupilName" rules={[{ required: true, message: 'Please enter the name of the pupil' }]}>
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Col span={10}>
                                            <Form.Item label="Admission No." name="admissionNo" rules={[{ required: true, message: 'Please enter the admission number' }]}>
                                                <Input className='custom-input' />
                                            </Form.Item>
                                        </Col>


                                        <Form.Item label="Name of parent/guardian and relationship to the guardian" name="guardianName" rules={[{ required: true, message: 'Please enter the parent/guardian name' }]}>
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item label="Identification marks if any" name="identificationMarks">
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item label="Religion" name="religion" rules={[{ required: true, message: 'Please enter the religion' }]}>
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item name="casteCategory" label={
                                            <span style={{ height: "45px" }}>
                                                Whether the candidate belongs to SC/ST or OBC<br />
                                                or whether he/she is a convert from the SC/ST

                                            </span>

                                        } rules={[{ required: true, message: 'Please select an option' }]}>
                                            <Select >
                                                <Option value="General">General</Option>
                                                <Option value="SC">SC</Option>
                                                <Option value="ST">ST</Option>
                                                <Option value="OBC">OBC</Option>
                                                <Option value="Convert">Convert</Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item label="Date of birth according to Admission Register (in words)" name="dob" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onDobDateChange} />
                                        </Form.Item>

                                        <Form.Item label="Standard in which the pupil was last enrolled (in words)" name="lastEnrolled" rules={[{ required: true, message: 'Please enter the standard' }]}>
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item label="Date of Admission or promotion to that Standard" name="admissionDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onAdmissionDateChange} />
                                        </Form.Item>

                                        <Form.Item label="Whether qualified for promotion to a Higher Standard" name="qualifiedForPromotion" rules={[{ required: true, message: 'Please select an option' }]}>
                                            <Select>
                                                <Option value={true}>Yes</Option>
                                                <Option value={false}>No</Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item label="Whether the pupil has paid all the fees due to School" name="feesPaid" rules={[{ required: true, message: 'Please select an option' }]}>
                                            <Select>
                                                <Option value={true}>Yes</Option>
                                                <Option value={false}>No</Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item label="Whether the pupil was in receipt of the fee concession" name="feeConcession" rules={[{ required: true, message: 'Please select an option' }]}>
                                            <Select>
                                                <Option value={true}>Yes</Option>
                                                <Option value={false}>No</Option>
                                            </Select>
                                        </Form.Item>


                                        <Form.Item label="Date of the pupil's last attendance at School" name="lastAttendanceDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onLastAttendanceDateChange} />
                                        </Form.Item>

                                        <Form.Item label="Date on which the name was removed from rolls" name="removedDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onRemovedDateChange} />
                                        </Form.Item>



                                        <Form.Item label="Date of Application for Certificate" name="applicationDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onApplicationDateChange} />
                                        </Form.Item>

                                        <Form.Item label="Date of Issue of the Certificate" name="certificateIssueDate" rules={[{ required: true, message: 'Please select a date' }]}>
                                            <DatePicker size='small' onChange={onCertificateIssueDateChange} />
                                        </Form.Item>

                                        <Form.Item label="Reason for leaving" name="reasonForLeaving">
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item label="School to which the pupil intends proceeding" name="intendsProceeding">
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Number of School days unto the date"
                                            name="schoolDaysUntoDate"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter the number of days',
                                                },
                                                {
                                                    pattern: /^[0-9]+$/,
                                                    message: 'Please enter a valid number of days (numeric characters only)',
                                                },
                                            ]}
                                        >
                                            <Input className='custom-input' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Number of School days pupil attended"
                                            name="schoolDaysAttended"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter the number of days',
                                                },
                                                {
                                                    pattern: /^[0-9]+$/,
                                                    message: 'Please enter a valid number of days (numeric characters only)',
                                                },
                                            ]}
                                        >
                                            <Input className='custom-input' />
                                        </Form.Item>



                                        <Form.Item label="Character and Conduct" name="characterAndConduct">
                                            <Input.TextArea />
                                        </Form.Item>

                                        <Form.Item>
                                            <div className="flex flex-wrap justify-between gap-3">
                                                <div className="flex flex-wrap align-items-center gap-4">
                                                <Button className="bg-black text-white " htmlType="submit" loading={isLoading}>
                                                    {isLoading ? 'Generating' : !isSuccess ? 'Submit' : <>
                                                        <div className="flex gap-2 align-items-center">
                                                            <ReloadOutlined />
                                                            <span>Regenerate</span>
                                                        </div>

                                                    </>}
                                                </Button>

                                                {isSuccess && <>
                                                    <Button loading={isDownloaded} onClick={() => { onDownload(response.downloadUrl) }} className="flex align-items-center">
                                                        <CloudDownloadOutlined style={{ fontSize: '16px' }} /> Download
                                                    </Button>
                                                    <a href={response.url} style={{ textDecoration: 'none' }} target="_blank"> <EyeOutlined /> Preview</a>
                                                    
                                                </>
                                                }
                                                </div>
                                                <Button htmlType="reset" onClick={()=>{setIsSuccess(false)}}>Reset Form</Button>
                                            </div>
                                        </Form.Item>
                                    </Form>

                                </div>

                            </div>

                        </div>
                    </>) : <p>Please Login</p>
                }
            </div >
        </>
    )
}

export default InputForm