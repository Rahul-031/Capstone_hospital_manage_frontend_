export class appointment{
    id!:number
    patientname:string
    doctorname:string
    constructor(pat:string,doc:string){this.patientname=pat,this.doctorname=doc}
}