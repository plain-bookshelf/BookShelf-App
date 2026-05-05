import styled from '@emotion/native';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import navigator_ai_active from "@/assets/navigator_ai_active.png";
import navigator_ai_default from "@/assets/navigator_ai_default.png";
import navigator_home_active from "@/assets/navigator_home_active.png";
import navigator_home_default from "@/assets/navigator_home_default.png";
import navigator_profile_active from "@/assets/navigator_profile_active.png";
import navigator_profile_default from "@/assets/navigator_profile_default.png";
import navigator_ranking_active from "@/assets/navigator_ranking_active.png";
import navigator_ranking_default from "@/assets/navigator_ranking_default.png";
import navigator_search_active from "@/assets/navigator_search_active.png";
import navigator_search_default from "@/assets/navigator_search_default.png";
import navigator_admin_active from "@/assets/navigator_admin_active.png";
import navigator_admin_default from "@/assets/navigator_admin_default.png";
import { colorStyle } from '@/styles/colorStyle';

export default function BottomTab({ state, navigation }: any) {
  return (
    <Container>
      {state.routes.map(( route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        let icon;

        if (route.name === 'Search') {
          icon = isFocused
            ? navigator_search_active
            : navigator_search_default;
        }

        if (route.name === 'AI') {
          icon = isFocused
            ? navigator_ai_active
            : navigator_ai_default;
        }

        if (route.name === 'Home') {
          icon = isFocused
            ? navigator_home_active
            : navigator_home_default;
        }

        if (route.name === 'AdminHome') {
          icon = isFocused
            ? navigator_admin_active
            : navigator_admin_default;
        }

        if (route.name === 'Ranking') {
          icon = isFocused
            ? navigator_ranking_active
            : navigator_ranking_default;
        }

        if (route.name === 'Profile') {
          icon = isFocused
            ? navigator_profile_active
            : navigator_profile_default;
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress}>
            <Image source={icon} style={{ width: 48, height: 48 }} />
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

const Container = styled.View`
  height: 76px;
  padding: 14px 24px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colorStyle.defaultWhite};
  border-radius: 8px 8px 0px 0px;
`