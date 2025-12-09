import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../../context/AuthContext';
import { notesApi } from '../../services/apiConfig';

const NotesUploadScreen = () => {
    const { user } = useContext(AuthContext);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const TEST_PATIENT_ID = 'patient-guid-placeholder';

    const pickImage = async () => {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Precisamos de acesso à galeria para anexar imagens.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    const handleSave = async () => {
        if (!content) {
            Alert.alert('Erro', 'Por favor, escreva o conteúdo da anotação.');
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('content', content);
            formData.append('patientId', TEST_PATIENT_ID);
            formData.append('psychologistId', user?.id || '');

            if (image) {

                const fileName = image.uri.split('/').pop();
                const fileType = fileName.split('.').pop();

                formData.append('image', {
                    uri: image.uri,
                    name: fileName,
                    type: `image/${fileType}`
                });
            }

            await notesApi.post('/notes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Alert.alert('Sucesso', 'Prontuário salvo com sucesso!');
            setContent('');
            setImage(null);
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Falha ao salvar o prontuário. Verifique a conexão.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Nova Anotação</Text>

            <TextInput
                label="Conteúdo do Prontuário"
                value={content}
                onChangeText={setContent}
                mode="outlined"
                multiline
                numberOfLines={6}
                style={styles.input}
            />

            <Button icon="camera" mode="outlined" onPress={pickImage} style={styles.button}>
                Selecionar Imagem
            </Button>

            {image && (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image.uri }} style={styles.preview} />
                </View>
            )}

            <Button
                mode="contained"
                onPress={handleSave}
                loading={loading}
                disabled={loading}
                style={[styles.button, styles.saveButton]}
            >
                Salvar Prontuário
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        marginBottom: 10,
    },
    saveButton: {
        marginTop: 10,
        backgroundColor: '#6200ee',
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    preview: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default NotesUploadScreen;
