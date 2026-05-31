import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  Ionicons,
} from "@expo/vector-icons";

import { router } from "expo-router";

export default function Explore() {
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* EXPLORE TOP PART */}

        <Image
          source={require("../assets/moonlight.jpg")}
          style={styles.banner}
        />

        <View style={styles.overlay}>

          <Text style={styles.exploreTitle}>
            Explore
          </Text>

          <View style={styles.topIcons}>
            <Ionicons
              name="storefront"
              size={28}
              color="white"
            />

            <Ionicons
              name="diamond"
              size={28}
              color="#8B5CF6"
            />
          </View>

          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={24}
              color="black"
            />

            <TextInput
              placeholder="Search Tumblr"
              style={styles.searchInput}
            />
          </View>

        </View>

        {/* TRENDING SECTION */}

        <View style={styles.trendingSection}>

          <Text style={styles.trendingTitle}>
            Trending now
          </Text>

          <TrendCard
            number="1"
            title="#project hail mary"
            tags="#phm   #ryland grace   #rocky the eridian"
            image={require("../assets/moonlight.jpg")}
          />

          <TrendCard
            number="2"
            title="#iron lung"
            tags="#bloodymary   #markiplier"
            image={require("../assets/moonlight.jpg")}
          />

          <TrendCard
            number="3"
            title="#oc art"
            tags="#off campus"
            image={require("../assets/moonlight.jpg")}
          />

        </View>

        {/* ALERT BUTTON */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() =>
            Alert.alert("You pressed the Alert Button.")
          }
        >
          <Text style={styles.alertText}>
            Alert
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* BOTTOM NAVBAR */}

      <View style={styles.navbar}>

        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="home"
            size={30}
            color="#BDBDBD"
          />
        </TouchableOpacity>

        <Ionicons
          name="search"
          size={30}
          color="white"
        />

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

function TrendCard({
  number,
  title,
  tags,
  image,
}: any) {
  return (
    <View style={styles.card}>

      <View style={styles.cardHeader}>
        <View style={styles.leftSide}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>
              {number}
            </Text>
          </View>

          <Text style={styles.cardTitle}>
            {title}
          </Text>
        </View>

        <Text style={styles.follow}>
          Follow
        </Text>
      </View>

      <Text style={styles.tags}>
        {tags}
      </Text>

      <Image
        source={image}
        style={styles.trendImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001935",
  },

  banner: {
    width: "100%",
    height: 420,
    position: "absolute",
    opacity: 0.5,
  },

  overlay: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: 320,
  },

  exploreTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  topIcons: {
    position: "absolute",
    top: 60,
    right: 20,
    flexDirection: "row",
    gap: 20,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginTop: 26,
  },

  searchInput: {
    flex: 1,
    padding: 15,
    fontSize: 18,
  },

  trendingSection: {
    backgroundColor: "#001935",
    padding: 20,
  },

  trendingTitle: {
    color: "white",
    fontSize: 23,
    marginBottom: 25,
    opacity: 0.5,
  },

  card: {
    marginBottom: 40,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberCircle: {
    width: 23,
    height: 23,
    borderRadius: 18,
    backgroundColor: "#D946EF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  numberText: {
    color: "black",
    fontWeight: "bold",
  },

  cardTitle: {
    color: "white",
    fontSize: 20,
    opacity: 0.5,
  },

  follow: {
    color: "#00B8FF",
    fontSize: 20,
  },

  tags: {
    color: "#9CA3AF",
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 39,
    fontSize: 16,
  },

  trendImage: {
    width: "100%",
    height: 115,
    marginLeft: 39,
  },

  navbar: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#001935",
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
});