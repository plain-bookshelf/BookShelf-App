import InfoCard from "./components/infoCard/InfoCard";
import MainProfileLayout from "@/components/layout/mainLayout/MainProfileLayout";

export default function ProfileScreen() {
  return(
    <>
      <MainProfileLayout>
        <InfoCard title='책 포인트' value='100권' />
      </MainProfileLayout>
    </>
  )
}