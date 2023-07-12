import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {Alert, Animated, StyleSheet, TouchableOpacity, View,} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

const Screen3 = () => {
  return <View style={styles.screen3} />;
};

const Screen4 = () => {
  return <View style={styles.screen4} />;
};

const Screen5 = () => {
  return <View style={styles.screen5} />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";
    switch (routeName) {
      case "title1":
        icon = "home";
        break;
      case "title2":
        icon = "search1";
        break;
      case "title3":
        icon = "hearto";
        break;
      case "title4":
        icon = "user";
        break;
    }

    return (
      <AntDesign
        name={icon}
        size={25}
        color={routeName === selectedTab ? "gray" : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    console.log(routeName);
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={64}
        circleWidth={40}
        circlePosition={"CENTER"}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Click Action")}
            >
              <AntDesign name={"plus"} color="white" size={25} top={12} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={"md-infinite-outline"}
                color="gray"
                size={28}
                top={35}
                style={{ zIndex: 999 }}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <Screen2 />}
          position="LEFT"
        />
        <CurvedBottomBarExpo.Screen
          name="title3"
          component={() => <Screen3 />}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="title4"
          component={() => <Screen4 />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
  },
  bottomBar: {
    height: 80,
  },
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#263238",
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#212121",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#212121",
  },
  screen3: {
    flex: 1,
    backgroundColor: "#212121",
  },
  screen4: {
    flex: 1,
    backgroundColor: "#212121",
  },
  screen5: {
    flex: 1,
    backgroundColor: "#212121",
  },
});

