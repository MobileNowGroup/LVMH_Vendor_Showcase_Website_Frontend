import ajax from "@/api/ajax"
/* 登陆**/
export async function login(params?:object){
    const dataJson = await ajax.post("/v1/login",params)
    return dataJson
}
  