import { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator animating={loading} size={"large"} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText style={{ color: "red", fontSize: 18, marginBottom: 10 }}>
              Couldn't retrieve the listings.
            </AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        {!error && (
          <FlatList
            data={listings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
