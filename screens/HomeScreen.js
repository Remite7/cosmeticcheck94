import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>CosmeticCheck</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Copy Paste The Ingredient List"
                />
                <TouchableOpacity style={styles.copyPasteButton}>
                    <Text style={styles.buttonText}>Copy-Paste</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.scanButton}>
                    <Text style={styles.buttonText}>Scan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.analyzeButton}>
                    <Text style={styles.buttonText}>Analyze</Text>
                </TouchableOpacity>

                <Text style={styles.description}>
                    Here is what the CosmeticCheck analyzer will show you about your skincare & cosmetic products:
                    - Are they free from commonly avoided ingredients such as Parabens, Sulfates, Alcohol, Silicone, Allergens, Comedogenic (Acne-causing) Ingredients & Fungal Acne (Malassezia) Triggers?
                    - Do they contain any Notable Ingredients to help with either Acne-Fighting, Brightening, UV Protection, Wound Healing, or Anti-Aging?
                    - Ingredient suitability for skin types such as dry, sensitive & oily (acne-prone) along with Health Ratings from CIR (Cosmetic Ingredient Review) & EWG (Environmental Working Group).
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F2F1',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
    },
    copyPasteButton: {
        backgroundColor: '#FFEB3B',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    scanButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    analyzeButton: {
        backgroundColor: '#4CAF50', 
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    description: {
        marginTop: 20,
        fontSize: 16,
    }
});