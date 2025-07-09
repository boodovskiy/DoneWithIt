import { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      const response = await listingsApi.getListings();
      if (!response.ok) {
        setError(true);
        return;
      }

      setError(false);
      setListings(response.data);
    } catch (err) {
      console.log("API call failed:", err);
      setError(true);
    }
  };

  return (
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
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
