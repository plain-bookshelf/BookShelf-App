import styled from "@emotion/native"
import icon_logo_default from "@/assets/icon_logo_default.png"
import btn_search_default from "@/assets/btn_search_default.png"
import btn_notification_default from "@/assets/btn_notification_default.png"
import { Image, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MainNav } from "@/navigation/type"
import { colorStyle } from "@/styles/colorStyle"
import { SafeAreaView } from "react-native-safe-area-context"

export default function MainHeader() {
  const navigation = useNavigation<MainNav>();

  return(
    <Container>
      <Image source={icon_logo_default} style={{ width: 93, height: 32 }} />
      <ButtonBox>
        <Pressable onPress={() => navigation.navigate('Search', { screen: 'SearchMain' })}>
          <Image source={btn_search_default} style={{ width: 24, height: 24 }} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Notification", { screen: "Notifications" })}>
          <Image source={btn_notification_default} style={{ width: 24, height: 24 }} />
        </Pressable>
      </ButtonBox>
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  background-color: ${( colorStyle.defaultWhite )};
  min-height: 48px;
  flex-direction: row;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
`

const ButtonBox = styled.View`
  flex-direction: row;
  gap: 16px;
`