import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

export default function ProductCard({ item }) {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <Text style={styles.rating}>Rating: {item.rating.toFixed(1)}</Text>
                <Text style={styles.stock}>Stock: {item.stock}</Text>
                <Text style={styles.returnPolicy}>Return Policy: {item.returnPolicy}</Text>
                <Text style={styles.shippingInformation}>Shipping: {item.shippingInformation}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}