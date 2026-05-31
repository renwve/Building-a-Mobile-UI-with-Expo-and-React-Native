import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import { router } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>t</Text>

          <View style={styles.tabs}>
            <Text style={styles.activeTab}>For you</Text>
            <Text style={styles.tab}>Following</Text>
            <Text style={styles.tab}>Your tags</Text>
          </View>

          <View style={styles.headerIcons}>
            <Ionicons name="storefront" size={28} color="white" />
            <Ionicons name="diamond" size={28} color="#8B5CF6" />
            <Feather name="sliders" size={28} color="#A0A0A0" />
          </View>
        </View>

        {/* POST CARD */}
        <View style={styles.card}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: "https://i.pinimg.com/736x/01/dd/1a/01dd1a707a17d56808818a50bfb834f9.jpg" }}
                style={styles.avatar}
              />

              <View>
                <Text style={styles.username}>
                  moonlightcookieer
                </Text>
                <Text style={styles.date}>May 28</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../assets/moonlight.jpg")}
            style={styles.postImage}
          />

          <View style={styles.postContent}>
            <Text style={styles.caption}>
              the evening light feels different here.
            </Text>

            <Text style={styles.tags}>
              #cookie run kingdom #crk #moonlightcookie
              #love moonlight cookie #more of moonlight cookie
              #moonlight cookie skin next update pls
              #no1 moonlight cookie
            </Text>

            <View style={styles.actions}>
              <View style={styles.actionItem}>
                <Feather
                  name="message-circle"
                  size={28}
                  color="#53687F"
                />
                <Text style={styles.count}>12</Text>
              </View>

              <View style={styles.actionItem}>
                <Feather
                  name="repeat"
                  size={28}
                  color="#53687F"
                />
                <Text style={styles.count}>1,596</Text>
              </View>

              <View style={styles.actionItem}>
                <Feather
                  name="heart"
                  size={28}
                  color="#53687F"
                />
                <Text style={styles.count}>4,007</Text>
              </View>

              <Feather
                name="share"
                size={28}
                color="#53687F"
              />
            </View>
          </View>
        </View>

        {/* ALERT BUTTON */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() =>
            Alert.alert("You pressed the Alert Button? Are you here to free me?")
          }
        >
          <Text style={styles.alertText}>
            Alert
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* FLOATING BUTTON */}
      <TouchableOpacity style={styles.fab}>
        <Feather
          name="edit-2"
          size={28}
          color="#001935"
        />
      </TouchableOpacity>

      {/* BOTTOM NAVBAR */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={30} color="white" />
          <TouchableOpacity onPress={() => router.push("/explore")}>
            <Ionicons
              name="search"
              size={30}
              color="#BDBDBD"
            />
        </TouchableOpacity>
        <Ionicons
          name="play"
          size={30}
          color="#BDBDBD"
        />
        <Ionicons
          name="people"
          size={30}
          color="#BDBDBD"
        />
        <Ionicons
          name="flash"
          size={30}
          color="#BDBDBD"
        />
        <Ionicons
          name="person"
          size={30}
          color="#BDBDBD"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001935",
  },

  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  logo: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },

  activeTab: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  tab: {
    color: "#9CA3AF",
    fontSize: 18,
  },

  headerIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 20,
    top: 50,
    gap: 20,
  },

  card: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 25,
    overflow: "hidden",
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },

  username: {
    fontSize: 18,
    fontWeight: "bold",
  },

  date: {
    color: "gray",
    fontSize: 16,
  },

  followBtn: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
  },

  followText: {
    fontWeight: "bold",
    fontSize: 18,
  },

  postImage: {
    width: "100%",
    height: 350,
  },

  postContent: {
    padding: 20,
  },

  caption: {
    fontSize: 20,
    marginBottom: 15,
  },

  tags: {
    color: "#666",
    lineHeight: 28,
    fontSize: 16,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },

  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  count: {
    fontSize: 18,
    color: "#53687F",
  },

  alertButton: {
    backgroundColor: "#00B8FF",
    margin: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  alertText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  fab: {
    position: "absolute",
    bottom: 90,
    right: 25,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#00B8FF",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#001935",
  },
});