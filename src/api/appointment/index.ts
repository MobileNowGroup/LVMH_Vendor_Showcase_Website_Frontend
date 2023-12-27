import ajax from "@/api/ajax"
/* 供应商预约**/
export async function postVendorAppointment(params?:object){
    const dataJson = await ajax.post("/v1/vendor-appointment",params)
    return dataJson
}