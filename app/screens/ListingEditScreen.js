import { StyleSheet } from "react-native";
import * as Yup from 'yup';
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
});

const categories = [
    { label: 'Furniture', value: 1, icon: 'floor-lamp', backgroundColor: '#fc5c65' },
    { label: 'Clothing', value: 2, icon: 'shoe-heel', backgroundColor: '#fd9644' },
    { label: 'Cameras', value: 3, icon: 'camera', backgroundColor: '#fed330' },
    { label: 'Games', value: 4, icon: 'cards', backgroundColor: '#26de81' },
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name='title' placeholder='Title'/>
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder='Category'
                    width='50%'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default ListingEditScreen;