import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Text, Card, Title, Paragraph, Badge, ActivityIndicator, FAB } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { scheduleApi } from '../services/apiConfig';
import { useIsFocused } from '@react-navigation/native';

const AgendaScreen = () => {
    const { user } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();

    const fetchSchedule = async () => {
        if (!user?.id) return;
        try {
            const response = await scheduleApi.get(`/appointments/my-schedule/${user.id}`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Erro ao buscar agenda:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        if (isFocused) {
            fetchSchedule();
        }
    }, [isFocused, user]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchSchedule();
    }, []);

    const renderItem = ({ item }) => {
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.row}>
                        <Title>{formattedTime}</Title>
                        <Text style={styles.date}>{formattedDate}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <Paragraph>Paciente: {item.patientName || 'Disponível'}</Paragraph>
                        <Badge
                            style={[
                                styles.badge,
                                { backgroundColor: item.isBooked ? '#f44336' : '#4caf50' }
                            ]}
                        >
                            {item.isBooked ? 'Ocupado' : 'Livre'}
                        </Badge>
                    </View>
                </Card.Content>
            </Card>
        );
    };

    if (loading && !refreshing && appointments.length === 0) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#6200ee" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Title style={styles.header}>Minha Agenda</Title>
            <FlatList
                data={appointments}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text>Nenhum horário encontrado.</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        marginBottom: 10,
        marginHorizontal: 5,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: '#666',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    badge: {
        alignSelf: 'center',
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 50,
    }
});

export default AgendaScreen;
