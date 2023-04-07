import React, { useState } from "react";
import Button from "../components/Button";
import { useQuery } from "@apollo/client";
import { getTasks } from "../API/Queries";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import { getDaysInMonth } from "../components/Days";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Todo({ route }) {
    const { loading, error, data } = useQuery(getTasks);
    const days = getDaysInMonth(2023, 2); // 👈️ February 2023
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [selectedTask, setSelectedTask] = useState(null);
  
    return (

        
        <Screen style={styles.container}>
            {loading ? 
            <Text 
            className="text-lg font-bold text-black-700"
            >Loading...</Text> :
            <>
            <View className="flex flex-row items-center justify-between w-[90vw] ml-[5vw]">
                <View>
                    
                    <Text
                    className="text-2xl font-bold"
                    >
                    <MaterialCommunityIcons name="calendar" color={"blue"} size={30} />
                        Feb, 2023
                    </Text>
                </View>
                <Button title="+ Add Task" />


            </View>
            <View style={styles.calendarWrapper}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={days}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        let dayNumber = item.split(',')[1].substring(0, 3);
                        let dayName = item.split(',')[0].substring(0, 3);
                        return <TouchableOpacity
                            style={item === selectedDay ? styles.calendar(true) : styles.calendar(false)}
                            onPress={() => setSelectedDay(item)}>
                            <View>
                                <Text style={item === selectedDay ? styles.calendarText(true) : styles.calendarText(false)}
                                >{dayName}</Text>
                                <Text
                                    className="text-lg font-bold"
                                    style={item === selectedDay ? styles.calendarText(true) : styles.calendarText(false)}
                                >{dayNumber}</Text>

                            </View>
                        </TouchableOpacity>
                    }}
                />

            </View>
            <View
                className="
                flex flex-row items-center
                justify-evenly
                mb-2 mt-10"
            >
                <Text className="text-lg font-bold text-black-700" >Priority Task</Text>
                <Text className="text-lg font-bold text-blue-700">Daily Task</Text>
            </View>
            <View
                className="
            flex flex-col items-center
            justify-center w-full
            "
            >
                <FlatList
                    className="h-[55vh]"
                    data={data.taskCollection.items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        console.log("--->",item),
                        <TouchableOpacity 
                        onPress={() => setSelectedTask(item)}
                        >
                        <View
                        className="
                        flex flex-row items-center
                        justify-between p-3 my-1
                        bg-white rounded-lg
                        border border-blue-100
                        w-[90vw]
                        "
                        >
                        <View>
                            <Text 
                            className="text-blue-700 text-base font-medium"
                            >{item.name}</Text>
                        </View>
                          <View style={item.name === selectedTask?.name ? styles.radio(true) : styles.radio(false)}
                          />
                        </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            </>}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    calendarWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,  
    },
    calendar(bool) {
        return {
            flex: 1,
            width: bool ? 75 : 60,
            height: bool ? 75 : 60,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            padding: 4,
            margin: 5,
            borderRadius: 10,
            backgroundColor: bool ? "#0a5fde" : "#ebf2ff",
        }
    },
    calendarText(bool) {
        return {
            color: bool ? "#fff" : "#0a5fde",
        }
    },
    radio(bool) {
        return {
            width: 25,
            height: 25,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#016fe9',
            backgroundColor: !bool ? "#fff" : "#016fe9",
        }
    }

});




export default Todo;