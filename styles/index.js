import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: '#fff',
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    productImage: {
        width: '100%',
        height: 200,
        backgroundColor: 'gray'
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f00',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    stock: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    returnPolicy: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    shippingInformation: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});