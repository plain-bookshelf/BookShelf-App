import AuthInput from "@/components/auth/authInput/AuthInput";
import Typography from "@/components/common/typography/Typography";
import { useState } from "react";

export default function IdStep() {
  const [name, setName] = useState("");
  
  return(
    <>
      <Typography children='아이디를 생성하세요.' font='semiBold24' color='defaultBlack' />
      <AuthInput label='' placeholder='아이디를 입력해주세요.' size='large' isError={false} warningMessage="이미 존재하는 아이디입니다." value={name} onChangeText={setName} />
    </>
  )
}