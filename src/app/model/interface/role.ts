export interface IRole {
    roleId: number,
    role: string
}
export interface IDesignation {
    designationId: number,
    designation: string
}
export interface IClient {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
    employeeStrength: number;
    gstNo: string;
    contactNo: string;
    regNo: string;
}
export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}
export interface IEmployee {
    empName: string
    empId: string,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}
export interface IClientProject {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    projectName: string,
    startDate: string,
    expectedEndDate: string,
    clientName: string,
    clientProjectId: number
}